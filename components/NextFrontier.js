'use client'

export default function NextFrontier() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-3">Beyond Stage 09</p>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">The Next Frontier</h2>
        <p className="text-slate-500 max-w-xl mx-auto text-sm">
          At ERP maturity, intelligence science becomes self-sustaining —
          the framework evolves continuously, domains expand, and intelligence co-evolves with theory.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {[
          {
            icon: '📜',
            title: 'Cognitive Constitutions',
            desc: 'Formal governance rules embedded in the cognitive fabric of every intelligent system — ensuring alignment at the architectural layer.',
            accent: '#d946ef',
          },
          {
            icon: '🔄',
            title: 'Self-Evolving Intelligence',
            desc: 'Systems that revise their own theory, retrain their own components, and expand their own domain coverage — without human-initiated updates.',
            accent: '#f43f5e',
          },
          {
            icon: '🌌',
            title: 'Cosmic Intelligence Layer',
            desc: 'CE-ERP extends the universal framework to cosmological scales — modeling intelligence as a property of the universe itself.',
            accent: '#6366f1',
          },
        ].map(item => (
          <div
            key={item.title}
            className="rounded-2xl p-6 border border-slate-800 bg-slate-900/40 card-hover"
            style={{ boxShadow: `0 4px 20px ${item.accent}10` }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
              style={{ backgroundColor: `${item.accent}20` }}
            >
              {item.icon}
            </div>
            <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
