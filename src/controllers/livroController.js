const Livro = require('../models/livroModel')

module.exports = {
  insertOne: async (req, res) => {
    try {
      const livro = await Livro.create(req.body);
      res.status(201).json({ message: 'Livro adicionado a biblioteca', content: livro })
    } catch (error) {
      res.status(400).json({ message: 'Não foi possivel adicionar livro a biblioteca!' })
    }
  },

  insertMany: async (req, res) => {
    try {
      const livros = await Livro.createMany(req.body);
      res.status(201).json({ message: `${livros.length} livros adicionados a biblioteca`, content: livros })
    } catch (error) {
      res.status(400).json({ message: 'Não foi possivel adicionar livros a biblioteca!' })
    }
  },

  updateByTitle: async (req, res) => {
    try {
      try {
        await Livro.findByIdAndUpdate(req.params.titulo);
      } catch (err) {
        res.status(404).json({
          message: 'Livro não encontrado!',
          content: err
        })
      }
      const livroAtualizado = await Livro.findById(req.body.titulo);
      res.status(200).json({
        message: 'Livro editado com sucesso!',
        content: livroAtualizado
      })
    } catch (error) {
      res.status(400).json({ message: 'Não foi possivel atualizar livros!' })
    }
  },
  findAll: async (req, res) => {
    try {
      const livros = await Livro.find();
      res.status(200).json(livros);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  findByISSN: async (req, res) => {
    try {
      const livro = Livro.findById(req.params.issn);
      res.status(200).json(livro)
    } catch (error) {
      res.status(404).json({ message: "Livro não encontrado!" });
    }
  },

  count: async (req, res) => {
    try {
      const contagem = await Livro.count(req.params.titulo)
      res.status(200).json({ message: `Existem ${contagem} na sua biblioteca!` })
    } catch (error) {
      res.status(400).json({ message: 'Não há livros' })
    }
  }
}

