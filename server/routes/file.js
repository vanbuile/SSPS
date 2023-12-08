const express = require("express");
const router = express.Router();
const {AddNewFile, AddPrinting, UpdatePaper} = require('../BusinessLayer/File/File');

router.post('/addfile', AddNewFile);
router.post('/addprinting', AddPrinting)
router.post('/updatePaper', UpdatePaper)

module.exports = router