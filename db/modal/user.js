const db = require('../db');

user = {
  login: (param, cb) => {
    const query = `SELECT password FROM user where username = '${param.username}'`;
    db.query(query, (err, result, fields) => {
      if (err || result[0].password !== param.password) {
        cb(err, false)
      } else {
        cb(null, true)
      }
    })
  },
  register: (param, cb) => {
    const query = `INSERT INTO user (username, password) VALUES ('${param.username}', '${param.password}');`
    db.query(query, (err, results, fields) => {
      if (err) {
        cb(err, false);
      } else {
        cb(null, true);
      }
    })
  }
}

module.exports = user;
