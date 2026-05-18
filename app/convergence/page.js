'use client'

import { useState } from 'react'
import Link from 'next/link'
import { bridges, PILLAR_META } from '../../components/convergenceData'
import { stages } from '../../components/data'
import { pillars } from '../../components/elgData'
import BackToTop from '../../components/BackToTop'

export default function ConvergencePage() {
  const [activeCell, setActiveCell] = useState(null) // { stageId, pillarId }
  const [highlightStage, setHighlightStage] = useState(null)
  const [highlightPillar, setHighlightPillar] = useState(null)

  function getConnection(stageId, pillarId) {
    const bridge = bridges.find(b => b.stageId === stageId)
    if (!bridge) return null
    return bridge.connections.find(c => c.pillarId === pillarId) || null
  }

  function getActiveBridgeText() {
    if (!activeCell) return null
    const bridge = bridges.find(b => b.stageId === activeCell.stageId)
    if (!bridge) return null
    const conn = bridge.connections.find(c => c.pillarId === activeCell.pillarId)
    return conn ? { bridge, conn } : null
  }

  const activeDetail = getActiveBridgeText()

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
            <span className="text-xs font-bold px-2 py-0.5 rounded-full border border-violet-800/50 bg-violet-950/40 text-violet-400">
              UTI
            </span>
            <span className="text-slate-600">×</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full border border-fuchsia-800/50 bg-fuchsia-950/40 text-fuchsia-400">
              UAIF
            </span>
            <span className="text-sm font-bold text-white ml-1">Convergence Map</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/#elg" className="text-xs px-3 py-1.5 rounded-lg bg-fuchsia-900/40 border border-fuchsia-800/50 text-fuchsia-400 hover:bg-fuchsia-900/60 transition-colors">
              ELG Pillars
            </Link>
            <Link href="/" className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors">
              UTI Stages
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[300px] rounded-full blur-3xl opacity-5" style={{ backgroundColor: '#8b5cf6' }} />
          <div className="absolute top-0 right-0 w-[600px] h-[300px] rounded-full blur-3xl opacity-5" style={{ backgroundColor: '#d946ef' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4">Convergence Map</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Two Frameworks,{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
              One Vision
            </span>
          </h1>
          <p className="text-slate-400 text-base max-w-3xl mx-auto leading-relaxed mb-10">
            <span className="text-violet-400 font-semibold">UTI</span> maps the 10-stage theoretical evolution of intelligence research — from pre-foundational domain silos to a universal theory.{' '}
            <span className="text-fuchsia-400 font-semibold">UAIF</span> is the architectural blueprint that implements that theory as a running system, with 7 integrated pillars.
            The matrix below shows exactly which stages establish the theoretical foundations for which pillars.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-violet-500 flex-shrink-0" />
              UTI stages (rows) — historical roadmap
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-fuchsia-500 flex-shrink-0" />
              UAIF pillars (columns) — architecture components
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-white flex-shrink-0" />
              Primary connection — direct implementation
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-slate-500 flex-shrink-0" />
              Secondary connection — conceptual foundation
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Matrix */}
        <div className="mb-16">
          <h2 className="text-lg font-bold text-white mb-6 text-center">Stage × Pillar Connection Matrix</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left px-4 py-3 w-52">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">UTI Stage</span>
                  </th>
                  {PILLAR_META.map(p => (
                    <th
                      key={p.id}
                      className="px-2 py-3 text-center cursor-pointer transition-colors duration-150"
                      style={{
                        backgroundColor: highlightPillar === p.id ? `${p.accent}15` : 'transparent',
                      }}
                      onMouseEnter={() => setHighlightPillar(p.id)}
                      onMouseLeave={() => setHighlightPillar(null)}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-base">{p.icon}</span>
                        <span className="text-xs font-bold" style={{ color: p.accent }}>{p.number}</span>
                        <span className="text-xs text-slate-500 leading-tight text-center max-w-[70px]">{p.label}</span>
                      </div>
                    </th>
                  ))}
                  <th className="px-4 py-3 w-16">
                    <span className="text-xs font-semibold text-slate-600">Links</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {bridges.map(b => {
                  const stage = stages.find(s => s.id === b.stageId)
                  return (
                    <tr
                      key={b.stageId}
                      className="transition-colors duration-150"
                      style={{
                        backgroundColor: highlightStage === b.stageId ? `${b.stageAccent}10` : 'transparent',
                      }}
                      onMouseEnter={() => setHighlightStage(b.stageId)}
                      onMouseLeave={() => setHighlightStage(null)}
                    >
                      {/* Stage label */}
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-base flex-shrink-0">{b.stageIcon}</span>
                          <div>
                            <span
                              className="text-xs font-bold px-1.5 py-0.5 rounded-md"
                              style={{ backgroundColor: `${b.stageAccent}20`, color: b.stageAccent }}
                            >
                              {b.stageNumber}
                            </span>
                            <p className="text-xs text-slate-300 mt-0.5 leading-tight font-medium">{b.stageTitle}</p>
                          </div>
                        </div>
                      </td>

                      {/* Pillar cells */}
                      {PILLAR_META.map(p => {
                        const conn = getConnection(b.stageId, p.id)
                        const isActive = activeCell?.stageId === b.stageId && activeCell?.pillarId === p.id
                        const isRowOrColHighlight = highlightStage === b.stageId || highlightPillar === p.id

                        return (
                          <td
                            key={p.id}
                            className="px-2 py-4 text-center"
                            style={{
                              backgroundColor: isActive
                                ? `${p.accent}25`
                                : isRowOrColHighlight && conn
                                ? `${p.accent}10`
                                : 'transparent',
                            }}
                          >
                            {conn ? (
                              <button
                                onClick={() =>
                                  setActiveCell(
                                    isActive ? null : { stageId: b.stageId, pillarId: p.id }
                                  )
                                }
                                className="mx-auto flex items-center justify-center transition-transform duration-150 hover:scale-125"
                                title={`${b.stageTitle} → ${p.label}`}
                              >
                                <span
                                  className="rounded-full"
                                  style={{
                                    width: conn.strength === 'primary' ? '14px' : '9px',
                                    height: conn.strength === 'primary' ? '14px' : '9px',
                                    backgroundColor: conn.strength === 'primary' ? p.accent : `${p.accent}70`,
                                    boxShadow: isActive ? `0 0 10px ${p.accent}80` : 'none',
                                  }}
                                />
                              </button>
                            ) : (
                              <span className="block w-1 h-1 rounded-full bg-slate-800 mx-auto" />
                            )}
                          </td>
                        )
                      })}

                      {/* Deep dive link */}
                      <td className="px-4 py-4 text-center">
                        <Link
                          href={`/stage/${b.stageId}`}
                          className="text-xs px-2 py-1 rounded-md transition-colors"
                          style={{ backgroundColor: `${b.stageAccent}20`, color: b.stageAccent }}
                        >
                          →
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Active cell detail panel */}
          {activeDetail && (
            <div
              className="mt-4 rounded-2xl p-6 border transition-all duration-300"
              style={{
                borderColor: `${PILLAR_META.find(p => p.id === activeCell.pillarId)?.accent}40`,
                backgroundColor: `${PILLAR_META.find(p => p.id === activeCell.pillarId)?.accent}08`,
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-lg">{activeDetail.bridge.stageIcon}</span>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${activeDetail.bridge.stageAccent}20`, color: activeDetail.bridge.stageAccent }}
                  >
                    Stage {activeDetail.bridge.stageNumber}
                  </span>
                  <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="text-lg">{PILLAR_META.find(p => p.id === activeCell.pillarId)?.icon}</span>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${PILLAR_META.find(p => p.id === activeCell.pillarId)?.accent}20`,
                      color: PILLAR_META.find(p => p.id === activeCell.pillarId)?.accent,
                    }}
                  >
                    Pillar {String(activeCell.pillarId).padStart(2, '0')}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full border"
                    style={{
                      color: activeDetail.conn.strength === 'primary' ? '#22c55e' : '#94a3b8',
                      borderColor: activeDetail.conn.strength === 'primary' ? '#22c55e40' : '#94a3b840',
                      backgroundColor: activeDetail.conn.strength === 'primary' ? '#22c55e10' : '#94a3b810',
                    }}
                  >
                    {activeDetail.conn.strength === 'primary' ? 'Primary connection' : 'Secondary connection'}
                  </span>
                </div>
                <button
                  onClick={() => setActiveCell(null)}
                  className="text-slate-500 hover:text-white transition-colors text-lg leading-none flex-shrink-0"
                >
                  ×
                </button>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{activeDetail.conn.bridge}</p>
              <div className="mt-4 flex gap-3">
                <Link
                  href={`/stage/${activeDetail.bridge.stageId}`}
                  className="text-xs px-3 py-1.5 rounded-lg transition-colors border"
                  style={{ backgroundColor: `${activeDetail.bridge.stageAccent}15`, borderColor: `${activeDetail.bridge.stageAccent}40`, color: activeDetail.bridge.stageAccent }}
                >
                  Stage {activeDetail.bridge.stageNumber} Deep Dive →
                </Link>
                <Link
                  href={`/pillar/${activeCell.pillarId}`}
                  className="text-xs px-3 py-1.5 rounded-lg transition-colors border"
                  style={{
                    backgroundColor: `${PILLAR_META.find(p => p.id === activeCell.pillarId)?.accent}15`,
                    borderColor: `${PILLAR_META.find(p => p.id === activeCell.pillarId)?.accent}40`,
                    color: PILLAR_META.find(p => p.id === activeCell.pillarId)?.accent,
                  }}
                >
                  Pillar {String(activeCell.pillarId).padStart(2, '0')} Deep Dive →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Bridge Cards */}
        <div>
          <h2 className="text-lg font-bold text-white mb-2 text-center">Bridge Analysis</h2>
          <p className="text-sm text-slate-500 text-center mb-10">
            How each UTI stage establishes foundations for specific UAIF pillars
          </p>

          <div className="space-y-8">
            {bridges.map(b => (
              <div key={b.stageId} className="rounded-2xl border border-slate-800 overflow-hidden">
                {/* Stage header */}
                <div
                  className="px-6 py-4 flex items-center gap-4 flex-wrap"
                  style={{ backgroundColor: `${b.stageAccent}10`, borderBottom: `1px solid ${b.stageAccent}25` }}
                >
                  <span className="text-2xl">{b.stageIcon}</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${b.stageAccent}20`, color: b.stageAccent }}
                    >
                      STAGE {b.stageNumber}
                    </span>
                    <h3 className="text-base font-bold text-white">{b.stageTitle}</h3>
                  </div>
                  <div className="ml-auto flex gap-2">
                    {b.connections.map(c => {
                      const pm = PILLAR_META.find(p => p.id === c.pillarId)
                      return (
                        <span
                          key={c.pillarId}
                          className="text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: `${pm.accent}20`, color: pm.accent }}
                        >
                          {pm.icon} P{String(c.pillarId).padStart(2, '0')}
                        </span>
                      )
                    })}
                  </div>
                </div>

                {/* Stage narrative */}
                <div className="px-6 pt-4 pb-2">
                  <p className="text-sm text-slate-400 leading-relaxed italic">{b.narrative}</p>
                </div>

                {/* Connection cards */}
                <div className="px-6 pb-6 grid sm:grid-cols-2 gap-4 mt-4">
                  {b.connections.map(c => {
                    const pm = PILLAR_META.find(p => p.id === c.pillarId)
                    const pillar = pillars.find(p => p.id === c.pillarId)
                    return (
                      <div
                        key={c.pillarId}
                        className="rounded-xl p-4 border"
                        style={{ borderColor: `${pm.accent}25`, backgroundColor: `${pm.accent}08` }}
                      >
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="text-base">{pm.icon}</span>
                          <span className="text-xs font-bold" style={{ color: pm.accent }}>
                            Pillar {pm.number} · {pm.label}
                          </span>
                          <span
                            className="text-xs px-1.5 py-0.5 rounded-md ml-auto"
                            style={{
                              color: c.strength === 'primary' ? '#22c55e' : '#94a3b8',
                              backgroundColor: c.strength === 'primary' ? '#22c55e15' : '#94a3b815',
                            }}
                          >
                            {c.strength}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed mb-3">{c.bridge}</p>
                        <Link
                          href={`/pillar/${c.pillarId}`}
                          className="text-xs font-semibold transition-colors"
                          style={{ color: pm.accent }}
                        >
                          Explore Pillar {pm.number} →
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <h2 className="text-base font-bold text-white mb-6 text-center">Convergence Summary</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { value: '10', label: 'UTI Stages', sub: 'Historical roadmap' },
              { value: '7', label: 'UAIF Pillars', sub: 'Architecture components' },
              { value: `${bridges.reduce((n, b) => n + b.connections.filter(c => c.strength === 'primary').length, 0)}`, label: 'Primary Bridges', sub: 'Direct implementations' },
              { value: `${bridges.reduce((n, b) => n + b.connections.filter(c => c.strength === 'secondary').length, 0)}`, label: 'Secondary Bridges', sub: 'Conceptual foundations' },
            ].map(s => (
              <div key={s.label} className="text-center rounded-xl p-4 border border-slate-700/50 bg-slate-800/30">
                <p className="text-3xl font-black text-white mb-0.5">{s.value}</p>
                <p className="text-xs font-semibold text-slate-300">{s.label}</p>
                <p className="text-xs text-slate-600 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-center">
            {[
              { icon: '🗺️', title: 'UTI as the Roadmap', text: 'Stages 00–09 trace how intelligence research evolved from domain silos through epistemic grounding, structural theory, cross-domain transfer, and simulation toward a universal theory. Each stage is both a historical milestone and a research program.' },
              { icon: '🔗', title: 'UAIF as the Architecture', text: 'The 7 UAIF pillars are not a roadmap — they are a simultaneous architectural blueprint. All 7 components must be integrated to produce the complete system. The pillars describe what the running system does, not the order in which it was theorized.' },
              { icon: '⚡', title: 'The Convergence', text: 'UTI stages establish the theoretical foundations that UAIF pillars implement. The research program (UTI) and the target architecture (UAIF) are two faces of the same insight: intelligence is substrate-independent, architecturally definable, and formally expressible as Sₜ₊₁ = F(Sₜ, Oₜ, Aₜ, Mₜ, Πₜ).' },
            ].map(c => (
              <div key={c.title} className="rounded-xl p-5 border border-slate-700/40 bg-slate-800/20">
                <p className="text-2xl mb-3">{c.icon}</p>
                <p className="text-sm font-bold text-white mb-2">{c.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800/60 bg-slate-950/80 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-600">
            Research by{' '}
            <a href="https://www.linkedin.com/in/rvijayagopalan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-medium">
              Vijayagopalan Raveendran
            </a>
          </p>
          <p className="text-xs text-slate-700">© 2026 UTI · UAIF · All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
