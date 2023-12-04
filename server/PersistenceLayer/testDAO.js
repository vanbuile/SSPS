const connection = require('./DataBase');

//!  TransactionChart
const GetPrintingInfo = async() => {
    const query = `select * from printing`;

    const [result, fields] = await connection.query(query)

    return result[0];
}


module.exports = GetPrintingInfo
                