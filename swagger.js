const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'MEMBERS API',
    description: 'Description',
    version: '1.0.1'
  },
  host: 'agbwebdev-proj2.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);