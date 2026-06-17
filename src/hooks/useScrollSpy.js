import { useEffect, useState } from 'react'

// Simple scroll-spy hook using IntersectionObserver
export default function useScrollSpy(selectors = [], options = {}){
  const [active, setActive] = useState('')

  useEffect(()=>{
    const elements = selectors.map(s => document.querySelector(s)).filter(Boolean)
    if(!elements.length) return

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          setActive(`#${entry.target.id}`)
        }
      })
    }, options)

    elements.forEach(el => observer.observe(el))

    return ()=> observer.disconnect()
  }, [selectors.join('|'), JSON.stringify(options)])

  return active
}
