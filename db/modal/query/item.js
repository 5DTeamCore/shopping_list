const query = {
  INSERT_ITEM: (
    `INSERT INTO item
    (name, amount, quantity, status, shopping_group_id, category_id, created_by, updated_by)
    VALUES (?,?,?,?,?,?,?,?)`
  ),
  GET_ITEMS_IN_GROUP: (
    `SELECT * FROM item
    WHERE shopping_group_id = ?`
  )
}

module.exports = query
