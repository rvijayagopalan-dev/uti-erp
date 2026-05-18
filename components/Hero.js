'use client'

import TimelineBar from './TimelineBar'

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-16 text-center">
        {/* Version badge */}
        <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 rounded-full px-4 py-1.5 mb-8 text-sm text-slate-400">
          <span className="w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse-slow" />
          Version 1.0 — Eternal Research Program
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight">
          The{' '}
          <span
            className="text-gradient"
            style={{
              backgroundImage: 'linear-gradient(135deg, #8b5cf6, #d946ef, #f43f5e)',
            }}
          >
            UTI Evolution
          </span>
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-slate-400 mb-2">
          The Journey to a Universal Theory of Intelligence
        </p>
        <p className="text-base text-slate-500 max-w-2xl mx-auto mb-12">
          From domain-specific knowledge silos to a unified, substrate-independent theory of intelligence —
          explore the 10 stages of the Eternal Research Program.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { value: '10', label: 'Evolution Stages' },
            { value: '2017', label: 'Journey Start' },
            { value: '2050+', label: 'Frontier' },
            { value: 'ERP', label: 'Final Form' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline bar */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
          <p className="text-xs text-slate-600 uppercase tracking-wider mb-4 font-semibold">
            Evolution Timeline
          </p>
          <TimelineBar />
        </div>
      </div>
    </div>
  )
}
