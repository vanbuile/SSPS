
//import package
require('dotenv').config() // For using process.env
const express = require('express')
const multer = require("multer");
const cors = require("cors");

require("dotenv").config();

//import route object
const printerAdmin = require('./routes/printerAdmin')
const statisticAdmin = require('./routes/statisticAdmin');
const revenueAdmin = require('./routes/revenueAdmin');

//init app object
const app = express()
// xác thực khi dùng APIs
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);
// các loại file truyền
var upload = multer();
app.use(upload.array());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// API dùng
app.use('/api/admin/print', printerAdmin);
app.use('/api/admin/statisticAdmin', statisticAdmin);
app.use('/api/admin/revenueAdmin', revenueAdmin);


app.listen(process.env.SV_PORT,'localhost', () => {
    console.log(`Example app listening on port ${process.env.SV_PORT}`)
})

// test kết nối database
// const select  = require('./PersistenceLayer/PrinterDAO');
