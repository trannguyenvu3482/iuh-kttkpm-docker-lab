const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
  res.send('Hello from Node.js with MySQL');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});