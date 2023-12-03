const express = require("express");
const router = express.Router();
const{PermmitedFileTypesList}=require('../BusinessLayer/FileType/FileType');


router.get("/filetype", PermmitedFileTypesList);







module.exports = router;