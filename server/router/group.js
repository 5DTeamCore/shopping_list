const express = require('express')
const router = express.Router()
const group = require('../../db/modal/group')
const groupConstants = require('../../db/modal/constants/groupConstants')

// GET
router.get('/get', (req, res) => {
  group.get.getList(req.query, (err, result) => {
    res.json(result)
  })
})

// POST
router.post('/create', (req, res) => {
  group.post.create(req.body, (err, success) => {
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

router.post('/adduser', (req, res) => {
  group.post.addUser(req.body, (err, success) => {
    if (err) {
      res.send({
        success,
        error: err.code,
      })
    } else {
      res.send({
        success,
      })
    }
  })
})

const checkActionParam = (req, res, next) => {
  if (groupConstants[req.body.action] !== undefined) {
    next()
  } else {
    res.send({
      success: false,
      error: 'Invalid Params'
    })
  }
}

router.post('/action', checkActionParam, (req, res) => {
  group.post.actionGroup(req.body, (err, success) => {
    if (err) {
      res.send({
        success,
        error: err.code,
      })
    } else {
      res.send({
        success,
      })
    }
  })
})

module.exports = router
