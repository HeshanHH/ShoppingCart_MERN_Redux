const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide username'],
  },
  email: {
    type: String,
    required: [true, 'Please provide email address'],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false,
  },
  // when password reset we add these two without modifiying password. user.save();
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// mongoose provide middlewares that can use pre saving and post savings.
UserSchema.pre('save', async function (next) {
  // 'password' is the field we are passing here.
  if (!this.isModified('password')) {
    next(); // pass the next middleware as the paramete and we call that middleware here.
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt); // using created salt we can create hash password. this.password coms from the controller register function.
  next();
});

// mongoose match password method.
// we can use this to matc password.
// parameter : password (user provide one)
UserSchema.methods.matchPassword = async function (password) {
  // this.password is that password we got from database. using .select('+password');
  return await bcrypt.compare(password, this.password);
};

// this reffers the opject we calling on.
UserSchema.methods.getSignedJwtToken = function () {
  // this reffers the opject we calling on.
  // payload, secret , object
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// forget passwort reset
UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString('hex'); // creete new one

  // Hash token (private key) and save to database
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // Set token expire date
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes

  return resetToken;
};
const User = mongoose.model('User', UserSchema);
module.exports = User;
