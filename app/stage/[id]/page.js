import Link from 'next/link'
import { notFound } from 'next/navigation'
import { stages } from '../../../components/data'
import StageDetailTabs from '../../../components/StageDetailTabs'
import BackToTop from '../../../components/BackToTop'
import Breadcrumb from '../../../components/Breadcrumb'

export async function generateStaticParams() {
  return stages.map(s => ({ id: String(s.id) }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const stage = stages.find(s => s.id === parseInt(id))
  if (!stage) return {}
  return {
    title: `Stage ${stage.number}: ${stage.title} (${stage.years}) — UTI Evolution`,
    description: `${stage.breakthrough} — ${stage.detail.overview.summary.slice(0, 150)}...`,
  }
}

export default async function StagePage({ params }) {
  const { id } = await params
  const stage = stages.find(s => s.id === parseInt(id))
  if (!stage) notFound()

  const prev = stages.find(s => s.id === stage.id - 1)
  const next = stages.find(s => s.id === stage.id + 1)

  return (
    <div className="min-h-screen">
      <BackToTop />
      {/* Top nav */}
      <div className="sticky top-0 z-50 bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Stages
          </Link>

          {/* Stage pill nav */}
          <div className="hidden sm:flex items-center gap-1">
            {stages.map(s => (
              <Link
                key={s.id}
                href={`/stage/${s.id}`}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                  s.id === stage.id
                    ? 'text-white scale-110 shadow-lg'
                    : 'text-slate-600 hover:text-slate-300 bg-slate-800/60'
                }`}
                style={s.id === stage.id ? { backgroundColor: stage.accent } : {}}
                title={s.title}
              >
                {s.number}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            {prev && (
              <Link
                href={`/stage/${prev.id}`}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700"
              >
                ← {prev.number}
              </Link>
            )}
            {next && (
              <Link
                href={`/stage/${next.id}`}
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
          { label: 'Stages', href: '/#stage-1' },
          { label: `Stage ${stage.number}: ${stage.title}` },
        ]} />
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: stage.accent }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl opacity-5"
            style={{ backgroundColor: stage.accent }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-12">
          {/* Number + badges */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-5xl font-black opacity-20 leading-none select-none"
              style={{ color: stage.accent }}
            >
              {stage.number}
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full border"
                style={{ backgroundColor: `${stage.accent}20`, color: stage.accent, borderColor: `${stage.accent}40` }}
              >
                {stage.years}
              </span>
              {stage.abbrev && (
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full border"
                  style={{ backgroundColor: `${stage.accent}20`, color: stage.accent, borderColor: `${stage.accent}40` }}
                >
                  {stage.abbrev}
                </span>
              )}
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
            {stage.icon} {stage.title}
          </h1>

          {/* Breakthrough banner */}
          <div
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 mb-8"
            style={{ backgroundColor: `${stage.accent}15`, border: `1px solid ${stage.accent}35` }}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={stage.accent}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-semibold" style={{ color: stage.accent }}>
              Breakthrough: {stage.breakthrough}
            </span>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Stage', value: `#${stage.id} of ${stages.length}` },
              { label: 'Period', value: stage.years },
              { label: 'Concepts', value: `${stage.detail.concepts.length} topics` },
              { label: 'Milestones', value: `${stage.detail.milestones.length} events` },
            ].map(stat => (
              <div
                key={stat.label}
                className="rounded-xl p-3 border text-center"
                style={{ borderColor: `${stage.accent}20`, backgroundColor: `${stage.accent}08` }}
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
        <StageDetailTabs stage={stage} />
      </div>

      {/* Author credit */}
      <div className="border-t border-slate-800/60 bg-slate-950/80">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-600">
            Research by{' '}
            <a
              href="https://www.linkedin.com/in/rvijayagopalan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors font-medium"
            >
              Vijayagopalan Raveendran
            </a>
          </p>
          <p className="text-xs text-slate-700">© 2026 UTI Evolution. All rights reserved.</p>
        </div>
      </div>

      {/* Next stage CTA */}
      {next && (
        <div className="border-t border-slate-800 bg-slate-900/30">
          <div className="max-w-5xl mx-auto px-4 py-10">
            <p className="text-xs text-slate-600 uppercase tracking-widest mb-3 text-center">
              This Stage Leads To
            </p>
            <Link
              href={`/stage/${next.id}`}
              className="group flex items-center justify-between rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: `${next.accent}30`, backgroundColor: `${next.accent}08` }}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${next.accent}20`, color: next.accent }}
                  >
                    STAGE {next.number} · {next.years}
                  </span>
                  {next.abbrev && (
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${next.accent}20`, color: next.accent }}
                    >
                      {next.abbrev}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {next.icon} {next.title}
                </h3>
                <p className="text-sm mt-1" style={{ color: next.accent }}>
                  Breakthrough: {next.breakthrough}
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
