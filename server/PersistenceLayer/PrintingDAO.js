const connection = require('./DataBase');

//!  TransactionChart
const GetPrintingInfo = async() => {
    const query = `CALL GetPrintingInfo();`;

    const [result, fields] = await connection.query(query)

    return result[0];
}

// //! pringter and DashboardTotal static col tên máy in + số giấy còn và lại
const GetWeekInSemester = async() => {
    const query = `CALL GetWeekInSemester()`;
    const [result, fields] = await connection.query(query)
    return result[0];
}

// //! PrinterStatisticsOrders 
const GetPrintInSemester = async() => {
    const query = `CALL GetPrintInSemester()`;
    const [result, fields] = await connection.query(query)
	return result[0];
}


const GetStudentPrintMaxSemester = async()=> 
{
    const query = `CALL GetStudentPrintMaxSemester()`;
    const [result, fields] = await connection.query(query)
	return result[0];
}

const addNewFile = async(name, description, link, isShare) => {
    try {
        let q = `call addFile(?,?,?,?);`
        const [result, fields] = await connection.query(q,[name, description, link, isShare])
        return result
    }
    catch (e) {
        //console.log(e)
        throw new Error(e)
    }
}
module.exports = {GetPrintingInfo, 
                GetWeekInSemester, 
                GetPrintInSemester, 
                GetStudentPrintMaxSemester, addNewFile};