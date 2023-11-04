require('dotenv').config('./.env')
const mysql = require('mysql')

const pool = mysql.createPool({
  host: process.env.AWS_URL,
  user: 'admin',
  password: process.env.AWS_PASSWORD,
  database: 'sailSprint'
});


module.exports = Object.freeze({
  pool: pool
});



