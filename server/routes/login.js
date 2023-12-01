const express = require("express");
const router = express.Router();
const {LoginState} = require("../BusinessLayer/Login/Login");

router.post('/Login', LoginState);

module.exports = router