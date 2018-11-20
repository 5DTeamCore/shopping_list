const auth = require('./auth')
const express = require('express')
const router = express.Router()
const user = require('../../db/modal/user')
const userConstants = require('../../db/modal/constants/userConstants')

// GET
router.get('/friend', auth.authMiddleware, (req, res) => {
  user.get.getFriends(req.query, (err, result) => {
    res.json(result)
  })
})

router.get('/friendRequests', auth.authMiddleware, (req, res) => {
  user.get.getFriendRequests(req.query, (err, result) => {
    res.json(result)
  })
})

// POST
const checkParam = (req, res, next) => {
  if (req.body.username !== undefined && req.body.password !== undefined) {
    next()
  } else {
    res.send({
      success: false,
      error: 'Invalid params'
    })
  }
}

router.post('/login', checkParam, (req, res) => {
  user.post.login(req.body, (err, success, result) => {
    if (err) {
      res.send({
        success,
        error: err.code,
      })
    } else {
      const token = auth.createToken(result[0].id, 86400);
      res.send({
        success,
        token
      })
    }
  })
})

router.post('/register', checkParam, (req, res) => {
  user.post.register(req.body, (err, success, result) => {
    if (err) {
      res.send({
        success,
        error: err.code,
      })
    } else {
      const token = auth.createToken(result.insertId, 86400);
      res.send({
        success,
        token,
      })
    }
  })
})

router.post('/addFriend', auth.authMiddleware, (req, res) => {
  user.post.addFriend(req.body, (err, success, result) => {
    res.send({
      success,
      error: err
    })
  })
})

const checkActionParam = (req, res, next) => {
  if (userConstants.action[req.body.action] !== undefined) {
    next()
  } else {
    res.send({
      success: false,
      error: 'Invalid Params'
    })
  }
}

router.post('/actionFriendRequest', [auth.authMiddleware, checkActionParam], (req, res) => {
  user.post.actionFriendRequest(req.body, (err, success, result) => {
    res.send({
      success,
      error: err
    })
  })
})

module.exports = router
