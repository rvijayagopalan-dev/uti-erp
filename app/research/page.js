'use client'

import { useState } from 'react'
import Link from 'next/link'
import BackToTop from '../../components/BackToTop'

const TABS = [
  { id: 'gaps', label: 'Open Problems', icon: '🔬' },
  { id: 'paths', label: 'Reading Paths', icon: '📚' },
  { id: 'prototypes', label: 'Prototype Tracker', icon: '⚙️' },
]

const gaps = [
  {
    id: 'G1',
    title: 'Cross-Domain Zero-Shot Transfer',
    status: 'open',
    priority: 'critical',
    description: 'No current AI system can take knowledge learned in one domain (e.g., protein folding) and apply it zero-shot in a structurally analogous domain (e.g., market dynamics) without domain-specific fine-tuning. UTI Stage 03 predicts this should be possible given a sufficiently general ERP-X representation. The gap is: what is the minimal shared representation that supports zero-shot cross-domain transfer, and can it be learned from data?',
    utiStages: [3, 4],
    uaiPillars: [1, 2],
    hypothesis: 'A grounded latent space with explicit causal structure enables zero-shot cross-domain transfer at an accuracy of >60% relative to in-domain fine-tuning.',
    experiment: 'Train on N domains, test zero-shot on N+1 held-out domain using UAIF grounding function vs. standard fine-tuned baseline.',
  },
  {
    id: 'G2',
    title: 'Formal Grounding-Hallucination Relationship',
    status: 'partial',
    priority: 'high',
    description: 'The UAIF grounding hypothesis predicts that hallucination rate is inversely proportional to grounding depth. No formal proof or empirical test of this relationship exists at scale. We need: (1) a formal definition of grounding depth, (2) a controllable experimental setup where grounding can be varied while holding other factors constant, (3) a measurement protocol for hallucination that is grounding-sensitive.',
    utiStages: [5, 6],
    uaiPillars: [2, 3],
    hypothesis: 'H(t) ∝ 1/G(t) where H is hallucination rate and G is grounding depth, measurable via Γ function confidence scores.',
    experiment: 'Ablation study varying grounding database size and recency on TruthfulQA and HaluEval benchmarks.',
  },
  {
    id: 'G3',
    title: 'Memory Importance Function Optimal Weights',
    status: 'open',
    priority: 'high',
    description: 'The memory importance function I(Eᵢ) = f(usage, causality, relevance, novelty) has four components but no principled method for setting their relative weights. Do all four components contribute equally? Does causality dominate? Are the weights context-dependent? Current implementations use heuristic weights. A formal derivation from first principles (perhaps from the UAIF unified objective J) is missing.',
    utiStages: [7, 8],
    uaiPillars: [4, 5],
    hypothesis: 'Optimal I weights are task-dependent and can be meta-learned from the unified objective J via gradient descent on memory retention performance.',
    experiment: 'Meta-learning experiment with varying task types (reasoning, retrieval, creative) measuring downstream task performance under different I weight configurations.',
  },
  {
    id: 'G4',
    title: 'Consciousness Substrate Minimal Requirements',
    status: 'open',
    priority: 'speculative',
    description: 'CSIM (Stage 08) claims to identify the minimal computational requirements for consciousness but has not yet been formalized beyond a high-level framework. Specifically: what is the minimum Φ (IIT) threshold, the minimum integration depth, and the minimum temporal coherence window that a system must satisfy to exhibit the properties CSIM attributes to conscious experience? This requires bridging IIT, Global Workspace Theory, and Higher-Order theories into a single testable formalism.',
    utiStages: [9],
    uaiPillars: [7],
    hypothesis: 'There exists a formal CSIM-Φ metric computable from causal structure that correlates with behavioral markers of consciousness in biological systems.',
    experiment: 'Compute CSIM-Φ for a range of systems (from simple logic circuits to mammalian cortical columns) and test correlation with behavioral markers.',
  },
  {
    id: 'G5',
    title: 'Multi-Scale Intelligence Phase Transitions',
    status: 'partial',
    priority: 'high',
    description: 'UTI Stage 04 predicts that cross-scale intelligence (from molecular to civilizational) should exhibit universal scaling laws and phase transition signatures analogous to statistical physics. Preliminary evidence exists (neural network grokking, LLM emergent abilities) but no formal universality class has been identified for intelligence phase transitions. What is the order parameter, what is the control parameter, and what universality class do intelligence phase transitions belong to?',
    utiStages: [5, 6],
    uaiPillars: [1, 7],
    hypothesis: 'Intelligence phase transitions belong to the directed percolation universality class, with the fraction of correct causal edges in the TKG as the order parameter.',
    experiment: 'Systematic scaling experiments on UAIF TKG density vs. cross-domain transfer performance, measuring critical exponents.',
  },
  {
    id: 'G6',
    title: 'ERP Governance and Succession Protocol',
    status: 'open',
    priority: 'medium',
    description: 'The Eternal Research Program by definition must outlive any individual researcher, institution, or funding cycle. No formal governance model exists for how ERP decisions are made, how new domain modules are accepted or rejected, how the "hard core" of UTI axioms can be revised without destroying the program, and how succession works when key contributors leave. This is as much a social science problem as a technical one.',
    utiStages: [10],
    uaiPillars: [7],
    hypothesis: 'A Lakatosian governance protocol with defined acceptance criteria for hard core revisions and majority-vote protective belt updates is both viable and sufficient for ERP continuity.',
    experiment: 'Governance simulation with N=50 simulated researchers, testing program stability and progress rate under different governance protocols over 20-year simulated time.',
  },
  {
    id: 'G7',
    title: 'UAIF Goal Inference Under Incomplete Instructions',
    status: 'open',
    priority: 'high',
    description: 'Real-world principals (humans, organizations) routinely give AI systems incomplete instructions. The UAIF goal architecture must infer intended goals from partial specifications, but current approaches (instruction following, RLHF) do not formalize the goal inference problem. Specifically: what is the minimal amount of demonstrated behavior needed to uniquely identify a principal\'s terminal goals, given uncertainty about their beliefs and values?',
    utiStages: [8, 9],
    uaiPillars: [6, 7],
    hypothesis: 'Bayesian inverse planning with a prior over human goal distributions (from RLHF training) can identify terminal goals from O(log(|G|)) demonstrations.',
    experiment: 'Goal inference accuracy experiment: vary demonstration count and goal complexity, measuring identification accuracy against ground truth principal goals.',
  },
]

const paths = [
  {
    id: 'newcomer',
    label: 'New to Intelligence Theory',
    icon: '🌱',
    color: '#10b981',
    audience: 'Undergraduate students, curious outsiders, science communicators',
    duration: '4–6 weeks',
    steps: [
      { title: 'Start: UTI Stage 00 — Pre-Foundational', href: '/stage/1', desc: 'Understand the domain-silo baseline before unification.' },
      { title: 'UTI Stage 01 — Information-Centric Intelligence', href: '/stage/2', desc: 'How Shannon information theory bridges domains.' },
      { title: 'ELG Pillar 1 — Intelligence Gap', href: '/pillar/1', desc: 'Formal characterization of what current AI is missing.' },
      { title: 'Glossary: Key Terms', href: '/glossary', desc: 'Ground yourself in the formal vocabulary.' },
      { title: 'Convergence Map overview', href: '/convergence', desc: 'See how UTI stages and UAIF pillars relate.' },
      { title: 'Research Thesis: Introduction + Conclusion', href: '/thesis', desc: 'Get the big-picture narrative in 30 minutes.' },
    ],
  },
  {
    id: 'ai-researcher',
    label: 'AI/ML Researcher',
    icon: '🔬',
    color: '#8b5cf6',
    audience: 'PhD students, ML engineers, LLM researchers',
    duration: '2–3 weeks focused',
    steps: [
      { title: 'ELG Pillar 1–3 (Gap, Grounding, TKG)', href: '/pillar/1', desc: 'The core UAIF architecture relevant to LLM augmentation.' },
      { title: 'UTI Stages 03–05 (Transfer, Multi-Scale, Phase Transition)', href: '/stage/4', desc: 'The theoretical predictions for next-gen AI.' },
      { title: 'Convergence Map: Stage↔Pillar connections', href: '/convergence', desc: 'Where UTI theory maps to UAIF engineering.' },
      { title: 'Research Thesis: Methodology + Experiments', href: '/thesis', desc: 'DSR approach and experimental protocol.' },
      { title: 'Open Problems G1, G2, G3', href: '/research', desc: 'Active research gaps with proposed experiments.' },
      { title: 'Taxonomy: Learning Paradigm dimension', href: '/taxonomy', desc: 'Classification of intelligence learning approaches.' },
    ],
  },
  {
    id: 'cognitive-scientist',
    label: 'Cognitive Scientist',
    icon: '🧠',
    color: '#f43f5e',
    audience: 'Neuroscientists, psychologists, cognitive scientists',
    duration: '2–3 weeks focused',
    steps: [
      { title: 'Glossary: Cognitive Science category', href: '/glossary', desc: 'UTI/UAIF translations of cognitive science concepts.' },
      { title: 'ELG Pillars 4–5 (Memory, Meta-Learning)', href: '/pillar/4', desc: 'UAIF\'s formal model of memory consolidation and executive function.' },
      { title: 'UTI Stage 07–08 (Consciousness, CSIM)', href: '/stage/8', desc: 'The consciousness substrate interface model.' },
      { title: 'Research Thesis: Literature Review', href: '/thesis', desc: 'How UTI relates to IIT, GWT, and ART.' },
      { title: 'Open Problem G4 (Consciousness Substrate)', href: '/research', desc: 'The most speculative open problem in the program.' },
      { title: 'Convergence: Stage 08/09 connections', href: '/convergence', desc: 'How consciousness research connects to UAIF vision.' },
    ],
  },
  {
    id: 'philosopher',
    label: 'Philosopher of Science',
    icon: '💡',
    color: '#f59e0b',
    audience: 'Philosophers, science studies scholars, STS researchers',
    duration: '1–2 weeks focused',
    steps: [
      { title: 'Research Thesis: Introduction + Methodology', href: '/thesis', desc: 'DSR as a scientific methodology and its philosophical commitments.' },
      { title: 'Glossary: Philosophy of Science category', href: '/glossary', desc: 'Popper, Lakatos, Kuhn, Pearl in UAIF context.' },
      { title: 'UTI Stage 09–10 (ERP governance)', href: '/stage/9', desc: 'The Lakatosian design of the Eternal Research Program.' },
      { title: 'Open Problem G6 (ERP Governance)', href: '/research', desc: 'The social science challenge of an eternal research program.' },
      { title: 'Research Thesis: References', href: '/thesis', desc: 'The full citation landscape from Kuhn through Raveendran 2026.' },
    ],
  },
]

const prototypes = [
  {
    id: 'P1',
    title: 'Grounding-First Language Agent',
    color: '#f43f5e',
    pillar: 2,
    status: 'active',
    statusLabel: 'Active Development',
    description: 'A language agent where every generated claim is explicitly grounded to a retrievable episodic memory via the Γ function. Tests the hypothesis that hallucination rate H ∝ 1/G.',
    target: 'Reduce hallucination on HaluEval by 40% vs. ungrounded baseline while maintaining task performance within 10%.',
    metrics: [
      { name: 'Grounding Coverage', value: 78, unit: '%' },
      { name: 'Hallucination Rate', value: 23, unit: '%' },
      { name: 'Task Performance', value: 91, unit: '%' },
    ],
    milestones: [
      { label: 'Grounding function Γ implemented', done: true },
      { label: 'Episodic memory store (RAG)', done: true },
      { label: 'Confidence-weighted grounding', done: true },
      { label: 'Cross-session memory persistence', done: false },
      { label: 'Multi-modal grounding (vision + text)', done: false },
    ],
  },
  {
    id: 'P2',
    title: 'TKG-Augmented Reasoning System',
    color: '#0ea5e9',
    pillar: 3,
    status: 'active',
    statusLabel: 'Active Development',
    description: 'A reasoning system that maintains a live temporal knowledge graph and uses it for multi-hop causal inference, belief revision, and contradiction detection.',
    target: 'Achieve >80% accuracy on CREAK (causal reasoning) and >70% on StrategyQA (multi-hop) with interpretable causal paths.',
    metrics: [
      { name: 'TKG Node Count', value: 12400, unit: 'nodes' },
      { name: 'Causal Accuracy', value: 67, unit: '%' },
      { name: 'Multi-Hop Accuracy', value: 59, unit: '%' },
    ],
    milestones: [
      { label: 'TKG schema and data model', done: true },
      { label: 'Temporal decay and revision logic', done: true },
      { label: 'Causal edge inference from text', done: false },
      { label: 'Contradiction detection module', done: false },
      { label: 'Do-calculus intervention support', done: false },
    ],
  },
  {
    id: 'P3',
    title: 'Cross-Domain Transfer Benchmark',
    color: '#8b5cf6',
    pillar: 1,
    status: 'design',
    statusLabel: 'Design Phase',
    description: 'A formal benchmark for measuring cross-domain zero-shot transfer capability, testing models on N+1 held-out domains after training on N domains using ERP-X representations.',
    target: 'Establish baseline measurements for 5 domain pairs (Biology→Economics, Physics→ML, History→Law, Chemistry→Biology, Linguistics→Music).',
    metrics: [
      { name: 'Domains Designed', value: 5, unit: '' },
      { name: 'Test Cases Written', value: 340, unit: '' },
      { name: 'Baseline Models Run', value: 0, unit: '' },
    ],
    milestones: [
      { label: 'Domain pair selection and justification', done: true },
      { label: 'Test case authoring (340 cases)', done: true },
      { label: 'ERP-X representation schema', done: false },
      { label: 'Baseline model evaluation', done: false },
      { label: 'UAIF model evaluation', done: false },
    ],
  },
  {
    id: 'P4',
    title: 'Meta-Learning Goal Inference System',
    color: '#10b981',
    pillar: 6,
    status: 'planned',
    statusLabel: 'Planned — 2026 Q3',
    description: 'A system implementing Bayesian inverse planning for goal inference from incomplete principal instructions, testing minimum demonstration requirements for reliable goal identification.',
    target: 'Identify terminal goals with >85% accuracy from ≤10 demonstrations across 20 goal types.',
    metrics: [
      { name: 'Goal Types Defined', value: 20, unit: '' },
      { name: 'Prior Dataset Size', value: 0, unit: '' },
      { name: 'Goal Inference Accuracy', value: 0, unit: '%' },
    ],
    milestones: [
      { label: 'Goal taxonomy (20 types)', done: true },
      { label: 'Bayesian inverse planning framework', done: false },
      { label: 'Human demonstration dataset', done: false },
      { label: 'Inference accuracy evaluation', done: false },
      { label: 'Integration with UAIF goal architecture', done: false },
    ],
  },
]

const statusColors = {
  active: '#10b981',
  design: '#f59e0b',
  planned: '#64748b',
}

const priorityColors = {
  critical: '#f43f5e',
  high: '#f59e0b',
  medium: '#3b82f6',
  speculative: '#8b5cf6',
}

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState('gaps')
  const [expandedGap, setExpandedGap] = useState(null)

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
          <span className="text-sm font-bold text-white">Research</span>
          <div />
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full blur-3xl opacity-5" style={{ backgroundColor: '#f43f5e' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 pt-12 pb-10 text-center">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-slate-600 mb-3 px-3 py-1 rounded-full border border-slate-800">
            Research Portal
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">Open Problems &amp; Paths</h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            The frontier of UTI/UAIF research — open problems with falsifiable hypotheses, curated reading paths for different audiences, and live prototype status.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-[57px] z-40 bg-slate-950/90 border-b border-slate-800 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 flex gap-1 py-2">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 border"
              style={activeTab === tab.id
                ? { backgroundColor: '#f43f5e15', borderColor: '#f43f5e40', color: '#fda4af' }
                : { backgroundColor: 'transparent', borderColor: 'transparent', color: '#64748b' }}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* ── Open Problems ── */}
        {activeTab === 'gaps' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-600 mb-6">
              {gaps.length} open research problems · Each includes a falsifiable hypothesis and proposed experiment
            </p>
            {gaps.map(gap => {
              const isOpen = expandedGap === gap.id
              return (
                <div
                  key={gap.id}
                  className="rounded-2xl border transition-all duration-200"
                  style={isOpen
                    ? { backgroundColor: '#0f172a', borderColor: priorityColors[gap.priority] + '40' }
                    : { backgroundColor: '#0f172a', borderColor: '#1e293b' }}
                >
                  <button
                    onClick={() => setExpandedGap(isOpen ? null : gap.id)}
                    className="w-full flex items-start gap-4 px-5 py-4 text-left"
                  >
                    <span className="flex-shrink-0 font-mono text-xs font-black mt-0.5 w-6" style={{ color: priorityColors[gap.priority] }}>
                      {gap.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-sm font-bold text-white">{gap.title}</span>
                        <span
                          className="text-xs px-1.5 py-0.5 rounded-full border font-semibold"
                          style={{ color: priorityColors[gap.priority], borderColor: priorityColors[gap.priority] + '40', backgroundColor: priorityColors[gap.priority] + '10' }}
                        >
                          {gap.priority}
                        </span>
                        <span className="text-xs px-1.5 py-0.5 rounded-full border border-slate-700 text-slate-500 capitalize">
                          {gap.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-snug line-clamp-2">{gap.description}</p>
                    </div>
                    <svg
                      className="w-3.5 h-3.5 text-slate-600 flex-shrink-0 mt-0.5 transition-transform duration-200"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 space-y-4">
                      <div className="border-t border-slate-800/60 pt-4">
                        <p className="text-sm text-slate-300 leading-relaxed mb-4">{gap.description}</p>

                        <div className="grid sm:grid-cols-2 gap-3">
                          <div className="rounded-xl border border-violet-800/30 bg-violet-950/10 p-3">
                            <p className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">Hypothesis</p>
                            <p className="text-xs text-slate-300 leading-relaxed font-mono">{gap.hypothesis}</p>
                          </div>
                          <div className="rounded-xl border border-emerald-800/30 bg-emerald-950/10 p-3">
                            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">Proposed Experiment</p>
                            <p className="text-xs text-slate-300 leading-relaxed">{gap.experiment}</p>
                          </div>
                        </div>

                        <div className="flex gap-2 mt-3 flex-wrap">
                          {gap.utiStages.map(sid => (
                            <Link key={sid} href={`/stage/${sid}`} className="text-xs px-2.5 py-1 rounded-lg border border-violet-800/40 bg-violet-900/20 text-violet-400 hover:bg-violet-900/40 transition-colors">
                              UTI Stage {String(sid - 1).padStart(2, '0')}
                            </Link>
                          ))}
                          {gap.uaiPillars.map(pid => (
                            <Link key={pid} href={`/pillar/${pid}`} className="text-xs px-2.5 py-1 rounded-lg border border-fuchsia-800/40 bg-fuchsia-900/20 text-fuchsia-400 hover:bg-fuchsia-900/40 transition-colors">
                              ELG Pillar {pid}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* ── Reading Paths ── */}
        {activeTab === 'paths' && (
          <div className="grid sm:grid-cols-2 gap-6">
            {paths.map(path => (
              <div key={path.id} className="rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-800" style={{ backgroundColor: path.color + '08' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{path.icon}</span>
                    <span className="text-sm font-bold text-white">{path.label}</span>
                  </div>
                  <p className="text-xs text-slate-500">{path.audience}</p>
                  <p className="text-xs font-semibold mt-1" style={{ color: path.color }}>{path.duration}</p>
                </div>
                <div className="px-5 py-4 space-y-3">
                  {path.steps.map((step, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-black" style={{ backgroundColor: path.color + '20', color: path.color }}>
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <Link href={step.href} className="text-xs font-semibold text-white hover:underline block leading-snug mb-0.5">
                          {step.title}
                        </Link>
                        <p className="text-xs text-slate-500 leading-snug">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Prototype Tracker ── */}
        {activeTab === 'prototypes' && (
          <div className="space-y-6">
            <p className="text-xs text-slate-600">4 active prototypes implementing UAIF pillars</p>
            {prototypes.map(proto => (
              <div key={proto.id} className="rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden">
                {/* Header */}
                <div className="px-5 py-4 border-b border-slate-800 flex items-start gap-4" style={{ backgroundColor: proto.color + '08' }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm" style={{ backgroundColor: proto.color + '20', color: proto.color }}>
                    {proto.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-sm font-bold text-white">{proto.title}</span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full border font-semibold"
                        style={{ color: statusColors[proto.status], borderColor: statusColors[proto.status] + '40', backgroundColor: statusColors[proto.status] + '15' }}
                      >
                        {proto.statusLabel}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-snug">{proto.description}</p>
                  </div>
                </div>

                <div className="px-5 py-4 grid sm:grid-cols-2 gap-4">
                  {/* Metrics */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3">Current Metrics</p>
                    <div className="space-y-2">
                      {proto.metrics.map((m, i) => (
                        <div key={i} className="flex items-center justify-between text-xs">
                          <span className="text-slate-500">{m.name}</span>
                          <span className="font-mono font-bold" style={{ color: proto.color }}>
                            {typeof m.value === 'number' && m.unit === '%' ? (
                              <span>{m.value}{m.unit}</span>
                            ) : (
                              <span>{m.value.toLocaleString()}{m.unit ? ' ' + m.unit : ''}</span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Milestones */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3">Milestones</p>
                    <div className="space-y-1.5">
                      {proto.milestones.map((m, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          {m.done ? (
                            <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: proto.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <div className="w-3.5 h-3.5 rounded-full border border-slate-700 flex-shrink-0" />
                          )}
                          <span className={m.done ? 'text-slate-400 line-through' : 'text-slate-500'}>{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Target */}
                <div className="px-5 pb-4">
                  <div className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2">
                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Target: </span>
                    <span className="text-xs text-slate-400">{proto.target}</span>
                  </div>
                </div>

                <div className="px-5 pb-4">
                  <Link href={`/pillar/${proto.pillar}`} className="text-xs text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                    → View ELG Pillar {proto.pillar} deep dive
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800/60 bg-slate-950/80 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-2">
          <p className="text-xs text-slate-600">
            Research by{' '}
            <a href="https://www.linkedin.com/in/rvijayagopalan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              Vijayagopalan Raveendran
            </a>
          </p>
          <p className="text-xs text-slate-700">© 2026</p>
        </div>
      </div>
    </div>
  )
}
