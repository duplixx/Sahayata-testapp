import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const LineChart = () => {
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
      name: "Chandigarh",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <Line className='bg-gradient-to-tr from-gray-700 via-gray-900 to-black rounded-lg border-4 border-black text-white'
        data={data}
        height={200}
        options={false}

      />
    </div>
  )
}

export default LineChart