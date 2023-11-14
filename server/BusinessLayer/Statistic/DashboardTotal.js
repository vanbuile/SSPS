const express = require("express");

const DashboardTotal = async (req, res) =>{
	const DashboardTotal = [
		{
			name: 'Tổng số giấy sử dụng HK231',
			total: 1,
			incTotal: 1,
		},
		{
			name: 'Số lần hoạt động máy in ngày',
			total: 1,
			incTotal: 1,
		},
		{
			name: 'Sô lượng tài liệu share',
			total: 1,
			incTotal: 1,
		},
		{
			name: 'Số lần bảo trì',
			total: 1,
			incTotal: 1,
		}
	]
    
    return res.status(200).json(DashboardTotal);
}



module.exports = DashboardTotal;