const groupConstants = require('../constants/groupConstants')

const query = {
  getByUser: (user_id) => {
    return (
      `SELECT * FROM shopping_group sg
      LEFT JOIN user_group_join ugj on sg.id = ugj.shopping_group_id
      WHERE ugj.user_id = ${user_id}
      ORDER BY sg.updated_time`
    )
  },
  insert: (name, userID) => {
    return `INSERT INTO shopping_group (name, status, created_by, updated_by) VALUES ('${name}', 'Active', ${userID}, ${userID})`
  },
  addUserGroup: (userID, groupID) => {
    return `INSERT INTO user_group_join (user_id, shopping_group_id, status) VALUES (${userID}, ${groupID}, '${groupConstants.action.APPROVE.action}')`
  },
  addUser: (userID, groupID) => {
    return `INSERT INTO user_group_join (user_id, shopping_group_id, status) VALUES (${userID}, ${groupID}, '${groupConstants.action.PENDING_APPROVAL.action}')`
  },
  actionGroup: (actionObj, user_group_id) => {
    return (
      `UPDATE user_group_join
      SET status = '${actionObj.action}',
      active = ${actionObj.active}
      WHERE id = ${user_group_id}`
    )
  }
}

module.exports = query
