const mysql = require('mysql2');
const port = process.env.DB_PORT || 3306
const hostname = process.env.DB_HOST || 'localhost'
const username = process.env.DB_USER || 'root'
const password = process.env.DB_PASS || ''
const database = process.env.DB_NAME || 'SSPS'

const connection = mysql.createPool({
  host     : hostname,
  user     : username,
  password : password,
  database: database,
  port: port,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


// Kết nối đến MySQL
// connection.connect((err) => {
//   if (err) {
//     console.error('Lỗi kết nối:', err);
//     throw err;
//   }
//   console.log('Kết nối thành công!');
// });


module.exports = connection;