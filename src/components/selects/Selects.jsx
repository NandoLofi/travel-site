import './Selects.css'
import React from 'react'
import Paris from '../../assets/paris.jpg'
import Nyc from '../../assets/nyc.jpg'
import Melbourne from '../../assets/melbourne.jpg'
import London from '../../assets/london.jpg'
import SelectsImg from '../selectsimg/SelectsImg'

export default function 
() {
  return (
    <div className='selects'>
      <div className="container">
      <SelectsImg bgImg={London} text="London" />
      <SelectsImg bgImg={Melbourne} text="Melbourne" />
      <SelectsImg bgImg={Paris} text="Paris" />
      <SelectsImg bgImg={Nyc} text="New York City" />
      </div>
    </div>
  )
}
