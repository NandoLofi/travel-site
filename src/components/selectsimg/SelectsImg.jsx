import React from 'react'
import './SelectsImg.css'

export default function SelectsImg({bgImg, text}) {
  return (
    <div className='selects__location'>
      <img src={bgImg} alt='/' />
        <div className="overlay">
          <p>{text}</p>
        </div>
    </div>
  )
}
