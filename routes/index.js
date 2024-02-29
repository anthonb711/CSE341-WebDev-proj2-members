const routes = require('express').Router();
const { query } = require('express-validator');
 const { requiresAuth } = require('express-openid-connect');
const controller = require('../controllers/indexController');
const config = require('../config/0auth');





routes.get('/', query('person'), controller.getHome);
routes.use('/profile',  require('./profile'));
routes.use('/members', require('./members'));
routes.use('/oauth', require('./oauth'));




module.exports = routes;
