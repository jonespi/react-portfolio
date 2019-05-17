import React from 'react';
import './Project.css';

export default class Project extends React.Component {
    renderLanguages() {
        return this.props.languages.map(language => {
            return (
                <li>{language}</li>
            )
        })
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
                <img src={this.props.img} alt="Screen shot of project" />
                <div class="project-text">
                    <h3>{this.props.title}</h3>
                    <ul class="project-icons">
                        <a href={this.props.link}><i aria-hidden="true" class="fas fa-laptop fa-2x"></i></a>
                    </ul>
                    <div class="project-description">
                        <p>{this.props.description}</p>
                        <p>Languages Used:</p>
                        <ul class="languages-used">
                            <span class="visually-hidden">Javascript, HTML5, CSS3</span>
                            {this.renderLanguages()}
                        </ul>
                        {this.renderLibraries()}
                    </div>
                </div>
            </div>
        )
    }
}

Project.defaultProps = {
    libraries: []
}