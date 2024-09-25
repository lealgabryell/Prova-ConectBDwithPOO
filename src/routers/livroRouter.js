const express = require('express')
const { insertOne, count, findByISSN, insertMany, updateByTitle, findAll } = require('../controllers/livroController')
const router = express.Router();

router.route('/')
  .get(findAll)
  .post((req, res) => {
    if (Array.isArray(req.body)) {
      insertMany(req, res);
      return;
    }
    insertOne(req, res);
  })

router.route('/:issn')
  .get(findByISSN)

router.route('/:titulo')
  .put(updateByTitle)

module.exports = router;