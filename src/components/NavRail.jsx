import React from 'react'
import useScrollSpy from '../hooks/useScrollSpy'

export default function NavRail(){
  const sections = [
    {id:'hero', label:'Home'},
    {id:'projects', label:'Projects'},
    {id:'experience', label:'Experience'},
    {id:'skills', label:'Skills'},
    {id:'awards', label:'Awards'},
    {id:'contact', label:'Contact'},
  ]

  const activeId = useScrollSpy(sections.map(s => `#${s.id}`), { rootMargin: '-40% 0px -40% 0px' })

  return (
    <nav className="nav-rail" aria-label="Section navigation">
      {sections.map(s=> {
        const isActive = activeId === `#${s.id}`
        return (
          <a key={s.id} href={`#${s.id}`} className={`nav-dot ${isActive ? 'active' : ''}`} aria-label={s.label} title={s.label} aria-current={isActive ? 'true' : 'false'}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="5" stroke="rgba(243,239,227,0.12)" strokeWidth="1" fill={isActive ? 'var(--accent-teal)' : 'transparent'} />
            </svg>
          </a>
        )
      })}
    </nav>
  )
}
