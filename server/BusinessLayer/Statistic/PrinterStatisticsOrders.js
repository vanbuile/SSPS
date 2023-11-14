const express = require("express");

const PrinterStatisticsOrders = async (req, res) =>{
    const recentOrderData = [
        {
            id: '2113928',
            student: 'Đào Duy Long',
            hour: '12/13',
            date: '25/10/2023',
            number_pager: 25,
            id_print: '3',
            name_print: "Máy in h6" 
        },
        {
            id: '2113928',
            student: 'Đào Duy Long',
            hour: '12/13',
            date: '25/10/2023',
            number_pager: 25,
            id_print: '3',
            name_print: "Máy in h6" 
        }
    ]
    
    return res.status(200).json(recentOrderData);
}



module.exports = PrinterStatisticsOrders;