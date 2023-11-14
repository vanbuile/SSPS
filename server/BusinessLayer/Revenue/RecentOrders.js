const express = require("express");

const RecentOrders = async (req, res) =>{
	const data = [
        {
            id: '2113928',
            student: 'Đào Duy Long',
            hour: '12/13',
            date: '25/10/2023',
            number_pager: 25,
            state: 1
        },
        {
            id: '2113928',
            student: 'Đào Duy Long',
            hour: '12/13',
            date: '25/10/2023',
            number_pager: 25,
            id_print: '3',
            state: 0
        },
        {
            id: '2113928',
            student: 'Đào Duy Long',
            hour: '12/13',
            date: '25/10/2023',
            number_pager: 25,
            id_print: '3',
            state: 0
        },
        {
            id: '2113928',
            student: 'Đào Duy Long',
            hour: '12/13',
            date: '25/10/2023',
            number_pager: 25,
            id_print: '3',
            state: 0
        },
        {
            id: '2113928',
            student: 'Đào Duy Long',
            hour: '12/13',
            date: '25/10/2023',
            number_pager: 25,
            id_print: '3',
            state: 1
        },
        {
            id: '2113928',
            student: 'Đào Duy Long',
            hour: '12/13',
            date: '25/10/2023',
            number_pager: 25,
            id_print: '3',
            state: 0
        }
	]
    
    return res.status(200).json(data);
}



module.exports = RecentOrders;