const express = require("express");
const router = express.Router();
const {ShowListPrinter, AddNewPrinter, EditOldPrinter, DeleteOldPrinter} = require('../BusinessLayer/Printer/Printer');


router.get('/:page', ShowListPrinter);
router.post('/add', AddNewPrinter);
router.post('/edit/', EditOldPrinter);
router.get('/delete/:id', DeleteOldPrinter);

module.exports = router
