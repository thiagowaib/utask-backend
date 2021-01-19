const express = require('express');

const routes = new express.Router();

routes.post('/tasks');

module.exports = routes;
