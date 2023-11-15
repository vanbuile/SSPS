const {query, connection} = require('./DataBase');
const mysql = require('mysql2');


//!  TransactionChart
const SelectAllPrinting = async() => {

    try {
        // Sử dụng await với hàm đã được chuyển đổi thành Promise
        const data = await query(`
        SELECT 
            P.id_printer,
            P.MSSV,
            P.id_file,
            P.numberPage,
            P.date,
            F.ispublic
        FROM 
            PRINTING P
        JOIN 
            FILE F ON P.id_file = F.id
        JOIN 
            PRINTER PR ON P.id_printer = PR.id;
        `);
        
        // Đóng kết nối sau khi hoàn thành truy vấn
        console.log(data);
    
        // Trả về dữ liệu
        return data;
    } catch (err) {
        console.error('Lỗi truy vấn:', err);
        throw err;
    }
}

//! pringter and DashboardTotal static col tên máy in + số giấy còn và lại
const SelectAllPrintingJoinPrinter = async() => {
    // data = [
    // {
    //     id_printer: 1,
    //     MSSV: "2113928",
    //     id_file: 1,
    //     numberPage: 10,
    //     date: "11/14/2023",
    //     ispublic: false
    // }
    // ];
    try {
        // Sử dụng await với hàm đã được chuyển đổi thành Promise
        const data = await query(`
        SELECT 
            P.id_printer,
            P.MSSV,
            P.id_file,
            P.numberPage,
            P.date,
            F.ispublic
        FROM 
            PRINTING P
        JOIN 
            FILE F ON P.id_file = F.id
        JOIN 
            PRINTER PR ON P.id_printer = PR.id;
        `);
        
        // Đóng kết nối sau khi hoàn thành truy vấn
        console.log(data);
    
        // Trả về dữ liệu
        return data;
    } catch (err) {
        console.error('Lỗi truy vấn:', err);
        throw err;
    }
}

//! PrinterStatisticsOrders  sinh viên + máy in
const SelectAllPrintingJoinStudent = async() => {

}






module.exports = {SelectAllPrinting,  SelectAllPrintingJoinPrinter};