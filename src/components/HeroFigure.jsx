import React, { useMemo } from 'react'

// Static "constellation" — randomly placed nodes connected to nearby nodes.
// It doesn't animate; instead a fresh layout is generated on each page load,
// so the dots and connections differ every time.
const W = 380
const H = 340
const PAD = 22
const COUNT = 26
const LINK_DIST = 112

function generate(){
  const nodes = Array.from({ length: COUNT }, (_, i) => ({
    id: i,
    x: PAD + Math.random() * (W - PAD * 2),
    y: PAD + Math.random() * (H - PAD * 2),
    r: Math.random() * 1.8 + 1.8,
    accent: Math.random() < 0.14
  }))

  const edges = []
  const seen = new Set()
  const addEdge = (a, b, d) => {
    const key = a < b ? `${a}-${b}` : `${b}-${a}`
    if (seen.has(key)) return
    seen.add(key)
    edges.push({ a, b, d })
  }

  for (let i = 0; i < nodes.length; i++){
    let nearest = -1
    let nd = Infinity
    for (let j = 0; j < nodes.length; j++){
      if (i === j) continue
      const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)
      if (dist < nd){ nd = dist; nearest = j }
      if (j > i && dist < LINK_DIST) addEdge(i, j, dist)
    }
    // guarantee every node links to at least its nearest neighbor
    if (nearest >= 0) addEdge(i, nearest, nd)
  }

  return { nodes, edges }
}

export default function HeroFigure(){
  const { nodes, edges } = useMemo(generate, [])

  return (
    <svg className="hero-figure" viewBox={`0 0 ${W} ${H}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g className="hf-edges">
        {edges.map(({ a, b, d }, k) => (
          <line
            key={k}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke="var(--accent-teal)"
            strokeWidth="1"
            opacity={Math.max(0.12, (1 - d / LINK_DIST) * 0.5)}
          />
        ))}
      </g>
      <g className="hf-nodes">
        {nodes.map(n => (
          <circle
            key={n.id}
            cx={n.x} cy={n.y} r={n.r}
            className={n.accent ? 'hf-node hf-accent' : 'hf-node'}
            fill={n.accent ? 'var(--accent-amber)' : 'var(--accent-teal)'}
          />
        ))}
      </g>
    </svg>
  )
}
