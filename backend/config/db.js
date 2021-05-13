require('dotenv').config(); // the place we store mongo uri.
const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    // add connect methode with the require settings object and mongo atlas uri .
    // doc : https://mongoosejs.com/docs/connections.html .
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, // (node:14872) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead. **fixed.
    });

    console.log('MongoDB connection SUCCESS');
  } catch (error) {
    console.error('MongoDB connection FAIL');
    process.exit(1); // existing the server with the exit code 1.
  }
};

module.exports = connectDB;

// TO CREATE MONGO ATLAS DB
// 1 - go to https://www.mongodb.com/cloud/atlas2 and create mongo atlas account.
// 2 - create a project.
// 3 - create cluster.
// 4 - config database access (create user add user existing user).
// 5 - config network access (allow the access as you wish).
// 6 - in cluster click connect and select connect your application, select driver with node vertion and get the connection uri (connectonString).
// 7 - change password to your password and give a name to your document(database). the collection name an be any meaningfull name.
