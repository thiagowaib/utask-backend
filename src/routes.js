const express = require('express');
const TaskController = require('./controllers/TaskController');

const routes = new express.Router();

routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.store);
routes.post('/tasks/:id/concludeTrue', TaskController.concludeTrue);
routes.post('/tasks/:id/concludeFalse', TaskController.concludeFalse);

module.exports = routes;
