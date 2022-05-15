import React from 'react'
import Slide from 'react-reveal/Slide';


export default function Stats() {
  return (
    <div>
      <div className="stats stats-vertical shadow-lg shadow-black ">
        <div className="stat">
          <div className="stat-title">Total Credits</div>
           <Slide left><div className="stat-value text-primary">3k</div></Slide>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        <div className="stat">
          <div className="stat-title">Activities</div>
          <Slide left><div className="stat-value">4,200</div></Slide>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        <div className="stat">
          <div className="stat-title">Coins earned</div>
          <Slide left><div className="stat-value">1,200</div></Slide>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  )
}
