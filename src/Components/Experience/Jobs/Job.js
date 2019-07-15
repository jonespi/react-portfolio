import React from 'react';
import './Job.css'

export default class Job extends React.Component {
  renderTools() {
    let libs = [];
    if (this.props.languages.length > 0) {
      libs = this.props.languages.map(library => {
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
      <>
      <div className="job-title">
        <h3>{this.props.title}</h3>
        <a href={this.props.demo}>
          <i aria-hidden="true" class="fas fa-laptop fa-2x"></i>
          <span className="job-link">
            demo
          </span>
        </a>
      </div>
      <div className="job-content">
        <img src={this.props.img} alt="Screen shot of project" />
        <div class="job-text">
          <div class="job-description">
            <p>{this.props.description}</p>
            {this.renderTools()}
          </div>
        </div>
      </div>
      </>
    )
  }
}

Job.defaultProps = {
  languages: [],
  link: ''
}