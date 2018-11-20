const db = require('../db')
const sqlQuery = require('./query/group')
const groupConstants = require('./constants/groupConstants')
const queryUtils = require('./utils/queryUtils');

const group = {
  get: {
    getList: (param, cb) => {
      queryUtils.queryGet(sqlQuery.GET_GROUP_BY_USER, [param.user_id], cb)
    }
  },
  post: {
    create: (param, cb) => {
      db.query(
        sqlQuery.INSERT_GROUP,
        [
          param.name,
          'Active',
          param.user_id,
          param.user_id
        ],
        (err, result, fields) => {
        if (err) {
          cb(err, false)
        } else {
          db.query(
            sqlQuery.ADD_USER_GROUP,
            [
              param.user_id,
              result.insertId,
              groupConstants.action.APPROVE.action
            ],
            (err2, result2, fields2) => {
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
      queryUtils.queryPost(
        sqlQuery.ADD_USER,
        [
          param.user_id,
          param.group_id,
          groupConstants.action.PENDING_APPROVAL.action
        ],
        cb
      )
    },
    actionGroup: (param, cb) => {
      queryUtils.queryPost(
        sqlQuery.ACTION_GROUP,
        [
          groupConstants.action[param.action].action,
          groupConstants.action[param.action].active,
          param.user_group_id
        ],
        cb
      )
    }
  }
}

module.exports = group
