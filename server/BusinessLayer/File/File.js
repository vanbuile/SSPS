const {addNewFile, addPrinting, UpdatePrinterPaper} = require('../../PersistenceLayer/PrintingDAO')
const {IncreasePaper } = require("../../PersistenceLayer/BuyDAO");

const AddNewFile = async (req, res) => {
    let mssv = req.body.mssv
    let name = req.body.name
    let description = req.body.description
    let link = req.body.link
    let isShare= req.body.isShare

    try {
        let rs = await addNewFile(mssv, name, description, link, isShare)
        return res.send({ file_id: rs[0].lastID });
    }
    catch (e) {
        console.log(e)
        return res.sendStatus(503)
    }
}

const AddPrinting = async (req, res) => {
    let id_printer = req.body.id_printer
    let mssv = req.body.mssv
    let id_file = req.body.id_file
    let paper = req.body.paper
    let date = req.body.date

    try{
        let rs = await addPrinting(id_printer, mssv, id_file, paper, date)
        return res.status(200).json({"data": rs})
    }
    catch (e) {
        console.log(e)
        return res.sendStatus(503)
    }
}
const UpdatePaper = async (req, res) => {
    let id_printer = req.body.id_printer
    let mssv = req.body.mssv
    let paper = req.body.paper
    try{
        let rs = await IncreasePaper(mssv, -paper)
        let rsp = await UpdatePrinterPaper(mssv, id_printer, -paper)
        return res.status(200).json({"data": rsp})
    }
    catch(e) {
        console.log(e)
        return res.sendStatus(503)
    }
}

module.exports = {AddNewFile, AddPrinting, UpdatePaper}