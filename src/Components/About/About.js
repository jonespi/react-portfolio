import React from 'react';
import headshot from './headshot.jpg';
import './About.css'

export default function About() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="about">
        <img src={headshot} alt="headshot" /> 
        <div className="intro-paragraph">
          <h3>Hello! <span aria-label="male using laptop" role="img">👨🏻‍💻</span></h3> 
          <br />
          <p>
            Currently, I am at a Student at Thinkful and Customer Advocate at Sprout Social. After years of providing customer support, I have decided to take the leap and continue my career as a Software Engineer. 
            <br />
            <br />
            I’m excited to finally build the the features that I have provided support for throughout my career.
          </p>
        </div>
      </div>
    </section>
  )
}