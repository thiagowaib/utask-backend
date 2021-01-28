const Task = require('../models/Task');

module.exports = {
  // Função que organiza as Tasks em ordem crescente de tempo(passado).
  async index(req, res) {
    const tasks = await Task.find().sort('createdAt');

    req.io.emit('index', tasks);
    return res.json(tasks);
  },

  // Função que armazena uma nova Task
  async store(req, res) {
    const { description, feito } = req.body;

    const task = await Task.create({
      description,
      feito,
    });
    req.io.emit('store', task);
    return res.json(task);
  },

  // Função que Faz a mudança de estado (Todo <-> Done)
  // (Procura pelo ID)
  async conclude(req, res) {
    const task = await Task.findById(req.params.id);

    if (task.feito === false) {
      task.feito = true;
    } else {
      task.feito = false;
    }

    await task.save();
    req.io.emit('conclude', task);
    return res.json(task);
  },

  // Função que remove a task do banco de dados
  // (Procura pelo ID)
  async remove(req, res) {
    Task.findByIdAndDelete(req.params.id, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        req.io.emit('remove', result);
      }
      return res.json(result);
    });
  },
};
