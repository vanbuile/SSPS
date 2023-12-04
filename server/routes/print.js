const express = require("express");
const router = express.Router();
const {ViewPrinterByLocation} = require('../BusinessLayer/Printer/Printer');
const{PermmitedFileTypesList}=require('../BusinessLayer/FileType/FileType');


router.get('/view/:building', ViewPrinterByLocation);
router.get("/filetype", PermmitedFileTypesList);


module.exports = router;