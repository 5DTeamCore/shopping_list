const bcrypt = require('bcryptjs');
const db = require('../db')
const queryUtils = require('./utils/queryUtils');
const sqlQuery = require('./query/user')
const userConstants = require('../../db/modal/constants/userConstants')

const user = {
  get: {
    getFriends: (param, cb) => {
      queryUtils.queryGet(sqlQuery.GET_FRIENDS, [param.user_id], cb)
    },
    getFriendRequests: (param, cb) => {
      queryUtils.queryGet(
        sqlQuery.GET_FRIEND_REQUESTS,
        [param.user_id, userConstants.action.PENDING_APPROVAL.action],
        cb
      )
    }
  },
  post: {
    addFriend: (param, cb) => {
      queryUtils.queryPost(
        sqlQuery.ADD_FRIEND,
        [param.user_id, param.friend_id, userConstants.action.PENDING_APPROVAL.action],
        cb
      )
    },
    actionFriendRequest: (param, cb) => {
      queryUtils.queryPost(
        sqlQuery.ACTION_FRIEND_REQUEST,
        [
          userConstants.action[param.action].action,
          userConstants.action[param.action].active,
          param.friend_request_id
        ],
        cb
      )
    },
    login: (param, cb) => {
      db.query(sqlQuery.GET_PASSWORD, [param.username], (err, result, fields) => {
        const passwordIsValid = bcrypt.compareSync(param.password, result[0].password);
        if (err) {
          cb(err, false)
        } else if (result.length === 0 || !passwordIsValid) {
          cb(err, false)
        } else {
          cb(null, true)
        }
      })
    },
    register: (param, cb) => {
      const password = bcrypt.hashSync(param.password, 8);
      queryUtils.queryPost(sqlQuery.INSERT_USER, [param.username, password], cb)
    }
  }
}

module.exports = user
