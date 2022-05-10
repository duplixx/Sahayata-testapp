import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Radarchart() {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page G',
      uv: 3990,
      pv: 4000,
      amt: 3200,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 2440,
      amt: 1400,
    },
    {
      name: 'Page G',
      uv: 4490,
      pv: 3360,
      amt: 1800,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4200,
      amt: 1600,
    },
  ];
  return (
    <div className="">
      <ResponsiveContainer width={350}
        height={230} className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl ">
        <BarChart
          data={data}
        >
          <XAxis dataKey="name" stroke="#FFFFFF"/>
          <YAxis stroke="#FFFFFF" />
          <Legend  />
          <Bar dataKey="pv" stackId="a" fill="#52CFA0" />
          <Bar dataKey="uv" stackId="a" fill="#FFFFFF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
