const express = require("express");

const TransactionChart = async (req, res) =>{
    const Transaction = [
        {
          name: 'Tuần 1',
          print1: 2400,
          print2: 6400,
          print3: 2400,
          print4: 7400,
          total: 0
        },
        {
          name: 'Tuần 2',
          print1: 1398,
          print2: 2210,
          print3: 2400,
          print4: 5400,
          total: 0
        },
        {
          name: 'Tuần 3',
          print1: 9800,
          print2: 2290,
          print3: 2400,
          print4: 5400,
          total: 0
        },
        {
          name: 'Tuần 4',
          print1: 3908,
          print2: 2000,
          print3: 2400,
          print4: 5400,
          total: 0
        },
        {
          name: 'Tuần 5',
          print1: 1398,
          print2: 2210,
          print3: 3400,
          print4: 5400,
          total: 0
        },
        {
          name: 'Tuần 6',
          print1: 9800,
          print2: 2290,
          print3: 4400,
          print4: 5400,
          total: 0
        },
        {
          name: 'Tuần 7',
          print1: 3908,
          print2: 2000,
          print3: 3400,
          print4: 5400,
          total: 0
        }
      ];
      
    
    return res.status(200).json(Transaction);
}



module.exports = TransactionChart;