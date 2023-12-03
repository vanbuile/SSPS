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

	const handleAuthorization = (role) => {
		const cookies = document.cookie.split('; ');
		for (const cookie of cookies) {
		  const [name, value] = cookie.split('=');
		  if(name === role) {
			return true
		  }
		}
		window.location.href = 'http://localhost:3000/login';
	}
	const handleDownloadExcel = () => {
		if(handleAuthorization('SPSO_cookie_id') == true) {
			axios({
				method: 'get',
				url: APIs.APIadminPrinterStatistics + '/PrinterOrdersDownload',
				responseType: 'blob',
			})
				.then((response) => {
				// Tạo một đường dẫn tạm thời để tải xuống
				const url = window.URL.createObjectURL(new Blob([response.data]));
				const link = document.createElement('a');
				link.href = url;
				link.setAttribute('download', 'PrinterOrdersInfo.xlsx');
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
				})
				.catch((error) => console.error('Error downloading Excel:', error));
		}
	};
	
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Sinh Viên In nhiều nhất tháng</strong>
			<button
				className="=bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
				onClick={handleDownloadExcel}
				>
				<svg
					className="fill-current w-4 h-4 mr-2"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
				</svg>
				<span>Download Excel</span>
			</button>			
			
			
			
			
			
			
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead class="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold text-md">
						<tr>
							<th>Rank</th>
							<th>ID</th>
							<th>Tên Sinh Viên</th>
							<th>Sô lượng giấy in trong HK</th>
							<th>Số lượng giấy còn lại</th>
							<th>Số file đã share</th>
							<th>Số file đã in</th>
						</tr>
					</thead>
					<tbody	>
						{data.map((order) => (
							<tr key={order.id} class="border-b">
								<td class="text-sm text-gray-900  font-bold px-6 py-4 whitespace-nowrap">{order.Rank}</td>
								<td class="text-sm text-gray-900  font-bold px-6 py-4 whitespace-nowrap">#{order.id}</td>
								<td class="text-sm text-gray-900  font-bold px-6 py-4 whitespace-nowrap">{order.student}</td>
								<td class="text-sm text-gray-900  font-bold px-6 py-4 whitespace-nowrap">{order.number_pager_printer}</td>
								<td class="text-sm text-gray-900  font-bold px-6 py-4 whitespace-nowrap">{order.number_pager_remaining}</td>
								<td class="text-sm text-gray-900  font-bold px-6 py-4 whitespace-nowrap">{order.number_file_share}</td>
								<td class="text-sm text-gray-900  font-bold px-6 py-4 whitespace-nowrap">{order.number_file}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
