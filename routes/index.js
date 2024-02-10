const routes = require('express').Router();
const controller = require('../controllers/indexController');

routes.get('/', controller.getHome);

// router.use('/<endpoint>', require(./'<endpoint>'));

module.exports =  routes;
