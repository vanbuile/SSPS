
//import package
require('dotenv').config() // For using process.env
const express = require('express')
const multer = require("multer");
const cors = require("cors");
const bodyParser = require('body-parser');

//import route object
const printerAdmin = require('./routes/printerAdmin')
const fileAdmin = require('./routes/fileAdmin')
const adminInfo = require('./routes/adminInfo')
const pageNumber = require('./routes/pageNumber');
const Statistic = require('./routes/Statistic');
const Revenue = require('./routes/Revenue');
const Buy = require('./routes/buy');
const file = require('./routes/file');
const Login = require('./routes/login');
const print= require('./routes/print');
const Print= require('./routes/print');
const Share = require('./routes/share');
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
app.use(bodyParser.urlencoded({ extended: true }));



// API dùng
app.use('/api/admin/print', printerAdmin);
app.use('/api/admin/statisticAdmin', Statistic);
app.use('/api/admin/revenueAdmin', Revenue);
app.use('/api/admin/fileAdmin', fileAdmin);
app.use('/api/admin/adminInfo', adminInfo);
app.use('/api/admin/pageNumber', pageNumber);
app.use('/api/testbuy', Buy);
app.use('/api/chooseprinter', print);
app.use('/api/file', file);
app.use('/api/login', Login);
app.use('/api/print', Print);
app.use('/api/share', Share);


// app.listen(3002,'localhost', () => {
//     console.log(`Example app listening on port 3001`)
// })

// test kết nối database
// const SelectAllPrinting  = require('./PersistenceLayer/PrintingDAO');
// const test = async() => {
//     x =  await SelectAllPrinting();
//     console.log(x);
// }
// test();
app.listen(process.env.SV_PORT,'localhost', () => {
    console.log(`Example app listening on port ${process.env.SV_PORT}`)
})

// test kết nối database
// const select  = require('./PersistenceLayer/PrinterDAO');
