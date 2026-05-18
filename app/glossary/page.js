'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { terms, categories } from '../../components/glossaryData'
import BackToTop from '../../components/BackToTop'

export default function GlossaryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [expandedId, setExpandedId] = useState(null)

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return terms.filter(t => {
      const catMatch = activeCategory === 'all' || t.category === activeCategory
      if (!catMatch) return false
      if (!q) return true
      return t.term.toLowerCase().includes(q) || t.short.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
    })
  }, [activeCategory, search])

  const catColor = id => categories.find(c => c.id === id)?.color ?? '#64748b'
  const catLabel = id => categories.find(c => c.id === id)?.label ?? id

  const grouped = useMemo(() => {
    const map = {}
    for (const t of filtered) {
      const key = t.term[0].toUpperCase()
      if (!map[key]) map[key] = []
      map[key].push(t)
    }
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b))
  }, [filtered])

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
          <span className="text-sm font-bold text-white">Glossary</span>
          <span className="text-xs text-slate-600">{terms.length} terms</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] rounded-full blur-3xl opacity-5" style={{ backgroundColor: '#0ea5e9' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 pt-12 pb-10 text-center">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-slate-600 mb-3 px-3 py-1 rounded-full border border-slate-800">
            Reference
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">Glossary</h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8">
            {terms.length} key terms from the UTI research program, UAIF framework, and related fields — with formal definitions and cross-references.
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search terms..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-600 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar: categories */}
        <aside className="hidden lg:flex flex-col gap-1 w-48 flex-shrink-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3 px-2">Category</p>
          <button
            onClick={() => setActiveCategory('all')}
            className="flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-all duration-150 border"
            style={activeCategory === 'all'
              ? { backgroundColor: '#0ea5e915', borderColor: '#0ea5e940', color: '#7dd3fc' }
              : { backgroundColor: 'transparent', borderColor: 'transparent', color: '#64748b' }}
          >
            <span className="font-semibold">All Categories</span>
            <span className="text-slate-600 text-xs">{terms.length}</span>
          </button>
          {categories.map(cat => {
            const count = terms.filter(t => t.category === cat.id).length
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-all duration-150 border"
                style={activeCategory === cat.id
                  ? { backgroundColor: cat.color + '15', borderColor: cat.color + '40', color: cat.color }
                  : { backgroundColor: 'transparent', borderColor: 'transparent', color: '#64748b' }}
              >
                <span className="font-semibold leading-tight">{cat.label}</span>
                <span className="text-slate-600">{count}</span>
              </button>
            )
          })}
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Mobile category strip */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-4">
            <button
              onClick={() => setActiveCategory('all')}
              className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full border transition-colors"
              style={activeCategory === 'all'
                ? { backgroundColor: '#0ea5e920', borderColor: '#0ea5e950', color: '#7dd3fc' }
                : { backgroundColor: 'transparent', borderColor: '#1e293b', color: '#64748b' }}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full border transition-colors"
                style={activeCategory === cat.id
                  ? { backgroundColor: cat.color + '20', borderColor: cat.color + '50', color: cat.color }
                  : { backgroundColor: 'transparent', borderColor: '#1e293b', color: '#64748b' }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-600">
              <p className="text-lg font-semibold mb-2">No terms found</p>
              <p className="text-sm">Try a different search or category filter</p>
            </div>
          ) : (
            <div className="space-y-10">
              {grouped.map(([letter, letterTerms]) => (
                <div key={letter}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-black text-slate-700">{letter}</span>
                    <div className="flex-1 h-px bg-slate-800" />
                  </div>
                  <div className="space-y-2">
                    {letterTerms.map(term => {
                      const isOpen = expandedId === term.id
                      const color = catColor(term.category)
                      return (
                        <div
                          key={term.id}
                          className="rounded-xl border transition-all duration-200"
                          style={isOpen
                            ? { backgroundColor: color + '08', borderColor: color + '30' }
                            : { backgroundColor: '#0f172a', borderColor: '#1e293b' }}
                        >
                          <button
                            onClick={() => setExpandedId(isOpen ? null : term.id)}
                            className="w-full flex items-center gap-3 px-4 py-3 text-left"
                          >
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                            <span className="flex-1 min-w-0">
                              <span className="text-sm font-bold text-white block">{term.term}</span>
                              <span className="text-xs text-slate-500 leading-snug">{term.short}</span>
                            </span>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className="hidden sm:block text-xs px-2 py-0.5 rounded-full border" style={{ color, borderColor: color + '40', backgroundColor: color + '15' }}>
                                {catLabel(term.category)}
                              </span>
                              <svg
                                className="w-3.5 h-3.5 text-slate-600 transition-transform duration-200"
                                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </button>

                          {isOpen && (
                            <div className="px-4 pb-4 pt-0">
                              <div className="border-t border-slate-800/60 pt-4">
                                <p className="text-slate-300 text-sm leading-relaxed mb-4">{term.definition}</p>

                                {/* Related terms */}
                                {term.related?.length > 0 && (
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider">Related:</span>
                                    {term.related.map(relId => {
                                      const rel = terms.find(t => t.id === relId)
                                      if (!rel) return null
                                      return (
                                        <button
                                          key={relId}
                                          onClick={() => {
                                            setExpandedId(relId)
                                            setSearch('')
                                            setActiveCategory('all')
                                            setTimeout(() => {
                                              document.getElementById(`term-${relId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                            }, 50)
                                          }}
                                          className="text-xs px-2 py-0.5 rounded-full border transition-colors hover:text-white"
                                          style={{ borderColor: '#334155', color: '#64748b' }}
                                        >
                                          {rel.term}
                                        </button>
                                      )
                                    })}
                                  </div>
                                )}

                                {/* Deep dive links */}
                                {(term.stageId || term.pillarId) && (
                                  <div className="flex gap-2 mt-3">
                                    {term.stageId && (
                                      <Link
                                        href={`/stage/${term.stageId}`}
                                        className="text-xs px-2.5 py-1 rounded-lg border border-violet-800/40 bg-violet-900/20 text-violet-400 hover:bg-violet-900/40 transition-colors"
                                      >
                                        → UTI Stage {String(term.stageId - 1).padStart(2, '0')} Deep Dive
                                      </Link>
                                    )}
                                    {term.pillarId && (
                                      <Link
                                        href={`/pillar/${term.pillarId}`}
                                        className="text-xs px-2.5 py-1 rounded-lg border border-fuchsia-800/40 bg-fuchsia-900/20 text-fuchsia-400 hover:bg-fuchsia-900/40 transition-colors"
                                      >
                                        → ELG Pillar {term.pillarId} Deep Dive
                                      </Link>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right sidebar: alpha index */}
        <aside className="hidden xl:flex flex-col gap-0.5 w-10 flex-shrink-0">
          <p className="text-xs text-slate-700 mb-2 writing-mode-vertical text-center">A–Z</p>
          {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => {
            const exists = grouped.some(([k]) => k === l)
            return (
              <a
                key={l}
                href={exists ? `#letter-${l}` : undefined}
                className="text-xs text-center py-0.5 transition-colors"
                style={{ color: exists ? '#475569' : '#1e293b', cursor: exists ? 'pointer' : 'default' }}
              >
                {l}
              </a>
            )
          })}
        </aside>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800/60 bg-slate-950/80 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-2">
          <p className="text-xs text-slate-600">
            UTI Research Program ·{' '}
            <Link href="/" className="text-slate-500 hover:text-white transition-colors">Home</Link>
          </p>
          <p className="text-xs text-slate-700">{terms.length} terms · © 2026</p>
        </div>
      </div>
    </div>
  )
}
