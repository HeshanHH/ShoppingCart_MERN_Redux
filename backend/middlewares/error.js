// catch errors we pass to the next function. (req,res,next)
const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;
  //console.log(err); // consoling errors and handle errors

  // mongoose duplicate error code = 11000.
  if (err.code === 11000) {
    const message = `Duplicate Field value entered`;
    error = new ErrorResponse(message, 400);
  }

  // mongoose Validation Error error.
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  console.log(error.message);

  // in here error.statusCode is any error that comes from any of this function.
  // if there is no any error.statusCode , then this can be a server error we can provide 500 status code.
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
  });
};

module.exports = errorHandler;
