const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger-output.json');


// Middleware
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));


app.use('/', require('./routes'));
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});