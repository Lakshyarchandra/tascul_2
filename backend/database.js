const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'tascul', // Replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit();
  }
  console.log('Connected to MySQL');
});

module.exports = connection;
