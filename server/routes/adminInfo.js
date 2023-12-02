const express = require("express");
const router = express.Router();

const {GetAdminInfo} = require("../BusinessLayer/AdminInfo/AdminInfo");

router.get('/GetAdminInfo', GetAdminInfo);
module.exports = router
