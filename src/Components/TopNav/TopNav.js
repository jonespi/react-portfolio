import React from 'react';
import { NavLink } from 'react-router-dom'
import './TopNav.css'

export default function TopNav() {
    return (
        <nav role="navigation" className='navigation'>
          <div className='left-name-header'>
            <NavLink className='nav-header' to='/'>Jonathan Espinosa</NavLink>
          </div>
          <div className="nav-links">
            <NavLink className='nav-link' to='/about'>About</NavLink>
            <NavLink className='nav-link' to='/projects'>Projects</NavLink>
            <NavLink className='nav-link' to='/more'>More</NavLink>
            <NavLink className='nav-link' to='/contact'>Contact</NavLink>
          </div>
        </nav>
        )
}