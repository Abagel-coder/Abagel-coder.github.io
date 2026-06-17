import React from 'react'
import leadership from '../data/leadership'
import TimelineNode from './TimelineNode'

export default function Leadership(){
  return (
    <div className="timeline">
      {leadership.map((item, idx)=> (
        <TimelineNode key={item.id} item={item} index={idx} />
      ))}
    </div>
  )
}
