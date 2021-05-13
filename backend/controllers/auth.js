//const { error } = require('winston');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const ErrorResponse = require('../utils/errorResponse');

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

// @desc    Forgot Password Initialization
exports.forgotPassword = async (req, res, next) => {
  res.send('forgotPassword route');
};

// @desc    Reset User Password
exports.resetPassword = async (req, res, next) => {
  res.send('resetPassword route');
};

// create a separeate function to sendToken with response and status code.
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ sucess: true, token });
};
