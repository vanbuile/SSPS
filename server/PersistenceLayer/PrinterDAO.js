const connection = require('./DataBase')

const viewListPrinter = async () => {

  let q =  `call ViewAllPrinter;`
  const [result, fields] = await connection.query(q)
  return result[0]
}

const addPrinter = async (name, brand, model, building, floor, paper, day, description, status) =>
{
  try {
    let q = `call AddPrinter(?, ?, ?, ?, ?, ?,?, ?, ?);`
    const [result, fields] = await connection.query(q,[name, brand, model ,building ,floor, paper, day, description, status])
    return result
  }
  catch (e) {
    //console.log(e)
    throw new Error(e)
  }

}
const editPrinter = async (id, name, brand, model, building, floor, paper, day, description, status ) => {
  try {
    let q = `call EditPrinter(?,?, ?, ?, ?, ?, ?, ?, ?, ?);`
    const [result, fields] = await connection.query(q, [id, name, brand, model, building,floor, paper, day, description, status])
    return result
  }
  catch (e) {
    throw new Error(e)
  }

}
const deletePrinter = async (id) => {
  try{
    let q = `call DeletePrinter(?);`
    const [result, fields] = await connection.query(q, [id])
    return result
  }
  catch (e) {
    throw new Error(e)
  }

}

module.exports = {viewListPrinter , addPrinter , editPrinter, deletePrinter}
