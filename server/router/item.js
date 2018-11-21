const auth = require('./auth')
const express = require('express')
const router = express.Router()
const item = require('../../db/modal/item')

// Middleware
router.use(auth.authMiddleware);

// GET
router.get('/', (req, res) => {
  item.get.getItemInGroup(req.query, (err, result) => {
    res.json(result)
  })
})

// POST
router.post('/add', (req, res) => {
  item.post.create(req.body, (err, success, result) => {
    if (err) {
      res.send({
        success,
        error: err,
      })
    } else {
      res.send({
        success,
      })
    }
  })
})

module.exports = router
