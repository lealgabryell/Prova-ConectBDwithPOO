const express = require('express')
const { findAll, findByStatus, insertMany, insertOne, updateByISSN } = require('../controllers/emprestimoController')
const router = express.Router()

router.route('/')
  .get(findAll)
  .post((req, res) => {
    if (Array.isArray(req.body)) {
      insertMany(req, res);
      return;
    }
    insertOne(req, res);
  })
router.route('/:status')
  .get(findByStatus)

router.route('/:issn')
  .put(updateByISSN)
module.exports = router;
