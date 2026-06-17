import React, {useRef, useEffect, useState} from 'react'

export default function AnimateOnView({children, rootMargin = '-10% 0px -10% 0px'}){
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(()=>{
    const el = ref.current
    if(!el) return
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          setInView(true)
          // optionally unobserve to keep it visible
          obs.unobserve(el)
        }
      })
    }, {rootMargin})
    obs.observe(el)
    return ()=> obs.disconnect()
  }, [rootMargin])

  return (
    <div ref={ref} className={`animate-on-view ${inView ? 'in-view' : ''}`}>
      {children}
    </div>
  )
}
