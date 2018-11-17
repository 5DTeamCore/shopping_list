const db = require('../db')
const sqlQuery = require('./query')
const status = require('../../db/modal/constants/groupStatus')

const group = {
  get: {
    getList: (param, cb) => {
      db.query(sqlQuery.group.getByUser(param.user_id), (err, result, fields) => {
        if (err) {
          cb(err, null)
        } else {
          cb(null, result)
        }
      })
    }
  },
  post: {
    create: (param, cb) => {
      db.query(sqlQuery.group.insert(param.name, param.user_id), (err, result, fields) => {
        if (err) {
          cb(err, false)
        } else {
          db.query(sqlQuery.group.insertUserGroup(param.user_id, result.insertId), (err2, result2, fields2) => {
            if (err2) {
              cb(err2, false)
            } else {
              cb(null, true)
            }
          })
        }
      })
    },
    addUser: (param, cb) => {
      db.query(sqlQuery.group.addUser(param.user_id, param.group_id), (err, result, fields) => {
        if (err) {
          cb(err, false)
        } else {
          cb(null, true)
        }
      })
    },
    actionGroup: (param, cb) => {
      db.query(sqlQuery.group.actionGroup(status[param.action], param.user_group_id), (err, result, fields) => {
        if (err) {
          cb(err, false)
        } else {
          cb(null, true)
        }
      })
    }
  }
}

module.exports = group
