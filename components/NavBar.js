'use client'

import { useState } from 'react'
import { stages } from './data'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-xs font-black text-white">
            UTI
          </div>
          <span className="text-sm font-bold text-white">UTI Evolution</span>
          <span className="text-xs bg-slate-800 border border-slate-700 text-slate-500 px-1.5 py-0.5 rounded-md font-mono">
            v1.0
          </span>
        </div>

        {/* Stage pills (desktop only) */}
        <div className="hidden md:flex items-center gap-1 overflow-x-auto">
          {stages.map(stage => (
            <a
              key={stage.id}
              href={`#stage-${stage.id}`}
              className="flex-shrink-0 text-xs px-2 py-1 rounded-lg text-slate-500 hover:text-white transition-colors duration-150"
            >
              <span className="font-mono">{stage.number}</span>
            </a>
          ))}
        </div>

        {/* Desktop nav links */}
        <div className="hidden sm:flex items-center gap-1.5">
          <a href="#elg" className="flex-shrink-0 text-xs bg-fuchsia-900/40 hover:bg-fuchsia-900/60 border border-fuchsia-800/50 text-fuchsia-400 px-2.5 py-1.5 rounded-lg transition-colors duration-150">ELG</a>
          <a href="/convergence" className="flex-shrink-0 text-xs bg-violet-900/40 hover:bg-violet-900/60 border border-violet-800/50 text-violet-400 px-2.5 py-1.5 rounded-lg transition-colors duration-150">Convergence</a>
          <a href="/taxonomy" className="flex-shrink-0 text-xs bg-emerald-900/40 hover:bg-emerald-900/60 border border-emerald-800/50 text-emerald-400 px-2.5 py-1.5 rounded-lg transition-colors duration-150">Taxonomy</a>
          <a href="/thesis" className="flex-shrink-0 text-xs bg-amber-900/40 hover:bg-amber-900/60 border border-amber-800/50 text-amber-400 px-2.5 py-1.5 rounded-lg transition-colors duration-150">Thesis</a>
          <a href="/glossary" className="flex-shrink-0 text-xs bg-sky-900/40 hover:bg-sky-900/60 border border-sky-800/50 text-sky-400 px-2.5 py-1.5 rounded-lg transition-colors duration-150">Glossary</a>
          <a href="/ontology" className="flex-shrink-0 text-xs bg-indigo-900/40 hover:bg-indigo-900/60 border border-indigo-800/50 text-indigo-400 px-2.5 py-1.5 rounded-lg transition-colors duration-150">KG</a>
          <a href="/problem-space" className="flex-shrink-0 text-xs bg-orange-900/40 hover:bg-orange-900/60 border border-orange-800/50 text-orange-400 px-2.5 py-1.5 rounded-lg transition-colors duration-150">Problems</a>
          <a href="#roadmap" className="flex-shrink-0 text-xs bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 px-2.5 py-1.5 rounded-lg transition-colors duration-150">Roadmap</a>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="sm:hidden flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors duration-150"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-4">
          {/* Stage jumps */}
          <div>
            <p className="text-xs text-slate-600 font-semibold uppercase tracking-wider mb-2">UTI Stages</p>
            <div className="flex flex-wrap gap-1.5">
              {stages.map(stage => (
                <a
                  key={stage.id}
                  href={`#stage-${stage.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs px-2 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white font-mono transition-colors duration-150"
                >
                  {stage.number}
                </a>
              ))}
            </div>
          </div>

          {/* Main links */}
          <div className="border-t border-slate-800 pt-4 space-y-1">
            <p className="text-xs text-slate-600 font-semibold uppercase tracking-wider mb-2">Navigation</p>
            <a href="#elg" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-sm text-fuchsia-400 py-2 px-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-150">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 flex-shrink-0" />
              ELG — Eternal Learning Graph
            </a>
            <a href="/convergence" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-sm text-violet-400 py-2 px-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-150">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
              Convergence Map
            </a>
            <a href="/taxonomy" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-sm text-emerald-400 py-2 px-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-150">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
              Taxonomy
            </a>
            <a href="/thesis" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-sm text-amber-400 py-2 px-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-150">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
              Research Thesis
            </a>
            <a href="/glossary" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-sm text-sky-400 py-2 px-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-150">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
              Glossary
            </a>
            <a href="/ontology" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-sm text-indigo-400 py-2 px-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-150">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
              Knowledge Graph
            </a>
            <a href="/problem-space" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-sm text-orange-400 py-2 px-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-150">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
              Problem Space
            </a>
            <a href="/research" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-sm text-rose-400 py-2 px-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-150">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
              Research Gaps
            </a>
            <a href="/about" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-sm text-slate-400 py-2 px-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-150">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500 flex-shrink-0" />
              About
            </a>
            <a href="#roadmap" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-sm text-slate-400 py-2 px-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-150">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500 flex-shrink-0" />
              Roadmap
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
