const routes = require('express').Router();
const controller = require('../controllers/membersController');

routes.get('/', controller.getMembers);

module.exports = routes;