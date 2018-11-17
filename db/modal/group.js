const db = require('../db')
const sqlQuery = require('./query')
const status = require('../../db/modal/constants/groupStatus')
const queryUtils = require('./utils/queryUtils');

const group = {
  get: {
    getList: (param, cb) => {
      queryUtils.query(sqlQuery.group.getByUser(param.user_id), cb)
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
      queryUtils.query(sqlQuery.group.addUser(param.user_id, param.group_id), cb)
    },
    actionGroup: (param, cb) => {
      queryUtils.query(sqlQuery.group.actionGroup(status[param.action], param.user_group_id), cb)
    }
  }
}

module.exports = group
