const mysql = require('mysql2');

// Tạo kết nối đến MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: null,
  database: process.env.DB_NAME,
});

// Kết nối đến MySQL
connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối:', err);
    throw err;
  }
  console.log('Kết nối thành công!');
});


module.exports = connection;