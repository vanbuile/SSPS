//import package
require('dotenv').config() // For using proces.env
const express = require('express')


//import route object
const printAdmin = require('./routes/printAdmin')

//init app object
const app = express()
app.use(express.json()) // for json
app.use(express.urlencoded({extended: true})) // for form data


app.use('/api/admin/print', printAdmin);
app.listen(3000,'localhost', () => {
    console.log(`Example app listening on port 3000`)
})