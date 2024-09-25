const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  issn: { type: Number, required: true },
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  edicao: { type: Number, required: true }
})

module.exports = mongoose.model('livros', Schema)