import React from 'react'
import './Hero.css'
import Video from '../../assets/overhead.mp4'

export default function Hero() {
  return (
    <div className='hero'>
        <video autoPlay loop muted id="video">
            <source src={Video} type='video/mp4'/>
        </video>
        <div className="overlay"></div>
    </div>
  )
}
