const routes = require('express').Router();
const controller = require('../controllers/membersController');

routes.get('/', controller.getMembers);
routes.post('/', controller.addMember);

module.exports = routes;