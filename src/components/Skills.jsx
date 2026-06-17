import React from 'react'
import SkillCell from './SkillCell'
import skills from '../data/skills'

export default function Skills(){
  return (
    <div className="skills-grid">
      {skills.map(group=> (
        <SkillCell key={group.id} title={group.title} items={group.items} color={group.color} />
      ))}
    </div>
  )
}
