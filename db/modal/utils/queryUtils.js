const db = require('../../db')

const queryPost = (query, param, cb) => {
  db.query(query, param, (err, result, fields) => {
    if (err) {
      cb(err, false, null)
    } else {
      cb(null, true, result)
    }
  })
}

const queryGet = (query, param, cb) => {
  db.query(query, param, (err, result, fields) => {
    if (err) {
      cb(err, null)
    } else {
      cb(null, result)
    }
  })
}

module.exports = {
  queryPost,
  queryGet,
}
