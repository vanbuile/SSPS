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

const addNewFile = async(mssv, name, description, link, isShare) => {
    try {
        let q = `SELECT addFile(?,?,?,?,?) AS lastID;`
        const [rows, fields] = await connection.query(q,[mssv, name, description, link, isShare])
        return rows
    }
    catch (e) {
        console.log(e)
        throw new Error(e)
    }
}

const addPrinting = async (id_printer, mssv, id_file, paper, date) => {
    try {
        let q = 'CALL aPrinting(?, ?, ? ,? ,?)'
        const [result, fields] = await connection.query(q, [id_printer, mssv, id_file, paper, date])
        return result
    }
    catch (e) {
        console.log(e)
        throw new Error(e)
    }
}
module.exports = {GetPrintingInfo, 
                GetWeekInSemester, 
                GetPrintInSemester,
                GetStudentPrintMaxSemester, addNewFile, addPrinting};
