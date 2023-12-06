const connection = require('./DataBase');

const login = async (id,pass,role) =>
{
    let query = `CALL `
    if (role === "SPSO") {
        query += `SPSOLogin(?,?);`
        try {
            const [result, fields] = await connection.query(query,[id,pass])
            return result[0]
        }
        catch (e) {
            throw new Error(e)
        }
    }
    else {
        query += `StudentLogin(?,?);`
        try {
            const [result, fields] = await connection.query(query,[id,pass])
            return result[0]
        }
        catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = {login};
