const express = require('express');
const path = require('path');
const parser = require('body-parser');
const user = require('./router/user')
const group = require('./router/group');
const db = require('../db/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(parser.json());

app.use(express.static(path.join(__dirname, '../dist')))


//Router for Server
app.use('/user', user)
app.use('/group', group)

app.listen(PORT, () => {
  console.log("Listening to port: ", PORT)
})
