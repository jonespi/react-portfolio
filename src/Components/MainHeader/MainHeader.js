import React from 'react';
import './MainHeader.css';

export default function MainHeader() {
  return (
    <section className="header">
      <div className="name-header">
        <div className="name-titles">
          <h1>Jonathan Espinosa</h1>
          <h2>Software Engineer</h2>
          <h3>Oakland, CA</h3>
          <ul className="intro-icons">
            <li>
              <a
                href="https://www.linkedin.com/in/jonathanespinosa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin fa-3x" aria-hidden="true"></i>
                <span className="project-link">LinkedIn Link</span>
              </a>
            </li>
            <li>
              <a
                a
                href="https://github.com/jonespi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github fa-3x" aria-hidden="true"></i>
                <span className="project-link">Github Link</span>
              </a>
            </li>
            <li>
              <a href="mailto:jonathan.espinosa@gmail.com">
                <i class="fas fa-envelope fa-3x" aria-hidden="true"></i>
                <span className="project-link">Email Link</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="intro-paragraph">
          <h3>
            Hello!{' '}
            <span aria-label="male using laptop" role="img">
              👨🏻‍💻
            </span>
          </h3>
          <p>
            My name is Jonathan and I am currently a Support Engineer at
            ZeroCater. In my role, I have been called the "Swiss Army Knife" of
            our small engineering team. I have a high aptitude for learning new
            tools and technologies very quickly to test and squash bugs.
          </p>
          <p>
            I'm proficient in multiple places in the stack from front-end
            Javascript to back-end Python (Django) and SQL. Thanks for visiting!
          </p>
        </div>
      </div>
    </section>
  );
}
