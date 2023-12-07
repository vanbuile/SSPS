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
const sortBy = async (key,mssv) => {
    try {
        let query = `SELECT * FROM file WHERE isShare = 1`;
        if (key === 'star_asc') {
            query += ` ORDER BY score ASC`;
        } else if (key === 'star_desc') {
            query += ` ORDER BY score DESC`;
        }
        else if (key ==='mssv')
        {
            query+=` AND MSSV=?`;
        }

        const [result, fields] = await connection.query(query,[mssv]);
        return result;
    } catch (error) {
        throw error;
    }
};

const getDetailbyID = async (fileid) => {
    try {
        const query = 'SELECT * FROM file WHERE ID = ? AND isShare=1;';
        const [result, fields] = await connection.query(query, [fileid]);
        if (result.length > 0) return result[0];
        else return false;
        
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
const getStar = async (fileid,mssv) => {
    try {
        const query = `SELECT star FROM RATING WHERE id_file = ? AND MSSV = ?;`; 
        const [result,field] = await connection.query(query, [fileid,mssv]);
        if (result.length === 0) {
            return -1;
        }
        return result[0].star;
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

const insertRating = async (fileId, mssv, star, date) => {
    try {
        const query = `INSERT INTO RATING (MSSV, id_file, star, date) VALUES (?, ?, ?, ?);`;
        const [result] = await connection.query(query, [mssv, fileId, star, date]);
    } catch (error) {
        throw error;
    }
};
const checkRated = async (fileId, mssv) => {
    try {
        const query = `SELECT * FROM RATING WHERE id_file = ? AND MSSV = ?;`;
        const [result, fields] = await connection.query(query, [fileId, mssv]);
        return result.length > 0; 
    } catch (error) {
        throw error;
    }
};
const updateRating = async (fileId, mssv, star,date) => {
    try {
            const query = `UPDATE RATING SET star = ?, date =? WHERE id_file = ? AND MSSV = ? ;`;
            const [result] = await connection.query(query, [star,date,fileId,mssv]);
    } catch (error) {
        throw error;
    }
};
const deleteFile = async (id)  =>
{
    try {
        const query = `UPDATE FILE SET isShare=0 WHERE ID=?`;
        const [result] = await connection.query(query, [id]);
        return result;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    getListSharedFile,
    getCommentList,
    getDetailbyID,
    searchByKey,
    insertComment,
    sortBy,
    insertRating,
    deleteFile,
    updateRating,
    checkRated,
    getStar,
};
