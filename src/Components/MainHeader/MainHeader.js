import React from 'react';
import heroImg from './goldengate.jpeg'
import './MainHeader.css';

export default function MainHeader() {
    return (
        <div className="header">
            <img src={heroImg} alt="fox theater" className="hero-img"/>
            <div className="main-header">
                <div className="name-header">
                    <div className="name-titles">
                        <h1>Jonathan Espinosa</h1>
                        <h2>Aspiring Software Engineer</h2>
                        <h3>Oakland, CA</h3>
                    </div>
                    <ul className="intro-icons">
                        <li><a href="https://www.linkedin.com/in/jonathanespinosa/" target="_blank" aria-label="Jonathan Espinosa LinkedIn page link"><i class="fab fa-linkedin fa-2x" aria-hidden="true"></i></a></li>
                        <li><a href="https://github.com/jonespi" target="_blank" aria-label="Jonathan Espiniosa GitHub link"><i class="fab fa-github fa-2x" aria-hidden="true"></i></a></li>
                        <li><a href="mailto:jonathan.espinosa@gmail.com" aria-label="Email Jonathan Espinosa Link"><i class="fas fa-envelope fa-2x" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}