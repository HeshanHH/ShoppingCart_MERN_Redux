const Product = require('../models/Product');
ObjectID = require('mongodb').ObjectID;

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

// http://localhost:5000/api/products/60918201eb80df4090379a7c
const deleteProduct = async (req, res) => {
  try {
    //const product = await Product.findById(req.params.id); // get individual product
    let parms = req.params.id;
    const product = await Product.findById(parms);
    if (product != null) {
      try {
        let filter = { _id: ObjectID(req.params.id) };
        const product = await Product.deleteOne(filter);
        res.status(200).json();
      } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err });
      }
    } else {
      res.status(404).send('Not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @Body
// {
//     "name": "PlayStation 6",
//     "imageUrl":"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
//     "description":"PlayStation 6 (PS6) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
//     "price": 499,
//     "countInStock": 15
// }

const addProduct = async (req, res) => {
  try {
    let requestBody = req.body;

    if (requestBody != null) {
      const product = await Product.create({ ...requestBody });
      console.log(req);
      res.status(200).json(requestBody);
    } else {
      res.status(406).json({
        data: requestBody,
        message: 'please fill all requires fields',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', err: error });
  }
};

// http://localhost:5000/api/products/60981eb750163d5020aaf2e5

// @body
// {
//   "name": "PlayStation 7",
//   "imageUrl": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
//   "description": "PlayStation 7 (PS6) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
//   "price": 599,
//   "countInStock": 5
// }

const updateProduct = async (req, res) => {
  try {
    // https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/#mongodb-method-db.collection.updateOne
    const product = await Product.findById(req.params.id);

    console.log(product);

    if (product != null) {
      let filter = { _id: ObjectID(req.params.id) };

      let update = {
        $set: {
          name: req.body.name,
          imageUrl: req.body.imageUrl,
          description: req.body.description,
          price: req.body.price,
          countInStock: req.body.countInStock,
        },
      };

      let upsert = { upsert: true };

      const product = await Product.updateOne(filter, update, upsert);
      res.status(200).json(product);
    } else {
      res.status(404).send('Not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
  addProduct,
  updateProduct,
};
