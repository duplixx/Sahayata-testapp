import React from 'react'
import Sidebar from './sidebar'
import Activity from './activity'
import Radial from './charts/radialcharts'
import LineChart from './charts/linecharts'

export default function dash() {
  return (
        <>
          <div className="flex justify-between">
            <Sidebar/>
            <Radial/>
            <LineChart/>

            <Activity />

          </div>
        </>
  )
}

