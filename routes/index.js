const routes = require('express').Router();
const controller = require('../controllers/indexController');

routes.get('/', controller.getHome);

routes.use('/profile', require('./profile'));
routes.use('/members', require('./members'));

module.exports = routes;
