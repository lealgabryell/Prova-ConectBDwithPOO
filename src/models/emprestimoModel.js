const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  livro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'livros', required: true
  },
  status: { type: String, required: true },
  diasEmprestados: { type: Number, required: true }
})

module.exports = mongoose.model('emprestimos', Schema)