'use client'

import Link from 'next/link'

export default function ElgPillarCard({ pillar }) {
  return (
    <div id={`pillar-${pillar.id}`}>
      <div
        className={`relative rounded-2xl border ${pillar.border} bg-gradient-to-br ${pillar.bg} p-6 card-hover glass overflow-hidden h-full`}
        style={{ boxShadow: `0 4px 30px ${pillar.accent}12` }}
      >
        {/* Pillar number watermark */}
        <span className="absolute top-4 right-4 text-7xl font-black opacity-5 text-white select-none leading-none">
          {pillar.number}
        </span>

        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div
            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
            style={{ backgroundColor: `${pillar.accent}25` }}
          >
            {pillar.icon}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${pillar.badge}`}>
                PILLAR {pillar.number}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1">{pillar.title}</h3>
            <p className="text-xs text-slate-500 mt-0.5">{pillar.subtitle}</p>
          </div>
        </div>

        {/* Equation */}
        <div
          className="rounded-xl p-3 mb-4"
          style={{ backgroundColor: `${pillar.accent}10`, border: `1px solid ${pillar.accent}25` }}
        >
          <p className="text-xs font-mono font-semibold text-center" style={{ color: pillar.accent }}>
            {pillar.equation}
          </p>
          <p className="text-xs text-slate-500 text-center mt-0.5">{pillar.equationLabel}</p>
        </div>

        {/* Capabilities */}
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-70" style={{ color: pillar.accent }}>
            Key Capabilities
          </p>
          <div className="flex flex-wrap gap-1">
            {pillar.capabilities.map(cap => (
              <span
                key={cap}
                className="text-xs px-2 py-0.5 rounded-md text-slate-300"
                style={{ backgroundColor: `${pillar.accent}12`, border: `1px solid ${pillar.accent}25` }}
              >
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="rounded-xl p-3 mb-4 bg-slate-900/40 border border-slate-700/40">
          <p className="text-xs text-slate-400 italic leading-relaxed">
            "{pillar.quote}"
          </p>
          <p className="text-xs text-slate-600 mt-1">— {pillar.quoteSource}</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          {pillar.connection && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-600">Connects to</span>
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${pillar.accent}20`, color: pillar.accent, border: `1px solid ${pillar.accent}40` }}
              >
                {pillar.connection} →
              </span>
            </div>
          )}
          <Link
            href={`/pillar/${pillar.id}`}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 hover:scale-105 ml-auto"
            style={{
              backgroundColor: `${pillar.accent}20`,
              color: pillar.accent,
              border: `1px solid ${pillar.accent}40`,
            }}
          >
            Deep Dive
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
