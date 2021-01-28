const express = require('express');
const TaskController = require('./controllers/TaskController');

const routes = new express.Router();

// Chamada de Rotas - Funções do Controller
routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.store);
routes.post('/tasks/:id/conclude', TaskController.conclude);
routes.delete('/tasks/:id/remove', TaskController.remove);

module.exports = routes;
