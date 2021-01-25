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

  async concludeTrue(req, res){
    const task = await Task.findById(req.params.id);
    console.log(task.feito);
    if(task.feito == false)
    {
    task.feito = true
    }
    await task.save()
    req.io.emit('concludeTrue', task)
    return res.json(task);
  },

  async concludeFalse(req, res){
    const task = await Task.findById(req.params.id);
    console.log(task.feito);
    if(task.feito==true)
    {
    task.feito = false
    }
    await task.save()
    req.io.emit('concludeFalse', task)
    return res.json(task);
  }
};
