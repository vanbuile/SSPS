const {addNewFile} = require('../../PersistenceLayer/PrintingDAO')

const AddNewFile = async (req, res) => {
    let name = req.body.name
    let description = req.body.description
    let link = req.body.link
    let isShare= req.body.isShare

    try {
        let rs = await addNewFile(name, description, link, isShare)
        return res.status(200).json({"data": rs})
    }
    catch (e) {
        console.log(e)
        return res.status(503).send()
    }
}

module.exports = {AddNewFile}