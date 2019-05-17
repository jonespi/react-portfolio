import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
    <div className='contact'>
        <div className='contact-header'>
            <h2>Let's get in touch!</h2>
        </div>
        <div className='contact-section'> 
            <span className="contact-links">
                <a href="https://www.linkedin.com/in/jonathanespinosa/"><i class="fab fa-linkedin fa-5x"></i></a>
                <a href="https://github.com/jonespi"><i class="fab fa-github fa-5x"></i></a>
                <a href="mailto:jonathan.espinosa@gmail.com"><i class="fas fa-envelope fa-5x"></i></a>
            </span>
        </div>
        <div className='footer'>
            <p>Ⓒ Jonathan Espinosa 2019</p>
        </div>
    </div>
    )
}