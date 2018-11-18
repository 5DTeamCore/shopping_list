const db = require('../../db')

const queryPost = (query, cb) => {
  db.query(query, (err, result, fields) => {
    if (err) {
      console.log(err);
      cb(err, false)
    } else {
      cb(null, true)
    }
  })
}

const queryGet = (query, cb) => {
  db.query(query, (err, result, fields) => {
    if (err) {
      console.log(err);
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
