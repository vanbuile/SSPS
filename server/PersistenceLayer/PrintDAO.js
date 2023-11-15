const connection = require('./DataBase');
const mysql = require('mysql2');

const select = async ()  =>{
  // Thực hiện một truy vấn SELECT
  connection.query('SELECT * FROM printer', (err, results) => {
    if (err) {
      console.error('Lỗi truy vấn:', err);
      throw err;
    }

    // Xử lý kết quả truy vấn
    console.log('Dữ liệu từ truy vấn SELECT:', results);

    // Đóng kết nối sau khi hoàn thành truy vấn
    connection.end();
  });
}
module.exports = select;