const connection = require('./DataBase');

//!  TransactionChart
const GetStudentCourseRevenue = async() => {
    const query = `CALL GetStudentCourseRevenue();`;
    const [result, fields] = await connection.query(query)
    return result[0];
}

const GetStudentInfo = async() => {
    const query = `CALL GetStudentInfo();`;
    const [result, fields] = await connection.query(query)
    return result[0];
}

const GetRecentOrdersInfo = async() => {
    const query = `CALL GetRecentOrdersInfo();`;
    const [result, fields] = await connection.query(query)
    return result[0];
}



module.exports = {GetStudentInfo, 
                GetStudentCourseRevenue,
                GetRecentOrdersInfo};