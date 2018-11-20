const db = require('../../db')

const queryPost = (query, param, cb) => {
  db.query(query, param, (err, result, fields) => {
    if (err) {
      cb(err, false)
    } else {
      cb(null, true)
    }
  })
}

const queryGet = (query, cb) => {
  db.query(query, (err, result, fields) => {
    if (err) {
      cb(err, null)
    } else {
      cb(null, result)
    }
  })
}

module.exports = {
  queryPost,
  queryGet
}
