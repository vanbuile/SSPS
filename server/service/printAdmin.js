const {viewPrinter, addPrinter, editPrinter, deletePrinter } = require('../data/Printer')
const {del} = require("express/lib/application");
const ShowListPrinter = (req, res) => {
    res.send("Show")
}
const AddNewPrinter = (req, res, next) => {
    let name = req.body.name
    let brand = req.body.brand
    let model = req.body.model
    let location = req.body.location
    let paper = req.body.paper
    let day = req.body.day
    let description = req.body.description
    let type = req.body.type
    let status = req.body.status
    let rs = addPrinter(name, brand, model, location, paper, day, description, type, status)
    //
    // if(rs) res.send("Success")
    // else res.send("Fail")
}
const EditOldPrinter = (req, res, next) => {
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
    let rs = editPrinter(id, name, brand, model, location, paper, day, description, type, status)
}
const DeleteOldPrinter = (req, res, next) => {
    let id = res.body.id;
    let rs = deletePrinter(id)
}

module.exports = {ShowListPrinter, AddNewPrinter, EditOldPrinter, DeleteOldPrinter}