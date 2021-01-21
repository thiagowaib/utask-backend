const express = require('express');
const TaskController = require('./controllers/TaskController');

const routes = new express.Router();

routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.store);

module.exports = routes;
