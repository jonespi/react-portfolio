import React from 'react';
import './TopNav.css'

export default function TopNav() {
    return (
        <nav role="navigation" className='navigation'>
          <div className='left-name-header'>
            <a href="#top" className='nav-header' >Jonathan Espinosa</a>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#projects" className='nav-header' >Projects</a>
            </li>
            <li>  
              <a href="#experience" className='nav-header' >Experience</a>
            </li>
            <li>
              <a href="#contact" className='nav-header' >Contact</a>
            </li>
            <li>
              <a href="#resume" className='nav-header' >Resume</a>
            </li>
          </ul>
        </nav>
        )
}