const {viewListPrinter, addPrinter, editPrinter, deletePrinter } = require('../../PersistenceLayer/PrinterDAO')
const ShowListPrinter = async (req, res) => {
    let page = req.body.page
    let [result, fields] = await viewListPrinter(page)
    return res.status(201).json({"data": result})
}
const AddNewPrinter = async (req, res) => {
    let name = req.body.name
    let brand = req.body.brand
    let model = req.body.model
    let location = req.body.location
    let paper = req.body.paper
    let day = req.body.day
    let description = req.body.description
    let type = req.body.type
    let status = req.body.status
    let rs = await addPrinter(name, brand, model, location, paper, day, description, type, status)
}
const EditOldPrinter = async (req, res) => {
    let id = res.params.id;
    let name = req.body.name
    let brand = req.body.brand
    let model = req.body.model
    let location = req.body.location
    let paper = req.body.paper
    let day = req.body.day
    let description = req.body.description
    let type = req.body.type
    let status = req.body.status
    let rs = await editPrinter(id, name, brand, model, location, paper, day, description, type, status)
}
const DeleteOldPrinter = async (req, res) => {
    let id = res.body.id;
    let rs = await deletePrinter(id)
}

module.exports = {ShowListPrinter, AddNewPrinter, EditOldPrinter, DeleteOldPrinter}