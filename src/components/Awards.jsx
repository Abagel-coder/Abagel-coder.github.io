import React from 'react'
import awards from '../data/awards'
import AwardNode from './AwardNode'

export default function Awards(){
  return (
    <div className="awards-grid">
      {awards.map(a=> <AwardNode key={a.id} award={a} />)}
    </div>
  )
}
