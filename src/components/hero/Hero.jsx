import React from 'react'
import './Hero.css'
import Video from '../../assets/overhead.mp4'
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
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
                    <input type="text" name="search" placeholder='Search City or Open'/>
                </div>
                <div>
                    <button><SportsTennisIcon className='icon'/></button>
                </div>
            </form>
        </div>
    </div>
  )
}
