const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
// Configuração de realtime - websocket
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// Conexão com a base de dados
// ----------------------------------
// Falta o endereço da base de dados
// ----------------------------------
mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Passa a informação da compatibilidade WebSocket com todos as
// Rotas, podendo ser acessada de todos os middlewers
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Determina a utilização do cors
app.use(cors());

// Comunicação com as rotas de Routes.js
app.use(require('./routes'));

// Determinação da porta backend
server.listen(3333);
