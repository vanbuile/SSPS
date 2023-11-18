const express = require("express");

const {GetPrintInSemester} = require("../../PersistenceLayer/PrintingDAO");

const PrintInSemester = async (req, res) =>{
    const  result = await GetPrintInSemester();
    return res.status(200).json(result);
}



module.exports = PrintInSemester;