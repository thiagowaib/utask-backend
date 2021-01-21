const Task = require('../models/Task');
const path = require('path');

module.exports = {
  async index(req, res) {
    const tasks = await Task.find().sort('createdAt');

    return res.json(tasks);
  },

  async store(req, res) {
    const { description } = req.body;

    const task = await Task.create({
      description,
    });

    return res.json(task);
  },
};
