import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './TopNav.css';

export default class TopNav extends React.Component {
  state = {
    checked: false
  };

  scrollToTop = () => {
    scroll.scrollToTop();
    if (this.state.checked) {
      this.setState({
        checked: false
      });
    }
  };

  navPopUp = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    return (
      <div className="navigation-wrapper">
        <nav className="navigation">
          <Link
            activeClass="active"
            smooth={true}
            className="logo"
            duration={500}
            onClick={this.scrollToTop}
          >
            jonespi
          </Link>
          <input
            className="menu-btn"
            type="checkbox"
            id="menu-btn"
            onClick={this.navPopUp}
            checked={this.state.checked}
          />
          <label className="menu-icon" for="menu-btn">
            <span class="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <Link
                activeClass="active"
                smooth={true}
                duration={500}
                to="experience"
                onClick={this.navPopUp}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                duration={500}
                to="projects"
                onClick={this.navPopUp}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                to="contact"
                onClick={this.navPopUp}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1HrBryh4vFHD3vyoLT4B7G6i2ZbulgBcU/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
