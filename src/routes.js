const express = require('express');
const PostController = require ('./controllers/PostController');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/tasks', PostController.index);
routes.post('/tasks', upload.single('image'), PostController.store);

module.exports = routes;
