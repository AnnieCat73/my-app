import React from 'react'
import group77 from '../images/Group 77.png';

function Hero() {
  return (
    <section className="hero-container">
      <img className="hero-img" src={group77} alt="" />
      <div className="hero-text-container">
        <h1 className="hero-heading">Online Experiences</h1>
        <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>

    </section>
  )
}

export default Hero