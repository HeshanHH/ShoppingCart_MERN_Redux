// @desc    Register user
exports.register = async (req, res, next) => {
  res.send('register route');
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
