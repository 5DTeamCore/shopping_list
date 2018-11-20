const userConstants = require('../constants/userConstants')

const query = {
  GET_FRIENDS: (
    `SELECT * FROM friend
    WHERE user_id = ?
    AND active = true`
  ),
  GET_FRIEND_REQUESTS: (
    `SELECT * FROM friend
    WHERE friend_id = ?
    AND status = ?
    AND active = true`
  ),
  ADD_FRIEND: (
    `INSERT INTO friend
    (user_id, friend_id, status)
    VALUES (?,?,?)`
  ),
  ACTION_FRIEND_REQUEST: (
      `UPDATE friend
      SET status = ?,
      active = ?
      WHERE id = ?`
  ),
  INSERT_USER: 'INSERT INTO user (username, password) VALUES (?,?)',
  GET_PASSWORD: 'SELECT id, password FROM user where username = ?',
}

module.exports = query
