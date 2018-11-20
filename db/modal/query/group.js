const groupConstants = require('../constants/groupConstants')

const query = {
  GET_GROUP_BY_USER: (
    `SELECT * FROM shopping_group sg
    LEFT JOIN user_group_join ugj on sg.id = ugj.shopping_group_id
    WHERE ugj.user_id = ?
    ORDER BY sg.updated_time`
  ),
  INSERT_GROUP: (
    `INSERT INTO shopping_group
    (name, status, created_by, updated_by)
    VALUES (?,?,?,?)`
  ),
  ADD_USER_GROUP: (
    `INSERT INTO user_group_join
    (user_id, shopping_group_id, status)
    VALUES (?,?,?)`
  ),
  ADD_USER: (
    `INSERT INTO user_group_join
    (user_id, shopping_group_id, status)
    VALUES (?,?,?)`
  ),
  ACTION_GROUP: (
    `UPDATE user_group_join
    SET status = ?,
    active = ?
    WHERE id = ?`
  )
}

module.exports = query
