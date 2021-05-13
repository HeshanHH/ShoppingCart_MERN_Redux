const { error } = require('winston');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// @desc    Register user
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      user: user,
    });
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
  res.send('login route');
};

// @desc    Forgot Password Initialization
exports.forgotPassword = async (req, res, next) => {
  res.send('forgotPassword route');
};

// @desc    Reset User Password
exports.resetPassword = async (req, res, next) => {
  res.send('resetPassword route');
};
