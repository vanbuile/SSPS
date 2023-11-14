import React, { useState, useEffect } from 'react';
import axios from 'axios';
import APIs from '../util/API';


export default function RecentOrders(props) {
	const [data, setdata] = useState(null);

	useEffect(() => {
	  // Hàm fetchApiData sử dụng Axios để gửi yêu cầu GET đến API
	  const fetchApiData = async () => {
		try {
			const response = await axios.get(APIs.APIadminPrinterStatistics + '/PrinterStatisticsOrders');
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
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Sinh Viên In nhiều nhất tháng</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead class="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold text-md">
						<tr>
							<th>ID</th>
							<th>Sinh Viên</th>
							<th>Thời gian</th>
							<th>Ngày</th>
							<th>Số lượng giấy</th>
							<th>ID Máy In</th>
							<th>Tên Máy In</th>
						</tr>
					</thead>
					<tbody>
						{data.map((order) => (
							<tr key={order.id} class="bg-gray-100 border-b">
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">#{order.id}</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{order.student}</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{order.hour}</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{order.date}</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{order.number_pager}</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{order.id_print}</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{order.name_print}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
