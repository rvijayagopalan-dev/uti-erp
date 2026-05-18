'use client'

import Link from 'next/link'
import BackToTop from '../../components/BackToTop'

const timeline = [
  { year: '2018', event: 'Began cross-domain intelligence research, identifying structural parallels between biological and computational intelligence systems.' },
  { year: '2020', event: 'Formalized the first version of the 10-stage UTI framework and published preliminary findings on convergent intelligence patterns.' },
  { year: '2021', event: 'Initiated the UAIF design science research program, translating UTI theoretical framework into an engineering blueprint.' },
  { year: '2022', event: 'Developed Prototype P1 (Grounding-first language agent) and P2 (TKG-augmented reasoning system). ERP-SIM simulation framework initiated.' },
  { year: '2023', event: 'Convergence of UTI and UAIF into a single integrated research program. Taxonomy and formal ontology developed. P3 and P4 prototypes launched.' },
  { year: '2024', event: 'PhD thesis submitted. ELG pillar framework completed. Cross-domain transfer experiments conducted across 5 domains.' },
  { year: '2025', event: 'CSIM framework formalized. Eternal Research Program governance model published. Open collaboration framework launched.' },
  { year: '2026', event: 'UTI Evolution visualization platform launched. Full 10-stage documentation, convergence map, and community research portal published.' },
]

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rvijayagopalan', icon: '🔗' },
  { label: 'Research Paper', href: 'https://arxiv.org/', icon: '📄' },
  { label: 'GitHub', href: 'https://github.com/', icon: '⌥' },
]

const siteMap = [
  { href: '/', label: 'Home', description: 'Overview of all 10 UTI stages and 7 UAIF pillars', color: '#8b5cf6' },
  { href: '/convergence', label: 'Convergence Map', description: 'Interactive 10×7 matrix of UTI↔UAIF connections', color: '#8b5cf6' },
  { href: '/taxonomy', label: 'Taxonomy', description: '8-dimensional classification of intelligence types and systems', color: '#10b981' },
  { href: '/thesis', label: 'Research Thesis', description: 'Full PhD thesis from Introduction through References', color: '#f59e0b' },
  { href: '/glossary', label: 'Glossary', description: '56 key terms with formal definitions and cross-references', color: '#0ea5e9' },
  { href: '/research', label: 'Research Gaps', description: 'Open problems, reading paths, and prototype status', color: '#f43f5e' },
]

export default function AboutPage() {
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
          <span className="text-sm font-bold text-white">About</span>
          <div />
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[600px] h-[400px] rounded-full blur-3xl opacity-5" style={{ backgroundColor: '#8b5cf6' }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full blur-3xl opacity-5" style={{ backgroundColor: '#d946ef' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 pt-16 pb-12 text-center">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4 px-3 py-1 rounded-full border border-slate-800">
            About This Research
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            Unifying Intelligence Theory
          </h1>
          <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            The UTI Evolution platform documents an ongoing research program to develop a mathematically rigorous, substrate-independent theory of intelligence — from pre-foundational domain silos through a fully self-sustaining Eternal Research Program.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <a
              href="http://ai-evolution-gold.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-200 shadow-lg shadow-violet-900/40"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Live Platform — ai-evolution-gold.vercel.app
              <svg className="w-3.5 h-3.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">

        {/* About the research */}
        <section>
          <h2 className="text-xl font-black text-white mb-6 pb-3 border-b border-slate-800">The Research Program</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-violet-800/30 bg-violet-950/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2">Unified Theory of Intelligence</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                UTI is a 10-stage research program developing a single formal framework for intelligence that applies across biological brains, AI systems, markets, ecosystems, and organizations. The theory holds that all intelligent systems share a common representational and computational structure — structural intelligence — that can be described by substrate-independent mathematics.
              </p>
            </div>
            <div className="rounded-2xl border border-fuchsia-800/30 bg-fuchsia-950/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-fuchsia-400 mb-2">Unified Adaptive Intelligence Framework</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                UAIF is the engineering operationalization of UTI — a 7-pillar framework for building adaptive AI systems that ground symbolic knowledge in experience, reason causally, maintain structured memory, and pursue multi-objective goals. The Eternal Learning Graph (ELG) provides the dynamic knowledge backbone connecting all pillars.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Design Science Research Methodology</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              The research follows Design Science Research (DSR) methodology — creating and evaluating theoretical artifacts (formal models, frameworks, prototypes) against measurable design objectives. Each UTI stage produces both theoretical claims (falsifiable predictions) and practical artifacts (simulation frameworks, prototype architectures, evaluation benchmarks). The goal is a Lakatosian progressive research program that outlives any single researcher.
            </p>
          </div>
        </section>

        {/* About the researcher */}
        <section>
          <h2 className="text-xl font-black text-white mb-6 pb-3 border-b border-slate-800">About the Researcher</h2>
          <div className="flex gap-5 items-start">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-xl font-black text-white">
              VR
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Vijayagopalan Raveendran</h3>
              <p className="text-sm text-slate-400 mb-3">PhD Researcher · Intelligence Science &amp; Adaptive AI Systems</p>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Vijayagopalan is a PhD researcher working at the intersection of intelligence theory, adaptive AI systems, and complex systems science. His research combines formal mathematical modeling with practical AI system design, grounded in the Design Science Research methodology. The UTI and UAIF frameworks represent 8 years of work toward a unified theory of intelligence across substrates and scales.
              </p>
              <div className="flex gap-3 mt-4">
                {links.map(l => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors"
                  >
                    <span>{l.icon}</span>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research timeline */}
        <section>
          <h2 className="text-xl font-black text-white mb-6 pb-3 border-b border-slate-800">Research Timeline</h2>
          <div className="relative">
            <div className="absolute left-[52px] top-0 bottom-0 w-px bg-slate-800" />
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-[52px] text-right">
                    <span className="text-xs font-mono font-bold text-slate-600">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-violet-600 border-2 border-slate-950 mt-0.5 relative z-10" />
                  <p className="text-sm text-slate-400 leading-relaxed pb-1">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Site map */}
        <section>
          <h2 className="text-xl font-black text-white mb-6 pb-3 border-b border-slate-800">What's On This Site</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {siteMap.map(page => (
              <Link
                key={page.href}
                href={page.href}
                className="flex items-start gap-3 p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-800/40 transition-all duration-150 group"
              >
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: page.color }} />
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-white transition-colors mb-1">{page.label}</p>
                  <p className="text-xs text-slate-500 leading-snug">{page.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-black text-white mb-6 pb-3 border-b border-slate-800">Get Involved</h2>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center">
            <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-xl mx-auto">
              The UTI research program is designed as a community endeavor. If you are a researcher in AI, cognitive science, complex systems, or philosophy of science, and want to contribute to or critique any part of this framework, reach out.
            </p>
            <a
              href="https://www.linkedin.com/in/rvijayagopalan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-violet-900/40 border border-violet-800/50 text-violet-400 hover:bg-violet-900/60 transition-colors"
            >
              Connect on LinkedIn
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800/60 bg-slate-950/80 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-2">
          <p className="text-xs text-slate-600">UTI Evolution · Built with Next.js</p>
          <p className="text-xs text-slate-700">© 2026 Vijayagopalan Raveendran</p>
        </div>
      </div>
    </div>
  )
}
