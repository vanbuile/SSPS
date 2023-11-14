const express = require("express");

const DashboardStatsGrid = async (req, res) =>{
	const data = [
        {
            name: 'Tổng Doanh thu',
            total: 100058,
            incTotal: 343
        },
        {
            name: 'Lợi nhận',
            total: 100058,
            incTotal: 343
        },
        {
            name: 'số lần truy cập web',
            total: 100058,
            incTotal: 343
        },
        {
            name: 'Số lượt bán',
            total: 100058,
            incTotal: 343
        }    
	]
    
    return res.status(200).json(data);
}



module.exports = DashboardStatsGrid;