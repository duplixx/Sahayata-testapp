import React from 'react'
import Sidebar from './dashboard/sidebar'
import Activity from './dashboard/activity'
import Radial from './dashboard/charts/radialcharts'
import LineChart from './dashboard/charts/linecharts'
import BarChart from './dashboard/charts/barcharts'
import Navbar from './dashboard/navbar'
import RadarChart from './dashboard/charts/radarchart'
import AreaChart from './dashboard/charts/areachart'
import Post from './dashboard/posts'


export default function Dash() {
  
    
  return (
        <>
          <Navbar/>
          <div className="flex ">
            <Sidebar/>
            
                <div className=" flex md:flex-col space-x-1 justify-center align-center md:h-[300px] w-screen px-4 pt-6 flex-wrap  hover:overflow-y-scroll ">
                  {/* <div id='slide1' className="carousel-item"><LineChart/></div> */}
                  <div id='slide2' className="carousel-item"><AreaChart/></div>
                  <div id='slide3' className="carousel-item"><RadarChart/></div>
                  <div id='slide4' className="carousel-item"><Radial/></div>
                </div>
            <div className="hidden md:flex">
              {/* <Activity /> */}
            </div>
            <Post/>
            
          </div>
        </>
  )
}

