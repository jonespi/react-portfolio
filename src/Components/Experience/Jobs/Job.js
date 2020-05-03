import React from 'react';
import './Job.css';

export default class Job extends React.Component {
  renderTools() {
    let libs = [];
    let frontend = [];
    let backend = [];
    if (this.props.languages.length > 0) {
      libs = this.props.languages.map(library => <li>{library}</li>);
    }

    if (this.props.frontend) {
      frontend = this.props.frontend.map(library => <li>{library}</li>);
    }

    if (this.props.backend) {
      backend = this.props.backend.map(library => <li>{library}</li>);
    }

    return (
      <>
        <p>Technologies Used:</p>
        <ul>{libs}</ul>
        <div className="technologies">
          {frontend && (
            <div className="front-end">
              <p>Front End:</p>
              <ul>{frontend}</ul>
            </div>
          )}
          {backend && (
            <div className="back-end">
              <p>Back End:</p>
              <ul>{backend}</ul>
            </div>
          )}
        </div>
      </>
    );
  }

  render() {
    return (
      <div className="job">
        <div className="job-title">
          <div className="left-column">
            <h3>{this.props.title}</h3>
            <a href={this.props.link} target="_blank" rel="noopener noreferrer">
              <i aria-hidden="true" class="fas fa-laptop fa-2x"></i>
              <span className="job-link">demo</span>
            </a>
          </div>
          <div className="job-img">
            <img src={this.props.img} alt="Screen shot of project" />
          </div>
        </div>
        <div className="job-content">
          <div class="job-text">
            <div class="job-description">
              <p>{this.props.description}</p>
              {this.renderTools()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Job.defaultProps = {
  languages: [],
  link: ''
};
