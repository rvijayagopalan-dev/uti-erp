'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import BackToTop from '../../components/BackToTop'
import {
  visionStatement,
  researchQuestions,
  primitiveQuestions,
  researchTopics,
  fields,
  problemCollective,
  MATURITY_LEVELS,
} from '../../components/problemSpaceData'

const TABS = [
  { id: 'rq',       label: 'Research Questions',  icon: '❓', count: researchQuestions.length },
  { id: 'pq',       label: 'Primitive Questions',  icon: '🔮', count: primitiveQuestions.length },
  { id: 'topics',   label: 'Research Topics',      icon: '🔬', count: researchTopics.length },
  { id: 'fields',   label: 'Fields',               icon: '🌐', count: fields.length },
  { id: 'problems', label: 'Problem Collective',   icon: '🗂️', count: problemCollective.length },
]

const STATUS_META = {
  open:    { label: 'Open',    color: '#f43f5e', bg: '#f43f5e15' },
  partial: { label: 'Partial', color: '#f59e0b', bg: '#f59e0b15' },
  answered:{ label: 'Answered',color: '#10b981', bg: '#10b98115' },
}

const CAT_META = {
  theoretical: { label: 'Theoretical', color: '#8b5cf6' },
  empirical:   { label: 'Empirical',   color: '#0ea5e9' },
  design:      { label: 'Design',      color: '#f97316' },
}

const RELEVANCE_META = {
  core:      { label: 'Core',      color: '#8b5cf6', bg: '#8b5cf615' },
  supporting:{ label: 'Supporting',color: '#0ea5e9', bg: '#0ea5e915' },
  adjacent:  { label: 'Adjacent',  color: '#64748b', bg: '#64748b15' },
}

function MaturityBar({ score, maturity }) {
  const m = MATURITY_LEVELS.find(l => l.id === maturity) || MATURITY_LEVELS[0]
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: m.bg, color: m.color }}>
          {m.label}
        </span>
        <span className="text-xs font-mono text-slate-500">{score}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${score}%`, backgroundColor: m.color }}
        />
      </div>
    </div>
  )
}

// ─── Research Questions Tab ───────────────────────────────────────────────────
function RQTab() {
  const [expanded, setExpanded] = useState(null)
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return researchQuestions
    return researchQuestions.filter(q => q.category === filter || q.status === filter)
  }, [filter])

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {['all', 'theoretical', 'empirical', 'design', 'open', 'partial', 'answered'].map(f => {
          const meta = CAT_META[f] || STATUS_META[f]
          const color = meta?.color || '#8b5cf6'
          const isActive = filter === f
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="text-xs px-3 py-1.5 rounded-lg font-semibold border transition-all duration-150 capitalize"
              style={isActive
                ? { backgroundColor: `${color}25`, borderColor: `${color}60`, color }
                : { backgroundColor: 'transparent', borderColor: '#1e293b', color: '#64748b' }
              }
            >
              {f === 'all' ? 'All' : (CAT_META[f]?.label || STATUS_META[f]?.label)}
            </button>
          )
        })}
      </div>

      <div className="space-y-3">
        {filtered.map((rq, i) => {
          const isOpen = expanded === rq.id
          const cat = CAT_META[rq.category]
          const status = STATUS_META[rq.status]
          return (
            <div
              key={rq.id}
              className="rounded-xl border transition-all duration-200"
              style={{
                borderColor: isOpen ? `${cat.color}50` : '#1e293b',
                backgroundColor: isOpen ? `${cat.color}08` : 'transparent',
              }}
            >
              <button
                className="w-full flex items-start gap-4 p-5 text-left"
                onClick={() => setExpanded(isOpen ? null : rq.id)}
              >
                <span
                  className="flex-shrink-0 text-xs font-black px-1.5 py-0.5 rounded-md mt-0.5 font-mono"
                  style={{ backgroundColor: `${cat.color}20`, color: cat.color }}
                >
                  {rq.id}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white leading-snug">{rq.question}</p>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: cat.color + '20', color: cat.color }}>{cat.label}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: status.bg, color: status.color }}>{status.label}</span>
                    {rq.relatedStages.map(s => (
                      <span key={s} className="text-xs px-1.5 py-0.5 rounded-md bg-slate-800 text-slate-500 font-mono">S{String(s - 1).padStart(2, '0')}</span>
                    ))}
                  </div>
                </div>
                <svg
                  className={`flex-shrink-0 w-4 h-4 text-slate-600 transition-transform duration-200 mt-1 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 space-y-5 border-t" style={{ borderColor: `${cat.color}20` }}>
                  <div className="pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: cat.color }}>Working Hypothesis</p>
                    <p className="text-sm text-slate-300 leading-relaxed italic border-l-2 pl-4" style={{ borderColor: cat.color + '50' }}>
                      {rq.hypothesis}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: cat.color }}>Sub-Questions</p>
                    <ul className="space-y-2">
                      {rq.subQuestions.map((sq, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cat.color }} />
                          {sq}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl p-4 border" style={{ borderColor: '#1e293b', backgroundColor: '#0f172a80' }}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">Why It Matters</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{rq.whyItMatters}</p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Primitive Questions Tab ──────────────────────────────────────────────────
function PQTab() {
  const [expanded, setExpanded] = useState(null)

  const DOMAIN_COLOR = {
    philosophy:          '#8b5cf6',
    metaphysics:         '#d946ef',
    'philosophy of science': '#f59e0b',
    'philosophy of mind':    '#0ea5e9',
    epistemology:        '#10b981',
    'complex systems':   '#f97316',
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-500 leading-relaxed max-w-3xl">
        Primitive questions are the foundational philosophical and scientific questions whose answers constrain or inform the entire UTI/UAIF research program — but which cannot be resolved by the program itself. Engaging them honestly clarifies the theory's assumptions and limits.
      </p>
      {primitiveQuestions.map((pq) => {
        const isOpen = expanded === pq.id
        const color = DOMAIN_COLOR[pq.domain] || '#8b5cf6'
        return (
          <div
            key={pq.id}
            className="rounded-xl border transition-all duration-200"
            style={{ borderColor: isOpen ? `${color}50` : '#1e293b', backgroundColor: isOpen ? `${color}06` : 'transparent' }}
          >
            <button
              className="w-full flex items-start gap-4 p-5 text-left"
              onClick={() => setExpanded(isOpen ? null : pq.id)}
            >
              <span
                className="flex-shrink-0 text-xs font-black px-1.5 py-0.5 rounded-md mt-0.5 font-mono"
                style={{ backgroundColor: `${color}20`, color }}
              >
                {pq.id}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white leading-snug">{pq.question}</p>
                <span
                  className="inline-block text-xs px-2 py-0.5 rounded-full font-semibold mt-2 capitalize"
                  style={{ backgroundColor: `${color}20`, color }}
                >
                  {pq.domain}
                </span>
              </div>
              <svg
                className={`flex-shrink-0 w-4 h-4 text-slate-600 transition-transform duration-200 mt-1 ${isOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 space-y-4 border-t" style={{ borderColor: `${color}20` }}>
                <div className="pt-4 grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color }}>Current Consensus</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{pq.currentConsensus}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color }}>Tension with UTI/UAIF</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{pq.tension}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color }}>Major Positions</p>
                  <div className="flex flex-wrap gap-2">
                    {pq.positions.map((pos, j) => (
                      <span key={j} className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-400">
                        {pos}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl p-4 border border-slate-800 bg-slate-900/50">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Why It Matters for UTI</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{pq.whyItMatters}</p>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─── Research Topics Tab ──────────────────────────────────────────────────────
function TopicsTab() {
  const [expanded, setExpanded] = useState(null)
  const [sortBy, setSortBy] = useState('id')

  const sorted = useMemo(() => {
    const arr = [...researchTopics]
    if (sortBy === 'maturity-asc') return arr.sort((a, b) => a.maturityScore - b.maturityScore)
    if (sortBy === 'maturity-desc') return arr.sort((a, b) => b.maturityScore - a.maturityScore)
    return arr.sort((a, b) => a.id.localeCompare(b.id))
  }, [sortBy])

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <p className="text-sm text-slate-500">
          {researchTopics.length} active research topics spanning Stages {Math.min(...researchTopics.flatMap(t => t.relatedStages))}–{Math.max(...researchTopics.flatMap(t => t.relatedStages))}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-600">Sort:</span>
          {[['id', 'Default'], ['maturity-asc', 'Least Mature'], ['maturity-desc', 'Most Mature']].map(([v, l]) => (
            <button
              key={v}
              onClick={() => setSortBy(v)}
              className="text-xs px-2.5 py-1 rounded-lg border transition-colors duration-150"
              style={sortBy === v
                ? { backgroundColor: '#8b5cf620', borderColor: '#8b5cf660', color: '#a78bfa' }
                : { backgroundColor: 'transparent', borderColor: '#1e293b', color: '#64748b' }
              }
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {sorted.map((rt) => {
          const isOpen = expanded === rt.id
          const matLevel = MATURITY_LEVELS.find(l => {
            if (rt.maturityScore <= 25) return l.id === 'nascent'
            if (rt.maturityScore <= 50) return l.id === 'emerging'
            if (rt.maturityScore <= 75) return l.id === 'developing'
            return l.id === 'mature'
          })
          const color = matLevel?.color || '#8b5cf6'

          return (
            <div
              key={rt.id}
              className="rounded-xl border transition-all duration-200"
              style={{ borderColor: isOpen ? `${color}50` : '#1e293b', backgroundColor: isOpen ? `${color}06` : 'transparent' }}
            >
              <button
                className="w-full flex items-start gap-4 p-5 text-left"
                onClick={() => setExpanded(isOpen ? null : rt.id)}
              >
                <span className="flex-shrink-0 text-xs font-black px-1.5 py-0.5 rounded-md mt-0.5 font-mono bg-slate-800 text-slate-500">{rt.id}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white">{rt.title}</p>
                  <div className="mt-2.5 max-w-xs">
                    <MaturityBar score={rt.maturityScore} maturity={matLevel?.id || 'nascent'} />
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                  <span className="text-xs text-slate-600">{rt.openProblems} open {rt.openProblems === 1 ? 'problem' : 'problems'}</span>
                  <svg
                    className={`w-4 h-4 text-slate-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 space-y-4 border-t" style={{ borderColor: `${color}20` }}>
                  <p className="text-sm text-slate-300 leading-relaxed pt-4">{rt.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Current Work</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{rt.currentWork}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Key Gap</p>
                      <p className="text-xs text-rose-400 leading-relaxed">{rt.gap}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {rt.relatedStages.map(s => (
                      <Link
                        key={s}
                        href={`/stage/${s}`}
                        className="text-xs px-2 py-0.5 rounded-md bg-violet-950/40 border border-violet-800/40 text-violet-400 hover:bg-violet-950/60 transition-colors duration-150 font-mono"
                      >
                        Stage {String(s - 1).padStart(2, '0')}
                      </Link>
                    ))}
                    {rt.relatedPillars.map(p => (
                      <Link
                        key={p}
                        href={`/pillar/${p}`}
                        className="text-xs px-2 py-0.5 rounded-md bg-fuchsia-950/40 border border-fuchsia-800/40 text-fuchsia-400 hover:bg-fuchsia-950/60 transition-colors duration-150"
                      >
                        Pillar {p}
                      </Link>
                    ))}
                    {rt.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-500">{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Fields Tab ───────────────────────────────────────────────────────────────
function FieldsTab() {
  const [expanded, setExpanded] = useState(null)
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(() => filter === 'all' ? fields : fields.filter(f => f.relevance === filter), [filter])

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {['all', 'core', 'supporting', 'adjacent'].map(r => {
          const meta = RELEVANCE_META[r]
          const color = meta?.color || '#8b5cf6'
          const isActive = filter === r
          return (
            <button
              key={r}
              onClick={() => setFilter(r)}
              className="text-xs px-3 py-1.5 rounded-lg font-semibold border capitalize transition-all duration-150"
              style={isActive
                ? { backgroundColor: `${color}25`, borderColor: `${color}60`, color }
                : { backgroundColor: 'transparent', borderColor: '#1e293b', color: '#64748b' }
              }
            >
              {r === 'all' ? 'All Fields' : RELEVANCE_META[r].label}
              {r !== 'all' && (
                <span className="ml-1.5 opacity-60">({fields.filter(f => f.relevance === r).length})</span>
              )}
            </button>
          )
        })}
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {filtered.map((f) => {
          const isOpen = expanded === f.id
          const rel = RELEVANCE_META[f.relevance]
          return (
            <div
              key={f.id}
              className="rounded-xl border transition-all duration-200 cursor-pointer"
              style={{ borderColor: isOpen ? `${rel.color}50` : '#1e293b', backgroundColor: isOpen ? `${rel.color}06` : 'transparent' }}
              onClick={() => setExpanded(isOpen ? null : f.id)}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{f.icon}</span>
                    <span className="text-sm font-bold text-white">{f.name}</span>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{ backgroundColor: rel.bg, color: rel.color }}
                  >
                    {rel.label}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{f.contribution}</p>
              </div>
              {isOpen && (
                <div className="px-4 pb-4 space-y-3 border-t" style={{ borderColor: `${rel.color}20` }}>
                  <div className="pt-3">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: rel.color }}>Contribution to UTI/UAIF</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{f.contribution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1.5 text-rose-400">Gap / Limitation</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{f.gap}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Key Figures</p>
                    <div className="flex flex-wrap gap-1.5">
                      {f.keyFigures.map(kf => (
                        <span key={kf} className="text-xs px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-400">{kf}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Problem Collective Tab ───────────────────────────────────────────────────
function ProblemsTab() {
  const [expanded, setExpanded] = useState(null)
  const [matFilter, setMatFilter] = useState('all')

  const filtered = useMemo(() =>
    matFilter === 'all' ? problemCollective : problemCollective.filter(p => p.maturity === matFilter),
    [matFilter]
  )

  const stats = useMemo(() => {
    const counts = {}
    MATURITY_LEVELS.forEach(l => { counts[l.id] = 0 })
    problemCollective.forEach(p => { counts[p.maturity]++ })
    return counts
  }, [])

  return (
    <div className="space-y-5">
      {/* Maturity legend + filter */}
      <div className="grid sm:grid-cols-4 gap-3">
        {MATURITY_LEVELS.map(m => (
          <button
            key={m.id}
            onClick={() => setMatFilter(matFilter === m.id ? 'all' : m.id)}
            className="rounded-xl p-3 border text-left transition-all duration-150"
            style={{
              borderColor: matFilter === m.id ? m.color : '#1e293b',
              backgroundColor: matFilter === m.id ? `${m.color}12` : 'transparent',
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold" style={{ color: m.color }}>{m.label}</span>
              <span className="text-xs font-mono text-slate-500">{stats[m.id]}</span>
            </div>
            <p className="text-xs text-slate-600">{m.range}</p>
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((pc) => {
          const isOpen = expanded === pc.id
          const matLevel = MATURITY_LEVELS.find(l => l.id === pc.maturity)
          const color = matLevel?.color || '#8b5cf6'
          return (
            <div
              key={pc.id}
              className="rounded-xl border transition-all duration-200"
              style={{ borderColor: isOpen ? `${color}50` : '#1e293b', backgroundColor: isOpen ? `${color}06` : 'transparent' }}
            >
              <button
                className="w-full flex items-start gap-4 p-5 text-left"
                onClick={() => setExpanded(isOpen ? null : pc.id)}
              >
                <span className="flex-shrink-0 text-xs font-black px-1.5 py-0.5 rounded-md mt-0.5 font-mono bg-slate-800 text-slate-500">{pc.id}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white leading-snug">{pc.title}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {pc.tags.map(tag => (
                      <span key={tag} className="text-xs px-1.5 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-500">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 flex-shrink-0 min-w-[90px]">
                  <MaturityBar score={pc.maturityScore} maturity={pc.maturity} />
                  <svg
                    className={`w-4 h-4 text-slate-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 space-y-5 border-t" style={{ borderColor: `${color}20` }}>
                  <p className="text-sm text-slate-300 leading-relaxed pt-4">{pc.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color }}>Current Approaches</p>
                      <ul className="space-y-1.5">
                        {pc.currentApproaches.map((a, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-slate-400">
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1" style={{ backgroundColor: color }} />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-rose-400">Limitations</p>
                      <ul className="space-y-1.5">
                        {pc.limitations.map((lim, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-slate-500">
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1 bg-rose-500/60" />
                            {lim}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-xl p-4 border" style={{ borderColor: `${color}25`, backgroundColor: `${color}08` }}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color }}>UTI/UAIF Relevance</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{pc.utiRelevance}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {pc.relatedStages.map(s => (
                      <Link
                        key={s}
                        href={`/stage/${s}`}
                        className="text-xs px-2 py-0.5 rounded-md bg-violet-950/40 border border-violet-800/40 text-violet-400 hover:bg-violet-950/60 transition-colors duration-150 font-mono"
                      >
                        Stage {String(s - 1).padStart(2, '0')}
                      </Link>
                    ))}
                    {pc.relatedPillars.map(p => (
                      <Link
                        key={p}
                        href={`/pillar/${p}`}
                        className="text-xs px-2 py-0.5 rounded-md bg-fuchsia-950/40 border border-fuchsia-800/40 text-fuchsia-400 hover:bg-fuchsia-950/60 transition-colors duration-150"
                      >
                        Pillar {p}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProblemSpacePage() {
  const [activeTab, setActiveTab] = useState('rq')

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
          <span className="text-sm font-bold text-white">Problem Space</span>
          <div />
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[700px] h-[400px] rounded-full blur-3xl opacity-5" style={{ backgroundColor: '#f97316' }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full blur-3xl opacity-5" style={{ backgroundColor: '#8b5cf6' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 pt-14 pb-10">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4 px-3 py-1 rounded-full border border-slate-800">
            Research Vision
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            {visionStatement.headline}
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-3xl mb-5">
            {visionStatement.coreProblem}
          </p>
          <p className="text-slate-300 text-sm leading-relaxed max-w-3xl border-l-2 border-orange-500/40 pl-4 italic">
            {visionStatement.motivation}
          </p>
        </div>

        {/* Aspiration cards */}
        <div className="max-w-4xl mx-auto px-4 pb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {visionStatement.aspirations.map((a, i) => (
              <div key={i} className="rounded-xl border border-orange-900/30 bg-orange-950/10 p-4">
                <div className="text-xl mb-2">{a.icon}</div>
                <p className="text-xs font-bold text-orange-300 mb-1">{a.label}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="max-w-4xl mx-auto px-4 pb-8">
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="text-center p-3 rounded-xl border transition-all duration-150"
                style={activeTab === tab.id
                  ? { borderColor: '#f9731650', backgroundColor: '#f9731610' }
                  : { borderColor: '#1e293b', backgroundColor: 'transparent' }
                }
              >
                <div className="text-lg mb-1">{tab.icon}</div>
                <div className="text-base font-black" style={{ color: activeTab === tab.id ? '#fb923c' : '#94a3b8' }}>{tab.count}</div>
                <div className="text-xs text-slate-600 leading-tight">{tab.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div className="sticky top-[53px] z-40 bg-slate-950/95 border-b border-slate-800/60 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-4 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-all duration-200 -mb-px"
                style={activeTab === tab.id
                  ? { color: '#fb923c', borderColor: '#f97316' }
                  : { color: '#64748b', borderColor: 'transparent' }
                }
              >
                <span>{tab.icon}</span>
                {tab.label}
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full"
                  style={activeTab === tab.id
                    ? { backgroundColor: '#f9731620', color: '#fb923c' }
                    : { backgroundColor: '#1e293b', color: '#475569' }
                  }
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {activeTab === 'rq'       && <RQTab />}
        {activeTab === 'pq'       && <PQTab />}
        {activeTab === 'topics'   && <TopicsTab />}
        {activeTab === 'fields'   && <FieldsTab />}
        {activeTab === 'problems' && <ProblemsTab />}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800/60 bg-slate-950/80 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-2">
          <p className="text-xs text-slate-600">UTI Evolution · Problem Space</p>
          <p className="text-xs text-slate-700">© 2026 Vijayagopalan Raveendran</p>
        </div>
      </div>
    </div>
  )
}
