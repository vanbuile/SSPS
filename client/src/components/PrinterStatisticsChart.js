import React, { useState, useEffect } from 'react';
import axios from 'axios';
import APIs from '../util/API';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



  
export default function TransactionChart(props) {
	const [data, setdata] = useState(null);

	useEffect(() => {
		// Hàm fetchApiData sử dụng Axios để gửi yêu cầu GET đến API
		const fetchApiData = async () => {
		  try {
			  const response = await axios.get(APIs.APIadminPrinterStatistics + '/TransactionChart');
			  setdata(response.data);
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
	
		// Gọi hàm fetchApiData khi component được mount
		fetchApiData();
	  }, []); // [] đảm bảo useEffect chỉ chạy một lần khi component được mount
	  if (!data) return <></>;


	const keysArray = Object.keys(data[0]).slice(1, -1);
	const valuesArray = ["#82ca9d", "#d0021b", "#37d67a", "#2ccce4","#82ca9d", "#d0021b", "#37d67a", "#2ccce4","#82ca9d", "#d0021b", "#37d67a", "#2ccce4"];
	const namePrint = {};

	keysArray.forEach((key, index) => {namePrint[key] = valuesArray[index]});

	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Số lượng giấy sử dụng học kì k231</strong>
			<div className="mt-3 w-full flex-1 text-xs">
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
					>
					{/* <CartesianGrid strokeDasharray="3 3" /> */}
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
					{Object.entries(namePrint).map(([key, value]) => <Line type="monotone" dataKey={key} stroke={value} strokeWidth={2} strokeDasharray="5 5" />)}
					{/* <Line type="monotone" dataKey="print1" stroke="#82ca9d" strokeWidth={2} strokeDasharray="5 5" />
					<Line type="monotone" dataKey="print2" stroke="#d0021b" strokeWidth={2} strokeDasharray="5 5" />
					<Line type="monotone" dataKey="print3" stroke="#37d67a" strokeWidth={2} strokeDasharray="5 5" />
					<Line type="monotone" dataKey="print4" stroke="#2ccce4" strokeWidth={2} strokeDasharray="5 5" /> */}
				</LineChart>
			</ResponsiveContainer>
			</div>
		</div>
	)
}
