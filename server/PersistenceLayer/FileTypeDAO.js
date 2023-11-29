const connection = require('./DataBase');

const getFileTypesList = async() => {
    const query = `CALL GetFileTypesList();`;
    const [result, fields] = await connection.query(query)
    return result[0];
}

const addFileTypes = async (types) =>
{
	let query = `CALL AddFileTypes(?);`
	for (const item of types) {
		try {
			const [result, fields] = await connection.query(query,[item])
		}
		catch (e) {
			throw new Error(e)
		}
	}
}

const removeFileTypes = async (types) =>
{
	let query = `CALL RemoveFileTypes(?);`
	for (const item of types) {
		try {
			const [result, fields] = await connection.query(query,[item])
		}
		catch (e) {
			throw new Error(e)
		}
	}
}

module.exports = {getFileTypesList,addFileTypes,removeFileTypes};
