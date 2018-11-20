if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test') {
  module.exports = config = require('./config.js')
} else {
  module.exports = config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    secret: process.env.SECRET,
  }
}
