'use client'

import Link from 'next/link'

export default function StageCard({ stage, index }) {
  const isEven = index % 2 === 0

  return (
    <div
      id={`stage-${stage.id}`}
      className={`relative flex flex-col lg:flex-row gap-0 items-stretch ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Timeline node */}
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
        <div
          className={`w-14 h-14 rounded-full border-4 border-slate-950 flex items-center justify-center text-xl shadow-lg ${stage.dot}`}
          style={{ boxShadow: `0 0 20px ${stage.accent}60` }}
        >
          <span>{stage.icon}</span>
        </div>
      </div>

      {/* Card */}
      <div className={`w-full lg:w-[calc(50%-3rem)] ${isEven ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
        <div
          className={`relative rounded-2xl border ${stage.border} bg-gradient-to-br ${stage.bg} p-6 card-hover glass overflow-hidden`}
          style={{ boxShadow: `0 4px 30px ${stage.accent}15` }}
        >
          {/* Stage number watermark */}
          <span className="absolute top-4 right-4 text-7xl font-black opacity-5 text-white select-none leading-none">
            {stage.number}
          </span>

          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
              style={{ backgroundColor: `${stage.accent}25` }}
            >
              {stage.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${stage.badge}`}>
                  STAGE {stage.number}
                </span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${stage.badge} opacity-80`}>
                  {stage.years}
                </span>
                {stage.abbrev && (
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${stage.badge}`}>
                    {stage.abbrev}
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold text-white mt-1">{stage.title}</h2>
            </div>
          </div>

          {/* Breakthrough */}
          <div
            className="rounded-xl p-3 mb-4"
            style={{ backgroundColor: `${stage.accent}15`, border: `1px solid ${stage.accent}30` }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-1" style={{ color: stage.accent }}>
              Breakthrough
            </p>
            <p className="text-sm font-semibold text-white">{stage.breakthrough}</p>
            {stage.coreQuestion && (
              <p className="text-xs text-slate-400 mt-1 italic">{stage.coreQuestion}</p>
            )}
            {stage.coreInsight && (
              <p className="text-xs text-slate-400 mt-1 italic">{stage.coreInsight}</p>
            )}
            {stage.coreCapability && (
              <p className="text-xs text-slate-400 mt-1 italic">{stage.coreCapability}</p>
            )}
            {stage.coreProblem && (
              <p className="text-xs text-slate-400 mt-1">{stage.coreProblem}</p>
            )}
            {stage.corePrinciple && (
              <p className="text-xs text-slate-300 mt-1 italic font-medium">{stage.corePrinciple}</p>
            )}
            {stage.horizon && (
              <p className="text-xs text-slate-300 mt-1 italic">{stage.horizon}</p>
            )}
            {stage.coreFormula && (
              <p className="text-xs font-mono text-slate-300 mt-1 bg-slate-900/60 px-2 py-1 rounded">
                {stage.coreFormula}
              </p>
            )}
          </div>

          {/* Content columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="space-y-3">
              {stage.keyObservations && (
                <Section title="Key Observations" accent={stage.accent}>
                  {stage.keyObservations.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
              {stage.keyCapabilities && (
                <Section title="Key Capabilities" accent={stage.accent}>
                  {stage.keyCapabilities.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
              {stage.architectureLayers && (
                <Section title="Architecture Layers" accent={stage.accent}>
                  {stage.architectureLayers.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
              {stage.erpxComponents && (
                <Section title="ERP-X Components" accent={stage.accent}>
                  {stage.erpxComponents.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
              {stage.simulationLayers && (
                <Section title="Simulation Layers" accent={stage.accent}>
                  {stage.simulationLayers.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
              {stage.candidateMetrics && (
                <Section title="Intelligence Metrics" accent={stage.accent}>
                  {stage.candidateMetrics.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
              {stage.discoveryGoals && (
                <Section title="Discovery Goals" accent={stage.accent}>
                  {stage.discoveryGoals.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
              {stage.legitimacyRequirements && (
                <Section title="Requirements for Legitimacy" accent={stage.accent}>
                  {stage.legitimacyRequirements.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
              {stage.permanentLayers && (
                <Section title="Permanent Layers" accent={stage.accent}>
                  {stage.permanentLayers.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
            </div>

            <div className="space-y-3">
              {stage.domains && (
                <Section title="Domains (Isolated)" accent={stage.accent}>
                  {stage.domains.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
              {stage.keyDeliverables && (
                <Section title="Key Deliverables" accent={stage.accent}>
                  {stage.keyDeliverables.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
              {stage.researchOutputs && (
                <Section title="Research Outputs" accent={stage.accent}>
                  {stage.researchOutputs.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
              {stage.crossDomainLinks && (
                <Section title="Cross-Domain Bridges" accent={stage.accent}>
                  {stage.crossDomainLinks.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
              {stage.requiredMath && (
                <Section title="Required Mathematics" accent={stage.accent}>
                  {stage.requiredMath.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
              {stage.transferExamples && (
                <Section title="Transfer Examples" accent={stage.accent}>
                  {stage.transferExamples.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
              {stage.substrates && (
                <Section title="Target Substrates" accent={stage.accent}>
                  {stage.substrates.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
              {stage.scaleHierarchy && (
                <Section title="Scale Hierarchy" accent={stage.accent}>
                  <div className="space-y-1">
                    {stage.scaleHierarchy.map(s => (
                      <div key={s.scale} className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400 w-20">{s.scale}</span>
                        <span className="text-xs text-slate-400">{s.example}</span>
                      </div>
                    ))}
                  </div>
                </Section>
              )}
              {stage.publicationVenues && (
                <Section title="Publication Venues" accent={stage.accent}>
                  {stage.publicationVenues.map(item => <Tag key={item} accent={stage.accent} bold>{item}</Tag>)}
                </Section>
              )}
              {stage.feedbackLoop && (
                <Section title="Feedback Loop" accent={stage.accent}>
                  <div className="flex flex-wrap gap-1 items-center">
                    {stage.feedbackLoop.map((item, i) => (
                      <span key={item} className="flex items-center gap-1">
                        <Tag accent={stage.accent}>{item}</Tag>
                        {i < stage.feedbackLoop.length - 1 && <span className="text-slate-600 text-xs">→</span>}
                      </span>
                    ))}
                  </div>
                </Section>
              )}
              {stage.domainModules && (
                <Section title="Domain Modules" accent={stage.accent}>
                  {stage.domainModules.map(item => <Tag key={item} accent={stage.accent}>{item}</Tag>)}
                </Section>
              )}
              {(stage.leadingOrgs) && (
                <Section title="Leading Orgs" accent={stage.accent}>
                  {stage.leadingOrgs.map(item => <Tag key={item} accent={stage.accent} bold>{item}</Tag>)}
                </Section>
              )}
            </div>
          </div>

          {/* Extra info rows */}
          {stage.shift && (
            <div className="rounded-xl p-3 mb-3 bg-slate-900/40 border border-slate-700/40">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Paradigm Shift</p>
              <p className="text-xs text-slate-300">{stage.shift}</p>
            </div>
          )}
          {stage.transitionTrigger && (
            <div className="rounded-xl p-3 mb-3 bg-slate-900/40 border border-slate-700/40">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Transition Trigger</p>
              <p className="text-xs text-slate-300">{stage.transitionTrigger}</p>
            </div>
          )}
          {stage.validationRequired && (
            <div className="rounded-xl p-3 mb-3 bg-slate-900/40 border border-slate-700/40">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Validation Required</p>
              <p className="text-xs text-slate-300">{stage.validationRequired}</p>
            </div>
          )}
          {stage.analogy && (
            <div className="rounded-xl p-3 mb-3 bg-slate-900/40 border border-slate-700/40">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Analogy</p>
              <p className="text-xs text-slate-300 italic">{stage.analogy}</p>
            </div>
          )}

          {/* Gap */}
          {stage.gap && (
            <div className="rounded-xl p-3 bg-slate-900/60 border border-slate-700/50 mb-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Gap / Open Problem
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">{stage.gap}</p>
            </div>
          )}

          {/* Footer */}
          <div className="mt-3 flex items-center justify-between gap-2 flex-wrap">
            {stage.leadsTo && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-600">This leads to</span>
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${stage.accent}20`, color: stage.accent, border: `1px solid ${stage.accent}40` }}
                >
                  {stage.leadsTo} →
                </span>
              </div>
            )}
            <Link
              href={`/stage/${stage.id}`}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 hover:scale-105 ml-auto"
              style={{
                backgroundColor: `${stage.accent}20`,
                color: stage.accent,
                border: `1px solid ${stage.accent}40`,
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
    </div>
  )
}

function Section({ title, accent, children }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: accent, opacity: 0.8 }}>
        {title}
      </p>
      <div className="flex flex-wrap gap-1">{children}</div>
    </div>
  )
}

function Tag({ children, accent, bold }) {
  return (
    <span
      className={`text-xs px-2 py-0.5 rounded-md ${bold ? 'font-semibold' : 'font-normal'} text-slate-300`}
      style={{ backgroundColor: `${accent}12`, border: `1px solid ${accent}25` }}
    >
      {children}
    </span>
  )
}
