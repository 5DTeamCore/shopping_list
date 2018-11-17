var express = require('express')
var router = express.Router()
var user = require('../../db/modal/user')

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
// define endpoints
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

module.exports = router
