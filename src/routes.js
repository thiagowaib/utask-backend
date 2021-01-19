const express = require('express');
// ---------------------------
// Importar o Controller aqui
// ---------------------------

const routes = new express.Router();

// -----------------------------------------
// adicionar  do controller:
// routes.post('/tasks', Controller.função)
// routes.get('/tasks', Controller.função)
// . . .
// -----------------------------------------
routes.post('/tasks');

module.exports = routes;
