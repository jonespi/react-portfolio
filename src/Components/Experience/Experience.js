import React from 'react';
import './Experience.css'
import Job from './Jobs/Job'
import { JobList } from './Jobs/JobList'

export default function Experience() {
  let Jobs = JobList();
  return (
    <section className="experience" id="experience">
      <h2>Work Experience</h2>
        {
          Jobs.map(job => {
            return (
              <Job 
                title={job.title}
                img={job.img}
                link={job.link}
                description={job.description}
                languages={job.languages}
              />
            )
          })
        }
      </section>
  )
}