var mysql = require('mysql')
if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test') {
  var config = require('./config')
  var connection = mysql.createConnection({
    host     : config.host,
    user     : config.user,
    password : config.password,
    database : process.env.NODE_ENV === 'test' ? config.test_database : config.database,
  })
} else {
  var connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
  })
}

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
});

module.exports = connection
