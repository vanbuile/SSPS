import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Máy in A',
    pages_print: 4000,
    pages_buy: 2400,
    amt: 2400,
  },
  {
    name: 'Máy in B',
    pages_print: 3000,
    pages_buy: 1398,
    amt: 2210,
  },
  {
    name: 'Máy in C',
    pages_print: 2000,
    pages_buy: 9800,
    amt: 2290,
  },
  {
    name: 'Máy in D',
    pages_print: 2780,
    pages_buy: 3908,
    amt: 2000,
  },
  {
    name: 'Máy in E',
    pages_print: 1890,
    pages_buy: 4800,
    amt: 2181,
  },
  {
    name: 'Máy in F',
    pages_print: 2390,
    pages_buy: 3800,
    amt: 2500,
  },
  {
    name: 'Máy in G',
    pages_print: 3490,
    pages_buy: 4300,
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
                    left: 0,
                    bottom: 5,
                    }}
                    stackOffset="sign"
                    barSize={20}
                    layout="vertical"
                    barCategoryGap={1}
                >
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name"/>
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="pages_buy" name='số giấy còn' fill="#8884d8" stackId="stack" />
                    <Bar dataKey="pages_print" name='số giấy đã in' fill="#82ca9d" stackId="stack" />
                </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
