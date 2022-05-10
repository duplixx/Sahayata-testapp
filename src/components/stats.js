import React from 'react'

export default function Stats() {
  return (
    <div>
      <div className="stats stats-vertical shadow">
        <div className="stat">
          <div className="stat-title">Total Credits</div>
          <div className="stat-value text-primary">3k</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        <div className="stat">
          <div className="stat-title">Activities</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        <div className="stat">
          <div className="stat-title">Coins earned</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  )
}
