const express = require("express");
const router = express.Router();

const {AddFileTypes,RemoveFileTypes,UnPermmitedFileTypesList,PermmitedFileTypesList} = require("../BusinessLayer/FileType/FileType");

router.get('/GetUnPermmitedFileTypesList', UnPermmitedFileTypesList);
router.get('/GetPermmitedFileTypesList', PermmitedFileTypesList);
router.get('/AddFileTypes', AddFileTypes);
router.get('/RemoveFileTypes', RemoveFileTypes);
module.exports = router
