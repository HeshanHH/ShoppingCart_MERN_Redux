const express = require('express');
const router = express.Router();
const { getPrivateRoute } = require('../controllers/private');
const { protect } = require('../middlewares/auth');

// adding protect  infront of the route we can protect it now.
// if there is wrong data then next() in auth js will never call.

//  to get there, have to aff jwt on the request header.

//###################################
//http://localhost:5000/api/privat
// add header
// Content-Type : application/json
// Authorization : Bearer <genarated token when you logged in>

// example
//Content-Type:application/json
//Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOWQxNzIxYjZkMWIwMWRhNGRlNTBmMiIsImlhdCI6MTYyMDkxNTU0NywiZXhwIjoxNjIwOTE2MTQ3fQ.-r0HIiJYJfw7sTSaVob7-0cohccbPMhJO4McwxyG6Is

//###################################
router.route('/').get(protect, getPrivateRoute); // can add some private routes here now.

module.exports = router;
