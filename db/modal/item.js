const db = require('../db')
const sqlQuery = require('./query/item')
const groupConstants = require('./constants/groupConstants')
const queryUtils = require('./utils/queryUtils');

const item = {
  get: {
    getItemInGroup: (param, cb) => {
      queryUtils.queryGet(sqlQuery.GET_ITEMS_IN_GROUP, [param.group_id], cb)
    }
  },
  post: {
    create: (param, cb) => {
      queryUtils.queryPost(
        sqlQuery.INSERT_ITEM,
        [
          param.name,
          param.amount,
          param.quantity,
          param.active,
          param.shopping_group_id,
          param.category_id,
          param.user_id,
          param.user_id
        ],
        cb
      )
    }
  }
}
module.exports = item
