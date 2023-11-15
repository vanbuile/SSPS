const connection = require('./DataBase')

const viewListPrinter = async (from) => {
  let q =  `call ViewPrinterByPage(?);`
  const [result, fields] = await connection.query(q, [from], (err, result, fields) => {console.log(result)})
  return result[0]
}
const addPrinter = async (name, brand, model, location, paper, day, description,type, status ) =>
{
  let q = `call AddPrinter(?, ?, ?, ?, ?, ?, ?, ?, ?);`
  const [result, fields] = await connection.query(q,[name, brand, model, location, paper, day, description,type, status],(err, result) => {console.log(result)})
  return result[0]
}
const editPrinter = async (id, name, brand, model, location, paper, day, description,type, status ) => {
  let q = `call EditPrinter(?,?, ?, ?, ?, ?, ?, ?, ?, ?);`
  connection.query(q, [id, name, brand, model, location, paper, day, description,type, status], (err, result) => {console.log(result)})
}
const deletePrinter = async (id) => {
  let q = `call DeletePrinter(?);`
  connection.query(q, [id], (err, result) => console.log(result))
}

module.exports = {viewListPrinter , addPrinter , editPrinter, deletePrinter}
