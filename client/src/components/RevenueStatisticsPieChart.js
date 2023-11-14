import React, { useState, useEffect } from 'react';
import axios from 'axios';
import APIs from '../util/API';


import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'



const RADIAN = Math.PI / 180
const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#A4DD00', '#AB149E	']

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

export default function BuyerProfilePieChart() {
	const [data, setdata] = useState(null);

	useEffect(() => {
		// Hàm fetchApiData sử dụng Axios để gửi yêu cầu GET đến API
		const fetchApiData = async () => {
		  try {	
			  const response = await axios.get(APIs.APIadminRevenueStatistics + '/BuyerProfilePieChart');
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
			<strong className="text-gray-700 font-medium">Doanh thu</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={400} height={300}>
						<Pie
							data={data}
							cx="50%"
							cy="45%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={105}
							fill="#8884d8"
							dataKey="value"
						>
							{data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
