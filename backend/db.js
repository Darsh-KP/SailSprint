require('dotenv').config('./.env')
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: process.env.AWS_URL,
  user: 'admin',
  password: process.env.AWS_PASSWORD,
  database: 'sailSprint'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err
  console.log('The solution is: ', rows[0].solution)
})

connection.end()