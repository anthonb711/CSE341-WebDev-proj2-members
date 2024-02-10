//const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongodb = require('./db/connect');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger-output.json');

const port = process.env.PORT || 3000;



// Middleware
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

app.use('/', require('./routes'));
 
// Connect to DB
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log('Connected to MongoDB');
    console.log(`Web Server is listneing at port  + ${port}`);
  }
});