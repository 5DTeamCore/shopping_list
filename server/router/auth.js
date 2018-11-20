if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test') {
  const config = require('../../config')
  const secret = config.secret
} else {
  const secret = process.env.SECRET
}
const jwt = require('jsonwebtoken')

const createToken = (user_id, expiresIn) => {
  const token = jwt.sign({ id: user_id }, secret, {
    expiresIn: expiresIn
  })
  return token
}

const verifyToken = (token, cb) => {
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return cb(false)
    } else {
      return cb(true)
    }
  })
}

// Middleware for authentication
const authMiddleware = (req, res, next) => {
  var token = req.headers['x-access-token']
  verifyToken(token, (result) => {
    if (!token) {
      res.status(401).send({
        error: 'No token provided.'
      })
    } else if (!result) {
      res.status(500).send({
        error: 'Failed to authenticate token.'
      })
    } else {
      next()
    }
  })
}

module.exports = {
  createToken,
  verifyToken,
  authMiddleware,
}
