const {viewListPrinter, addPrinter, editPrinter, deletePrinter } = require('../../PersistenceLayer/PrinterDAO')
const ShowListPrinter = async (req, res) => {
    let page = Number(req.query.page)
    let sort_t = Number(req.query.sort_t)
    let location = "BKB" + req.query.location
    let status = Number(req.query.status)
    let paper = Number(req.query.paper)
    let fromP = 0
    let toP = 0
    switch (paper) {
        case 0:
            fromP = 0
            toP = 199
            break
        case 1:
            fromP = 200
            toP = 499
            break
        case 2:
            fromP = 500
            toP = 999
            break
        case 3:
            fromP = 1000
            toP = 1999
            break
        case 4:
            fromP = 2000
            toP = 999999
            break
        default:
            fromP = 0
            toP = 999999
            break

    }

    let result = await viewListPrinter()

    let locaOpts = []
    result.forEach((printer) => {
        if(!locaOpts.includes(printer.location))
            locaOpts.push(printer.location)
    })

    result = result.filter((printer) => {
        console.log(fromP)
        console.log(toP)
        return ((location == 100 || printer.location.includes(location))
         && (status == 100 || Number(printer.status) == status)
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
        const locaA = a.location.toUpperCase(); // ignore upper and lowercase
        const locaB = b.location.toUpperCase(); // ignore upper and lowercase
        if (locaA < locaB) {
            return 1;
        }
        if (locaA > locaB) {
            return -1;
        }
        return 0
    }
    const compareByLocaDown = (a, b) => {
        const locaA = a.location.toUpperCase(); // ignore upper and lowercase
        const locaB = b.location.toUpperCase(); // ignore upper and lowercase
        if (locaA < locaB) {
            return -1;
        }
        if (locaA > locaB) {
            return 1;
        }
        return 0
    }
    switch (sort_t) {
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
    result = result.slice((page - 1) * 8, page * 8)
    return res.status(200).json({"data" : result})
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
    try {
        let result = await addPrinter(name, brand, model, location, paper, day, description, type, status)
    }
    catch (e) {
        console.log(e)
        return res.status(503).send()
    }
    return res.status(201).json({"data": result})
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
    let id = res.params.id;
    let rs = await deletePrinter(id)
}

module.exports = {ShowListPrinter, AddNewPrinter, EditOldPrinter, DeleteOldPrinter}