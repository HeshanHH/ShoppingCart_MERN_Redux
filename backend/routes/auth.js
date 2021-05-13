const express = require('express');
const router = express.Router();

// AuthControllers functions
const {
  login,
  register,
  forgotPassword,
  resetPassword,
} = require('../controllers/auth');

router.route('/register').post(register);
// http://localhost:5000/api/auth/login
// {
//   "email": "testuser02@gmail.com",
//   "password":"123456"
// }
router.route('/login').post(login);

router.route('/forgotpassword').post(forgotPassword);

// http://localhost:5000/api/auth/passwordreset/
// header - content type - application/json
// body - {"password":"1234567"}
//http://localhost:5000/api/auth/passwordreset/aa93079bc6fff69cd80943ad2f989bff855d1363
// aa93079bc6fff69cd80943ad2f989bff855d1363 is copied from email that send
router.route('/passwordreset/:resetToken').put(resetPassword);

module.exports = router;
