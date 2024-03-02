//const { auth } = require('express-openid-connect');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger-output.json');
const port = process.env.PORT || 3000;

const app = express();

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.SECRET,
//   baseURL: process.env.BASE_URL,
//   clientID: process.env.CLIENT_ID,
//   issuerBaseURL: process.env.ISSUER_BASE_URL
// };


// Middleware
app
  .use(cors())
  .use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
  .use(express.json())
  .use(express.urlencoded({ extended: true }));
 // .use(auth(config));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
  );
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, FETCH');
  next();
});


// Set Routes
app.use('/', require('./routes'));

// Connect to DB
connectDB();

app.listen(port);
