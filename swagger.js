const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'MEMBERS API',
    description: 'Description'
  },
  host: 'agbwebdev-proj2.onrender.com'
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);