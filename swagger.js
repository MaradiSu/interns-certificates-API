const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration options
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Your API Documentation',
        version: '1.0.0',
        description: 'API documentation for your Node.js application',
      },
      servers: [
        {
          url: 'http://localhost:7000', // Replace with your actual API URL
        },
      ],
    },
    // Define your API operations (endpoints) here
    apis: ['*.js'], // Replace './routes/*.js' with the path to your route files
  };

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
  // Serve Swagger UI at /api-docs endpoint
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
