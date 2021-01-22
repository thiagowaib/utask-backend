const Task = require('../models/Task');

module.exports = {
  async index(req, res) {
    const tasks = await Task.find().sort('createdAt');

    return res.json(tasks);
  },

  async store(req, res) {
    const { description, feito } = req.body;

    const task = await Task.create({
      description,
      feito,
    });

    return res.json(task);
  },
};
