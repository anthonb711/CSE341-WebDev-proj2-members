const routes = require('express').Router();
const controller = require('../controllers/oauthController');
const config = require ('../config/0auth')
const {  auth } = require('express-openid-connect');

routes.use(auth(config));

routes.get('/', controller.getAuth);

//routes.post("/callback", controller.postAuth);


module.exports = routes;