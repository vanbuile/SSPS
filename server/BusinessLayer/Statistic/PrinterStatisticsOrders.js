const express = require("express");

const {GetStudentPrintMaxSemester} = require("../../PersistenceLayer/PrintingDAO");

const StudentPrintMaxSemester = async (req, res) =>{
    const result = await GetStudentPrintMaxSemester();
    if(result){
        for (let i = 0; i < result.length; i++)
        {
            result[i].Rank = i + 1;
        }
    }
    return res.status(200).json(result);
}



module.exports = StudentPrintMaxSemester;