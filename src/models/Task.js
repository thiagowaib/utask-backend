const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    description: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Task', PostSchema);
