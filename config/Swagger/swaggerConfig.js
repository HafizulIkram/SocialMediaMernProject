const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MERN Application API',
      version: '1.0.0',
      description: 'API documentation for the MERN application',
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
      },
    ],
  },
  apis: ['./routes/api/*.js', './config/Swagger/SwaggerDefinition/*.js'], 
};

const swaggerConfig = swaggerJsdoc(swaggerOptions);
module.exports = swaggerConfig;
