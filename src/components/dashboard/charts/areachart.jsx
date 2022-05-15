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
        name: "West Bengal",
        uv: 239,
        pv: 800,
        amt: 2400,
      },
      {
        name: "Assam ",
        uv: 136,
        pv: 70,
        amt: 2210,
      },
      {
        name: "Gujarat",
        uv: 87,
        pv: 550,
        amt: 2290,
      },
      {
        name: "Karnataka",
        uv: 74,
        pv: 500,
        amt: 2000,
      },
      {
        name: "Madhya Pradesh",
        uv: 74,
        pv: 400,
        amt: 2181,
      },
      {
        name: "Kerala",
        uv: 50,
        pv: 300,
        amt: 2500,
      },
      {
        name: "Maharastra",
        uv: 44,
        pv: 200,
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
