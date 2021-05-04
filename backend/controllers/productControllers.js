const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // get all products
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // get individual product

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getProducts,
  getProductById,
};
