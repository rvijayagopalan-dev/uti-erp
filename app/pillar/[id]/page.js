import Link from 'next/link'
import { notFound } from 'next/navigation'
import { pillars } from '../../../components/elgData'
import ElgDetailTabs from '../../../components/ElgDetailTabs'
import BackToTop from '../../../components/BackToTop'
import Breadcrumb from '../../../components/Breadcrumb'

export async function generateStaticParams() {
  return pillars.map(p => ({ id: String(p.id) }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const pillar = pillars.find(p => p.id === parseInt(id))
  if (!pillar) return {}
  return {
    title: `Pillar ${pillar.number}: ${pillar.title} — UAIF Eternal Learning Graph`,
    description: `${pillar.subtitle} — ${pillar.detail.overview.summary.slice(0, 150)}...`,
  }
}

export default async function PillarPage({ params }) {
  const { id } = await params
  const pillar = pillars.find(p => p.id === parseInt(id))
  if (!pillar) notFound()

  const prev = pillars.find(p => p.id === pillar.id - 1)
  const next = pillars.find(p => p.id === pillar.id + 1)

  return (
    <div className="min-h-screen">
      <BackToTop />
      {/* Top nav */}
      <div className="sticky top-0 z-50 bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link
            href="/#elg"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Pillars
          </Link>

          {/* Pillar pill nav */}
          <div className="hidden sm:flex items-center gap-1">
            {pillars.map(p => (
              <Link
                key={p.id}
                href={`/pillar/${p.id}`}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                  p.id === pillar.id
                    ? 'text-white scale-110 shadow-lg'
                    : 'text-slate-600 hover:text-slate-300 bg-slate-800/60'
                }`}
                style={p.id === pillar.id ? { backgroundColor: pillar.accent } : {}}
                title={p.title}
              >
                {p.number}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            {prev && (
              <Link
                href={`/pillar/${prev.id}`}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700"
              >
                ← {prev.number}
              </Link>
            )}
            {next && (
              <Link
                href={`/pillar/${next.id}`}
                className="text-xs px-3 py-1.5 rounded-lg text-white transition-colors border"
                style={{ backgroundColor: `${next.accent}20`, borderColor: `${next.accent}40`, color: next.accent }}
              >
                {next.number} →
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 pt-4 pb-1">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'ELG Pillars', href: '/#elg' },
          { label: `Pillar ${pillar.number}: ${pillar.title}` },
        ]} />
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: pillar.accent }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl opacity-5"
            style={{ backgroundColor: pillar.accent }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-12">
          {/* Number + UAIF badge */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-5xl font-black opacity-20 leading-none select-none"
              style={{ color: pillar.accent }}
            >
              {pillar.number}
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full border"
                style={{ backgroundColor: `${pillar.accent}20`, color: pillar.accent, borderColor: `${pillar.accent}40` }}
              >
                PILLAR {pillar.number} of 7
              </span>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full border"
                style={{ backgroundColor: `${pillar.accent}20`, color: pillar.accent, borderColor: `${pillar.accent}40` }}
              >
                UAIF / ELG
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-2">
            {pillar.icon} {pillar.title}
          </h1>
          <p className="text-lg text-slate-400 mb-6">{pillar.subtitle}</p>

          {/* Equation banner */}
          <div
            className="inline-flex items-center gap-3 rounded-xl px-4 py-3 mb-8"
            style={{ backgroundColor: `${pillar.accent}15`, border: `1px solid ${pillar.accent}35` }}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={pillar.accent}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <p className="text-sm font-mono font-bold" style={{ color: pillar.accent }}>{pillar.equation}</p>
              <p className="text-xs text-slate-500 mt-0.5">{pillar.equationLabel}</p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Pillar', value: `#${pillar.id} of ${pillars.length}` },
              { label: 'Concepts', value: `${pillar.detail.concepts.length} topics` },
              { label: 'Milestones', value: `${pillar.detail.milestones.length} events` },
              { label: 'Researchers', value: `${pillar.detail.researchers.length} people` },
            ].map(stat => (
              <div
                key={stat.label}
                className="rounded-xl p-3 border text-center"
                style={{ borderColor: `${pillar.accent}20`, backgroundColor: `${pillar.accent}08` }}
              >
                <p className="text-lg font-black text-white">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-4 pb-24">
        <ElgDetailTabs pillar={pillar} />
      </div>

      {/* Author credit */}
      <div className="border-t border-slate-800/60 bg-slate-950/80">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-600">
            UAIF Research by{' '}
            <a
              href="https://www.linkedin.com/in/rvijayagopalan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors font-medium"
            >
              Vijayagopalan Raveendran
            </a>
          </p>
          <p className="text-xs text-slate-700">© 2026 Eternal Learning Graph. All rights reserved.</p>
        </div>
      </div>

      {/* Next pillar CTA */}
      {next && (
        <div className="border-t border-slate-800 bg-slate-900/30">
          <div className="max-w-5xl mx-auto px-4 py-10">
            <p className="text-xs text-slate-600 uppercase tracking-widest mb-3 text-center">
              Connects To
            </p>
            <Link
              href={`/pillar/${next.id}`}
              className="group flex items-center justify-between rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: `${next.accent}30`, backgroundColor: `${next.accent}08` }}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${next.accent}20`, color: next.accent }}
                  >
                    PILLAR {next.number} · UAIF
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {next.icon} {next.title}
                </h3>
                <p className="text-sm mt-1" style={{ color: next.accent }}>
                  {next.subtitle}
                </p>
              </div>
              <svg
                className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0 ml-4"
                style={{ color: next.accent }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
