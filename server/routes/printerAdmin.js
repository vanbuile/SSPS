const express = require("express");
const router = express.Router();
const {ShowListPrinter, AddNewPrinter, EditOldPrinter, DeleteOldPrinter} = require('../BusinessLayer/Printer/Printer');


router.get('/', ShowListPrinter);
router.post('/add', AddNewPrinter);
router.put('/edit', EditOldPrinter);
router.delete('/delete/:id', DeleteOldPrinter);

module.exports = router
