const Emprestimo = require('../models/emprestimoModel')
const Livro = require('../models/livroModel')
module.exports = {
  insertOne: async (req, res) => {
    try {
      const emprestimo = await Emprestimo.create(req.body);
      res.status(201).json({ message: 'Empréstimo registrado', content: emprestimo })
    } catch (error) {
      res.status(400).json({ message: 'Não foi possivel realizar empréstimo!' })
    }
  },
  insertMany: async (req, res) => {
    try {
      const emprestimos = await Emprestimo.createMany(req.body);
      res.status(201).json({ message: `${emprestimos.length} emprestimos registrados`, content: emprestimos })
    } catch (error) {
      res.status(400).json({ message: 'Não foi possivel registrar empréstimos!' })
    }
  },
  updateByISSN: async (req, res) => {
    try {
      try {
        await Emprestimo.findByIdAndUpdate(req.params.issn);
      } catch (err) {
        res.status(404).json({
          message: 'Empréstimo não encontrado!',
          content: err
        })
      }
      const emprestimoAtualizado = await Emprestimo.findById(req.body.issn);
      res.status(200).json({
        message: 'Emprestimo atualizado com sucesso!',
        content: emprestimoAtualizado
      })
    } catch (error) {
      res.status(400).json({ message: 'Não foi possivel atualizar livros!' })
    }
  },
  findByStatus: async (req, res) => {
    try {
      const emprestimo = Emprestimo.findById(req.params.status);
      res.status(200).json({
        content: emprestimo
      })
    } catch (error) {
      res.status(404).json({ message: "Nenhum empréstimo encontrado!" });
    }
  },
  findAll: async (req, res) => {
    try {
      const emprestimos = await Emprestimo.find();
      res.status(200).json(emprestimos);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  count: async (req, res) => {
    try {
      const contagem = await Emprestimo.count(req.params.titulo)
      res.status(200).json({ message: `Existem ${contagem} resgistrados!` })
    } catch (error) {
      res.status(400).json({ message: 'Não há empréstimos' })
    }
  }

}