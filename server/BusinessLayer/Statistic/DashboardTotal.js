const express = require("express");


const SelectAllPrinting = require("../../PersistenceLayer/PrintingDAO");

// const paperPrintedToday = async(data) => {
// 	const today = new Date('2022-12-31');
// 	result = 0;
// 	data.forEach(element => {
// 		if (element['date'] )
// 	});
// }


const DashboardTotal = async (req, res) =>{

	const data = await SelectAllPrinting();
	// const today = new Date();
	// const DashboardTotal = [
	// 	{
	// 		name: 'Số lượng giấy in trong ngày hôm nay',
	// 		total: 1,
	// 		incTotal: 1,
	// 	},
	// 	{
	// 		name: 'Sô lượng Sinh viên in trong ngày hôm nay',
	// 		total: 1,
	// 		incTotal: 1,
	// 	},
	// 	{
	// 		name: 'Tổng số giấy sử dụng HK231',
	// 		total: 1,
	// 		incTotal: 1,
	// 	},
	// 	{
	// 		name: 'Sô lượng tài liệu share HK231',
	// 		total: 1,
	// 		incTotal: 1,
	// 	}
	// ]
    
    return res.status(200).json(data);
}


// DashboardTotal();
module.exports = DashboardTotal;