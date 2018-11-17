const db = require('../../db')

const query = (query, cb) => {
  db.query(query, (err, result, fields) => {
    if (err) {
      cb(err, false)
    } else {
      cb(null, true)
    }
  })
}

module.exports = {
  query,
}
