const express = require("express");


const PrinterStatisticsCol = async (req, res) =>{
    const  PrinterStatistics = [
        {
          name: 'Máy in A',
          pages_print: 4000,
          pages_buy: 2400
        },
        {
          name: 'Máy in B',
          pages_print: 3000,
          pages_buy: 1398
        },
        {
          name: 'Máy in C',
          pages_print: 2000,
          pages_buy: 9800
        },
        {
          name: 'Máy in D',
          pages_print: 2780,
          pages_buy: 3908
        },
        {
          name: 'Máy in E',
          pages_print: 1890,
          pages_buy: 4800
        },
        {
          name: 'Máy in F',
          pages_print: 2390,
          pages_buy: 3800
        },
        {
          name: 'Máy in G',
          pages_print: 3490,
          pages_buy: 4300
        },
      ];
    
    return res.status(200).json(PrinterStatistics);
}



module.exports = PrinterStatisticsCol;