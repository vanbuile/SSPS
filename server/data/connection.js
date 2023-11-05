const mysql = require('mysql2');
const port = process.env.DB_PORT || 8888
const hostname = process.env.DB_HOST || 'localhost'
const username = process.env.DB_USER || 'root'
const password = process.env.DB_PASS || ''
const database = process.env.DB_NAME || 'SSPS'

const connection = mysql.createPool({
        host     : hostname,
        user     : username,
        password : password,
        database: database,
        port: port,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

if(connection) console.log("Connection init successful")

module.exports = connection;


