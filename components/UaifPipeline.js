const steps = [
  { id: 1, label: 'Environment', sublabel: 'External world', icon: '🌍', color: '#64748b', desc: 'Raw sensory input from the external environment — text, vision, audio, structured data.' },
  { id: 2, label: 'Encoder', sublabel: 'Perception', icon: '📡', color: '#0ea5e9', desc: 'Multi-modal encoder maps raw inputs to a structured latent representation Lₜ.' },
  { id: 3, label: 'Latent Space', sublabel: 'Representation Lₜ', icon: '🔮', color: '#8b5cf6', desc: 'The internal compressed representation capturing causal structure of the observed environment.' },
  { id: 4, label: 'Grounding', sublabel: 'Γ: Lₜ → Eₜ', icon: '⚓', color: '#d946ef', desc: 'Grounding function anchors latent representations to episodic memory entries, preventing hallucination.' },
  { id: 5, label: 'TKG', sublabel: 'Knowledge Graph', icon: '🕸️', color: '#f59e0b', desc: 'Temporal knowledge graph integrating grounded knowledge with causal edges, time-stamps, and confidence scores.' },
  { id: 6, label: 'Causal Module', sublabel: 'do-calculus', icon: '⚖️', color: '#f43f5e', desc: 'Structural causal model supporting Level 2 (intervention) and Level 3 (counterfactual) reasoning.' },
  { id: 7, label: 'Memory', sublabel: 'I(Eᵢ)', icon: '💾', color: '#10b981', desc: 'Memory importance function consolidates, compresses, or forgets episodic records based on usage, causality, relevance, novelty.' },
  { id: 8, label: 'Meta-Learning', sublabel: 'Πₜ optimization', icon: '🔄', color: '#0ea5e9', desc: 'Meta-learning loop adjusts learning algorithms and hyperparameters based on cross-task performance trajectories.' },
  { id: 9, label: 'Goal Architecture', sublabel: 'G hierarchy', icon: '🎯', color: '#8b5cf6', desc: 'Hierarchical goal representation with terminal goals, sub-goals, and hard constraints guiding policy selection.' },
  { id: 10, label: 'Action', sublabel: 'Policy Πₜ', icon: '⚡', color: '#d946ef', desc: 'Policy module selects and executes actions in the environment, generating new observations.' },
  { id: 11, label: 'Feedback', sublabel: 'Reward + revision', icon: '↩️', color: '#f59e0b', desc: 'Reward signal and belief revision loop updates the unified objective J and triggers memory consolidation.' },
]

export default function UaifPipeline() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 overflow-x-auto">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
        <div>
          <h3 className="text-sm font-bold text-white">UAIF Processing Pipeline</h3>
          <p className="text-xs text-slate-500 mt-0.5">11-step adaptive agent loop — Environment to Action to Feedback</p>
        </div>
        <div className="text-xs font-mono text-slate-600 bg-slate-800/60 border border-slate-700 px-2 py-1 rounded-lg">
          Sₜ₊₁ = F(Sₜ, Oₜ, Aₜ, Mₜ, Πₜ)
        </div>
      </div>

      {/* Desktop: horizontal flow */}
      <div className="hidden md:block">
        <div className="flex items-stretch gap-0 min-w-max">
          {steps.map((step, i) => (
            <div key={step.id} className="flex items-center">
              {/* Step box */}
              <div className="group relative flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl border transition-all duration-150 cursor-default w-[86px]"
                style={{ borderColor: step.color + '30', backgroundColor: step.color + '08' }}
              >
                <span className="text-lg leading-none">{step.icon}</span>
                <div className="text-center">
                  <p className="text-xs font-bold leading-tight" style={{ color: step.color }}>{step.label}</p>
                  <p className="text-xs text-slate-600 leading-tight font-mono">{step.sublabel}</p>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 rounded-xl border border-slate-700 bg-slate-900 p-2.5 text-xs text-slate-300 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-10 shadow-xl">
                  <p className="font-bold mb-1" style={{ color: step.color }}>{step.label}</p>
                  {step.desc}
                </div>
              </div>

              {/* Arrow (except after last) */}
              {i < steps.length - 1 && (
                <div className="flex items-center px-1">
                  {i === steps.length - 2 ? (
                    // Feedback arrow — curved back
                    <div className="flex flex-col items-center text-slate-700 text-xs">
                      <span className="font-mono text-slate-600">↙</span>
                    </div>
                  ) : (
                    <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Feedback loop indicator */}
        <div className="mt-3 flex items-center gap-2">
          <div className="h-px flex-1 border-t border-dashed border-slate-800" />
          <span className="text-xs text-slate-600 font-mono">← Feedback loop to Encoder + Memory + Goal Architecture</span>
          <div className="h-px flex-1 border-t border-dashed border-slate-800" />
        </div>
      </div>

      {/* Mobile: vertical list */}
      <div className="md:hidden space-y-2">
        {steps.map((step, i) => (
          <div key={step.id} className="flex items-start gap-3">
            <div className="flex flex-col items-center gap-0">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0" style={{ backgroundColor: step.color + '15' }}>
                {step.icon}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 mt-1" style={{ backgroundColor: step.color + '20', height: '16px' }} />
              )}
            </div>
            <div className="pb-3">
              <p className="text-xs font-bold leading-tight" style={{ color: step.color }}>{step.label}</p>
              <p className="text-xs text-slate-600 font-mono leading-tight">{step.sublabel}</p>
              <p className="text-xs text-slate-500 mt-1 leading-snug">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-x-4 gap-y-1">
        {[
          { label: 'Perception', color: '#0ea5e9' },
          { label: 'Knowledge', color: '#f59e0b' },
          { label: 'Reasoning', color: '#f43f5e' },
          { label: 'Memory', color: '#10b981' },
          { label: 'Goal', color: '#8b5cf6' },
          { label: 'Action', color: '#d946ef' },
        ].map(l => (
          <div key={l.label} className="flex items-center gap-1.5 text-xs text-slate-500">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }} />
            {l.label}
          </div>
        ))}
      </div>
    </div>
  )
}
