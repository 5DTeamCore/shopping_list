const express = require('express')
const router = express.Router()
const user = require('../../db/modal/user')
const userConstants = require('../../db/modal/constants/userConstants')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

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
// POST
router.post('/login', checkParam, (req, res) => {
  user.post.login(req.body, (err, success) => {
    res.send({
      success
    })
  })
})

router.post('/register', checkParam, (req, res) => {
  user.post.register(req.body, (err, success) => {
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

router.post('/addFriend', (req, res) => {
  user.post.addFriend(req.body, (err, success) => {
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

router.post('/actionFriendRequest', checkActionParam, (req, res) => {
  user.post.actionFriendRequest(req.body, (err, success) => {
    res.send({
      success,
      error: err
    })
  })
})

module.exports = router
