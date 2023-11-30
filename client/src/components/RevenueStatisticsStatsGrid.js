import React, { useState, useEffect } from 'react';
import axios from 'axios';
import APIs from '../util/API';

import { IoShareSocialSharp, IoBagCheck, IoCash, IoCashOutline} from 'react-icons/io5'



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
				<span className="text-sm text-green-500 pl-2">{props.data.incTotal > 0 ? '+' + props.data.incTotal : props.data.incTotal}</span>
			</div>
		</div>
	</div>
	);
}

export default function DashboardStatsGrid() {
	const [data, setdata] = useState(null);

	useEffect(() => {
		// Hàm fetchApiData sử dụng Axios để gửi yêu cầu GET đến API
		const fetchApiData = async () => {
		  try {	
			  const response = await axios.get(APIs.APIadminRevenueStatistics + '/DashboardStatsGrid');
			  setdata(response.data);
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
	
		// Gọi hàm fetchApiData khi component được mount
		fetchApiData();
	  }, []); // [] đảm bảo useEffect chỉ chạy một lần khi component được mount
	  if (!data) return <></>;

	  data[0].incon = <IoCash className="text-2xl text-white" />
	  data[1].incon = <IoCashOutline className="text-2xl text-white" />
	  data[2].incon = <IoShareSocialSharp className="text-2xl text-white" />
	  data[3].incon = <IoBagCheck className="text-2xl text-white" />

	return (
		<div className="flex gap-4">
			{data.map(x => <Icon data = {x} />)}
		</div>
	)
}
