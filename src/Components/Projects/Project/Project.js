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
          <h3>{this.props.title}</h3>
          <ul className="project-icons">
              <a href={this.props.demo}>
                <i aria-hidden="true" class="fas fa-laptop fa-2x"></i>
                <span className="project-link">
                  demo
                </span>
              </a>
              <a href={this.props.link}>
                <i aria-hidden="true" class="fab fa-github fa-2x"></i>
                <span className="project-link">
                  github
                </span>
              </a>
            </ul>
        </div>
        <div className="project-content">
          <img src={this.props.img} alt="Screen shot of project" />
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