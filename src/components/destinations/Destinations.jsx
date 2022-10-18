import React from 'react'
import './Destinations.css'
import Paris from '../../assets/paris.jpg'
import Nyc from '../../assets/nyc.jpg'
import Melbourne from '../../assets/melbourne.jpg'
import London from '../../assets/london.jpg'

export default function Destinations() {
  return (
    <div className='destinations'>
        <div className="container">
            <h1> Tennis Open Host Cities </h1>
        </div>
        <div className="img__container">
            <img src={Paris} className='span__3 image__row__2' alt='parisimage'/>
            <img src={Nyc} alt='NYCimage'/>
            <img src={Melbourne}  alt='Melbourneimage'/>
            <img src={London} className="london" alt='Londonimage'/>
        </div>
    </div>
  )
}
