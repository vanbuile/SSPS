const connection = require('./connection')

const viewListPrinter = () => {
    //TODO
}
const addPrinter = (name, brand, model, location, paper, day, description,type, status ) =>
    {
         //let q = `call AddPrinter('${name}', '${brand}', '${model}', '${location}', ${paper}, '${day}', '${description}', ${type}, ${status})`
        let q = `call AddPrinter(?, ?, ?, ?, ?, ?, ?, ?, ?);`

        connection.query(q,[name, brand, model, location, paper, day, description,type, status],(err, result) => {console.log(result)})

    }
const editPrinter =() => {
    //TODO
}
const deletePrinter = () => {
    //TODO
}

module.exports = {viewListPrinter , addPrinter , editPrinter, deletePrinter}
