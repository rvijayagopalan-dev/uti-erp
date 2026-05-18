'use client'

import { useState, useMemo, useRef, useCallback } from 'react'
import Link from 'next/link'
import { nodes, edges, NODE_TYPES, EDGE_TYPES } from '../../components/ontologyData'
import BackToTop from '../../components/BackToTop'

const CANVAS_W = 1100
const CANVAS_H = 840

const FILTERS = [
  { id: 'all',    label: 'All' },
  { id: 'uti',    label: 'UTI Theory' },
  { id: 'uaif',   label: 'UAIF / ELG' },
  { id: 'shared', label: 'Shared' },
]

function getNodePos(id) {
  const n = nodes.find(n => n.id === id)
  return n ? { x: n.x, y: n.y } : null
}

export default function OntologyPage() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('all')
  const [hovered, setHovered] = useState(null)
  const svgRef = useRef(null)

  const visibleNodeIds = useMemo(() => {
    if (filter === 'all') return new Set(nodes.map(n => n.id))
    return new Set(nodes.filter(n => n.theory === filter).map(n => n.id))
  }, [filter])

  const visibleNodes = useMemo(() =>
    nodes.filter(n => visibleNodeIds.has(n.id)), [visibleNodeIds])

  const visibleEdges = useMemo(() =>
    edges.filter(e => visibleNodeIds.has(e.source) && visibleNodeIds.has(e.target)),
    [visibleNodeIds])

  const selectedNode = selected ? nodes.find(n => n.id === selected) : null

  // Edges connected to selected or hovered node
  const highlightEdgeIds = useMemo(() => {
    const focus = selected || hovered
    if (!focus) return new Set()
    return new Set(edges.filter(e => e.source === focus || e.target === focus).map(e => e.id))
  }, [selected, hovered])

  const highlightNodeIds = useMemo(() => {
    const focus = selected || hovered
    if (!focus) return new Set()
    const neighbors = new Set([focus])
    edges.forEach(e => {
      if (e.source === focus) neighbors.add(e.target)
      if (e.target === focus) neighbors.add(e.source)
    })
    return neighbors
  }, [selected, hovered])

  const connectedEdges = useMemo(() => {
    if (!selected) return []
    return edges.filter(e => e.source === selected || e.target === selected)
  }, [selected])

  function Arrow({ id, color }) {
    return (
      <defs>
        <marker id={id} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
      </defs>
    )
  }

  return (
    <div className="min-h-screen">
      <BackToTop />

      {/* Nav */}
      <div className="sticky top-0 z-50 bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Home
          </Link>
          <span className="text-sm font-bold text-white">Ontology &amp; Knowledge Graph v1</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600 hidden sm:block">{nodes.length} nodes · {edges.length} edges</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[300px] rounded-full blur-3xl opacity-5" style={{ backgroundColor: '#8b5cf6' }} />
          <div className="absolute top-0 right-1/4 w-[400px] h-[300px] rounded-full blur-3xl opacity-5" style={{ backgroundColor: '#10b981' }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 pt-10 pb-8">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-slate-600 mb-3 px-3 py-1 rounded-full border border-slate-800">
            Formal Knowledge Representation · v1.0
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">UTI + UAIF Ontologies</h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed mb-6">
            Formal ontologies for the Unified Theory of Intelligence and the Unified Adaptive Intelligence Framework — {nodes.length} concepts, {edges.length} typed relationships. Click any node to explore connections. Use filter to focus on one theory.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'UTI Nodes', val: nodes.filter(n => n.theory === 'uti').length, color: '#8b5cf6' },
              { label: 'UAIF Nodes', val: nodes.filter(n => n.theory === 'uaif').length, color: '#10b981' },
              { label: 'Shared', val: nodes.filter(n => n.theory === 'shared').length, color: '#f43f5e' },
              { label: 'Relationship Types', val: Object.keys(EDGE_TYPES).length, color: '#f59e0b' },
              { label: 'Cross-Theory Edges', val: edges.filter(e => e.type === 'MOTIVATES').length, color: '#d946ef' },
            ].map(s => (
              <div key={s.label} className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-center">
                <p className="text-lg font-black" style={{ color: s.color }}>{s.val}</p>
                <p className="text-xs text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-[57px] z-40 bg-slate-950/90 border-b border-slate-800 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-2 flex-wrap">
          <span className="text-xs text-slate-600 mr-1">Filter:</span>
          {FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-colors duration-150"
              style={filter === f.id
                ? { backgroundColor: '#8b5cf620', borderColor: '#8b5cf650', color: '#c4b5fd' }
                : { backgroundColor: 'transparent', borderColor: '#1e293b', color: '#64748b' }}
            >
              {f.label}
              <span className="font-mono">{
                f.id === 'all' ? nodes.length
                  : f.id === 'shared' ? nodes.filter(n => n.theory === 'shared').length
                  : nodes.filter(n => n.theory === f.id).length
              }</span>
            </button>
          ))}
          {selected && (
            <button
              onClick={() => setSelected(null)}
              className="ml-auto text-xs px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              Clear selection ✕
            </button>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 py-6 flex flex-col xl:flex-row gap-6">
        {/* SVG Graph */}
        <div className="flex-1 min-w-0">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 overflow-auto">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
              width="100%"
              height={CANVAS_H}
              className="min-w-[700px]"
              style={{ minHeight: '600px' }}
            >
              {/* Arrowhead markers */}
              <defs>
                {Object.entries(EDGE_TYPES).map(([type, cfg]) => (
                  <marker
                    key={type}
                    id={`arrow-${type}`}
                    markerWidth="7" markerHeight="7"
                    refX="5" refY="3"
                    orient="auto"
                  >
                    <path d="M0,0.5 L0,5.5 L6,3 z" fill={cfg.color} opacity="0.7" />
                  </marker>
                ))}
              </defs>

              {/* Background grid */}
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1e293b" strokeWidth="0.5" />
              </pattern>
              <rect width={CANVAS_W} height={CANVAS_H} fill="url(#grid)" />

              {/* Theory labels */}
              <text x="90" y="20" textAnchor="middle" className="text-xs" fill="#334155" fontSize="11" fontWeight="bold" fontFamily="monospace">UTI STAGES</text>
              <text x="290" y="20" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold" fontFamily="monospace">UTI CONCEPTS</text>
              <text x="530" y="20" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold" fontFamily="monospace">FORMALISMS</text>
              <text x="730" y="20" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold" fontFamily="monospace">UAIF COMPONENTS</text>
              <text x="960" y="20" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold" fontFamily="monospace">UAIF PILLARS</text>

              {/* Column dividers */}
              {[190, 410, 630, 845].map(x => (
                <line key={x} x1={x} y1={30} x2={x} y2={CANVAS_H - 10} stroke="#1e293b" strokeWidth="1" strokeDasharray="4,4" />
              ))}

              {/* Edges */}
              {visibleEdges.map(edge => {
                const src = getNodePos(edge.source)
                const tgt = getNodePos(edge.target)
                if (!src || !tgt) return null

                const cfg = EDGE_TYPES[edge.type] || EDGE_TYPES.LEADS_TO
                const isHighlighted = highlightEdgeIds.has(edge.id)
                const isActive = highlightEdgeIds.size > 0

                const dx = tgt.x - src.x
                const dy = tgt.y - src.y
                const len = Math.sqrt(dx * dx + dy * dy)
                const r = 18
                // Shorten line by node radius
                const ex = tgt.x - (r + 4) * dx / len
                const ey = tgt.y - (r + 4) * dy / len

                // Slight curve for cross-theory edges
                const isCross = edge.type === 'MOTIVATES'
                const mx = (src.x + tgt.x) / 2 + (isCross ? (tgt.y - src.y) * 0.1 : 0)
                const my = (src.y + tgt.y) / 2 + (isCross ? (src.x - tgt.x) * 0.1 : 0)

                const opacity = isActive
                  ? (isHighlighted ? 0.95 : 0.08)
                  : (isCross ? 0.3 : 0.5)

                return (
                  <g key={edge.id}>
                    <path
                      d={isCross ? `M ${src.x} ${src.y} Q ${mx} ${my} ${ex} ${ey}` : `M ${src.x} ${src.y} L ${ex} ${ey}`}
                      fill="none"
                      stroke={cfg.color}
                      strokeWidth={isHighlighted ? cfg.width + 1 : cfg.width}
                      strokeDasharray={cfg.dashed ? '5,4' : undefined}
                      markerEnd={`url(#arrow-${edge.type})`}
                      opacity={opacity}
                      style={{ transition: 'opacity 0.2s' }}
                    />
                  </g>
                )
              })}

              {/* Nodes */}
              {visibleNodes.map(node => {
                const cfg = NODE_TYPES[node.type] || NODE_TYPES.Concept
                const r = cfg.size
                const isSelected = selected === node.id
                const isHovered = hovered === node.id
                const isFocused = isSelected || isHovered
                const isNeighbor = highlightNodeIds.has(node.id)
                const isActive = highlightNodeIds.size > 0

                const opacity = isActive ? (isNeighbor ? 1 : 0.2) : 1

                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    style={{ cursor: 'pointer', opacity, transition: 'opacity 0.2s' }}
                    onClick={() => setSelected(selected === node.id ? null : node.id)}
                    onMouseEnter={() => setHovered(node.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Glow ring when selected */}
                    {isFocused && (
                      <circle r={r + 8} fill={node.accent || cfg.color} opacity="0.15" />
                    )}
                    {/* Node circle */}
                    <circle
                      r={r}
                      fill={node.accent || cfg.color}
                      fillOpacity={isFocused ? 0.9 : 0.7}
                      stroke={isFocused ? '#ffffff' : 'transparent'}
                      strokeWidth={2}
                    />
                    {/* Label */}
                    <text
                      textAnchor="middle"
                      dy="-2"
                      fontSize={node.type === 'Stage' || node.type === 'Pillar' ? 7.5 : 7}
                      fontWeight="bold"
                      fill="white"
                      fontFamily="monospace"
                      style={{ pointerEvents: 'none', userSelect: 'none' }}
                    >
                      {node.label.length > 14 ? node.label.slice(0, 13) + '…' : node.label}
                    </text>
                    {node.sublabel && (
                      <text
                        textAnchor="middle"
                        dy="8"
                        fontSize="5.5"
                        fill="rgba(255,255,255,0.6)"
                        fontFamily="sans-serif"
                        style={{ pointerEvents: 'none', userSelect: 'none' }}
                      >
                        {node.sublabel.length > 18 ? node.sublabel.slice(0, 17) + '…' : node.sublabel}
                      </text>
                    )}
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Legend */}
          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/30 p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Node Types</p>
                <div className="space-y-1">
                  {Object.entries(NODE_TYPES).map(([type, cfg]) => (
                    <div key={type} className="flex items-center gap-2 text-xs">
                      <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: cfg.color }} />
                      <span className="text-slate-400">{cfg.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Edge Types</p>
                <div className="space-y-1">
                  {Object.entries(EDGE_TYPES).slice(0, 8).map(([type, cfg]) => (
                    <div key={type} className="flex items-center gap-2 text-xs">
                      <svg width="20" height="8">
                        <line x1="0" y1="4" x2="20" y2="4" stroke={cfg.color} strokeWidth="1.5" strokeDasharray={cfg.dashed ? '3,2' : undefined} />
                      </svg>
                      <span className="text-slate-500">{cfg.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Edge Types (cont.)</p>
                <div className="space-y-1">
                  {Object.entries(EDGE_TYPES).slice(8).map(([type, cfg]) => (
                    <div key={type} className="flex items-center gap-2 text-xs">
                      <svg width="20" height="8">
                        <line x1="0" y1="4" x2="20" y2="4" stroke={cfg.color} strokeWidth="1.5" strokeDasharray={cfg.dashed ? '3,2' : undefined} />
                      </svg>
                      <span className="text-slate-500">{cfg.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detail panel */}
        <div className="xl:w-80 flex-shrink-0 space-y-4">
          {selectedNode ? (
            <div className="rounded-2xl border overflow-hidden sticky top-[108px]" style={{ borderColor: (selectedNode.accent || '#334155') + '50' }}>
              {/* Header */}
              <div className="px-5 py-4 border-b" style={{ backgroundColor: (selectedNode.accent || '#334155') + '15', borderColor: (selectedNode.accent || '#334155') + '30' }}>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full border"
                    style={{ color: selectedNode.accent || '#94a3b8', borderColor: (selectedNode.accent || '#94a3b8') + '40', backgroundColor: (selectedNode.accent || '#94a3b8') + '15' }}
                  >
                    {selectedNode.type}
                  </span>
                  <span className="text-xs text-slate-600">{selectedNode.theory.toUpperCase()}</span>
                </div>
                <h3 className="text-sm font-bold text-white">{selectedNode.label}</h3>
                {selectedNode.sublabel && <p className="text-xs text-slate-500 mt-0.5 font-mono">{selectedNode.sublabel}</p>}
              </div>

              {/* Description */}
              <div className="px-5 py-4">
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{selectedNode.description}</p>

                {/* Connected edges */}
                {connectedEdges.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3">Relationships ({connectedEdges.length})</p>
                    <div className="space-y-2">
                      {connectedEdges.map(edge => {
                        const isSource = edge.source === selectedNode.id
                        const otherId = isSource ? edge.target : edge.source
                        const other = nodes.find(n => n.id === otherId)
                        const cfg = EDGE_TYPES[edge.type]
                        if (!other) return null
                        return (
                          <button
                            key={edge.id}
                            onClick={() => setSelected(otherId)}
                            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors text-left"
                          >
                            <div className="flex-shrink-0 text-xs font-mono" style={{ color: cfg.color }}>
                              {isSource ? '→' : '←'}
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs text-slate-500 leading-none mb-0.5">{cfg.label}</p>
                              <p className="text-xs font-semibold text-white truncate">{other.label}</p>
                            </div>
                            <div className="w-2 h-2 rounded-full flex-shrink-0 ml-auto" style={{ backgroundColor: other.accent || '#64748b' }} />
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Deep dive link */}
                {selectedNode.ref && (
                  <Link
                    href={selectedNode.ref}
                    className="mt-4 flex items-center justify-between w-full px-3 py-2 rounded-lg text-xs border transition-colors"
                    style={{ backgroundColor: (selectedNode.accent || '#334155') + '15', borderColor: (selectedNode.accent || '#334155') + '30', color: selectedNode.accent || '#94a3b8' }}
                  >
                    Open full deep-dive
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/30 px-5 py-8 text-center sticky top-[108px]">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <p className="text-xs text-slate-600 font-semibold mb-1">Click any node</p>
              <p className="text-xs text-slate-700">to explore its definition and relationships in the knowledge graph</p>
            </div>
          )}

          {/* Ontology summary */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-4">Ontology Summary</p>
            <div className="space-y-3">
              {[
                { label: 'UTI Theory', count: nodes.filter(n => n.theory === 'uti').length, edges: edges.filter(e => {
                  const src = nodes.find(n => n.id === e.source)
                  const tgt = nodes.find(n => n.id === e.target)
                  return src?.theory === 'uti' && tgt?.theory === 'uti'
                }).length, color: '#8b5cf6' },
                { label: 'UAIF / ELG', count: nodes.filter(n => n.theory === 'uaif').length, edges: edges.filter(e => {
                  const src = nodes.find(n => n.id === e.source)
                  const tgt = nodes.find(n => n.id === e.target)
                  return src?.theory === 'uaif' && tgt?.theory === 'uaif'
                }).length, color: '#10b981' },
                { label: 'Shared / Bridge', count: nodes.filter(n => n.theory === 'shared').length, edges: edges.filter(e => e.type === 'MOTIVATES').length, color: '#f43f5e' },
              ].map(r => (
                <div key={r.label} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: r.color }} />
                    <span className="text-slate-400">{r.label}</span>
                  </div>
                  <span className="text-slate-600 font-mono">{r.count} nodes · {r.edges} edges</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-600">
              v1.0 · May 2026 · Subject to revision as theory evolves
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800/60 bg-slate-950/80 mt-4">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-2">
          <p className="text-xs text-slate-600">
            Knowledge Graph v1 ·{' '}
            <Link href="/" className="text-slate-500 hover:text-white transition-colors">Home</Link>
          </p>
          <p className="text-xs text-slate-700">© 2026 Vijayagopalan Raveendran</p>
        </div>
      </div>
    </div>
  )
}
