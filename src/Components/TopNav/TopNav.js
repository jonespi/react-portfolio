import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'
import './TopNav.css'

export default class TopNav extends React.Component {
  state = {
    checked: false
  }
  
  scrollToTop = () => {
    scroll.scrollToTop();
    this.navPopUp();
  }

  navPopUp = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return (
      <div className="navigation-wrapper">
        <nav className="navigation">
          <Link activeClass="active" smooth={true} className="logo" duration={700} delay={200} onClick={this.scrollToTop}>Jonathan Espinosa</Link>
          <input className="menu-btn" type="checkbox" id="menu-btn" onClick={this.navPopUp} checked={this.state.checked} />
          <label className="menu-icon" for="menu-btn"><span class="navicon"></span></label>
          <ul className="menu">
            <li><Link activeClass="active" smooth={true} duration={700} to="projects" onClick={this.navPopUp} delay={200}>Projects</Link></li>
            <li><Link activeClass="active" smooth={true} duration={700} to="experience" onClick={this.navPopUp} delay={200}>Experience</Link></li>
            <li><Link activeClass="active" spy={true} smooth={true} duration={700} to="contact" onClick={this.navPopUp} delay={200}>Contact</Link></li>
            <li><a href="https://drive.google.com/file/d/1HrBryh4vFHD3vyoLT4B7G6i2ZbulgBcU/view" target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}