import React from 'react';
import './Project.css';

export default class Project extends React.Component {
  renderLanguages() {
    let languages = [];
    if (this.props.languages.length > 0) {
      languages = this.props.languages.map(language => {
        return (
          <li>{language}</li>
        )
      })

      return (
        <>
          <p>Tools:</p>
          <ul>
            {languages}
          </ul>
        </>
      )
    }
  }

  renderLibraries() {
    let libs = [];
    if (this.props.libraries.length > 0) {
      libs = this.props.libraries.map(library => {
        return (
          <li>{library}</li>
        )
      })

      return (
        <>
          <p>Libraries or Frameworks Used:</p>
          <ul>
            {libs}
          </ul>
        </>
      )
    }
  }

  render() {
    return (
      <div className="project">
        <div className="project-title">
          <div>
          <h3>{this.props.title}</h3>
            <ul className="project-icons">
              <li>
                <a href={this.props.demo} target="_blank" rel="noopener noreferrer">
                  <i aria-hidden="true" class="fas fa-laptop fa-2x"></i>
                  <span className="project-link">
                    demo
                  </span>
                </a>
              </li>
              <li>
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                  <i aria-hidden="true" class="fab fa-github fa-2x"></i>
                  <span className="project-link">
                    github
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div><img src={this.props.img} alt="Screen shot of project" /></div>
        </div>
        <div className="project-content">
          <div class="project-text">
            <div class="project-description">
              <p>{this.props.description}</p>
              {this.renderLanguages()}
              {this.renderLibraries()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Project.defaultProps = {
  libraries: [],
  demo: '',
  link: ''
}