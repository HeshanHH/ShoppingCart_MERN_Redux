require('dotenv').config(); // import .env
const express = require('express'); // import express
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

connectDB(); // call the mongodb fucntion exported from the modngo db config file db.js

const app = express();

app.use(express.json());

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    components: {}, // ADD THIS LINE!!!
    info: {
      version: '1.0.0',
      title: 'Shopping Cart API',
      description: 'Shopping Cart API Information',
      contact: {
        name: 'Amazing Developer',
      },
      servers: ['http://localhost:5000'],
    },
  },
  // ['.routes/*.js']
  //apis: ['app.js'],
  apis: ['./backend/routes/*.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions); // pass our swager configurations.

//http://localhost:5000/api-docs/
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/products', productRoutes);

// command to start backe end server (if you are in main folder ) => node backend/server.js
const PORT = process.env.PORT || 5000; // set the port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // log to console.
