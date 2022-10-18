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
        <div className="content">
            <h1>Plan Your Next Trip to A Major</h1>
            <h2>Explore more than the matches</h2>
            <form action="" className="form">
                <div>
                    <input type="text" name="search" placeholder='City or Open'/>
                </div>
                <div>
                    <button>Search</button>
                </div>
            </form>
        </div>
    </div>
  )
}
