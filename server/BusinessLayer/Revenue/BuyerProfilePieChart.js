const express = require("express");
const {GetStudentCourseRevenue}= require("../../PersistenceLayer/RevernueDAO");

const StudentCourseRevenue = async (req, res) =>{
    const data = await GetStudentCourseRevenue();
    const result = []

    data.map(item => item.value = Number(item.value));
    
    if (data.length > 4)
    {
        result[0] = data[0];
        result[1] = data[1];
        result[2] = data[2];
        result[3] = data[3];
        sum = data.reduce((pre, curr) => pre + curr.value, -result[0].value-result[1].value-result[2].value-result[3].value);
        result[4] = {
            name: "Còn Lại",
            value: sum
        }
    }
    return res.status(200).json(result);
}



module.exports = StudentCourseRevenue;