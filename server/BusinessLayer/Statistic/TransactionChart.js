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
      console.log(item.week)
      Maxweek = Math.max( Maxweek, item.week);
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
          if (obj.week == i+1 && obj.name === listPrinter[j]) {

            total += Number(obj.totalPaper);
          }
          return total;
        }, 0)
        sum += result[i][listPrinter[j]];
      }
      result[i]["Tổng"] = sum;      
  }
  console.log(Maxweek)
  return res.status(200).json(result);
}


// TransactionChart();
module.exports = WeekInSemester;