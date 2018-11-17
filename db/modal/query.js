const status = require('./constants/groupStatus')

const query = {
  user: {
    insert: (user, password) => `INSERT INTO user (username, password) VALUES ('${user}', '${password}')`,
    getPassword: (user) => `SELECT password FROM user where username = '${user}'`
  },
  group: {
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
    insertUserGroup: (userID, groupID) => {
      return `INSERT INTO user_group_join (user_id, shopping_group_id, action, active) VALUES (${userID}, ${groupID}, '${status.APPROVE.action}', true)`
    },
    addUser: (userID, groupID) => {
      return `INSERT INTO user_group_join (user_id, shopping_group_id, action) VALUES (${userID}, ${groupID}, '${status.PENDING_APPROVAL}')`
    },
    actionGroup: (actionObj, user_group_id) => {
      return (
        `UPDATE user_group_join
        SET active = '${actionObj.action}'
        AND active = ${actionObj.active}
        WHERE id = ${user_group_id}`
      )
    }
  }
}

module.exports = query
