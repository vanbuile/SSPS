const connection = require('./DataBase');
const updatePageNumber = async (quantity) =>
{
	let query = `CALL UpdatePageNumber(?);`
    try {
        const [result, fields] = await connection.query(query,[quantity])
    }
    catch (e) {
        throw new Error(e)
    }
}

module.exports = {updatePageNumber};
