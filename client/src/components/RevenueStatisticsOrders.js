import React from 'react'


const recentOrderData = [
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

export default function RecentOrders() {
	return (

		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">

			<strong className="text-gray-700 font-medium">Sinh viên mua giấy</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead class="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold text-md">
						<tr>
							<th>ID</th>
							<th>Sinh Viên</th>
							<th>Thời gian</th>
							<th>Ngày</th>
							<th>Số lượng giấy mua</th>
							<th>Thanh Toán</th>
						</tr>
					</thead>
					<tbody>
						{/* bg-yellow-300 */}
						{recentOrderData.map((order) => (
							<tr key={order.id} class= {order.state === 1 ? "border-b": "border-b"}>
								<td class="text-sm text-gray-900  font-bold px-6 py-4 whitespace-nowrap">#{order.id}</td>
								<td class="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">{order.student}</td>
								<td class="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">{order.hour}</td>
								<td class="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">{order.date}</td>
								<td class="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">{order.number_pager}</td>
								<td class="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">{order.state ? 'chưa thanh toán' : 'đã thanh toán'}</td>
							</tr>
						))}
					</tbody>
				</table>
				<nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
					<span class="text-sm font-normal text-gray-500 dark:text-gray-400">Số lượng <span class="font-semibold text-gray-900 dark:text-white">1-10</span> của <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
					<ul class="inline-flex -space-x-px text-sm h-8">
						<li>
							<a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Sau</a>
						</li>
						<li>
							<a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
						</li>
						<li>
							<a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
						</li>
						<li>
							<a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
						</li>
						<li>
							<a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
						</li>
						<li>
							<a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
						</li>
						<li>
							<a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Trước</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}
