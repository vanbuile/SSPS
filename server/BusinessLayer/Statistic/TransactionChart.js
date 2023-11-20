const express = require("express");


const {GetWeekInSemester} = require("../../PersistenceLayer/PrintingDAO");

const WeekInSemester = async (req, res) =>{

  data = await GetWeekInSemester();

  listPrinter = [];
  Maxweek = 1;
  data.forEach(item => {
      if(!listPrinter.includes(item.name))
      {
        listPrinter.push(item.name);
      }
      Maxweek = Math.max( Maxweek, item.totalWeek);
  });
  // listPrinter.push("total");
  

  const result = [1];

  for (let i = 0; i < Maxweek; i++)
  {
      result[i] = {
        name: 'Tuần ' + (i+1)
      }
      let sum = 0;
      for(let j = 0; j < listPrinter.length; j++)
      {
        result[i][listPrinter[j]] = data.reduce((total, obj) =>{
          if (obj.totalWeek == i+1 && obj.name === listPrinter[j]) {

            total += obj.paper;
          }
          return total;
        }, 0)
        sum += result[i][listPrinter[j]];
      }
      result[i]["Tổng"] = sum;      
  }

  return res.status(200).json(result);
}


// TransactionChart();
module.exports = WeekInSemester;