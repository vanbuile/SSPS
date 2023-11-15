const connection = require('./DataBase')

const viewListPrinter = async (page) => {
  let q =  `call ViewPrinter(?);`
  connection.query(q, [page], (err, result) => {console.log(result)})
}
const addPrinter = async (name, brand, model, location, paper, day, description,type, status ) =>
{
  let q = `call AddPrinter(?, ?, ?, ?, ?, ?, ?, ?, ?);`
  connection.query(q,[name, brand, model, location, paper, day, description,type, status],(err, result) => {console.log(result)})
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
