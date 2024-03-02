const routes = require('express').Router();
const controller = require('../controllers/auth0Controller');

routes.get('/', controller.getAuth);

module.exports = routes;
