import React from 'react'


const recentOrderData = [
	{
		id: '2113928',
		student: 'Đào Duy Long',
		hour: '12/13',
		date: '25/10/2023',
		number_pager: 25,
		id_print: '3',
		name_print: "Máy in h6" 
	},
	{
		id: '2113928',
		student: 'Đào Duy Long',
		hour: '12/13',
		date: '25/10/2023',
		number_pager: 25,
		id_print: '3',
		name_print: "Máy in h6" 
	}
]

export default function RecentOrders() {
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
						{recentOrderData.map((order) => (
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
