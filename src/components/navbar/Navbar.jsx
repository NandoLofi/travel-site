import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
          <h2>TENNIS MAJORS</h2>
        </div>
        <ul className="nav__menu">
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>Views</li>
        </ul>
        <div className="nav__icons">
          <SearchIcon className='icon'/>
          <PersonIcon className='icon'/>
        </div>
        <div className="hamburger">
          <MenuIcon className='icon' />
        </div>
        <div className="mobile__menu">
          <ul className="mobile__nav">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>Views</li>
          </ul>
        </div>
        <div className="mobile__menu__button">
          <div className="menu__icons">

          </div>
          <div className="social__icons">
            
          </div>
        </div>
    </div>
  )
}
