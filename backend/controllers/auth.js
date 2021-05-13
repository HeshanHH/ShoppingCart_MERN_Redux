//const { error } = require('winston');
const crypto = require('crypto');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');

// @desc    Register user
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    // res.status(201).json({
    //   success: true,
    //   user: user,
    // });
    sendToken(user, 200, res);
  } catch (err) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
  // res.send('register route'); if we left this here the this aslo try to send again and it cause this error "Cannot set headers after they are sent to the client",
  // https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client
};

// @desc    Login user
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password is provided
  if (!email || !password) {
    // res.status(400).json({
    //   success: false,
    //   error: 'Please provide an email and password',
    // });

    // pass to custome error handler usning next()
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  try {
    // Check that user exists by email
    const user = await User.findOne({ email }).select('+password'); // getting user with password.

    if (!user) {
      //   res.status(401).json({
      //     success: false,
      //     error: 'Invalid credentials',
      //   });
      return next(new ErrorResponse('Invalid credentials', 401));
    }

    // Check that password match
    // On the user we run matchPassword. that we difine on /Model/User
    const isMatch = await user.matchPassword(password); // this return true || false

    if (!isMatch) {
      //   res.status(401).json({
      //     success: false,
      //     error: 'Invalid credentials',
      //   });
      return next(new ErrorResponse('Invalid credentials', 401));
    }

    // res.status(200).json({
    //   success: true,
    //   token: 'tokenfrom',
    // });
    sendToken(user, 200, res);
  } catch (err) {
    // res.status(500).json({
    //   success: false,
    //   error: err.message,
    // });
    next(err);
  }
};

// http://localhost:5000/api/auth/forgotpassword
// content-type : application/json

// @desc    Forgot Password Initialization
exports.forgotPassword = async (req, res, next) => {
  // Send Email to email provided but first check if user exists
  const { email } = req.body;

  try {
    const user = await User.findOne({ email }); // find by email. the filter.

    if (!user) {
      return next(new ErrorResponse('No email could not be sent', 404));
    }

    // Reset Token Gen and add to database hashed (private) version of token
    const resetToken = user.getResetPasswordToken();

    await user.save(); // newly created data save to database.

    // Create reset url to email to provided email
    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

    // HTML Message
    const message = `
      <h1>You have requested a password reset</h1>
      <p>Please make a put request to the following link:</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: 'Password Reset Request',
        text: message,
      });

      res.status(200).json({ success: true, data: 'Email Sent' });
    } catch (err) {
      console.log(err);

      // if some error happen we have to set undifinde to these.
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse('Email could not be sent', 500));
    }
  } catch (err) {
    next(err);
  }
};

// @desc    Reset User Password
exports.resetPassword = async (req, res, next) => {
  // Compare token in URL params to hashed token
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resetToken)
    .digest('hex');

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }, // theck token isvalide?
    });

    if (!user) {
      return next(new ErrorResponse('Invalid Token', 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: 'Password Updated Success',
      token: user.getSignedJwtToken(),
    });
  } catch (err) {
    next(err);
  }
};

// create a separeate function to sendToken with response and status code.
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ sucess: true, token });
};
