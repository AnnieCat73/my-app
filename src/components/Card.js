import React from 'react'
import star1 from '../images/Star 1.png';

function Card(props) {
  return (
    <div className="card">
      <img className="image" src={props.img} alt="" />
      <div className="card-stats">
        <img className="card-star" src={star1} alt="" />
        <span className="grey">{props.rating}</span>
        <span className="grey">({props.reviewCount})</span>
        <span>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / per person</p>
    </div>
  )
}

export default Card