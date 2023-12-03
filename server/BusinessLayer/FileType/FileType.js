const {getFileTypesList,addFileTypes,removeFileTypes} = require('../../PersistenceLayer/FileTypeDAO')

const AddFileTypes = async (req, res) => {
    const types = Object.values(req.query);
    try {
        await addFileTypes(types)
    }
    catch (e) {
        console.log(e)
        return res.status(503).send()
    }
    return res.status(201).json({"data": null})
}

const RemoveFileTypes = async (req, res) => {
    const types = Object.values(req.query);
    try {
        await removeFileTypes(types)
    }
    catch (e) {
        console.log(e)
        return res.status(503).send()
    }
    return res.status(201).json({"data": null})
}

const PermmitedFileTypesList = async (req, res) =>{
    let data = await getFileTypesList();
    const filteredData = data.filter(item => item.isUsable === 1);
	const result = filteredData

    return res.status(200).json(result);
}

const UnPermmitedFileTypesList = async (req, res) =>{
    let data = await getFileTypesList();
    const filteredData = data.filter(item => item.isUsable === 0);
	const result = filteredData

    return res.status(200).json(result);
}

module.exports = {PermmitedFileTypesList, UnPermmitedFileTypesList, AddFileTypes, RemoveFileTypes}