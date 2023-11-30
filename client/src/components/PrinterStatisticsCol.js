import React, { useState, useEffect } from 'react';
import axios from 'axios';
import APIs from '../util/API';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




export default function  PrinterStatisticsCol(props) {
	const [data, setdata] = useState(null);

	useEffect(() => {
	  // Hàm fetchApiData sử dụng Axios để gửi yêu cầu GET đến API
	  const fetchApiData = async () => {
		try {
			const response = await axios.get(APIs.APIadminPrinterStatistics + '/PrinterStatisticsCol');
			setdata(response.data);
		} catch (error) {
		  console.error('Error fetching data:', error);
		}
	  };
  
	  // Gọi hàm fetchApiData khi component được mount
	  fetchApiData();
	}, []); // [] đảm bảo useEffect chỉ chạy một lần khi component được mount
	if (!data) return <></>;



    return (
		<div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
			<strong className="text-gray-700 font-medium">Máy In</strong>
			<div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                    top: 0,
                    right: 10,
                    left: 0,
                    bottom: 5,
                    }}
                    stackOffset="sign"
                    barSize={20}
                    layout="vertical"
                    barCategoryGap={1}
                >
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name"/>
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="pages_buy" name='số giấy còn' fill="#8884d8" stackId="stack" />
                    <Bar dataKey="pages_print" name='số giấy đã in' fill="#82ca9d" stackId="stack" />
                </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
