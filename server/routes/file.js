const express = require("express");
const router = express.Router();
const {AddNewFile, AddPrinting} = require('../BusinessLayer/File/File');

router.post('/addfile', AddNewFile);
router.post('/addprinting', AddPrinting)

module.exports = router