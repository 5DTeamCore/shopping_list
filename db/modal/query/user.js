const userConstants = require('../constants/userConstants')

const query = {
  getFriend: (user_id) => {
    return (
      `SELECT * FROM friend
      WHERE user_id = ${user_id}
      AND active = true`
    )
  },
  getFriendRequests: (user_id) => {
    return (
      `SELECT * FROM friend
      WHERE friend_id = ${user_id}
      AND status = '${userConstants.action.PENDING_APPROVAL.action}'
      AND active = true`
    )
  },
  addFriend: (user_id, friend_id) => {
    return (
      `INSERT INTO friend (user_id, friend_id, status)
      VALUES (${user_id}, ${friend_id}, '${userConstants.action.PENDING_APPROVAL.action}')`
    )
  },
  actionFriendRequest: (friend_request_id, actionObj) => {
    return (
      `UPDATE friend
      SET status = '${actionObj.action}',
      active = ${actionObj.active}
      WHERE id = ${friend_request_id}`
    )
  },
  insert: (user, password) => `INSERT INTO user (username, password) VALUES ('${user}', '${password}')`,
  getPassword: (user) => `SELECT password FROM user where username = '${user}'`
}

module.exports = query
