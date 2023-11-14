const express = require("express");

const BuyerProfilePieChart = async (req, res) =>{
    const data = [
        { name: 'K23', value: 540 },
        { name: 'K22', value: 620 },
        { name: 'K21', value: 210 },
        { name: 'K20', value: 210 },
        { name: 'Còn lại', value: 210 }
    ]
    
    return res.status(200).json(data);
}



module.exports = BuyerProfilePieChart;