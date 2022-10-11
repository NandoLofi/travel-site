import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

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
    </div>
  )
}
