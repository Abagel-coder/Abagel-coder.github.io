import React from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects(){
  return (
    <div className="projects-grid">
      {projects.map(p=> (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  )
}
