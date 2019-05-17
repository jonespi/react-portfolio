import React from 'react';
import Project from './Project/Project'
import './Projects.css';
import quizApp from './Project/Assets/quiz-app.png'
import sproutSocial from './Project/Assets/sprout-social.png'
import mercari from './Project/Assets/mercari.png'

export default function Projects() {
    return (
        <div className="projects">
            <h2>Projects</h2>
                <Project 
                    title={'Mac OS X Hotkey Quiz'}
                    img={quizApp}
                    link={'https://nw-iguana.github.io/brandon-jonathan-quiz-app/'}
                    description={'A Quiz App testing users on their knowledge of Mac OS Hotkeys. The app validates answers and manipulates the DOM to show current score and question.'}
                    languages={['Javascript', 'HTML', 'CSS']}
                    libraries={['jQuery']} />
                <Project
                    title={'Sprout Social'}
                    img={sproutSocial}
                    link={'http://www.sproutsocial.com'}
                    description={'As a Customer Advocate, I troubleshoot and report technical issues affecting the platform. This utilizes surface knowledge of multiple social media networks APIs.'}
                    languages={['Zendesk', 'JIRA', 'Confluence']} />
                <Project
                    title={'Mercari'}
                    img={mercari}
                    link={'http://www.mercari.com'}
                    description={'As an early member of the Customer Experience Team, I helped shape the overall customer service operations. One of my largest projects was implementing social media support for the entire organization.'}
                    languages={['Zendesk', 'Sprout Social', 'HelpShift']} />
            </div>
    )
}