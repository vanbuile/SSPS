const express = require("express");
const router = express.Router();
const {AddNewFile} = require('../BusinessLayer/File/File');

router.post('/addfile', AddNewFile);
module.exports = router