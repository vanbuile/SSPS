const express = require("express");
const {GetRecentOrdersInfo}= require("../../PersistenceLayer/RevernueDAO");

const RecentOrders = async (req, res) =>{
	const data = await GetRecentOrdersInfo();
    data.map(item =>{
        const dateTimeObject = new Date(item.date);
        const datePart = dateTimeObject.toISOString().split('T')[0];
        const hours = dateTimeObject.getUTCHours();
        const minutes = dateTimeObject.getUTCMinutes();
        item.day = datePart,
        item.hours = hours + ":" + minutes;
    })
    return res.status(200).json(data);
}



module.exports = RecentOrders;