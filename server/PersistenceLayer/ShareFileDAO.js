const connection = require('./DataBase');

const getListSharedFile = async () => {
    try {
        const query = `SELECT * FROM file WHERE isShare = 1;`;
        const [result, fields] = await connection.query(query);
        return result;
    } catch (error) {
        throw error;
    }
};
const searchByKey = async (key) => {
    try {
        const query = `
            SELECT * FROM file 
            WHERE isShare = 1 
            AND (LOWER(name) LIKE LOWER(?) OR LOWER(description) LIKE LOWER(?));
        `;
        const [result, fields] = await connection.query(query, [`%${key}%`, `%${key}%`]);
        return result;
    } catch (error) {
        console.error('Error in searchByKey:', error);
        return [];
    }
};
const getDetailbyID = async (fileid) => {
    try {
        const query = 'SELECT * FROM file WHERE ID = ?;';
        const [result, fields] = await connection.query(query, [fileid]);
        return result[0];
    } catch (error) {
        throw error;
    }
};
const getCommentList = async (fileid) => {
    try {
        const query = `SELECT * FROM comment WHERE id_file = ?;`; 
        const result = await connection.query(query, [fileid]);
        return result[0];
    } catch (error) {
        throw error;
    }
};
const insertComment = async (fileId, mssv, content, date) => {
    try {
        const query = `INSERT INTO COMMENT (MSSV, id_file, Content, date) VALUES (?, ?, ?, ?);`;
        const [result] = await connection.query(query, [mssv, fileId, content, date]);
    } catch (error) {
        throw error;
    }
};
module.exports = {
    getListSharedFile,
    getCommentList,
    getDetailbyID,
    searchByKey,
    insertComment,
};
