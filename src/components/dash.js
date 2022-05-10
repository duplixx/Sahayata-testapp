import React from 'react'
import Sidebar from './dashboard/sidebar'
import Activity from './dashboard/activity'
import Radial from './dashboard/charts/radialcharts'
import LineChaart from './dashboard/charts/linecharts'
import BarChart from './dashboard/charts/barcharts'
import Navbar from './dashboard/navbar'
import RadarChart from './dashboard/charts/radarchart'
import AreaChart from './dashboard/charts/areachart'
import Post from './dashboard/posts'
import Stats from './stats'
import Feeds from './dashboard/feeds'


export default function Dash() {
  
    
  return (
        <>
          <Navbar/>
          <div className="flex ">
            <Sidebar/>
             <div className="flex-col w-[1500px] ">
                <div className=" flex md:flex-col  rounded-xl space-x-1 justify-center align-center md:h-[300px]  px-4 pt-6 flex-wrap ml-4 mt-4 bg-gradient-to-b from-error to-white backdrop-blur-sm">
                  <div id='slide1' className="carousel-item"><LineChaart/></div>
                  <div id='slide4' className="carousel-item"><Radial/></div>
                  <div id='slide2' className="carousel-item"><AreaChart/></div>
                  <div id='slide3' className="carousel-item"><RadarChart/></div>
                  
                </div>
                <div>
                  <Feeds/>

                </div>
                  
                

             </div>
            
                
                
                
            <div className="hidden md:flex md:align-end md:mt-[60px] md:m-4 ">
                <Stats/>
            </div>
            <Post/>
            
          </div>
        </>
  )
}

