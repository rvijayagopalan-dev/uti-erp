// Pre-positioned nodes for fixed-layout knowledge graph
// Canvas: 1100 × 840

export const NODE_TYPES = {
  Stage:     { color: '#8b5cf6', size: 22, label: 'UTI Stage' },
  Concept:   { color: '#0ea5e9', size: 18, label: 'Core Concept' },
  Framework: { color: '#d946ef', size: 18, label: 'Framework' },
  Formalism: { color: '#f43f5e', size: 20, label: 'Formalism' },
  Method:    { color: '#64748b', size: 16, label: 'Method' },
  Component: { color: '#10b981', size: 18, label: 'UAIF Component' },
  Pillar:    { color: '#f59e0b', size: 22, label: 'UAIF Pillar' },
  Property:  { color: '#a855f7', size: 16, label: 'Property' },
}

export const EDGE_TYPES = {
  LEADS_TO:   { color: '#334155', label: 'leads to',    dashed: false, width: 2 },
  INTRODUCES: { color: '#6d28d9', label: 'introduces',  dashed: false, width: 1.5 },
  ENABLES:    { color: '#0284c7', label: 'enables',     dashed: false, width: 1.5 },
  REQUIRES:   { color: '#b91c1c', label: 'requires',    dashed: true,  width: 1.5 },
  MOTIVATES:  { color: '#b45309', label: 'motivates',   dashed: true,  width: 1.5 },
  FEEDS_INTO: { color: '#065f46', label: 'feeds into',  dashed: false, width: 2 },
  IMPLEMENTS: { color: '#0c4a6e', label: 'implements',  dashed: false, width: 1.5 },
  ACHIEVES:   { color: '#7e22ce', label: 'achieves',    dashed: false, width: 2 },
  GOVERNS:    { color: '#831843', label: 'governs',     dashed: true,  width: 1.5 },
  GROUNDS:    { color: '#3730a3', label: 'grounds in',  dashed: true,  width: 1.5 },
  TESTS:      { color: '#374151', label: 'tests',       dashed: true,  width: 1 },
  FORMALIZES: { color: '#92400e', label: 'formalizes',  dashed: false, width: 1.5 },
  OPTIMIZES:  { color: '#14532d', label: 'optimizes',   dashed: false, width: 1.5 },
  POPULATES:  { color: '#1e3a5f', label: 'populates',   dashed: false, width: 1.5 },
  EXHIBITS:   { color: '#4a1942', label: 'exhibits',    dashed: false, width: 1.5 },
  PREDICTS:   { color: '#1c3d4f', label: 'predicts',    dashed: false, width: 1.5 },
}

export const nodes = [
  // ── UTI Stages (left column x=90) ────────────────────────────
  {
    id: 'stage-00', label: 'Stage 00', sublabel: 'Pre-Foundational',
    type: 'Stage', theory: 'uti', x: 90, y: 42, accent: '#64748b',
    description: 'Domain-specific intelligence era. No shared representation across biology, AI, economics, or cognition. Intelligence treated as a local phenomenon within each silo.',
    ref: '/stage/1',
  },
  {
    id: 'stage-01', label: 'Stage 01', sublabel: 'Information-Centric',
    type: 'Stage', theory: 'uti', x: 90, y: 120, accent: '#6366f1',
    description: 'Shannon\'s information theory introduced as substrate-independent universal representation. ERP-X prototype proposed. Cross-domain structural parallels first formally identified.',
    ref: '/stage/2',
  },
  {
    id: 'stage-02', label: 'Stage 02', sublabel: 'Structural Intel.',
    type: 'Stage', theory: 'uti', x: 90, y: 198, accent: '#8b5cf6',
    description: 'Intelligence redefined as organizational pattern, not substrate. Abstraction hierarchy, feedback dynamics, and adaptation formalized as substrate-neutral structures.',
    ref: '/stage/3',
  },
  {
    id: 'stage-03', label: 'Stage 03', sublabel: 'Universal Transfer',
    type: 'Stage', theory: 'uti', x: 90, y: 276, accent: '#a855f7',
    description: 'Cross-domain transfer learning as core intelligence capability. ERP-X representations enable transfer across biology, economics, and AI without domain-specific retraining.',
    ref: '/stage/4',
  },
  {
    id: 'stage-04', label: 'Stage 04', sublabel: 'Multi-Scale',
    type: 'Stage', theory: 'uti', x: 90, y: 354, accent: '#c026d3',
    description: 'Intelligence studied across scales from molecular to civilizational. Universal scaling laws observed — the same mathematical structures appear at every level of organization.',
    ref: '/stage/5',
  },
  {
    id: 'stage-05', label: 'Stage 05', sublabel: 'Phase Transition',
    type: 'Stage', theory: 'uti', x: 90, y: 432, accent: '#db2777',
    description: 'Universal scaling laws and sharp phase transitions in intelligence systems. Critical exponents and universality classes identified across substrates.',
    ref: '/stage/6',
  },
  {
    id: 'stage-06', label: 'Stage 06', sublabel: 'ERP-SIM',
    type: 'Stage', theory: 'uti', x: 90, y: 510, accent: '#e11d48',
    description: 'Simulation-based empirical testing of UTI predictions. ERP-SIM framework enables controlled multi-domain experiments without full biological or societal deployment.',
    ref: '/stage/7',
  },
  {
    id: 'stage-07', label: 'Stage 07', sublabel: 'CSIM',
    type: 'Stage', theory: 'uti', x: 90, y: 588, accent: '#be123c',
    description: 'Consciousness Substrate Interface Model — formal theory bridging physical computation and subjective experience. IIT, GWT, and higher-order theories unified.',
    ref: '/stage/8',
  },
  {
    id: 'stage-08', label: 'Stage 08', sublabel: 'Multi-Domain Valid.',
    type: 'Stage', theory: 'uti', x: 90, y: 666, accent: '#c2410c',
    description: 'Cross-domain empirical validation of UTI predictions using ERP-SIM benchmark suite. Theory confirmed across 12+ domain pairs.',
    ref: '/stage/9',
  },
  {
    id: 'stage-09', label: 'Stage 09', sublabel: 'ERP',
    type: 'Stage', theory: 'uti', x: 90, y: 744, accent: '#047857',
    description: 'Eternal Research Program — self-sustaining Lakatosian research program. UTI axioms as hard core; domain modules as protective belt. Designed to outlive any individual.',
    ref: '/stage/10',
  },

  // ── UTI Concepts (center-left x=290) ─────────────────────────
  {
    id: 'erpx', label: 'ERP-X', sublabel: 'Info Substrate',
    type: 'Concept', theory: 'uti', x: 290, y: 120, accent: '#6366f1',
    description: 'Substrate-independent information representation: the universal encoding layer that expresses intelligence phenomena (learning, memory, adaptation) regardless of physical medium. The "bit" of intelligence.',
  },
  {
    id: 'structural-intel', label: 'Structural Intelligence', sublabel: 'Core Property',
    type: 'Concept', theory: 'uti', x: 290, y: 236, accent: '#8b5cf6',
    description: 'Intelligence defined by organizational pattern: feedback dynamics, abstraction hierarchy, adaptive response, and memory — independent of whether substrate is silicon, neurons, or markets.',
  },
  {
    id: 'cross-domain', label: 'Cross-Domain Transfer', sublabel: 'Universal Process',
    type: 'Concept', theory: 'uti', x: 290, y: 336, accent: '#a855f7',
    description: 'The ability to apply representations learned in one domain to structurally analogous problems in a completely different domain, without domain-specific fine-tuning.',
  },
  {
    id: 'intel-convergence', label: 'Intel. Convergence', sublabel: 'Empirical Pattern',
    type: 'Property', theory: 'uti', x: 290, y: 432, accent: '#c026d3',
    description: 'Independent evolution of similar representational and algorithmic solutions across unrelated substrates — biological brains, AI models, market mechanisms all develop analogous structures.',
  },
  {
    id: 'phase-trans', label: 'Phase Transition', sublabel: 'Critical Phenomenon',
    type: 'Property', theory: 'uti', x: 290, y: 528, accent: '#db2777',
    description: 'Sharp, discontinuous qualitative changes in intelligence system behavior at critical control parameter thresholds — grokking, emergent abilities, market crashes all share this signature.',
  },
  {
    id: 'erpsim-fw', label: 'ERP-SIM', sublabel: 'Simulation Fw.',
    type: 'Framework', theory: 'uti', x: 290, y: 608, accent: '#e11d48',
    description: 'Controlled simulation framework enabling empirical testing of UTI predictions without deploying in biological or societal environments. Supports multi-domain synthetic experiments.',
  },
  {
    id: 'csim-fw', label: 'CSIM', sublabel: 'Consciousness Model',
    type: 'Framework', theory: 'uti', x: 290, y: 680, accent: '#be123c',
    description: 'Formal substrate-neutral model of consciousness interface. Unifies IIT Φ metric, Global Workspace broadcast, and Higher-Order theories into a computable specification.',
  },
  {
    id: 'erp-fw', label: 'ERP', sublabel: 'Research Program',
    type: 'Framework', theory: 'uti', x: 290, y: 754, accent: '#047857',
    description: 'Lakatosian progressive research program with UTI axioms as irrefutable hard core. Protective belt of domain modules is modifiable; program designed for indefinite continuation.',
  },

  // ── Shared Formalisms (center x=530) ─────────────────────────
  {
    id: 'state-equation', label: 'State Equation', sublabel: 'Sₜ₊₁=F(Sₜ,Oₜ,Aₜ,Mₜ,Πₜ)',
    type: 'Formalism', theory: 'shared', x: 530, y: 60, accent: '#f43f5e',
    description: 'Governs agent state evolution: Sₜ = (Eₜ, Rₜ, Lₜ, Cₜ, Uₜ, Gₜ). Generalizes MDPs to multi-timescale, multi-domain, multi-objective adaptive agents. Bridges UTI theory and UAIF engineering.',
  },
  {
    id: 'unified-obj', label: 'Unified Objective', sublabel: 'J=αP+βC+γM+δA+εN',
    type: 'Formalism', theory: 'shared', x: 530, y: 280, accent: '#f43f5e',
    description: 'Multi-objective optimization: Performance + Coherence + Memory efficiency + Alignment + Novelty. Weights are meta-learned from context. Links goal architecture to measurable outcomes.',
  },
  {
    id: 'causal-ladder', label: "Pearl's Ladder", sublabel: 'Assoc.→Interv.→CF',
    type: 'Formalism', theory: 'shared', x: 530, y: 480, accent: '#f43f5e',
    description: 'Three levels: L1 Association P(Y|X), L2 Intervention P(Y|do(X)), L3 Counterfactual P(Yₓ|X=x′). Current ML at L1; UAIF targets L2-L3 as core capability requirements.',
  },
  {
    id: 'dsresearch', label: 'DSR Methodology', sublabel: 'Design Science',
    type: 'Method', theory: 'shared', x: 530, y: 700, accent: '#64748b',
    description: 'Design Science Research: create and evaluate artifacts (models, frameworks, prototypes) to produce both theoretical knowledge and practical systems. Underlying methodology for UTI/UAIF development.',
  },

  // ── UAIF Components (center-right x=730) ─────────────────────
  {
    id: 'latent-space', label: 'Latent Space', sublabel: 'Lₜ encoder',
    type: 'Component', theory: 'uaif', x: 730, y: 110, accent: '#10b981',
    description: 'Compressed internal representation capturing causal environment structure from multi-modal observations. Constrained to be grounded (via Γ) and temporally coherent to prevent drift.',
  },
  {
    id: 'grounding-fn', label: 'Grounding Function', sublabel: 'Γ: Lₜ→Eₜ',
    type: 'Component', theory: 'uaif', x: 730, y: 210, accent: '#10b981',
    description: 'P(Eᵢ|Lₜ,Hₜ,Cₜ): probabilistic mapping from latent concepts to episodic memory entries. Prevents hallucination by ensuring all symbolic content is anchored in experience.',
  },
  {
    id: 'tkg', label: 'TKG', sublabel: 'Temporal Knowledge Graph',
    type: 'Component', theory: 'uaif', x: 730, y: 320, accent: '#10b981',
    description: 'Dynamic knowledge graph: time-stamped nodes and edges with decay rates, confidence trajectories, and causal structure. Supports belief revision, contradiction detection, and temporal reasoning.',
  },
  {
    id: 'causal-module', label: 'Causal Module', sublabel: 'do-calculus engine',
    type: 'Component', theory: 'uaif', x: 730, y: 430, accent: '#10b981',
    description: 'Structural Causal Model built from TKG enabling L2 intervention planning (do-calculus) and L3 counterfactual simulation. Required for explanation and blame attribution.',
  },
  {
    id: 'memory-imp', label: 'Memory Importance', sublabel: 'I(Eᵢ)=f(u,c,r,n)',
    type: 'Component', theory: 'uaif', x: 730, y: 540, accent: '#10b981',
    description: 'Scores episodic memories by Usage frequency, Causality centrality, current Relevance, and Novelty at encoding. Drives consolidation into TKG semantic layer vs. compression/forgetting.',
  },
  {
    id: 'meta-learn', label: 'Meta-Learning', sublabel: 'Πₜ optimization',
    type: 'Component', theory: 'uaif', x: 730, y: 640, accent: '#10b981',
    description: 'Outer loop that adjusts learning algorithms, hyperparameters, and update rules from aggregate cross-task performance. Implements "learning to learn" at a slower timescale than task learning.',
  },
  {
    id: 'goal-arch', label: 'Goal Architecture', sublabel: 'G-hierarchy',
    type: 'Component', theory: 'uaif', x: 730, y: 750, accent: '#10b981',
    description: 'Hierarchical representation: terminal goals, instrumental sub-goals, hard constraints. Supports goal inference from incomplete instructions via Bayesian inverse planning.',
  },

  // ── UAIF Pillars (right column x=960) ────────────────────────
  {
    id: 'pillar-1', label: 'P1: Intel. Gap', sublabel: 'Characterize the deficit',
    type: 'Pillar', theory: 'uaif', x: 960, y: 88, accent: '#f43f5e',
    description: 'Formal 6-dimension characterization: cross-domain generalization, causal understanding, self-supervised learning, goal-directed planning, meta-cognition, open-ended learning. The measurement baseline for UAIF progress.',
    ref: '/pillar/1',
  },
  {
    id: 'pillar-2', label: 'P2: Grounding', sublabel: 'Symbol–experience link',
    type: 'Pillar', theory: 'uaif', x: 960, y: 198, accent: '#0ea5e9',
    description: 'Grounding function Γ: Lₜ→Eₜ anchoring all symbolic content in episodic experience. Core solution to hallucination in LLMs. Pillar 2 is the foundational capability enabling all others.',
    ref: '/pillar/2',
  },
  {
    id: 'pillar-3', label: 'P3: TKG', sublabel: 'Dynamic knowledge',
    type: 'Pillar', theory: 'uaif', x: 960, y: 308, accent: '#8b5cf6',
    description: 'Temporal Knowledge Graph with causal edges, belief revision, and contradiction detection. Enables reasoning about "X was true at t but revised at t+k" — the basis of the world model.',
    ref: '/pillar/3',
  },
  {
    id: 'pillar-4', label: 'P4: Memory', sublabel: 'Episodic + semantic',
    type: 'Pillar', theory: 'uaif', x: 960, y: 418, accent: '#10b981',
    description: 'Multi-system memory: episodic (specific events), semantic (TKG consolidated facts), procedural (skill routines). Memory importance function I(Eᵢ) drives consolidation without catastrophic forgetting.',
    ref: '/pillar/4',
  },
  {
    id: 'pillar-5', label: 'P5: Meta-Learning', sublabel: 'Learning to learn',
    type: 'Pillar', theory: 'uaif', x: 960, y: 528, accent: '#f59e0b',
    description: 'Meta-learning loop adjusts learning algorithms from aggregate cross-task performance. Interfaces with goal architecture (defines what "better" means) and unified objective J.',
    ref: '/pillar/5',
  },
  {
    id: 'pillar-6', label: 'P6: Goal Arch.', sublabel: 'Intent + planning',
    type: 'Pillar', theory: 'uaif', x: 960, y: 638, accent: '#3b82f6',
    description: 'Hierarchical goal representation with goal inference from partial instructions (Bayesian IRL), conflict resolution, and multi-objective planning under uncertainty. Alignment-critical component.',
    ref: '/pillar/6',
  },
  {
    id: 'pillar-7', label: 'P7: Complete Vision', sublabel: 'Adaptive intelligence',
    type: 'Pillar', theory: 'uaif', x: 960, y: 748, accent: '#d946ef',
    description: 'End-state capability specification closing all 6 intelligence gap dimensions simultaneously. The "north star" against which all pillar progress is measured. J achieved, gap closed.',
    ref: '/pillar/7',
  },
]

export const edges = [
  // ── UTI Stage chain ────────────────────────────────────────────
  { id: 'e1',  source: 'stage-00', target: 'stage-01', type: 'LEADS_TO' },
  { id: 'e2',  source: 'stage-01', target: 'stage-02', type: 'LEADS_TO' },
  { id: 'e3',  source: 'stage-02', target: 'stage-03', type: 'LEADS_TO' },
  { id: 'e4',  source: 'stage-03', target: 'stage-04', type: 'LEADS_TO' },
  { id: 'e5',  source: 'stage-04', target: 'stage-05', type: 'LEADS_TO' },
  { id: 'e6',  source: 'stage-05', target: 'stage-06', type: 'LEADS_TO' },
  { id: 'e7',  source: 'stage-06', target: 'stage-07', type: 'LEADS_TO' },
  { id: 'e8',  source: 'stage-07', target: 'stage-08', type: 'LEADS_TO' },
  { id: 'e9',  source: 'stage-08', target: 'stage-09', type: 'LEADS_TO' },

  // ── Stage → Concept introductions ─────────────────────────────
  { id: 'e10', source: 'stage-01', target: 'erpx',            type: 'INTRODUCES' },
  { id: 'e11', source: 'stage-02', target: 'structural-intel', type: 'INTRODUCES' },
  { id: 'e12', source: 'stage-03', target: 'cross-domain',    type: 'INTRODUCES' },
  { id: 'e13', source: 'stage-04', target: 'intel-convergence', type: 'INTRODUCES' },
  { id: 'e14', source: 'stage-05', target: 'phase-trans',     type: 'INTRODUCES' },
  { id: 'e15', source: 'stage-06', target: 'erpsim-fw',       type: 'INTRODUCES' },
  { id: 'e16', source: 'stage-07', target: 'csim-fw',         type: 'INTRODUCES' },
  { id: 'e17', source: 'stage-09', target: 'erp-fw',          type: 'INTRODUCES' },

  // ── UTI Concept relationships ──────────────────────────────────
  { id: 'e18', source: 'erpx',            target: 'structural-intel',  type: 'ENABLES' },
  { id: 'e19', source: 'structural-intel', target: 'cross-domain',     type: 'ENABLES' },
  { id: 'e20', source: 'cross-domain',    target: 'intel-convergence', type: 'PREDICTS' },
  { id: 'e21', source: 'intel-convergence', target: 'phase-trans',     type: 'EXHIBITS' },
  { id: 'e22', source: 'erpsim-fw',       target: 'csim-fw',           type: 'TESTS' },
  { id: 'e23', source: 'csim-fw',         target: 'erp-fw',            type: 'ENABLES' },

  // ── Concept → Shared Formalisms ────────────────────────────────
  { id: 'e24', source: 'erpx',            target: 'state-equation', type: 'FORMALIZES' },
  { id: 'e25', source: 'structural-intel', target: 'unified-obj',   type: 'GROUNDS' },
  { id: 'e26', source: 'phase-trans',     target: 'causal-ladder',  type: 'REQUIRES' },
  { id: 'e27', source: 'erp-fw',          target: 'dsresearch',     type: 'ENABLES' },

  // ── UAIF Pillar chain ──────────────────────────────────────────
  { id: 'e28', source: 'pillar-1', target: 'pillar-2', type: 'FEEDS_INTO' },
  { id: 'e29', source: 'pillar-2', target: 'pillar-3', type: 'FEEDS_INTO' },
  { id: 'e30', source: 'pillar-3', target: 'pillar-4', type: 'FEEDS_INTO' },
  { id: 'e31', source: 'pillar-4', target: 'pillar-5', type: 'FEEDS_INTO' },
  { id: 'e32', source: 'pillar-5', target: 'pillar-6', type: 'FEEDS_INTO' },
  { id: 'e33', source: 'pillar-6', target: 'pillar-7', type: 'ACHIEVES' },

  // ── Pillar → Component ─────────────────────────────────────────
  { id: 'e34', source: 'pillar-1', target: 'latent-space',  type: 'IMPLEMENTS' },
  { id: 'e35', source: 'pillar-2', target: 'grounding-fn',  type: 'IMPLEMENTS' },
  { id: 'e36', source: 'pillar-3', target: 'tkg',           type: 'IMPLEMENTS' },
  { id: 'e37', source: 'pillar-3', target: 'causal-module', type: 'IMPLEMENTS' },
  { id: 'e38', source: 'pillar-4', target: 'memory-imp',    type: 'IMPLEMENTS' },
  { id: 'e39', source: 'pillar-5', target: 'meta-learn',    type: 'IMPLEMENTS' },
  { id: 'e40', source: 'pillar-6', target: 'goal-arch',     type: 'IMPLEMENTS' },

  // ── Component internal relationships ──────────────────────────
  { id: 'e41', source: 'grounding-fn', target: 'tkg',           type: 'POPULATES' },
  { id: 'e42', source: 'tkg',          target: 'causal-module', type: 'ENABLES' },
  { id: 'e43', source: 'meta-learn',   target: 'unified-obj',   type: 'OPTIMIZES' },

  // ── Formalism → Component (governance) ────────────────────────
  { id: 'e44', source: 'state-equation', target: 'latent-space', type: 'GOVERNS' },
  { id: 'e45', source: 'state-equation', target: 'goal-arch',    type: 'GOVERNS' },
  { id: 'e46', source: 'causal-ladder',  target: 'causal-module', type: 'FORMALIZES' },
  { id: 'e47', source: 'unified-obj',    target: 'goal-arch',    type: 'GOVERNS' },

  // ── Cross-theory: UTI Stage → UAIF Pillar (MOTIVATES) ─────────
  { id: 'e48', source: 'stage-01', target: 'pillar-1', type: 'MOTIVATES' },
  { id: 'e49', source: 'stage-02', target: 'pillar-2', type: 'MOTIVATES' },
  { id: 'e50', source: 'stage-03', target: 'pillar-3', type: 'MOTIVATES' },
  { id: 'e51', source: 'stage-04', target: 'pillar-4', type: 'MOTIVATES' },
  { id: 'e52', source: 'stage-05', target: 'pillar-5', type: 'MOTIVATES' },
  { id: 'e53', source: 'stage-06', target: 'pillar-6', type: 'MOTIVATES' },
  { id: 'e54', source: 'stage-08', target: 'pillar-7', type: 'MOTIVATES' },
]
