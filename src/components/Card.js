import React from 'react'
import swimmer from './../images/image 12.png';
import star1 from './../images/Star 1.png';
function Card() {
  return (
    <div className="card">
      <img className="image" src={swimmer} alt="" />
      <div className="card-stats">
        <img className="card-star" src={star1} alt="" />
        <span className="grey">5.0</span>
        <span className="grey">(6)</span>
        <span>USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / per person</p>
    </div>
  )
}

export default Card