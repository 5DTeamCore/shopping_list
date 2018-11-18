const db = require('../db')
const sqlQuery = require('./query/group')
const groupConstants = require('../../db/modal/constants/groupConstants')
const queryUtils = require('./utils/queryUtils');

const group = {
  get: {
    getList: (param, cb) => {
      queryUtils.queryGet(sqlQuery.getByUser(param.user_id), cb)
    }
  },
  post: {
    create: (param, cb) => {
      db.query(sqlQuery.insert(param.name, param.user_id), (err, result, fields) => {
        if (err) {
          cb(err, false)
        } else {
          db.query(sqlQuery.addUserGroup(param.user_id, result.insertId), (err2, result2, fields2) => {
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
      queryUtils.queryPost(sqlQuery.addUser(param.user_id, param.group_id), cb)
    },
    actionGroup: (param, cb) => {
      queryUtils.queryPost(sqlQuery.actionGroup(groupConstants.action[param.action], param.user_group_id), cb)
    }
  }
}

module.exports = group
