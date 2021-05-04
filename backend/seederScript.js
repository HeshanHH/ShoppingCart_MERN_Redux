require('dotenv').config();

const productData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

// THIS file use to seed hard coded data to the product collection.
// whenever we call this method it deletes all the data form collection and enter the hardcoded product data object to the product collection.
// by doing this we can develop the appiction using those data and no need to create all the other CRUD methodes.

const importData = async () => {
  try {
    await Product.deleteMany({}); // delete all the product data.

    await Product.insertMany(productData); // insert product data.

    console.log('Data Import Success');

    process.exit();
  } catch (error) {
    console.error('Error with data import', error);
    process.exit(1);
  }
};

importData();

// if seeding failed, run node backend/server.js first and then run npm run data:import
