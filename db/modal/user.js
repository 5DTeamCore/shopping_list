const db = require('../db')
const sqlQuery = require('./query')
const queryUtils = require('./utils/queryUtils');

const user = {
  get: {
    getFriends: (param, cb) => {

    }
  },
  post: {
    login: (param, cb) => {
      db.query(sqlQuery.user.getPassword(param.username), (err, result, fields) => {
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
      queryUtils.query(sqlQuery.user.insert(param.username, param.password), cb)
    }
  }
}

module.exports = user
