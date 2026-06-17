import React from 'react'

export default function HeroPhoto({src, alt}){
  return (
    <div className="hero-photo" role="img" aria-label={alt}>
      {src ? <img src={src} alt={alt} className="hero-photo-img" onError={(e)=>{e.target.style.display='none'}} /> : <span className="photo-label">Photo</span>}
      <noscript><span className="photo-label">Photo</span></noscript>
    </div>
  )
}
