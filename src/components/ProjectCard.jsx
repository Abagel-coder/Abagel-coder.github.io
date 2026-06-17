import React from 'react'
import AnimateOnView from './AnimateOnView'

export default function ProjectCard({project}){
  const {title, subtitle, years, tags, highlights, image, mediaAlt} = project
  return (
    <AnimateOnView>
      <article className="project-card">
        <div className="project-media" aria-hidden={image ? 'false' : 'true'}>
          {image ? <img src={image} alt={mediaAlt || title} className="project-media-img" /> : <div className="media-placeholder">GIF</div>}
        </div>
        <div className="project-body">
          <h3 className="project-title">{title}</h3>
          <p className="project-sub">{subtitle} • <span className="project-years">{years}</span></p>
          <div className="project-tags">
            {tags.map(t=> <span key={t} className="tag">{t}</span>)}
          </div>
          {highlights && (
            <ul className="project-highlights">
              {highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
          )}
        </div>
      </article>
    </AnimateOnView>
  )
}
