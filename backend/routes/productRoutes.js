const express = require('express');
const router = express.Router();

const {
  getProducts,
  getProductById,
  deleteProduct,
  addProduct,
  updateProduct,
} = require('../controllers/productControllers'); // named impots

//@desc GET all product from the collection
//@routs GET /api/products
//@access Public
router.get('/', getProducts);

//@desc GET a product by id from the collection
//@routs GET /api/products/:id
//@access Public
router.get('/:id', getProductById);

//@desc DELETE a product by id from the collection
//@routs DELETE /api/products/:id
//@access private
router.delete('/:id', deleteProduct);

//@desc POST a product to collection
//@routs DELETE /api/products/
//@access private
router.post('/', addProduct);

//@desc PUT a product to collection
//@routs PUT /api/products/:id
//@access private
router.put('/:id', updateProduct);

module.exports = router;
