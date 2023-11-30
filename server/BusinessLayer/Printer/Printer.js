const moment = require("moment")
const {viewListPrinter, addPrinter, editPrinter, deletePrinter } = require('../../PersistenceLayer/PrinterDAO')
const locations = [
    'Tất cả',
    'BKB1',
    'BKB2',
    'BKB3',
    'BKB4',
    'BKB5',
    'BKB6',
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6'
]
const ShowListPrinter = async (req, res) => {
    let page = Number(req.query.page)
    let sort = Number(req.query.sort)
    let location = locations[Number(req.query.location)]
    let status = Number(req.query.status)
    let paper = Number(req.query.paper)
    let fromP = 0
    let toP = 0
    console.log([page, sort, location, status,paper])
    switch (paper) {
        case 1:
            fromP = 0
            toP = 199
            break
        case 2:
            fromP = 200
            toP = 499
            break
        case 3:
            fromP = 500
            toP = 999
            break
        case 4:
            fromP = 1000
            toP = 1999
            break
        case 5:
            fromP = 2000
            toP = 999999
            break
        default:
            fromP = 0
            toP = 999999
            break

    }

    let result = await viewListPrinter()


    result = result.filter((printer) => {
        return ((location == "Tất cả" || printer.building == location)
         && (status == 0 || Number(printer.state) == status - 1)
         && printer.paper >= fromP && printer.paper <= toP)
    })
    const compareByNameUp = (a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    }
    const compareByNameDown = (a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return 1;
        }
        if (nameA > nameB) {
            return -1;
        }

        // names must be equal
        return 0;
    }
    const compareByPaperUp = (a, b) => {
        return a.paper - b.paper
    }
    const compareByPaperDown = (a, b) => {
        return b.paper - a.paper
    }
    const compareByLocaUp = (a, b) => {
        const locaA = a.building.toUpperCase(); // ignore upper and lowercase
        const locaB = b.building.toUpperCase(); // ignore upper and lowercase
        if (locaA > locaB) {
            return 1;
        }
        if (locaA < locaB) {
            return -1;
        }
        return 0
    }
    const compareByLocaDown = (a, b) => {
        const locaA = a.building.toUpperCase(); // ignore upper and lowercase
        const locaB = b.building.toUpperCase(); // ignore upper and lowercase
        if (locaA > locaB) {
            return -1;
        }
        if (locaA < locaB) {
            return 1;
        }
        return 0
    }
    switch (sort) {
        case 0:
            result = result.sort(compareByNameUp)
            break
        case 1:
            result = result.sort(compareByNameDown)
            break
        case 2:
            result = result.sort(compareByPaperUp)
            break
        case 3:
            result = result.sort(compareByPaperDown)
            break
        case 4:
            result = result.sort(compareByLocaUp)
            break
        case 5:
            result = result.sort(compareByLocaDown)
            break

    }
    let num = Number(result.length)
    result = result.slice((page - 1) * 8, page * 8)
     result.forEach((printer) => {
         printer.day = moment(printer.day).format("YYYY-MM-DD")
     })
    return res.status(200).json({"data" : result, "num" : num})
}

const AddNewPrinter = async (req, res) => {
    let name = req.body.name
    let brand = req.body.brand
    let model = req.body.model
    let building = req.body.building
    let floor = req.body.floor
    let paper = req.body.paper
    let day = req.body.day
    let description = req.body.description
    let state = req.body.state
    try {
        let rs = await addPrinter(name, brand, model, building, floor, paper, day, description, state)
        return res.status(200).json({"data": rs})
    }
    catch (e) {
        console.log(e)
        return res.status(503).send()
    }

}
const EditOldPrinter = async (req, res) => {
    let id = req.body.id;
    let name = req.body.name
    let brand = req.body.brand
    let model = req.body.model
    let building = req.body.building
    let floor = req.body.floor
    let paper = req.body.paper
    let day = req.body.day
    let description = req.body.description
    let state = req.body.state
    try {
        let rs = await editPrinter(id, name, brand, model, building, floor, paper, day, description, state)
        return res.status(200).json({"data":rs})
    }
    catch (e) {
        console.log(e)
        return res.status(503).send()
    }


}
const DeleteOldPrinter = async (req, res) => {
    let id = req.params.id;
    try {
        let rs = await deletePrinter(id)
        return res.status(200).json({"data":rs})
    }
    catch (e) {
        console.log(e)
        return res.status(503).send()
    }

}

module.exports = {ShowListPrinter, AddNewPrinter, EditOldPrinter, DeleteOldPrinter}