import React from 'react'
import { IoShareSocialSharp, IoBagCheck, IoCash, IoCashOutline} from 'react-icons/io5'

const dataStatsGrid = [
	{
		name: 'Tổng Doanh thu',
		total: '$100058',
		incTotal: 343,
		incon: <IoCash className="text-2xl text-white" />
	},
	{
		name: 'Lợi nhận',
		total: '$54002',
		incTotal: 343,
		incon: <IoCashOutline className="text-2xl text-white" />
	},
	{
		name: 'số lần truy cập web',
		total: '54232',
		incTotal: -343,
		incon: <IoShareSocialSharp className="text-2xl text-white" />
	},
	{
		name: 'Số lượt bán',
		total: 500,
		incTotal: 20,
		incon: <IoBagCheck className="text-2xl text-white" />
	}
]


function Icon(props)
{
	return (
	<div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">

		<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
			{props.data.incon}
		</div>
		<div className="pl-4">
			<span className="text-sm text-gray-500 font-light">{props.data.name}</span>
			<div className="flex items-center">
				<strong className="text-xl text-gray-700 font-semibold">{props.data.total}</strong>
				<span className="text-sm text-green-500 pl-2">{props.data.incTotal > 0 ? '+' + props.data.incTotal : "-" + -props.data.incTotal}</span>
			</div>
		</div>
	</div>
	);
}

export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4">
			{dataStatsGrid.map(x => <Icon data = {x} />)}
		</div>
	)
}
