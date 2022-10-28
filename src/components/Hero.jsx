import React from 'react'
import photoGrid from '../assets/photo-grid.png'

function Hero() {
  return (
    <div className="hero">
      <img src={photoGrid} className="photoGrid" alt="" />
      <h1 className="heading">Online Experiences</h1>
      <p className="sub-heading">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  )
}

export default Hero
