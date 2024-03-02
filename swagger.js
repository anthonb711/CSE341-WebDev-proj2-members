const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'MEMBERS API',
    description: 'Description',
    version: '1.0.1'
  },
  //host: 'agbwebdev-proj2.onrender.com',
  host: 'localhost:8080',
  schemes: ['https']
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc).then(() => {
  const swaggerSpec = require(outputFile);
  swaggerSpec.paths['/'].get.produces = ['text/html']; // Add this line to specify the expected media type
});
