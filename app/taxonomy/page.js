'use client'

import { useState } from 'react'
import Link from 'next/link'
import { dimensions, STAGE_LABELS, PILLAR_LABELS } from '../../components/taxonomyData'
import BackToTop from '../../components/BackToTop'

export default function TaxonomyPage() {
  const [activeId, setActiveId] = useState(dimensions[0].id)
  const [search, setSearch] = useState('')

  const active = dimensions.find(d => d.id === activeId)

  const filteredNodes = search.trim()
    ? dimensions.flatMap(d => d.nodes.map(n => ({ ...n, dimTitle: d.title, dimAccent: d.accent })))
        .filter(n =>
          n.label.toLowerCase().includes(search.toLowerCase()) ||
          n.description.toLowerCase().includes(search.toLowerCase())
        )
    : active.nodes

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
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">UTI · UAIF Taxonomy</span>
          </div>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search concepts…"
            className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 placeholder-slate-600 focus:outline-none focus:border-slate-500 w-44"
          />
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[300px] rounded-full blur-3xl opacity-5" style={{ backgroundColor: '#8b5cf6' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-3">Classification Framework</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            UTI · UAIF{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Taxonomy</span>
          </h1>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            A systematic classification of intelligence types, cognitive operations, knowledge representations, reasoning paradigms, memory architectures, mathematical frameworks, substrates, and research methods across the UTI and UAIF frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { v: dimensions.reduce((n, d) => n + d.nodes.length, 0), l: 'Concepts' },
              { v: dimensions.length, l: 'Dimensions' },
              { v: Object.keys(STAGE_LABELS).length, l: 'UTI Stages' },
              { v: Object.keys(PILLAR_LABELS).length, l: 'UAIF Pillars' },
            ].map(s => (
              <div key={s.l} className="rounded-xl px-4 py-2 border border-slate-700/50 bg-slate-800/30 text-center">
                <p className="text-lg font-black text-white">{s.v}</p>
                <p className="text-xs text-slate-500">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 flex gap-8">
        {/* Sidebar: dimension selector */}
        {!search && (
          <aside className="hidden lg:flex flex-col gap-1 w-64 flex-shrink-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3 px-3">Dimensions</p>
            {dimensions.map(d => (
              <button
                key={d.id}
                onClick={() => setActiveId(d.id)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150 border"
                style={
                  activeId === d.id
                    ? { backgroundColor: `${d.accent}15`, borderColor: `${d.accent}40`, color: d.accent }
                    : { backgroundColor: 'transparent', borderColor: 'transparent', color: '#64748b' }
                }
              >
                <span className="text-lg">{d.icon}</span>
                <div>
                  <p className="text-xs font-semibold leading-tight">{d.title}</p>
                  <p className="text-xs opacity-60">{d.nodes.length} concepts</p>
                </div>
              </button>
            ))}
          </aside>
        )}

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {search ? (
            <div>
              <p className="text-sm text-slate-500 mb-6">
                {filteredNodes.length} result{filteredNodes.length !== 1 ? 's' : ''} for "{search}"
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {filteredNodes.map((node, i) => (
                  <TaxonomyNode key={i} node={node} accent={node.dimAccent || active.accent} />
                ))}
              </div>
            </div>
          ) : (
            <div>
              {/* Dimension header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{active.icon}</span>
                  <h2 className="text-2xl font-black text-white">{active.title}</h2>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{active.description}</p>
              </div>

              {/* Tier legend for hierarchy dimensions */}
              {active.nodes.some(n => n.tier) && (
                <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-1">
                  {[...new Set(active.nodes.map(n => n.tier))].sort().map(tier => (
                    <div key={tier} className="flex items-center gap-1.5 flex-shrink-0">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: `${active.accent}${Math.round(40 + tier * 20).toString(16).padStart(2, '0')}` }}
                      />
                      <span className="text-xs text-slate-500">Tier {tier}</span>
                    </div>
                  ))}
                  <span className="text-xs text-slate-600 ml-2">↑ increasing abstraction / capability</span>
                </div>
              )}

              {/* Nodes */}
              <div className="grid sm:grid-cols-2 gap-4">
                {active.nodes.map((node, i) => (
                  <TaxonomyNode key={i} node={node} accent={active.accent} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile dimension strip */}
      <div className="lg:hidden sticky bottom-0 bg-slate-950/95 border-t border-slate-800 px-4 py-2 flex gap-2 overflow-x-auto">
        {dimensions.map(d => (
          <button
            key={d.id}
            onClick={() => { setActiveId(d.id); setSearch('') }}
            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all"
            style={
              activeId === d.id && !search
                ? { backgroundColor: `${d.accent}20`, borderColor: `${d.accent}40`, color: d.accent }
                : { backgroundColor: 'transparent', borderColor: '#1e293b', color: '#64748b' }
            }
          >
            <span>{d.icon}</span>
            {d.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800/60 bg-slate-950/80 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-2">
          <p className="text-xs text-slate-600">
            Research by{' '}
            <a href="https://www.linkedin.com/in/rvijayagopalan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-medium">
              Vijayagopalan Raveendran
            </a>
          </p>
          <p className="text-xs text-slate-700">© 2026 UTI · UAIF Taxonomy</p>
        </div>
      </div>
    </div>
  )
}

function TaxonomyNode({ node, accent }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div
      className="rounded-xl border overflow-hidden transition-all duration-200"
      style={{ borderColor: expanded ? `${accent}40` : '#1e293b', backgroundColor: expanded ? `${accent}08` : 'transparent' }}
    >
      <button
        className="w-full text-left px-4 py-4"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            {node.tier && (
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black mt-0.5"
                style={{ backgroundColor: `${accent}20`, color: accent }}
              >
                {node.tier}
              </span>
            )}
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-bold text-white">{node.label}</p>
                {node.maturity && (
                  <MaturityBadge maturity={node.maturity} />
                )}
              </div>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed line-clamp-2">{node.description}</p>
            </div>
          </div>
          <svg
            className={`w-4 h-4 text-slate-600 flex-shrink-0 transition-transform duration-200 mt-1 ${expanded ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4">
          <div className="h-px mb-4" style={{ backgroundColor: `${accent}20` }} />
          <p className="text-xs text-slate-300 leading-relaxed mb-4">{node.description}</p>

          {node.formalDef && (
            <div className="rounded-lg px-3 py-2 mb-3 bg-slate-900/60 border border-slate-700/50">
              <p className="text-xs text-slate-500 mb-0.5">Formal definition</p>
              <p className="text-xs font-mono text-slate-200">{node.formalDef}</p>
            </div>
          )}

          {node.examples && (
            <div className="mb-3">
              <p className="text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-70" style={{ color: accent }}>Examples</p>
              <div className="flex flex-wrap gap-1">
                {node.examples.map(e => (
                  <span key={e} className="text-xs px-2 py-0.5 rounded-md text-slate-400" style={{ backgroundColor: `${accent}10`, border: `1px solid ${accent}20` }}>{e}</span>
                ))}
              </div>
            </div>
          )}

          {node.keyTools && (
            <div className="mb-3">
              <p className="text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-70" style={{ color: accent }}>Key Tools</p>
              <div className="flex flex-wrap gap-1">
                {node.keyTools.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-md text-slate-400" style={{ backgroundColor: `${accent}10`, border: `1px solid ${accent}20` }}>{t}</span>
                ))}
              </div>
            </div>
          )}

          {node.outputs && (
            <div className="mb-3">
              <p className="text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-70" style={{ color: accent }}>Research Outputs</p>
              <div className="flex flex-wrap gap-1">
                {node.outputs.map(o => (
                  <span key={o} className="text-xs px-2 py-0.5 rounded-md text-slate-400" style={{ backgroundColor: `${accent}10`, border: `1px solid ${accent}20` }}>{o}</span>
                ))}
              </div>
            </div>
          )}

          {node.tradeoffs && (
            <div className="rounded-lg px-3 py-2 mb-3 bg-amber-950/20 border border-amber-800/30">
              <p className="text-xs text-amber-400/80">{node.tradeoffs}</p>
            </div>
          )}

          {node.limitation && (
            <div className="rounded-lg px-3 py-2 mb-3 bg-rose-950/20 border border-rose-800/30">
              <p className="text-xs font-semibold text-rose-400/80 mb-0.5">Limitation</p>
              <p className="text-xs text-rose-300/60">{node.limitation}</p>
            </div>
          )}

          {node.biologicalAnalog && (
            <div className="rounded-lg px-3 py-2 mb-3 bg-emerald-950/20 border border-emerald-800/30">
              <p className="text-xs font-semibold text-emerald-400/80 mb-0.5">Biological analog</p>
              <p className="text-xs text-emerald-300/60">{node.biologicalAnalog}</p>
            </div>
          )}

          {/* UTI stage + UAIF pillar links */}
          <div className="flex flex-wrap gap-2 mt-3">
            {node.utiStages?.map(sid => {
              const s = STAGE_LABELS[sid]
              if (!s) return null
              return (
                <Link key={sid} href={`/stage/${sid}`} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border transition-colors hover:brightness-125"
                  style={{ backgroundColor: `${s.accent}15`, borderColor: `${s.accent}35`, color: s.accent }}>
                  UTI {s.number}
                </Link>
              )
            })}
            {node.uaiPillars?.map(pid => {
              const p = PILLAR_LABELS[pid]
              if (!p) return null
              return (
                <Link key={pid} href={`/pillar/${pid}`} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border transition-colors hover:brightness-125"
                  style={{ backgroundColor: `${p.accent}15`, borderColor: `${p.accent}35`, color: p.accent }}>
                  {p.icon} P{p.number}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

function MaturityBadge({ maturity }) {
  const colors = {
    'Deployed':        { bg: '#22c55e15', border: '#22c55e35', text: '#22c55e' },
    'Active Research': { bg: '#f59e0b15', border: '#f59e0b35', text: '#f59e0b' },
    'Early Research':  { bg: '#f59e0b15', border: '#f59e0b35', text: '#f59e0b' },
    'Theoretical':     { bg: '#8b5cf615', border: '#8b5cf635', text: '#8b5cf6' },
    'Vision':          { bg: '#d946ef15', border: '#d946ef35', text: '#d946ef' },
    'Foundational':    { bg: '#64748b15', border: '#64748b35', text: '#94a3b8' },
    'Core Tool':       { bg: '#0ea5e915', border: '#0ea5e935', text: '#0ea5e9' },
    'Advanced Tool':   { bg: '#6366f115', border: '#6366f135', text: '#818cf8' },
    'Specialized Tool':{ bg: '#14b8a615', border: '#14b8a635', text: '#14b8a6' },
    'Primary Method':  { bg: '#10b98115', border: '#10b98135', text: '#10b981' },
    'Primary Target':  { bg: '#10b98115', border: '#10b98135', text: '#10b981' },
    'Existence Proof': { bg: '#f43f5e15', border: '#f43f5e35', text: '#f43f5e' },
  }
  const c = colors[maturity] || colors['Theoretical']
  return (
    <span className="text-xs px-1.5 py-0.5 rounded-md font-semibold border" style={{ backgroundColor: c.bg, borderColor: c.border, color: c.text }}>
      {maturity}
    </span>
  )
}
