import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Tuần 1',
    print1: 2400,
    print2: 6400,
	print3: 2400,
	print4: 7400
  },
  {
    name: 'Tuần 2',
    print1: 1398,
    print2: 2210,
	print3: 2400,
	print4: 5400
  },
  {
    name: 'Tuần 3',
    print1: 9800,
    print2: 2290,
	print3: 2400,
	print4: 5400
  },
  {
    name: 'Tuần 4',
    print1: 3908,
    print2: 2000,
	print3: 2400,
	print4: 5400
  },
  {
    name: 'Tuần 5',
    print1: 1398,
    print2: 2210,
	print3: 3400,
	print4: 5400
  },
  {
    name: 'Tuần 6',
    print1: 9800,
    print2: 2290,
	print3: 4400,
	print4: 5400
  },
  {
    name: 'Tuần 7',
    print1: 3908,
    print2: 2000,
	print3: 3400,
	print4: 5400
  }
];

  
export default function TransactionChart() {
	data.map(name => name.total = name.print1 + name.print2 + name.print3 + name.print4);

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
					<Line type="monotone" dataKey="print1" stroke="#82ca9d" strokeWidth={2} strokeDasharray="5 5" />
					<Line type="monotone" dataKey="print2" stroke="#d0021b" strokeWidth={2} strokeDasharray="5 5" />
					<Line type="monotone" dataKey="print3" stroke="#37d67a" strokeWidth={2} strokeDasharray="5 5" />
					<Line type="monotone" dataKey="print4" stroke="#2ccce4" strokeWidth={2} strokeDasharray="5 5" />
				</LineChart>
			</ResponsiveContainer>
			</div>
		</div>
	)
}
