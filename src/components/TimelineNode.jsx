import React from 'react'

export default function TimelineNode({item, index}){
  return (
    <div className="timeline-node">
      <div className="timeline-dot" aria-hidden="true"></div>
      <div className="timeline-content">
        <h4 className="timeline-role">{item.role}</h4>
        <div className="timeline-meta">{item.org}{item.years ? ` • ${item.years}` : ''}</div>
        {item.desc && <p className="timeline-desc">{item.desc}</p>}
        {item.highlights && (
          <ul className="timeline-highlights">
            {item.highlights.map(h => <li key={h}>{h}</li>)}
          </ul>
        )}
      </div>
    </div>
  )
}
