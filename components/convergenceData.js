export const bridges = [
  {
    stageId: 1,
    stageNumber: '00',
    stageTitle: 'Pre-Foundational Phase',
    stageIcon: '🌐',
    stageAccent: '#64748b',
    narrative: 'Pre-foundational science fragmented intelligence across isolated domains — biology, economics, AI, governance — each with its own notation for the same structural patterns. This is the opening diagnosis that both UTI and UAIF begin from.',
    connections: [
      {
        pillarId: 1,
        strength: 'primary',
        bridge: 'UAIF Pillar 1 (The Intelligence Gap) is the modern, technical restatement of the pre-foundational fragmentation problem. Where Stage 00 observes that biology, economics, and AI solve similar problems with different notation, Pillar 1 shows that LLMs are the latest expression of this failure — statistically capable but architecturally unable to generalize across contexts, maintain memory, or reason causally.',
      },
      {
        pillarId: 7,
        strength: 'primary',
        bridge: 'The Santa Fe Institute\'s discovery of universal structural patterns across complex systems is the intellectual seed of UAIF\'s substrate-independence claim. Stage 00\'s core question — "is structural similarity surface-level or evidence of a deeper unified theory?" — is answered by Pillar 7\'s Complete Vision: Sₜ₊₁ = F(Sₜ, Oₜ, Aₜ, Mₜ, Πₜ) applies to any intelligence substrate.',
      },
    ],
  },

  {
    stageId: 2,
    stageNumber: '01',
    stageTitle: 'Information-Centric Intelligence',
    stageIcon: '💡',
    stageAccent: '#3b82f6',
    narrative: 'The Transformer era (2017–present) establishes the current paradigm: intelligence as statistical information transformation at scale. This stage defines both the ceiling of current AI and the floor from which UAIF must build.',
    connections: [
      {
        pillarId: 1,
        strength: 'primary',
        bridge: 'Stage 01\'s LLMs are the exact systems that UAIF Pillar 1 critiques. Transformers are the "sophisticated autocomplete" — remarkable at statistical compression and generation, but architecturally incapable of persistent entity memory, causal intervention, or temporal world-model construction. Stage 01 defines the capability ceiling that makes Pillar 1\'s diagnosis necessary.',
      },
      {
        pillarId: 2,
        strength: 'primary',
        bridge: 'Stage 01\'s transformer encoders are the direct implementation of UAIF Pillar 2 (Perception & Encoding). The encoding equation Lₜ = Encoder(Oₜ) is precisely what foundation models compute. Stage 01\'s advances in multimodal encoding (CLIP, GPT-4V) provide the perceptual front-end that the Eternal Learning Graph\'s grounding and knowledge graph layers build upon.',
      },
    ],
  },

  {
    stageId: 3,
    stageNumber: '02',
    stageTitle: 'Epistemic Intelligence',
    stageIcon: '🧠',
    stageAccent: '#8b5cf6',
    narrative: 'Epistemic Intelligence (EEI) adds persistence, structured knowledge, and uncertainty awareness to the information-centric baseline. This is where the UAIF architecture becomes practically realizable — three of its seven pillars find their theoretical ground here.',
    connections: [
      {
        pillarId: 3,
        strength: 'primary',
        bridge: 'Stage 02\'s knowledge graph integration and entity extraction are the direct precursors of UAIF Pillar 3 (Semantic Grounding). The grounding function Γ: Lₜ → Eₜ is precisely the challenge EEI tackles: mapping neural representations to explicit, persistent entities in a structured knowledge graph. GraphRAG, Neo4j-backed agents, and entity-linking systems built at Stage 02 are prototype implementations of Pillar 3.',
      },
      {
        pillarId: 4,
        strength: 'primary',
        bridge: 'The persistent knowledge structures EEI builds — graph-augmented memory, session-persistent entity stores — are prototype Temporal Knowledge Graphs. Stage 02\'s core challenge (maintaining consistent world state across sessions) is exactly what Pillar 4\'s TKG formalizes as Sₜ = (Eₜ, Rₜ, Lₜ, Cₜ, Uₜ, Gₜ). EEI builds the first partial world models; the TKG makes them complete and temporally indexed.',
      },
      {
        pillarId: 6,
        strength: 'primary',
        bridge: 'Stage 02\'s persistent memory architecture — episodic storage, semantic retrieval, recency weighting — directly implements UAIF Pillar 6 (Memory Architecture) at prototype scale. The importance scoring function I(Eᵢ) = f(usage, causality, relevance, novelty) formalizes what EEI systems do heuristically: prioritizing relevant knowledge over noise.',
      },
    ],
  },

  {
    stageId: 4,
    stageNumber: '03',
    stageTitle: 'Structural Intelligence Theory',
    stageIcon: '🔷',
    stageAccent: '#f59e0b',
    narrative: 'Structural Intelligence provides the mathematical language — graph theory, category theory, spectral analysis — that formalizes how intelligence is encoded in relational structure. This stage supplies the formal foundations for three UAIF pillars.',
    connections: [
      {
        pillarId: 3,
        strength: 'primary',
        bridge: 'Stage 03\'s ontology alignment work — finding structure-preserving mappings between domain-specific representations — is the mathematical foundation of UAIF Pillar 3\'s cross-domain grounding capability. Category theory\'s functors (structure-preserving maps between categories) formalize the grounding function Γ and the ontology alignment operations that let the same entity appear across different domain representations.',
      },
      {
        pillarId: 4,
        strength: 'primary',
        bridge: 'The Temporal Knowledge Graph\'s relational data model is a direct instantiation of Structural Intelligence Theory. Stage 03\'s graph neural networks, spectral graph analysis, and invariant detection methods are the computational tools used to query, reason over, and evolve the TKG\'s entity-relation structure. The TKG is structural intelligence made persistent and temporally indexed.',
      },
      {
        pillarId: 5,
        strength: 'secondary',
        bridge: 'Structural Intelligence\'s causal graph formalism — directed acyclic graphs encoding dependency relationships between entities — is the structural foundation of UAIF Pillar 5\'s Causal Reasoning Engine. The causal model Cₜ in the world state is precisely a structural graph, and the do-calculus operates over this structure to compute interventional distributions.',
      },
    ],
  },

  {
    stageId: 5,
    stageNumber: '04',
    stageTitle: 'ERP-X Cross-Domain Intelligence',
    stageIcon: '🔄',
    stageAccent: '#ec4899',
    narrative: 'ERP-X is the validation challenge for UAIF\'s substrate-independence claim. If intelligence is truly architectural rather than domain-specific, the UAIF framework must generalize across biology, economics, physics, and governance — ERP-X is where this claim is tested.',
    connections: [
      {
        pillarId: 3,
        strength: 'primary',
        bridge: 'Cross-domain transfer requires that the same entity — a "network hub", a "phase transition", an "adaptive agent" — be grounded consistently whether it appears in a biological, economic, or social context. Pillar 3\'s probabilistic grounding P(Eᵢ | Lₜ, Hₜ, Cₜ) and ontology alignment mechanisms are the infrastructure that makes cross-domain entity identity possible — the prerequisite for ERP-X\'s transfer operator T(A → B).',
      },
      {
        pillarId: 5,
        strength: 'primary',
        bridge: 'ERP-X\'s cross-domain transfer requires not just structural similarity but causal transfer: if intervention I produces effect E in domain A, does the analogous intervention in domain B produce the analogous effect? Pillar 5\'s causal reasoning engine — computing P(Sₜ₊₁ | do(Aₜ), Sₜ) — is the mechanism for evaluating and executing causal transfer across domain boundaries.',
      },
      {
        pillarId: 7,
        strength: 'primary',
        bridge: 'ERP-X is the empirical validation of Pillar 7\'s substrate-independence claim. If UAIF\'s state evolution law Sₜ₊₁ = F(Sₜ, Oₜ, Aₜ, Mₜ, Πₜ) is truly substrate-independent, it must produce the same architectural dynamics whether instantiated in an AI system, a biological neural network, a market economy, or a social organization. ERP-X provides the cross-domain experiments that test this universality.',
      },
    ],
  },

  {
    stageId: 6,
    stageNumber: '05',
    stageTitle: 'ERP-SIM Simulation Science',
    stageIcon: '🔬',
    stageAccent: '#14b8a6',
    narrative: 'Simulation Science operationalizes the UAIF\'s most powerful capabilities: counterfactual reasoning and forward planning. Running controlled experiments in simulated worlds is how the causal reasoning engine is validated and refined.',
    connections: [
      {
        pillarId: 4,
        strength: 'primary',
        bridge: 'The Temporal Knowledge Graph is both the target and the tool of simulation science. ERP-SIM runs simulations over world-state sequences — evolving Sₜ → Sₜ₊₁ under controlled interventions. The TKG stores the simulated world state at each timestep, tracks which entity attributes changed and why, and provides the structured query interface for extracting simulation results and comparing outcomes across experimental conditions.',
      },
      {
        pillarId: 5,
        strength: 'primary',
        bridge: 'Simulation Science is how UAIF\'s Causal Reasoning Engine is built and validated. Counterfactual simulation — "what would have happened if intervention X had been different?" — is the third rung of Pearl\'s Ladder, and the most powerful capability of the causal engine. ERP-SIM provides the controlled experimental environments where the engine\'s P(Sₜ₊₁ | do(Aₜ), Sₜ) computations can be compared against ground-truth simulated outcomes.',
      },
    ],
  },

  {
    stageId: 7,
    stageNumber: '06',
    stageTitle: 'CSIM Universal Intelligence Metrics',
    stageIcon: '📊',
    stageAccent: '#10b981',
    narrative: 'CSIM asks: how do we measure intelligence that is substrate-independent? The metrics developed here are the evaluation framework for UAIF\'s complete vision — they define what it means for the architecture to succeed.',
    connections: [
      {
        pillarId: 6,
        strength: 'primary',
        bridge: 'The Memory Architecture\'s importance scoring function I(Eᵢ) = f(usage, causality, relevance, novelty) is itself a CSIM metric: it quantifies how much each piece of knowledge contributes to the system\'s intelligence. Stage 06\'s universal intelligence metrics inform how to weight the four factors — what usage patterns, causal centrality measures, relevance signals, and novelty thresholds distinguish signal from noise in a growing world model.',
      },
      {
        pillarId: 7,
        strength: 'primary',
        bridge: 'UAIF\'s unified objective function J = αP + βC + γM + δA + εN is the architectural expression of Stage 06\'s universal intelligence metrics. Each term — Prediction, Causality, Memory, Adaptation, Novelty — corresponds to a measurable dimension of intelligence that CSIM formalizes. Stage 06 provides the experimental methods; Pillar 7 integrates them into the architecture\'s optimization objective.',
      },
    ],
  },

  {
    stageId: 8,
    stageNumber: '07',
    stageTitle: 'Multi-Scale Intelligence Unification',
    stageIcon: '🌊',
    stageAccent: '#6366f1',
    narrative: 'Multi-Scale Unification shows that the same intelligence dynamics — adaptation, memory, causality — operate identically from molecular to civilizational scales. This is the empirical backbone of UAIF\'s substrate-independence across scale.',
    connections: [
      {
        pillarId: 2,
        strength: 'secondary',
        bridge: 'Multi-scale encoding requires that Pillar 2\'s encoding layer Lₜ = Encoder(Oₜ) operate consistently across spatial and temporal scales: from protein interaction networks (nanometer scale) to market dynamics (global scale). Stage 07\'s allometric scaling laws and multi-scale compression methods inform how UAIF\'s encoder architecture must handle radically different observation granularities without losing the semantic content required for downstream grounding.',
      },
      {
        pillarId: 4,
        strength: 'primary',
        bridge: 'The Temporal Knowledge Graph must maintain coherent world models across multiple scales simultaneously — sub-system states, system states, and meta-system states all represented consistently. Stage 07\'s multi-scale unification theory provides the formal methods for constructing hierarchical world models where fine-grained entity states aggregate into coarse-grained system states without information loss, enabling the TKG to answer queries at any scale of analysis.',
      },
      {
        pillarId: 7,
        strength: 'primary',
        bridge: 'Multi-Scale Unification is the empirical confirmation that UAIF\'s state evolution law Sₜ₊₁ = F(Sₜ, Oₜ, Aₜ, Mₜ, Πₜ) is truly scale-invariant. If the same F describes the dynamics of a neuron, a brain, an organization, and a civilization, then the Complete Vision\'s substrate-independence is not just a philosophical claim but a measurable, falsifiable prediction — which is exactly what Stage 07 tests.',
      },
    ],
  },

  {
    stageId: 9,
    stageNumber: '08',
    stageTitle: 'Universal Theory of Intelligence',
    stageIcon: '🔮',
    stageAccent: '#f43f5e',
    narrative: 'The Universal Theory of Intelligence is the formal mathematical framework that UAIF implements as a running architecture. Theory and architecture are two expressions of the same insight — the theory describes what UAIF computes.',
    connections: [
      {
        pillarId: 5,
        strength: 'primary',
        bridge: 'The Universal Theory of Intelligence requires a formal account of causality — how interventions in the world produce determinate effects that an intelligent system can reason about, plan with, and explain. Pillar 5\'s causal reasoning engine is the computational implementation of this formal causal theory, grounded in Pearl\'s do-calculus and operating over the TKG\'s causal model Cₜ.',
      },
      {
        pillarId: 7,
        strength: 'primary',
        bridge: 'Stage 08\'s Universal Theory of Intelligence IS the UAIF — expressed mathematically rather than computationally. The theory defines intelligence as "the continual construction, stabilization, compression, evolution, and utilization of explicit and implicit world-state representations under uncertainty across time" — the exact behavior that the Complete Vision\'s state evolution law Sₜ₊₁ = F(Sₜ, Oₜ, Aₜ, Mₜ, Πₜ) computes. Theory and architecture are dual perspectives on the same object.',
      },
    ],
  },

  {
    stageId: 10,
    stageNumber: '09',
    stageTitle: 'Eternal Research Program',
    stageIcon: '♾️',
    stageAccent: '#d946ef',
    narrative: 'The Eternal Research Program is UTI\'s ultimate stage — a self-perpetuating scientific community that continuously refines the universal theory. UAIF is ERP\'s architectural blueprint: the ELG running at civilizational scale.',
    connections: [
      {
        pillarId: 6,
        strength: 'primary',
        bridge: 'The Eternal Research Program is, structurally, a Memory Architecture operating at the scale of a scientific community. New experiments add episodic traces; peer review consolidates them into semantic knowledge; established theory becomes procedural memory encoded in textbooks and curricula. The ERP lifecycle maps directly onto Pillar 6\'s importance-scored consolidation pipeline — the same architecture that manages individual entity memory manages civilizational knowledge.',
      },
      {
        pillarId: 7,
        strength: 'primary',
        bridge: 'The Eternal Research Program is the institutional realization of UAIF\'s Complete Vision. The ERP is not a static body of knowledge but a living system that continuously observes (new experiments), grounds observations in entities (scientific concepts), updates its world model (the knowledge graph of science), reasons causally (hypothesis testing), and consolidates memory (publication and review). UAIF is the architecture that makes ERP possible as a computational system, not just a human institution.',
      },
    ],
  },
]

export const PILLAR_META = [
  { id: 1, number: '01', label: 'Intelligence Gap',    icon: '⚠️', accent: '#f43f5e' },
  { id: 2, number: '02', label: 'Perception',          icon: '👁️', accent: '#0ea5e9' },
  { id: 3, number: '03', label: 'Grounding',           icon: '🔗', accent: '#8b5cf6' },
  { id: 4, number: '04', label: 'Knowledge Graph',     icon: '🕸️', accent: '#10b981' },
  { id: 5, number: '05', label: 'Causal Reasoning',    icon: '⚡', accent: '#f59e0b' },
  { id: 6, number: '06', label: 'Memory',              icon: '🧠', accent: '#3b82f6' },
  { id: 7, number: '07', label: 'Complete Vision',     icon: '🌌', accent: '#d946ef' },
]
