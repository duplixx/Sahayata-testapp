import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Radarchart() {
  const data = [
    {
      name: 'West Bengal',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Andhra Pradesh',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Odisha',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Tamil Nadu',
      uv: 2080,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Puducherry',
      uv: 1390,
      pv: 400,
      amt: 2181,
    },
    {
      name: 'Arunanchal Pradesh',
      uv: 2890,
      pv: 6800,
      amt: 2181,
    },
    {
      name: 'Sikkim',
      uv: 1090,
      pv: 5801,
      amt: 2181,
    },
    {
      name: 'Rajasthan',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    
  ];
  return (
    <div className=" ">
      <ResponsiveContainer width={350}
        height={230} className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl shadow-xl shadow-purple-500 border-2 ">
        <BarChart
          data={data}
        >
          <XAxis dataKey="name" stroke="#FFFFFF"/>
          <YAxis stroke="#FFFFFF" />
          <Bar dataKey="pv" stackId="a" fill="#52CFA0" />
          <Bar dataKey="uv" stackId="a" fill="#FFFFFF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
