const mysql = require('mysql')
const config = require('../configStore');
var connection = mysql.createConnection({
  host     : config.host,
  user     : config.user,
  password : config.password,
  database : process.env.NODE_ENV === 'test' ? config.test_database : config.database,
})

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
});

module.exports = connection
