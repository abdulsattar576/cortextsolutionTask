 import React from 'react'
import logo from '../assets/logo.webp'

const Header = () => {
  return (
    <div className='header'>
      <div>
        <img src={logo} className='logo' alt="Company Logo" />
      </div>
      <ul className='nav'>
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Header
