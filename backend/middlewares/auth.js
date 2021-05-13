const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

//  check jwt on headers.
exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]; // sppliting Bearerjsfdklfjs => Bearer jsfdklfjs
  }

  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  try {
    // veriy and decript
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    // user not found
    if (!user) {
      return next(new ErrorResponse('No user found with this id', 404));
    }

    req.user = user; // to use other routs as well

    next();
  } catch (err) {
    return next(new ErrorResponse('Not authorized to access this router', 401));
  }
};
