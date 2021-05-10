const express = require('express');
const router = express.Router();

const {
  getProducts,
  getProductById,
  deleteProduct,
  addProduct,
  updateProduct,
} = require('../controllers/productControllers'); // named impots

/**
 * @swagger
 * /api/products:
 *  get:
 *    description: Use to request all products
 *    responses:
 *      '200':
 *        description: A successful response
 */

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
