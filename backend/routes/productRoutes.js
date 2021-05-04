const express = require('express');
const router = express.Router();

const {
  getProducts,
  getProductById,
} = require('../controller/productControllers'); // named impots

//@desc GET all product from the collection
//@routs GET /api/products
//@access Public
router.get('/', getProducts);

//@desc GET a product by id from the collection
//@routs GET /api/products/:id
//@access Public
router.get('/:id', getProductById);

module.exports = router;
