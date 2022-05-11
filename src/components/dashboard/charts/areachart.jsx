import React from "react";
import {
    Area,
    AreaChart,
    defs,
    linearGradient,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

export default function Areachaart() {
  const data = [
    {
      name: "Mizoram",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Cherrapunji",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Hyderabad",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "tuscom",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Haryana",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Delhi",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Chan",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <AreaChart
        width={350}
        height={230}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        className='bg-black rounded-xl shadow-xl text-black shadow-black'
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={1} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={1} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={1} />
            <stop offset="95%" stopColor="#5089C6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#6200EE"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
}
