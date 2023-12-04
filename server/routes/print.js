const express = require("express");
const router = express.Router();
const {ViewPrinterByLocation} = require('../BusinessLayer/Printer/Printer');


router.get('/view/:building', ViewPrinterByLocation);

module.exports = router
