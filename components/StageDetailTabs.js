'use client'

import { useState } from 'react'
import { learnData } from './learnData'
import { getInsight } from './learnInsights'

const TABS = [
  { id: 'overview',   label: 'Overview',     icon: '📋' },
  { id: 'concepts',   label: 'Concepts',     icon: '🧩' },
  { id: 'milestones', label: 'Timeline',     icon: '📅' },
  { id: 'research',   label: 'Research',     icon: '🔬' },
  { id: 'build',      label: 'Build Path',   icon: '🔨' },
  { id: 'learn',      label: 'Learn',        icon: '🎓' },
]

export default function StageDetailTabs({ stage }) {
  const [active, setActive] = useState('overview')
  const d = stage.detail
  const accent = stage.accent

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
        {active === 'overview'   && <OverviewTab d={d} accent={accent} />}
        {active === 'concepts'   && <ConceptsTab d={d} accent={accent} />}
        {active === 'milestones' && <MilestonesTab d={d} accent={accent} />}
        {active === 'research'   && <ResearchTab d={d} accent={accent} stage={stage} />}
        {active === 'build'      && <BuildTab d={d} accent={accent} />}
        {active === 'learn'      && <LearnTab data={learnData[stage.id]} accent={accent} stageId={stage.id} />}
      </div>
    </div>
  )
}

/* ─── Overview ─────────────────────────────────────────────── */
function OverviewTab({ d, accent }) {
  const o = d.overview
  return (
    <div className="space-y-6">
      <div
        className="rounded-2xl p-6 border"
        style={{ backgroundColor: `${accent}0d`, borderColor: `${accent}30` }}
      >
        {o.insight && (
          <blockquote className="text-base italic font-semibold mb-4 pb-4 border-b" style={{ color: accent, borderColor: `${accent}30` }}>
            "{o.insight}"
          </blockquote>
        )}
        <p className="text-slate-300 leading-relaxed text-base">{o.summary}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <InfoCard title="Why It Happens" icon="💡" accent={accent}>
          <p className="text-slate-400 text-sm leading-relaxed">{o.why}</p>
        </InfoCard>
        <InfoCard title="Why It Matters" icon="⭐" accent={accent}>
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

/* ─── Milestones ────────────────────────────────────────────── */
function MilestonesTab({ d, accent }) {
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

/* ─── Research ───────────────────────────────────────────────── */
function ResearchTab({ d, accent, stage }) {
  const r = d.research
  return (
    <div className="space-y-6">
      {/* Key Insight */}
      <InfoCard title="Key Scientific Insight" icon="💎" accent={accent}>
        <p className="text-slate-300 text-sm leading-relaxed">{r.keyInsight}</p>
      </InfoCard>

      {/* Open Question */}
      <InfoCard title="Open Research Question" icon="❓" accent={accent}>
        <p className="text-slate-400 text-sm leading-relaxed italic">{r.openQuestion}</p>
      </InfoCard>

      {/* Foundational Papers */}
      {r.foundationalPapers && r.foundationalPapers.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: accent }}>
            Foundational Papers
          </h3>
          <div className="space-y-3">
            {r.foundationalPapers.map((p, i) => (
              <div
                key={i}
                className="rounded-xl p-4 border"
                style={{ borderColor: `${accent}25`, backgroundColor: `${accent}08` }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0"
                    style={{ backgroundColor: `${accent}20`, color: accent }}
                  >
                    {p.year.toString().slice(-2)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{p.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{p.authors} · {p.year}</p>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{p.significance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stage-specific grouped extras */}
      {stage.legitimacyRequirements && (
        <InfoCard title="Requirements for Scientific Legitimacy" icon="📐" accent={accent}>
          <ul className="space-y-1.5">
            {stage.legitimacyRequirements.map((req, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                {req}
              </li>
            ))}
          </ul>
        </InfoCard>
      )}
      {stage.publicationVenues && (
        <InfoCard title="Target Publication Venues" icon="📄" accent={accent}>
          <div className="flex flex-wrap gap-2">
            {stage.publicationVenues.map(v => (
              <span
                key={v}
                className="text-xs font-semibold px-2 py-0.5 rounded-md"
                style={{ backgroundColor: `${accent}15`, color: accent, border: `1px solid ${accent}30` }}
              >
                {v}
              </span>
            ))}
          </div>
        </InfoCard>
      )}
    </div>
  )
}

/* ─── Build Path ─────────────────────────────────────────────── */
function BuildTab({ d, accent }) {
  const [activeStep, setActiveStep] = useState(0)
  const steps = d.buildPath

  if (!steps || steps.length === 0) {
    return (
      <div className="text-center py-12 text-slate-600">
        Build path will be defined as theory matures.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-500 mb-6">
        A step-by-step path for building the capabilities described in this stage.
      </p>

      {/* Step selector */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border"
            style={
              activeStep === i
                ? { backgroundColor: `${accent}20`, borderColor: `${accent}50`, color: accent }
                : { backgroundColor: 'transparent', borderColor: '#1e293b', color: '#64748b' }
            }
          >
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-black"
              style={{ backgroundColor: activeStep === i ? accent : '#334155', color: activeStep === i ? '#fff' : '#94a3b8' }}
            >
              {s.step}
            </span>
            {s.title}
          </button>
        ))}
      </div>

      {/* Active step detail */}
      {steps[activeStep] && (
        <div
          className="rounded-2xl p-6 border"
          style={{ borderColor: `${accent}30`, backgroundColor: `${accent}08` }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black"
              style={{ backgroundColor: `${accent}25`, color: accent }}
            >
              {steps[activeStep].step}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: accent }}>
                Step {steps[activeStep].step}
              </p>
              <h3 className="text-base font-bold text-white">{steps[activeStep].title}</h3>
            </div>
          </div>

          <div
            className="rounded-xl px-4 py-3 mb-5 border"
            style={{ backgroundColor: `${accent}10`, borderColor: `${accent}25` }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Goal</p>
            <p className="text-sm text-white font-medium">{steps[activeStep].goal}</p>
          </div>

          <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: accent, opacity: 0.8 }}>
            Tasks
          </h4>
          <ul className="space-y-3">
            {steps[activeStep].tasks.map((task, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ backgroundColor: `${accent}20`, color: accent }}
                >
                  {i + 1}
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">{task}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Step progress bar */}
      <div className="flex items-center gap-2 pt-2">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: activeStep === i ? '2rem' : '0.5rem',
              backgroundColor: activeStep === i ? accent : '#334155',
            }}
          />
        ))}
        <span className="text-xs text-slate-600 ml-2">{activeStep + 1} / {steps.length}</span>
      </div>
    </div>
  )
}

/* ─── Learn ──────────────────────────────────────────────────── */
const LEARN_SECTIONS = [
  { key: 'books',    label: 'Books',             icon: '📚' },
  { key: 'articles', label: 'Articles',          icon: '📰' },
  { key: 'labs',     label: 'Labs & Universities', icon: '🏛️' },
  { key: 'papers',   label: 'Published Papers',  icon: '📄' },
  { key: 'code',     label: 'Code & Tools',      icon: '💻' },
  { key: 'diagrams', label: 'Visual Diagrams',   icon: '🗺️' },
]

function LearnTab({ data, accent, stageId }) {
  const [activeSection, setActiveSection] = useState('books')

  if (!data) {
    return (
      <div className="text-center py-12 text-slate-600">
        Learning resources coming soon for this stage.
      </div>
    )
  }

  const section = data[activeSection] || []

  return (
    <div className="space-y-6">
      {/* Section selector */}
      <div className="flex flex-wrap gap-2">
        {LEARN_SECTIONS.map(s => (
          <button
            key={s.key}
            onClick={() => setActiveSection(s.key)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border"
            style={
              activeSection === s.key
                ? { backgroundColor: `${accent}20`, borderColor: `${accent}50`, color: accent }
                : { backgroundColor: 'transparent', borderColor: '#1e293b', color: '#64748b' }
            }
          >
            <span>{s.icon}</span>
            {s.label}
            {data[s.key] && (
              <span
                className="ml-1 px-1.5 py-0.5 rounded-full text-xs font-bold"
                style={
                  activeSection === s.key
                    ? { backgroundColor: accent, color: '#fff' }
                    : { backgroundColor: '#1e293b', color: '#64748b' }
                }
              >
                {data[s.key].length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Section content */}
      {activeSection === 'books'    && <LearnBooks    items={section} accent={accent} stageId={stageId} />}
      {activeSection === 'articles' && <LearnArticles items={section} accent={accent} />}
      {activeSection === 'labs'     && <LearnLabs     items={section} accent={accent} />}
      {activeSection === 'papers'   && <LearnPapers   items={section} accent={accent} stageId={stageId} />}
      {activeSection === 'code'     && <LearnCode     items={section} accent={accent} />}
      {activeSection === 'diagrams' && <LearnDiagrams items={section} accent={accent} />}
    </div>
  )
}

function LearnBooks({ items, accent, stageId }) {
  const [expandedIdx, setExpandedIdx] = useState(null)
  const LEVEL_COLOR = { Beginner: '#22c55e', Intermediate: '#f59e0b', Advanced: '#ef4444', 'All levels': '#8b5cf6' }
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((b, i) => {
        const insight = getInsight(stageId, b.title)
        const isExpanded = expandedIdx === i
        return (
          <div
            key={i}
            className="rounded-xl border transition-all duration-200"
            style={{
              borderColor: isExpanded ? `${accent}55` : `${accent}25`,
              backgroundColor: isExpanded ? `${accent}10` : `${accent}08`,
            }}
          >
            <div className="flex items-start gap-3 p-4">
              <div
                className="w-10 h-12 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                style={{ backgroundColor: `${accent}20` }}
              >
                📚
              </div>
              <div className="min-w-0 flex-1">
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white text-sm leading-snug hover:underline block"
                >
                  {b.title}
                </a>
                <p className="text-xs text-slate-500 mt-0.5">{b.authors} · {b.year}</p>
                <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                  {b.level && (
                    <span
                      className="text-xs px-1.5 py-0.5 rounded-md font-semibold"
                      style={{ backgroundColor: `${LEVEL_COLOR[b.level] || accent}20`, color: LEVEL_COLOR[b.level] || accent }}
                    >
                      {b.level}
                    </span>
                  )}
                  {insight && (
                    <button
                      onClick={() => setExpandedIdx(isExpanded ? null : i)}
                      className="text-xs px-2 py-0.5 rounded-md font-semibold transition-colors duration-150"
                      style={isExpanded ? { backgroundColor: accent, color: '#fff' } : { backgroundColor: `${accent}20`, color: accent }}
                    >
                      {isExpanded ? 'Hide' : 'Deep Dive ▾'}
                    </button>
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{b.description}</p>
              </div>
            </div>
            {isExpanded && insight && (
              <div className="px-4 pb-4 border-t" style={{ borderColor: `${accent}20` }}>
                <div className="pt-4 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: accent }}>Synopsis</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{insight.synopsis}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: accent }}>Key Takeaways</p>
                    <ul className="space-y-1.5">
                      {insight.keyTakeaways.map((kt, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1" style={{ backgroundColor: accent }} />
                          {kt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function LearnArticles({ items, accent }) {
  return (
    <div className="space-y-3">
      {items.map((a, i) => (
        <a
          key={i}
          href={a.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 rounded-xl p-4 border transition-all duration-200 hover:-translate-y-0.5 block"
          style={{ borderColor: `${accent}20`, backgroundColor: `${accent}06` }}
        >
          <div
            className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-base"
            style={{ backgroundColor: `${accent}15` }}
          >
            📰
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-white text-sm group-hover:underline">{a.title}</p>
            <p className="text-xs text-slate-500 mt-0.5">{a.source}</p>
            {a.type && (
              <span
                className="inline-block text-xs px-1.5 py-0.5 rounded-md mt-1"
                style={{ backgroundColor: `${accent}15`, color: accent }}
              >
                {a.type}
              </span>
            )}
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{a.description}</p>
          </div>
        </a>
      ))}
    </div>
  )
}

function LearnLabs({ items, accent }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((lab, i) => (
        <a
          key={i}
          href={lab.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl p-4 border transition-all duration-200 hover:-translate-y-0.5 block"
          style={{ borderColor: `${accent}25`, backgroundColor: `${accent}08` }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🏛️</span>
            <span
              className="text-xs font-semibold px-1.5 py-0.5 rounded-md"
              style={{ backgroundColor: `${accent}15`, color: accent }}
            >
              {lab.type}
            </span>
          </div>
          <p className="font-semibold text-white text-sm group-hover:underline">{lab.name}</p>
          {lab.location && <p className="text-xs text-slate-500 mt-0.5">{lab.location}</p>}
          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{lab.focus}</p>
        </a>
      ))}
    </div>
  )
}

function LearnPapers({ items, accent, stageId }) {
  const [expandedIdx, setExpandedIdx] = useState(null)
  return (
    <div className="space-y-3">
      {items.map((p, i) => {
        const insight = p.mustRead ? getInsight(stageId, p.title) : null
        const isExpanded = expandedIdx === i
        return (
          <div
            key={i}
            className="rounded-xl border transition-all duration-200"
            style={{
              borderColor: isExpanded ? `${accent}60` : p.mustRead ? `${accent}50` : `${accent}20`,
              backgroundColor: isExpanded ? `${accent}12` : p.mustRead ? `${accent}10` : `${accent}06`,
            }}
          >
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 hover:-translate-y-0.5 transition-transform duration-200"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0"
                style={{ backgroundColor: `${accent}20`, color: accent }}
              >
                {p.year ? p.year.toString().slice(-2) : '??'}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-semibold text-white text-sm group-hover:underline">{p.title}</p>
                  {p.mustRead && (
                    <span
                      className="text-xs font-bold px-1.5 py-0.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: accent, color: '#fff' }}
                    >
                      Must Read
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{p.authors} · {p.year} · {p.venue}</p>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{p.description}</p>
              </div>
            </a>
            {insight && (
              <div className="px-4 pb-3 -mt-1">
                <button
                  onClick={() => setExpandedIdx(isExpanded ? null : i)}
                  className="text-xs px-2.5 py-1 rounded-md font-semibold transition-colors duration-150"
                  style={isExpanded ? { backgroundColor: accent, color: '#fff' } : { backgroundColor: `${accent}20`, color: accent }}
                >
                  {isExpanded ? 'Hide Insights ▴' : 'View Insights ▾'}
                </button>
              </div>
            )}
            {isExpanded && insight && (
              <div className="px-4 pb-4 border-t" style={{ borderColor: `${accent}20` }}>
                <div className="pt-4 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: accent }}>Synopsis</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{insight.synopsis}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: accent }}>Key Takeaways</p>
                    <ul className="space-y-1.5">
                      {insight.keyTakeaways.map((kt, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1" style={{ backgroundColor: accent }} />
                          {kt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function LearnCode({ items, accent }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((c, i) => (
        <a
          key={i}
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl p-4 border transition-all duration-200 hover:-translate-y-0.5 block"
          style={{ borderColor: `${accent}25`, backgroundColor: `${accent}08` }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">💻</span>
            {c.language && (
              <span className="text-xs px-1.5 py-0.5 rounded-md bg-slate-800 text-slate-400 font-mono">
                {c.language}
              </span>
            )}
            {c.platform && (
              <span
                className="text-xs px-1.5 py-0.5 rounded-md font-semibold"
                style={{ backgroundColor: `${accent}15`, color: accent }}
              >
                {c.platform}
              </span>
            )}
          </div>
          <p className="font-semibold text-white text-sm group-hover:underline">{c.title}</p>
          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{c.description}</p>
          {c.stars && (
            <p className="text-xs text-slate-600 mt-2">⭐ {c.stars}</p>
          )}
        </a>
      ))}
    </div>
  )
}

function LearnDiagrams({ items, accent }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((d, i) => (
        <a
          key={i}
          href={d.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl p-4 border transition-all duration-200 hover:-translate-y-0.5 block"
          style={{ borderColor: `${accent}25`, backgroundColor: `${accent}08` }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🗺️</span>
            {d.type && (
              <span
                className="text-xs px-1.5 py-0.5 rounded-md font-semibold"
                style={{ backgroundColor: `${accent}15`, color: accent }}
              >
                {d.type}
              </span>
            )}
          </div>
          <p className="font-semibold text-white text-sm group-hover:underline">{d.title}</p>
          {d.source && <p className="text-xs text-slate-500 mt-0.5">{d.source}</p>}
          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{d.description}</p>
        </a>
      ))}
    </div>
  )
}

/* ─── Shared ─────────────────────────────────────────────────── */
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
