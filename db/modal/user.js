const db = require('../db')
const sqlQuery = require('./query/user')
const userConstants = require('../../db/modal/constants/userConstants')
const queryUtils = require('./utils/queryUtils');

const user = {
  get: {
    getFriends: (param, cb) => {
      queryUtils.queryGet(sqlQuery.getFriend(param.user_id), cb)
    },
    getFriendRequests: (param, cb) => {
      queryUtils.queryGet(sqlQuery.getFriendRequests(param.user_id), cb)
    }
  },
  post: {
    addFriend: (param, cb) => {
      queryUtils.queryPost(sqlQuery.addFriend(param.user_id, param.friend_id), cb)
    },
    actionFriendRequest: (param, cb) => {
      queryUtils.queryPost(sqlQuery.actionFriendRequest(param.friend_request_id, userConstants.action[param.action]), cb)
    },
    login: (param, cb) => {
      db.query(sqlQuery.getPassword(param.username), (err, result, fields) => {
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
      queryUtils.queryPost(sqlQuery.insert(param.username, param.password), cb)
    }
  }
}

module.exports = user
