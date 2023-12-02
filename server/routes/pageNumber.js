const express = require("express");
const router = express.Router();

const {UpdatePageNumber} = require("../BusinessLayer/PageNumber/PageNumber");

router.get('/UpdatePageNumber', UpdatePageNumber);
module.exports = router
