const express = require('express');
const path = require('path');
const parser = require('body-parser');
const user = require('./router/user')
const group = require('./router/group');
const item = require('./router/item');
const db = require('../db/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(parser.json());

app.use(express.static(path.join(__dirname, '../dist')))


//Router for Server
app.use('/api/user', user)
app.use('/api/group', group)
app.use('/api/item', item)

app.listen(PORT, () => {
  console.log("Listening to port: ", PORT)
})

module.exports = app;
