const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    description: String,
    feito: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Task', PostSchema);
