const {updatePageNumber} = require('../../PersistenceLayer/PageNumberDAO')
const UpdatePageNumber = async (req, res) => {
    const quantity = req.query.quantity
    try {
        let result = await updatePageNumber(quantity)
        return res.status(201).json({"data": quantity})
    }
    catch (e) {
        console.log(e)
        return res.status(503).send()
    }
}

module.exports = {UpdatePageNumber}