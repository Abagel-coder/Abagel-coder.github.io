import { useEffect, useState } from 'react'

// Scroll-spy hook using IntersectionObserver.
// Tracks every currently-visible section and reports the one nearest the top
// of the viewport, so the active state never flip-flops when two sections are
// on screen at once.
export default function useScrollSpy(selectors = [], options = {}){
  const [active, setActive] = useState('')

  useEffect(()=>{
    const elements = selectors.map(s => document.querySelector(s)).filter(Boolean)
    if(!elements.length) return

    const visible = new Set()

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting) visible.add(entry.target)
        else visible.delete(entry.target)
      })

      // Among visible sections, pick the one closest to the top of the viewport.
      let best = null
      let bestTop = Infinity
      visible.forEach(el=>{
        const top = Math.abs(el.getBoundingClientRect().top)
        if(top < bestTop){
          bestTop = top
          best = el
        }
      })

      if(best) setActive(`#${best.id}`)
    }, options)

    elements.forEach(el => observer.observe(el))

    return ()=> observer.disconnect()
  }, [selectors.join('|'), JSON.stringify(options)])

  return active
}
