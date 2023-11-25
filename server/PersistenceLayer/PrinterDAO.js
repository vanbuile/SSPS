const connection = require('./DataBase')

const viewListPrinter = async () => {

  let q =  `call ViewAllPrinter;`
  const [result, fields] = await connection.query(q)
  return result[0]
}

const addPrinter = async (name, brand, model, facility, building, floor, paper, day, description, status ) =>
{
  try {
    let q = `call AddPrinter(?, ?, ?, ?, ?, ?,?, ?, ?, ?);`
    const [result, fields] = await connection.query(q,[name, brand, model, facility,floor, paper, day, description, status])
  }
  catch (e) {
    //console.log(e)
    throw new Error(e)
  }

  return result
}
const editPrinter = async (id, name, brand, model, location, paper, day, description,type, status ) => {
  let q = `call EditPrinter(?,?, ?, ?, ?, ?, ?, ?, ?, ?);`
  const [result, fields] = await connection.query(q, [id, name, brand, model, location, paper, day, description,type, status], (err, result) => {console.log(result)})
  return result
}
const deletePrinter = async (id) => {
  let q = `call DeletePrinter(?);`
  connection.query(q, [id], (err, result) => console.log(result))
}

module.exports = {viewListPrinter , addPrinter , editPrinter, deletePrinter}
