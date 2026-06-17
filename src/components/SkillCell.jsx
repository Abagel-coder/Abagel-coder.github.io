import React from 'react'

export default function SkillCell({title, items, color}){
  return (
    <div className="skill-cell" style={{borderColor: color}}>
      <h3 className="skill-cell-title">{title}</h3>
      <div className="skill-tags">
        {items.map(it=> {
          const key = typeof it === 'string' ? it : it.name
          return (
            <div key={key} className="skill-tag">
              <div className="skill-name">{typeof it === 'string' ? it : it.name}</div>
              {typeof it === 'object' && it.note && (
                <div className="skill-note">{it.note}</div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
