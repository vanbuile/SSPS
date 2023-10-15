import React from 'react'
import { IoShareSocialSharp, IoHammer, IoDocumentsSharp, IoPrintSharp} from 'react-icons/io5'

const dataStatsGrid = [
	{
		name: 'Tổng số giấy sử dụng HK231',
		total: 1058,
		incTotal: 343,
		incon: <IoDocumentsSharp className="text-2xl text-white" />
	},
	{
		name: 'Số lần hoạt động máy in ngày',
		total: 542,
		incTotal: 343,
		incon: <IoPrintSharp className="text-2xl text-white" />
	},
	{
		name: 'Sô lượng tài liệu share',
		total: 54232,
		incTotal: -343,
		incon: <IoShareSocialSharp className="text-2xl text-white" />
	},
	{
		name: 'Số lần bảo trì',
		total: 5,
		incTotal: 1,
		incon: <IoHammer className="text-2xl text-white" />
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
				<span className="text-sm text-green-500 pl-2">{props.data.incTotal}</span>
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
