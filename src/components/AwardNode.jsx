import React from 'react'

export default function AwardNode({award}){
  return (
    <div className="award-node">
      <div className="award-dot" aria-hidden="true"></div>
      <div className="award-body">
        <div className="award-title">{award.title}</div>
        <div className="award-meta">{award.meta}</div>
      </div>
    </div>
  )
}
