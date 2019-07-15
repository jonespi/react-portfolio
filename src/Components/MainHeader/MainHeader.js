import React from 'react';
import heroImg from './goldengate.jpeg'
import './MainHeader.css';

export default function MainHeader() {
  return (
    <section className="header">
       <div className="header-contents">
        <img src={heroImg} alt="golden gate bridge" className="hero-img"/>
        <div className="main-header">
          <div className="name-header">
            <div className="name-titles">
              <h1>Jonathan Espinosa</h1>
              <h2>Software Engineer</h2>
              <h3>Oakland, CA</h3>
              <ul className="intro-icons">
                <li><a href="https://www.linkedin.com/in/jonathanespinosa/"  target="_blank" rel='noopener noreferrer'><i class="fab fa-linkedin fa-2x" aria-hidden="true"></i><span className="project-link">LinkedIn Link</span></a></li>
                <li><a a href="https://github.com/jonespi" target="_blank" rel='noopener noreferrer'><i class="fab fa-github fa-2x" aria-hidden="true"></i><span className="project-link">Github Link</span></a></li>
                <li><a href="mailto:jonathan.espinosa@gmail.com"><i class="fas fa-envelope fa-2x" aria-hidden="true"></i><span className="project-link">Email Link</span></a></li>
              </ul>
            </div>
            <div className="intro-paragraph">
              <h3>Hello! <span aria-label="male using laptop" role="img">👨🏻‍💻</span></h3> 
              <p>
                I am currently a Customer Advocate at Sprout Social and have completed the Engineering Immersion Program at Thinkful. After years of providing customer support, I have decided to take the leap and continue my career as a Software Engineer.
              </p>
              <p>
                I’m excited to finally build the the features that I have provided support for throughout my career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}