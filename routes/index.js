const routes = require('express').Router();
const { query } = require('express-validator');

 const { auth, requiresAuth } = require('express-openid-connect');
 const config = require('../config/auth0');
const controller = require('../controllers/indexController');


routes.use(auth(config));



routes.get('/', controller.getHome);
routes.use('/profile', requiresAuth(),  require('./profile'));
routes.use('/members', requiresAuth(), require('./members'));
routes.use('/auth0', require('./auth0'));




module.exports = routes;
