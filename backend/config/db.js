require('dotenv').config(); // the place we store mongo uri.
const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    // add connect methode with the require settings object and mongo atlas uri .
    // doc : https://mongoosejs.com/docs/connections.html .
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connection SUCCESS');
  } catch (error) {
    console.error('MongoDB connection FAIL');
    process.exit(1); // existing the server with the exit code 1.
  }
};

module.exports = connectDB;
