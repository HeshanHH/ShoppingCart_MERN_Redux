require('dotenv').config(); // import .env
const express = require('express'); // import express
const connectDB = require('./config/db');

connectDB(); // call the mongodb fucntion exported from the modngo db config file db.js

const app = express();

app.use(express.json());

// command to start backe end server (if you are in main folder ) => node backend/server.js
const PORT = process.env.PORT || 5000; // set the port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // log to console.
