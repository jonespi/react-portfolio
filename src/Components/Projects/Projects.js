import React from 'react';
import {ProjectList} from './ProjectList'
import Project from './Project/Project'
import './Projects.css';

export default function Projects() {
  let Projects = ProjectList();
  console.log(Projects)
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
        {
          Projects.map(item => {
            return <Project
              title={item.title}
              img={item.img}
              demo={item.demo}
              link={item.link}
              description={item.description}
              languages={item.languages}
              libraries={item.libraries}
            />
          })
        }
      </section>
  )
}