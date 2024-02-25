const routes = require('express').Router();
const { query } = require ('express-validator');
const controller = require('../controllers/indexController');

routes.get('/', query('person'), controller.getHome);
routes.use('/profile', require('./profile'));
routes.use('/members', require('./members'));

module.exports = routes;
