import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import StageCard from '../components/StageCard'
import NextFrontier from '../components/NextFrontier'
import ElgPillarCard from '../components/ElgPillarCard'
import UaifPipeline from '../components/UaifPipeline'
import BackToTop from '../components/BackToTop'
import { stages } from '../components/data'
import { pillars, elgMeta } from '../components/elgData'

export default function Home() {
  return (
    <main className="min-h-screen">
      <BackToTop />
      <NavBar />
      <Hero />

      {/* Stages Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-3">
            The Ten Stages
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Evolution by Breakthrough
          </h2>
        </div>

        {/* Timeline vertical line */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-violet-600/20 via-fuchsia-600/20 to-indigo-600/20" />
          <div className="space-y-12">
            {stages.map((stage, index) => (
              <StageCard key={stage.id} stage={stage} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ELG Section */}
      <section id="elg" className="max-w-6xl mx-auto px-4 py-20">
        {/* Section header */}
        <div className="text-center mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-3">
            Eternal Learning Graph
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            UAIF Architecture
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            {elgMeta.subtitle}
          </p>
        </div>

        {/* Core equations */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="rounded-xl px-5 py-3 border border-fuchsia-800/40 bg-fuchsia-950/20 text-center">
            <p className="text-xs font-mono font-bold text-fuchsia-400">{elgMeta.equation}</p>
            <p className="text-xs text-slate-600 mt-0.5">{elgMeta.equationLabel}</p>
          </div>
          <div className="rounded-xl px-5 py-3 border border-violet-800/40 bg-violet-950/20 text-center">
            <p className="text-xs font-mono font-bold text-violet-400">{elgMeta.objective}</p>
            <p className="text-xs text-slate-600 mt-0.5">{elgMeta.objectiveLabel}</p>
          </div>
        </div>

        {/* Pillar cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map(pillar => (
            <ElgPillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>

        {/* UAIF Pipeline Diagram */}
        <div className="mb-10">
          <UaifPipeline />
        </div>

        {/* Prototype targets */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5 text-center">
            Implementation Roadmap — Prototype Targets
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {elgMeta.prototypes.map(p => (
              <div
                key={p.id}
                className="rounded-xl p-4 border border-slate-700/50 bg-slate-800/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black px-2 py-0.5 rounded-md bg-violet-900/60 text-violet-400 border border-violet-800/50">
                    {p.id}
                  </span>
                  <span className="text-sm font-bold text-white">{p.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-2">{p.description}</p>
                <div className="flex flex-wrap gap-1">
                  {p.stack.map(s => (
                    <span key={s} className="text-xs px-1.5 py-0.5 rounded-md bg-slate-800 text-slate-500 font-mono border border-slate-700/50">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick-access CTA strip */}
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              href: '/convergence',
              accent: '#8b5cf6',
              badge1: { text: 'UTI', border: 'border-violet-800/50', bg: 'bg-violet-950/40', color: 'text-violet-400' },
              badge2: { text: 'UAIF', border: 'border-fuchsia-800/50', bg: 'bg-fuchsia-950/40', color: 'text-fuchsia-400' },
              title: 'Convergence Map',
              desc: 'How the 10 UTI stages map to the 7 UAIF pillars — roadmap meets architecture.',
            },
            {
              href: '/taxonomy',
              accent: '#10b981',
              badge1: { text: 'Classification', border: 'border-emerald-800/50', bg: 'bg-emerald-950/40', color: 'text-emerald-400' },
              badge2: null,
              title: 'Taxonomy',
              desc: '8 classification dimensions: intelligence types, reasoning, memory, math frameworks, and more.',
            },
            {
              href: '/thesis',
              accent: '#f59e0b',
              badge1: { text: 'Research Thesis', border: 'border-amber-800/50', bg: 'bg-amber-950/40', color: 'text-amber-400' },
              badge2: null,
              title: 'Full Thesis',
              desc: 'Introduction → Literature Review → Methodology → Experiments → Analysis → Synthesis → Conclusion.',
            },
            {
              href: '/glossary',
              accent: '#0ea5e9',
              badge1: { text: 'Reference', border: 'border-sky-800/50', bg: 'bg-sky-950/40', color: 'text-sky-400' },
              badge2: null,
              title: 'Glossary',
              desc: '56 formally defined terms from UTI, UAIF, ML foundations, cognitive science, and philosophy of science.',
            },
            {
              href: '/research',
              accent: '#f43f5e',
              badge1: { text: 'Open Problems', border: 'border-rose-800/50', bg: 'bg-rose-950/40', color: 'text-rose-400' },
              badge2: null,
              title: 'Research Gaps',
              desc: '7 open problems with falsifiable hypotheses, 4 reading paths, and live prototype status dashboard.',
            },
            {
              href: '/problem-space',
              accent: '#f97316',
              badge1: { text: 'Problem Space', border: 'border-orange-800/50', bg: 'bg-orange-950/40', color: 'text-orange-400' },
              badge2: null,
              title: 'Problem Space',
              desc: '8 research questions, 7 primitive questions, 10 topics, 10 fields, and 10 catalogued problems with maturity scores.',
            },
            {
              href: '/about',
              accent: '#64748b',
              badge1: { text: 'About', border: 'border-slate-700', bg: 'bg-slate-800/40', color: 'text-slate-400' },
              badge2: null,
              title: 'About the Program',
              desc: 'The research methodology, timeline, and researcher behind the UTI/UAIF program.',
            },
          ].map(cta => (
            <a
              key={cta.href}
              href={cta.href}
              className="group flex items-center justify-between rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: `${cta.accent}30`, backgroundColor: `${cta.accent}08` }}
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${cta.badge1.border} ${cta.badge1.bg} ${cta.badge1.color}`}>{cta.badge1.text}</span>
                  {cta.badge2 && <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${cta.badge2.border} ${cta.badge2.bg} ${cta.badge2.color}`}>{cta.badge2.text}</span>}
                </div>
                <h3 className="text-base font-bold text-white">{cta.title}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{cta.desc}</p>
              </div>
              <svg className="w-5 h-5 flex-shrink-0 ml-3 transition-transform duration-200 group-hover:translate-x-1" style={{ color: cta.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* Next Frontier */}
      <NextFrontier />

      {/* Roadmap Summary */}
      <section id="roadmap" className="max-w-6xl mx-auto px-4 pb-24">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-3">
            Realistic Timeline
          </p>
          <h2 className="text-2xl font-bold text-white">Complete Roadmap</h2>
          <p className="text-sm text-slate-500 mt-2">Estimated horizons for each stage of the Eternal Research Program</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="text-xs font-semibold uppercase tracking-wider text-slate-500 pb-3 pr-6">Stage</th>
                <th className="text-xs font-semibold uppercase tracking-wider text-slate-500 pb-3 pr-6">Name</th>
                <th className="text-xs font-semibold uppercase tracking-wider text-slate-500 pb-3 pr-6">Horizon</th>
                <th className="text-xs font-semibold uppercase tracking-wider text-slate-500 pb-3">Breakthrough</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {stages.map(stage => (
                <tr key={stage.id} className="group">
                  <td className="py-3 pr-6">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full border"
                      style={{ backgroundColor: `${stage.accent}15`, borderColor: `${stage.accent}40`, color: stage.accent }}
                    >
                      {stage.number}
                    </span>
                  </td>
                  <td className="py-3 pr-6">
                    <span className="text-white font-semibold text-xs">{stage.title}</span>
                    {stage.abbrev && (
                      <span className="text-xs text-slate-500 ml-1.5">({stage.abbrev})</span>
                    )}
                  </td>
                  <td className="py-3 pr-6 text-xs text-slate-400 whitespace-nowrap">{stage.years}</td>
                  <td className="py-3 text-xs text-slate-500">{stage.breakthrough}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Author section */}
      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-3">Author</p>
            <h2 className="text-2xl font-black text-white">About the Author</h2>
          </div>

          <div
            className="max-w-2xl mx-auto rounded-2xl border p-8"
            style={{ borderColor: '#d946ef30', backgroundColor: '#d946ef08' }}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
              <div
                className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black text-white"
                style={{ background: 'linear-gradient(135deg, #8b5cf6, #d946ef, #f43f5e)' }}
              >
                VR
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-black text-white mb-1">Vijayagopalan Raveendran</h3>
                <p className="text-sm text-slate-400 mb-3">Enterprise AI Architect · UTI/ERP Researcher</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {[
                    { label: 'UTI Research', bg: '#8b5cf615', border: '#8b5cf640', color: '#a78bfa' },
                    { label: 'ERP Architecture', bg: '#d946ef15', border: '#d946ef40', color: '#e879f9' },
                    { label: 'Enterprise AI', bg: '#f43f5e15', border: '#f43f5e40', color: '#fb7185' },
                  ].map(tag => (
                    <span
                      key={tag.label}
                      className="text-xs px-3 py-1 rounded-full font-semibold border"
                      style={{ backgroundColor: tag.bg, borderColor: tag.border, color: tag.color }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="rounded-xl px-5 py-4 mb-6 border"
              style={{ backgroundColor: '#8b5cf608', borderColor: '#8b5cf630' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">Research Topic</p>
              <p className="text-base font-bold text-white">Unified Theory of Intelligence (UTI)</p>
              <p className="text-xs text-slate-400 mt-1">
                The complete journey from domain-specific knowledge silos to a universal, substrate-independent
                theory of intelligence — mapping 10 breakthrough stages of the Eternal Research Program.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="mailto:rvijayagopalan.dev@gmail.com"
                className="flex items-center gap-3 rounded-xl px-4 py-3 border transition-all duration-200 hover:-translate-y-0.5 group"
                style={{ backgroundColor: '#8b5cf608', borderColor: '#8b5cf625' }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#8b5cf620' }}>
                  <svg className="w-4 h-4" style={{ color: '#a78bfa' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 leading-none mb-0.5">Email</p>
                  <p className="text-xs font-medium text-slate-300 truncate group-hover:text-white transition-colors">rvijayagopalan.dev@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+14706517372"
                className="flex items-center gap-3 rounded-xl px-4 py-3 border transition-all duration-200 hover:-translate-y-0.5 group"
                style={{ backgroundColor: '#d946ef08', borderColor: '#d946ef25' }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#d946ef20' }}>
                  <svg className="w-4 h-4" style={{ color: '#e879f9' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 leading-none mb-0.5">Mobile</p>
                  <p className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">+1 470 651 7372</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/rvijayagopalan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl px-4 py-3 border transition-all duration-200 hover:-translate-y-0.5 group"
                style={{ backgroundColor: '#0ea5e908', borderColor: '#0ea5e925' }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0ea5e920' }}>
                  <svg className="w-4 h-4" style={{ color: '#38bdf8' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 leading-none mb-0.5">LinkedIn</p>
                  <p className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">rvijayagopalan</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-xs font-black text-white">
                UTI
              </div>
              <span className="text-sm text-slate-400">
                UTI Evolution <span className="text-slate-600">v1.0</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-xs text-slate-600">Historical → 2050+ · 10 Stages · Universal Intelligence</span>
            </div>
          </div>
          <div className="border-t border-slate-800/60 pt-4 text-center">
            <p className="text-xs text-slate-600">
              © 2026 Vijayagopalan Raveendran. All rights reserved.
            </p>
            <p className="text-xs text-slate-700 mt-1">
              <span className="font-semibold text-slate-600">UTI Evolution</span>
              {' '}is an original work by Vijayagopalan Raveendran. Copyright © 2026.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
