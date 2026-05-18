'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { thesis } from '../../components/thesisData'
import BackToTop from '../../components/BackToTop'

export default function ThesisPage() {
  const [activeSection, setActiveSection] = useState(thesis.sections[0].id)
  const [activeSubsection, setActiveSubsection] = useState(null)
  const contentRef = useRef(null)

  const currentSection = thesis.sections.find(s => s.id === activeSection)

  function renderContent(text) {
    return text.split('\n\n').map((para, i) => {
      if (para.startsWith('**') && para.includes('**')) {
        const parts = para.split(/(\*\*[^*]+\*\*)/g)
        return (
          <p key={i} className="text-slate-300 text-sm leading-relaxed mb-4">
            {parts.map((part, j) =>
              part.startsWith('**') && part.endsWith('**')
                ? <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>
                : part
            )}
          </p>
        )
      }
      return <p key={i} className="text-slate-300 text-sm leading-relaxed mb-4">{para}</p>
    })
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
          <span className="text-sm font-bold text-white truncate">Research Thesis</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600 hidden sm:block">{thesis.year}</span>
          </div>
        </div>
      </div>

      {/* Title page */}
      <div className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-3xl opacity-5" style={{ backgroundColor: '#8b5cf6' }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full blur-3xl opacity-5" style={{ backgroundColor: '#d946ef' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 pt-16 pb-14 text-center">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4 px-3 py-1 rounded-full border border-slate-800">
            PhD Research Thesis · {thesis.year}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">{thesis.title}</h1>
          <p className="text-slate-400 text-lg font-light mb-8 italic">{thesis.subtitle}</p>

          <div className="inline-flex flex-col items-center gap-1 mb-8">
            <p className="text-white font-bold text-base">{thesis.author}</p>
            <p className="text-slate-500 text-xs">{thesis.affiliation}</p>
          </div>

          {/* Abstract */}
          <div className="text-left max-w-3xl mx-auto rounded-2xl border border-violet-800/30 bg-violet-950/10 p-6 mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">Abstract</p>
            <p className="text-slate-300 text-sm leading-relaxed">{thesis.abstract}</p>
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap justify-center gap-2">
            {thesis.keywords.map(kw => (
              <span key={kw} className="text-xs px-2 py-0.5 rounded-full border border-slate-700 text-slate-500">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 flex gap-8">
        {/* Left sidebar: section TOC */}
        <aside className="hidden lg:flex flex-col gap-1 w-56 flex-shrink-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3 px-2">Contents</p>
          {thesis.sections.map(s => (
            <button
              key={s.id}
              onClick={() => { setActiveSection(s.id); setActiveSubsection(null) }}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-all duration-150 border text-xs"
              style={
                activeSection === s.id
                  ? { backgroundColor: '#8b5cf615', borderColor: '#8b5cf640', color: '#c4b5fd' }
                  : { backgroundColor: 'transparent', borderColor: 'transparent', color: '#64748b' }
              }
            >
              <span
                className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center font-black text-xs"
                style={activeSection === s.id ? { backgroundColor: '#8b5cf620', color: '#a78bfa' } : { backgroundColor: '#1e293b', color: '#475569' }}
              >
                {s.number}
              </span>
              <span className="font-semibold leading-tight">{s.title}</span>
            </button>
          ))}

          <div className="mt-6 pt-4 border-t border-slate-800">
            <p className="text-xs text-slate-600 px-2">Quick links</p>
            <Link href="/convergence" className="flex items-center gap-1.5 px-2 py-1.5 text-xs text-slate-500 hover:text-violet-400 transition-colors">
              ↗ Convergence Map
            </Link>
            <Link href="/taxonomy" className="flex items-center gap-1.5 px-2 py-1.5 text-xs text-slate-500 hover:text-violet-400 transition-colors">
              ↗ Taxonomy
            </Link>
          </div>
        </aside>

        {/* Main reading pane */}
        <div ref={contentRef} className="flex-1 min-w-0 max-w-3xl">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-800">
            <span className="text-3xl">{currentSection.icon}</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">Section {currentSection.number}</p>
              <h2 className="text-2xl font-black text-white">{currentSection.title}</h2>
            </div>
          </div>

          {/* Special: References section */}
          {currentSection.id === 'references' ? (
            <div className="space-y-3">
              <p className="text-xs text-slate-500 mb-6">{currentSection.refs.length} references cited in this thesis.</p>
              {currentSection.refs.map(ref => (
                <div key={ref.id} className="flex gap-3 text-xs leading-relaxed text-slate-400 py-2 border-b border-slate-800/50">
                  <span className="flex-shrink-0 w-6 text-right text-slate-600 font-mono">[{ref.id}]</span>
                  <span dangerouslySetInnerHTML={{
                    __html: ref.citation.replace(/\*(.*?)\*/g, '<em>$1</em>')
                  }} />
                </div>
              ))}
            </div>
          ) : (
            /* Regular subsection content */
            <div className="space-y-12">
              {currentSection.subsections.map((sub, i) => (
                <div key={i} id={`sub-${i}`}>
                  <h3 className="text-base font-bold text-white mb-4 pb-2 border-b border-slate-800/60">
                    {sub.title}
                  </h3>
                  <div className="prose-custom">
                    {renderContent(sub.content)}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Section navigation */}
          <div className="flex items-center justify-between mt-16 pt-6 border-t border-slate-800">
            {(() => {
              const idx = thesis.sections.findIndex(s => s.id === activeSection)
              const prev = thesis.sections[idx - 1]
              const next = thesis.sections[idx + 1]
              return (
                <>
                  {prev ? (
                    <button
                      onClick={() => setActiveSection(prev.id)}
                      className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      {prev.title}
                    </button>
                  ) : <div />}
                  {next && (
                    <button
                      onClick={() => setActiveSection(next.id)}
                      className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg border text-white transition-colors"
                      style={{ backgroundColor: '#8b5cf615', borderColor: '#8b5cf640', color: '#a78bfa' }}
                    >
                      {next.title}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </>
              )
            })()}
          </div>
        </div>

        {/* Right sidebar: subsection quick jump */}
        {currentSection.subsections && (
          <aside className="hidden xl:flex flex-col gap-1 w-52 flex-shrink-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3 px-2">In this section</p>
            {currentSection.subsections.map((sub, i) => (
              <a
                key={i}
                href={`#sub-${i}`}
                className="px-2 py-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors leading-snug rounded-lg hover:bg-slate-800/40"
              >
                {sub.title}
              </a>
            ))}
          </aside>
        )}
      </div>

      {/* Mobile section strip */}
      <div className="lg:hidden sticky bottom-0 bg-slate-950/95 border-t border-slate-800 px-4 py-2 flex gap-2 overflow-x-auto">
        {thesis.sections.map(s => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all"
            style={
              activeSection === s.id
                ? { backgroundColor: '#8b5cf620', borderColor: '#8b5cf640', color: '#a78bfa' }
                : { backgroundColor: 'transparent', borderColor: '#1e293b', color: '#64748b' }
            }
          >
            {s.icon} {s.number}
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
          <p className="text-xs text-slate-700">© {thesis.year} All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
