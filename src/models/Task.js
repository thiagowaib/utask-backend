const mongoose = require('mongoose');

// Modelo de cada Task:
// _______________________________
// Description: descrição da task
//
// Feito:__True: Vai aparecer no "Done"
//       |_False: Vai aparecer no "To Do"
//
// Timestamps: marca o horário de postagem
// ________________________________
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
