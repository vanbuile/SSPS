const e = require("express");
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.post('/', (req, res) => {
    res.send('Got a POST request')
})
module.exports = router