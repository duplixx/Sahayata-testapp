import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  
} from "recharts";
export default function Radialcharts() {

  // Earthquake Richer Scale vs Death Toll
  
  const data = [
    {
      name: 'Delhi',
      uv: 9,
      pv: 2400,
      fill: '#FFFFFF',
    },
    {
      name: 'Uttar Pradesh',
      uv: 7,
      pv: 450,
      fill: '#83a6ed',
    },
    {
      name: 'Uttrakhand',
      uv: 8,
      pv: 1398,
      fill: '#8dd1e1',
    },
    {
      name: 'Jammu',
      uv: 8.22,
      pv: 1800,
      fill: '#82ca9d',
    },
    {
      name: 'Kashmir',
      uv: 8.63,
      pv: 3908,
      fill: '#a4de6c',
    },
    {
      name: 'Himachal Pradesh',
      uv: 7.63,
      pv: 1800,
      fill: '#d0ed57',
    },
    {
      name: 'Kerla',
      uv: 6.6,
      pv: 800,
      fill: '#ffc658',
    },
  ];
  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };
  

  return (
    <div className='rounded-lg bg-gradient-to-b from-purple-500 to-cyan-600 shadow-xl shadow-purple-500' >
      <ResponsiveContainer width={350}
        height={230}  >
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="uv"
          />
          <Tooltip/>
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
