const express = require('express');
const router = express.Router();

const {
  getProducts,
  getProductById,
  deleteProduct,
  addProduct,
  updateProduct,
} = require('../controllers/productControllers'); // named impots

//https://github.com/Surnet/swagger-jsdoc/blob/v6/examples/app/routes.js

/**
 * @swagger
 * /api/products:
 *  get:
 *    description: Use to GET all products
 *    responses:
 *      '200':
 *        description: A successful response
 *      '500':
 *        description: Server Error
 */

router.get('/', getProducts);

// http//:loacalhost:5000/api/products/60918201eb80df4090379a80

/**
 * @swagger
 * /api/products/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: Numeric ID of the user to GET
 *   get:
 *     summary: Retrieve a single JSONPlaceholder product.
 *     description: Retrieve a single JSONPlaceholder product. Can be used to populate a product profile when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A single product.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The product ID.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The product's name.
 *                       example: Iphone 12
 *                     imageUrl:
 *                       type: string
 *                       description: The product's Image Url.
 *                       example: http://example.com/123
 *                     description:
 *                       type: string
 *                       description: The product's description.
 *                       example: abcd
 *                     price:
 *                       type: integer
 *                       description: The product's price.
 *                       example: $100.10
 *                     countInStock:
 *                       type: integer
 *                       description: The product's Count in stock.
 *                       example: 10
 */

router.get('/:id', getProductById);

/**
 * @swagger
 * /api/products/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: Numeric ID of the user to DELETE
 *   delete:
 *     summary: Retrieve a single JSONPlaceholder product.
 *     description: Retrieve a single JSONPlaceholder product. Can be used to populate a product profile when prototyping or testing an API.
 *   responses:
 *     200:
 *       description: A single product.
 *     '500':
 *       description: Server Error
 */
router.delete('/:id', deleteProduct);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Retrieve a single JSONPlaceholder product.
 *     description: Retrieve a single JSONPlaceholder product. Can be used to populate a product profile when prototyping or testing an API.
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  data:
 *                    type: object
 *                    properties:
 *                      name:
 *                        type: string
 *                        description: The product's name.
 *                        example: Iphone 12
 *                      imageUrl:
 *                        type: string
 *                        description: The product's Image Url.
 *                        example: http://example.com/123
 *                      description:
 *                        type: string
 *                        description: The product's description.
 *                        example: abcd
 *                      price:
 *                        type: integer
 *                        description: The product's price.
 *                        example: $100.10
 *                      countInStock:
 *                        type: integer
 *                        description: The product's Count in stock.
 *                        example: 10
 *   responses:
 *     '200':
 *        description: A single product.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  data:
 *                    type: object
 *                    properties:
 *                      name:
 *                        type: string
 *                        description: The product's name.
 *                        example: Iphone 12
 *                      imageUrl:
 *                        type: string
 *                        description: The product's Image Url.
 *                        example: http://example.com/123
 *                      description:
 *                        type: string
 *                        description: The product's description.
 *                        example: abcd
 *                      price:
 *                        type: integer
 *                        description: The product's price.
 *                        example: $100.10
 *                      countInStock:
 *                        type: integer
 *                        description: The product's Count in stock.
 *                        example: 10
 *     '500':
 *        description: Server Error
 */
router.post('/', addProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: Numeric ID of the user to GET
 *   put:
 *     summary: Retrieve a single JSONPlaceholder product.
 *     description: Retrieve a single JSONPlaceholder product. Can be used to populate a product profile when prototyping or testing an API.
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  data:
 *                    type: object
 *                    properties:
 *                      name:
 *                        type: string
 *                        description: The product's name.
 *                        example: Iphone 12
 *                      imageUrl:
 *                        type: string
 *                        description: The product's Image Url.
 *                        example: http://example.com/123
 *                      description:
 *                        type: string
 *                        description: The product's description.
 *                        example: abcd
 *                      price:
 *                        type: integer
 *                        description: The product's price.
 *                        example: $100.10
 *                      countInStock:
 *                        type: integer
 *                        description: The product's Count in stock.
 *                        example: 10
 *   responses:
 *     '200':
 *        description: A single product.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  data:
 *                    type: object
 *                    properties:
 *                      name:
 *                        type: string
 *                        description: The product's name.
 *                        example: Iphone 12
 *                      imageUrl:
 *                        type: string
 *                        description: The product's Image Url.
 *                        example: http://example.com/123
 *                      description:
 *                        type: string
 *                        description: The product's description.
 *                        example: abcd
 *                      price:
 *                        type: integer
 *                        description: The product's price.
 *                        example: $100.10
 *                      countInStock:
 *                        type: integer
 *                        description: The product's Count in stock.
 *                        example: 10
 *     '500':
 *        description: Server Error
 */
router.put('/:id', updateProduct);

module.exports = router;
