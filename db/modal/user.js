const db = require('../db')
const sqlQuery = require('./query')

const user = {
  post: {
    login: (param, cb) => {
      const query = sqlQuery.user.getPassword(param.username);
      db.query(query, (err, result, fields) => {
        if (err) {
          cb(err, false)
        } else if (result.length === 0 || result[0].password !== param.password) {
          cb(err, false)
        } else {
          cb(null, true)
        }
      })
    },
    register: (param, cb) => {
      const query = sqlQuery.user.insert(param.username, param.password);
      db.query(query, (err, results, fields) => {
        if (err) {
          cb(err, false)
        } else {
          cb(null, true)
        }
      })
    }
  }
}

module.exports = user
