'use client'

import { useState } from 'react'

const TABS = [
  { id: 'overview',    label: 'Overview',       icon: '📋' },
  { id: 'concepts',    label: 'Core Concepts',  icon: '🧩' },
  { id: 'researchers', label: 'Researchers',    icon: '🔬' },
  { id: 'timeline',    label: 'Timeline',       icon: '📅' },
  { id: 'impact',      label: 'Impact',         icon: '🚀' },
]

export default function ElgDetailTabs({ pillar }) {
  const [active, setActive] = useState('overview')
  const d = pillar.detail
  const accent = pillar.accent

  return (
    <div>
      {/* Tab bar */}
      <div className="flex overflow-x-auto gap-1 pb-1 mb-8 border-b border-slate-800">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 border-b-2 -mb-px ${
              active === tab.id
                ? 'text-white border-current'
                : 'text-slate-500 border-transparent hover:text-slate-300'
            }`}
            style={active === tab.id ? { color: accent, borderColor: accent } : {}}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="min-h-[400px]">
        {active === 'overview'    && <OverviewTab d={d} accent={accent} />}
        {active === 'concepts'    && <ConceptsTab d={d} accent={accent} />}
        {active === 'researchers' && <ResearchersTab d={d} accent={accent} />}
        {active === 'timeline'    && <TimelineTab d={d} accent={accent} />}
        {active === 'impact'      && <ImpactTab d={d} accent={accent} />}
      </div>
    </div>
  )
}

/* ─── Overview ──────────────────────────────────────────────── */
function OverviewTab({ d, accent }) {
  const o = d.overview
  return (
    <div className="space-y-6">
      <div
        className="rounded-2xl p-6 border"
        style={{ backgroundColor: `${accent}0d`, borderColor: `${accent}30` }}
      >
        {o.insight && (
          <blockquote
            className="text-base italic font-semibold mb-4 pb-4 border-b"
            style={{ color: accent, borderColor: `${accent}30` }}
          >
            "{o.insight}"
          </blockquote>
        )}
        <p className="text-slate-300 leading-relaxed text-base">{o.summary}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <InfoCard title="Why This Matters" icon="💡" accent={accent}>
          <p className="text-slate-400 text-sm leading-relaxed">{o.why}</p>
        </InfoCard>
        <InfoCard title="Research Significance" icon="⭐" accent={accent}>
          <p className="text-slate-400 text-sm leading-relaxed">{o.significance}</p>
        </InfoCard>
      </div>
    </div>
  )
}

/* ─── Concepts ──────────────────────────────────────────────── */
function ConceptsTab({ d, accent }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-500 mb-6">
        {d.concepts.length} core concepts — select one to explore in depth.
      </p>
      {d.concepts.map((c, i) => (
        <div
          key={i}
          className="rounded-xl border overflow-hidden transition-all duration-200"
          style={{
            borderColor: open === i ? `${accent}50` : '#1e293b',
            backgroundColor: open === i ? `${accent}08` : 'transparent',
          }}
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left"
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: `${accent}20`, color: accent }}
              >
                {i + 1}
              </span>
              <span className="font-semibold text-white text-sm">{c.title}</span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${open === i ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-5 pb-5">
              <div className="h-px mb-4" style={{ backgroundColor: `${accent}20` }} />
              <p className="text-slate-300 text-sm leading-relaxed">{c.explanation}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/* ─── Researchers ───────────────────────────────────────────── */
function ResearchersTab({ d, accent }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-500 mb-6">
        Key researchers whose work underpins this pillar.
      </p>
      {d.researchers.map((r, i) => (
        <div
          key={i}
          className="rounded-xl p-5 border"
          style={{ borderColor: `${accent}25`, backgroundColor: `${accent}08` }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black"
              style={{ backgroundColor: `${accent}20`, color: accent }}
            >
              {r.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div>
              <p className="font-bold text-white text-base">{r.name}</p>
              <p className="text-xs font-semibold mt-0.5 mb-2" style={{ color: accent }}>{r.role}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{r.contribution}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── Timeline ──────────────────────────────────────────────── */
function TimelineTab({ d, accent }) {
  return (
    <div className="relative pl-8">
      <div
        className="absolute left-3 top-2 bottom-2 w-0.5 rounded-full"
        style={{ backgroundColor: `${accent}30` }}
      />
      <div className="space-y-6">
        {d.milestones.map((m, i) => (
          <div key={i} className="relative">
            <div
              className="absolute -left-5 top-1 w-3 h-3 rounded-full border-2 border-slate-950 flex-shrink-0"
              style={{ backgroundColor: accent }}
            />
            <div>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-md"
                style={{ backgroundColor: `${accent}20`, color: accent }}
              >
                {m.year}
              </span>
              <p className="text-slate-300 text-sm mt-1 leading-relaxed">{m.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Impact ────────────────────────────────────────────────── */
function ImpactTab({ d, accent }) {
  const imp = d.impact
  return (
    <div className="space-y-6">
      <InfoCard title="Summary" icon="🎯" accent={accent}>
        <p className="text-slate-300 text-sm leading-relaxed">{imp.summary}</p>
      </InfoCard>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: accent }}>
          Real-World Applications
        </h3>
        <div className="space-y-3">
          {imp.applications.map((app, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl px-4 py-3 border"
              style={{ borderColor: `${accent}20`, backgroundColor: `${accent}06` }}
            >
              <span
                className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold mt-0.5"
                style={{ backgroundColor: `${accent}20`, color: accent }}
              >
                {i + 1}
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">{app}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Shared ────────────────────────────────────────────────── */
function InfoCard({ title, icon, accent, children }) {
  return (
    <div
      className="rounded-xl p-5 border"
      style={{ borderColor: `${accent}25`, backgroundColor: `${accent}08` }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span>{icon}</span>
        <h3 className="text-sm font-bold text-white">{title}</h3>
      </div>
      {children}
    </div>
  )
}
