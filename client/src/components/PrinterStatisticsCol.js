import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Máy in A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Máy in B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Máy in C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Máy in D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Máy in E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Máy in F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Máy in G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


export default function  PrinterStatisticsCol() {
    return (
		<div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
			<strong className="text-gray-700 font-medium">Máy In</strong>
			<div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                    top: 0,
                    right: 10,
                    left: -5,
                    bottom: 5,
                    }}
                    stackOffset="sign"
                    barSize={20}
                    layout="vertical"
                    barCategoryGap={1}
                >
                    <XAxis type="number" />
                    <YAxis type="category"  padding={{ left: 15}} dataKey="name"/>
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="pv" fill="#8884d8" stackId="stack" />
                    <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />
                </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
