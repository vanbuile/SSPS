const connection = require('./DataBase')


const InsertTransaction = async (MSSV, date, paper ) =>
{
  try {
    let q = 'INSERT INTO `student_buypage` (`MSSV`, `date`, `paper`) VALUES (?, ?, ?)'
    const [result, fields] = await connection.query(q,[MSSV, date, paper])
  }
  catch (e) {
    //console.log(e)
    throw new Error(e)
  }

}

const IncreasePaper = async (MSSV, paper) =>
{
  try {
    let q = 'UPDATE `student` SET `paper` = `paper` + ? WHERE `MSSV` = ?'
    const [result, fields] = await connection.query(q,[paper, MSSV])
  }
  catch (e) {
    //console.log(e)
    throw new Error(e)
  }

}
module.exports = {InsertTransaction,IncreasePaper}
