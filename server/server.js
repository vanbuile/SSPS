

//import package
require('dotenv').config() // For using proces.env
const express = require('express')
const multer = require("multer");
const cors = require("cors");

require("dotenv").config();

//import route object
//const printAdmin = require('./routes/printAdmin')
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
app.use(express.urlencoded({ extends: true }));



// API dùng
//app.use('/api/admin/print', printAdmin);
app.use('/api/admin/statisticAdmin', statisticAdmin);
app.use('/api/admin/revenueAdmin', revenueAdmin);


app.listen(3002,'localhost', () => {
    console.log(`Example app listening on port 3001`)
})

// test kết nối database
// const SelectAllPrinting  = require('./PersistenceLayer/PrintingDAO');
// const test = async() => {
//     x =  await SelectAllPrinting();
//     console.log(x);
// }
// test();
