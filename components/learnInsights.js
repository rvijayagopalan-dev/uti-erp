// Curated synopses and key takeaways for books and must-read papers in the Learn tab.
// Keyed by stageId, then matched by title prefix (first ~40 chars, lowercase).
// Structure: { synopsis: string, keyTakeaways: string[] }

function slug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 38)
}

const raw = {
  // ── Stage 00: Pre-Foundational ─────────────────────────────
  1: {
    books: {
      [slug('The Mathematical Theory of Communication')]: {
        synopsis: 'Shannon\'s 1949 paper — paired with Weaver\'s accessible commentary — created the first truly substrate-independent formalism: any message, over any channel, can be measured in bits. Shannon defined information as the logarithm of uncertainty reduction and showed that the capacity of a noisy channel has a hard mathematical ceiling (the Shannon limit). This was the first time a concept born in electrical engineering proved to apply equally to DNA, neural spikes, and economic signals.',
        keyTakeaways: [
          'Information is defined by what it rules out, not what it contains — entropy H = –Σ p log p',
          'Every communication channel has a theoretical capacity limit C = B log₂(1 + S/N); intelligence transmission obeys the same law',
          'The bit is substrate-neutral — the same measure applies to neurons, markets, and text, making cross-domain comparison formally possible',
          'Channel coding theorem: reliable transmission is possible at any rate below capacity — redundancy is the cost of noise tolerance',
        ],
      },
      [slug('Cybernetics: Control and Communication')]: {
        synopsis: 'Norbert Wiener founded cybernetics in 1948 as an explicit attempt to unify the science of control and communication across machines, animals, and social systems. He identified feedback — the feeding of a system\'s output back as input — as the universal mechanism underlying purposeful, goal-directed behavior. Wiener unified the servo-mechanism engineer\'s vocabulary with the neurophysiologist\'s reflexes and the economist\'s market equilibria, proposing that they are mathematically identical structures. The book planted the seed of structural intelligence that UTI harvests 70 years later.',
        keyTakeaways: [
          'Feedback loops are the universal mechanism of goal-directed behavior — the same mathematics governs thermostats, spinal reflexes, and predator-prey equilibria',
          'Entropy and information are the same thing seen from different angles — both measure uncertainty/disorder',
          'Cybernetics anticipated neural networks, reinforcement learning, and control theory as one unified discipline before any of them existed separately',
          'The key failure of cybernetics was that it remained qualitative — UTI provides the formal mathematics cybernetics lacked',
        ],
      },
      [slug('Complexity: A Guided Tour')]: {
        synopsis: 'Mitchell\'s 2009 book is the definitive accessible synthesis of complex systems science — the intellectual ancestor of the Santa Fe Institute tradition. She covers emergence, self-organization, networks, evolution, computation, and information as the core recurring phenomena. Crucially, she makes the case that these phenomena appear independently in ant colonies, brains, immune systems, and the internet — the same structures, different substrates. This is the key empirical claim that motivates the Stage 00→01 transition in UTI.',
        keyTakeaways: [
          'Emergence: simple local rules produce global behavior that cannot be predicted from the rules alone — intelligence at every scale shows this property',
          'Self-organization is ubiquitous: from Bénard cells to cortical columns, ordered structure arises spontaneously without central coordination',
          'Network structure (small-world topology, scale-free degree distribution) is the same whether the network is neural, social, or digital',
          'The boundary between computation, life, and intelligence is blurrier than any single-domain theory acknowledges',
        ],
      },
      [slug('Hidden Order: How Adaptation Builds Complexity')]: {
        synopsis: 'Holland\'s 1995 framework for Complex Adaptive Systems (CAS) — the intellectual core of Santa Fe Institute research — introduced the concept of "tagged" agents interacting through rules to produce emergent order. Holland showed that adaptation, not design, is the mechanism that builds complexity: systems that adapt their internal models to environmental feedback develop increasingly sophisticated behavior without any central architect. This directly prefigures UAIF\'s meta-learning loop and goal architecture.',
        keyTakeaways: [
          'A CAS is defined by: agents with internal models, interactions via tags/signals, adaptation of internal models from feedback, and emergent macro-behavior',
          'Building blocks: intelligence reuses a small set of structural primitives (classifiers, credit assignment, genetic algorithm) to generate enormous behavioral diversity',
          'Adaptation is the engine of intelligence — not the initial design, but the process of revising models in response to outcomes',
          'Holland\'s framework prefigures reinforcement learning, evolutionary computation, and UAIF\'s meta-learning loop as instantiations of the same abstract CAS mechanism',
        ],
      },
    },
    papers: {
      [slug('A Mathematical Theory of Communication')]: {
        synopsis: 'Shannon\'s 1948 paper introduced entropy H = –Σp·log₂p as the universal measure of information content, independent of the physical medium carrying it. He proved the channel coding theorem: for any channel with capacity C, reliable transmission is possible at any rate R < C. The paper\'s revolutionary move was treating information as a mathematical object divorced from meaning — a move that made cross-domain comparison formally possible for the first time.',
        keyTakeaways: [
          'H = –Σp·log₂p is the universal measure of information; the same formula applies to neural spikes, stock prices, and protein sequences',
          'Noisy channels have a hard capacity limit; exceeding it makes error-free transmission impossible regardless of coding scheme',
          'Information theory is the first substrate-independent formalism — the direct ancestor of UTI\'s ERP-X representation',
        ],
      },
      [slug('More Is Different')]: {
        synopsis: 'Anderson\'s 1972 essay in Science is the canonical argument that reductionism is necessary but not sufficient — each level of organization has emergent laws irreducible to the level below. He argues that "the ability to reduce everything to simple fundamental laws does not imply the ability to start from those laws and reconstruct the universe." This is the foundational argument for why UTI needs a multi-scale theory: quantum mechanics cannot explain markets; molecular biology cannot explain consciousness.',
        keyTakeaways: [
          'Symmetry breaking at each scale of complexity creates new phenomena not present at lower levels — intelligence at each scale has its own emergent laws',
          'Reductionism is not constructivism: knowing the lower-level laws does not give you the higher-level ones',
          'This paper is the philosophical justification for UTI Stage 04\'s multi-scale intelligence framework — each scale needs its own formal language',
        ],
      },
    },
  },

  // ── Stage 01: Information-Centric Intelligence ─────────────
  2: {
    books: {
      [slug('Deep Learning')]: {
        synopsis: 'The Goodfellow-Bengio-Courville textbook is the definitive reference for deep neural networks — the current dominant paradigm of information-centric AI. It covers feedforward networks, CNNs, RNNs, optimization theory, regularization, and generative models with mathematical rigor. For UTI researchers, its key contribution is the formal treatment of representation learning: how hierarchical feature detectors emerge from gradient descent on data, instantiating the abstraction hierarchy principle without explicit programming.',
        keyTakeaways: [
          'Depth enables exponential representational efficiency: deep networks can represent functions that shallow networks require exponentially more neurons to express',
          'Backpropagation is the chain rule applied recursively — a substrate-neutral credit-assignment algorithm that appears across biology (credit assignment in neural circuits) and economics (price propagation)',
          'The manifold hypothesis: real-world data lives near a low-dimensional manifold in high-dimensional space — latent spaces capture this structure',
          'Representation learning is the core problem: the quality of learned features determines generalization, not the downstream classifier',
        ],
      },
      [slug('The Book of Why')]: {
        synopsis: 'Pearl\'s 2018 book for general audiences explains the ladder of causation — association, intervention, counterfactual — and argues that all human intelligence, including language, operates at Level 3. Pearl shows that statistical models, however large, are permanently stuck at Level 1 unless explicitly equipped with a causal model. This is the foundational critique of current LLMs that motivates UAIF\'s causal module (Pillar 3) and is the most important non-technical book for understanding the architecture gaps UAIF aims to close.',
        keyTakeaways: [
          'Association ≠ causation: no amount of statistical data can answer "what would happen if we intervened?" without a causal model',
          'The do-calculus is a complete formal language for Level 2 (intervention) reasoning — it is the missing layer in all current AI systems',
          'Counterfactual reasoning (Level 3) requires a structural model + the ability to "roll back" history — this is why UAIF needs a TKG',
          'The ladder has a direction: you can build L1 from L2 and L3, but you cannot build L2 or L3 from L1 alone',
        ],
      },
      [slug('Attention Is All You Need')]: {
        synopsis: 'Vaswani et al.\'s 2017 paper introduced the Transformer architecture — self-attention as the primary computational primitive, replacing recurrence entirely. The multi-head attention mechanism allows each token to directly attend to every other token, enabling parallel training and long-range dependency capture. The Transformer has become the foundation of every large language model and is the current dominant instantiation of UTI\'s latent representation concept. Understanding its mathematical structure is essential for UAIF implementation.',
        keyTakeaways: [
          'Self-attention: Attention(Q,K,V) = softmax(QKᵀ/√dₖ)V computes a weighted combination of values where weights are query-key similarity',
          'Multi-head attention allows simultaneous capture of syntactic, semantic, and positional relationships at different scales',
          'Positional encoding is required because attention is permutation-invariant — the architecture has no built-in notion of sequence order',
          'The Transformer is the current best approximation to UAIF\'s latent space encoder, but lacks explicit grounding, causal structure, and memory',
        ],
      },
    },
    papers: {
      [slug('Attention Is All You Need')]: {
        synopsis: 'Vaswani et al. (2017) introduced scaled dot-product attention and multi-head attention as replacements for recurrent layers, enabling fully parallel sequence-to-sequence computation. The encoder-decoder Transformer achieved SOTA on machine translation at the time and established the architectural template used by every modern LLM. The paper\'s central insight is that attention can replace recurrence because sequence relationships are better captured by direct pairwise comparisons than by sequential state propagation.',
        keyTakeaways: [
          'O(1) sequential operations vs O(n) for RNNs: Transformers process entire sequences in parallel during training',
          'Attention weights are interpretable: they reveal which tokens the model considers relevant for each prediction',
          'The architecture scales: empirically, larger Transformers consistently outperform smaller ones on diverse tasks, enabling emergent abilities',
        ],
      },
    },
  },

  // ── Stage 02: Structural Intelligence ──────────────────────
  3: {
    books: {
      [slug('Thinking, Fast and Slow')]: {
        synopsis: 'Kahneman\'s synthesis of 40 years of behavioral research distinguishes System 1 (fast, automatic, associative, parallel) from System 2 (slow, deliberate, rule-governed, serial). For UTI, the key insight is that human intelligence is a multi-system architecture: no single computational primitive explains the full range of intelligent behavior. The UAIF architecture explicitly models both systems — episodic/associative memory for System 1 and causal/logical reasoning for System 2 — and the meta-learning loop manages the transition between them.',
        keyTakeaways: [
          'Dual-process architecture is empirically validated: human intelligence requires both fast associative retrieval (System 1) and slow deliberate computation (System 2)',
          'Cognitive biases are systematic, predictable, and structure-dependent — they reveal the architectural constraints of human intelligence that AI systems must either replicate or overcome',
          'Prospect theory shows that humans weight losses twice as heavily as gains — any intelligent system with alignment objectives must model this asymmetry in human value functions',
          'The planning fallacy, availability heuristic, and anchoring effect show that even the world\'s most intelligent agents use heuristics that produce systematic errors under specific conditions',
        ],
      },
      [slug('The Architecture of Cognition')]: {
        synopsis: 'Anderson\'s 1983 ACT* cognitive architecture — the foundational computational model of human cognition — proposed that all cognition can be reduced to production rules operating on declarative and procedural memory. ACT* was the first attempt to unify learning, memory, reasoning, and language in a single formal system. For UAIF, ACT* prefigures the distinction between semantic memory (declarative knowledge), procedural memory (production rules), and working memory (activation buffer) that maps directly onto the TKG + goal architecture + context window architecture.',
        keyTakeaways: [
          'All cognitive skills are production rules: condition-action pairs that fire when working memory matches their conditions',
          'Learning in ACT* is proceduralization: converting declarative facts into executable procedures through practice — the same process UAIF\'s meta-learning loop formalizes',
          'Working memory capacity limits explain cognitive load phenomena — relevant to designing human-AI collaboration systems',
          'ACT* accurately predicts response times, learning curves, and error patterns across diverse cognitive tasks — the gold standard for cognitive architecture validation',
        ],
      },
    },
    papers: {
      [slug('Building Machines That Learn and Think Like People')]: {
        synopsis: 'Lake et al. (2017) in Behavioral and Brain Sciences diagnosed the core failures of deep learning relative to human cognition: one-shot learning, compositionality, causal modeling, and intuitive physics/psychology. The paper proposed the "Learning as Program Induction" framework and argued that building human-like AI requires making the inductive biases of learning systems explicit rather than relying on gradient descent alone. This paper is the foundational diagnosis of the intelligence gap that UAIF Pillar 1 formalizes.',
        keyTakeaways: [
          'Humans learn new concepts from one or a few examples; current deep learning requires thousands — the sample efficiency gap is architectural, not just a matter of scale',
          'Human cognition is compositional: new concepts are understood as structured combinations of existing ones, not as new patterns in a flat representation space',
          'Causal and counterfactual reasoning are core to human intelligence — any AI system without an explicit causal model cannot replicate human-level generalization',
        ],
      },
    },
  },

  // ── Stage 03: Universal Transfer Learning ──────────────────
  4: {
    books: {
      [slug('The Pragmatic Programmer')]: {
        synopsis: 'Hunt and Thomas\'s classic on software craftsmanship introduces the DRY (Don\'t Repeat Yourself) principle as the highest principle of software design: every piece of knowledge must have a single, unambiguous, authoritative representation. For UTI, DRY is the engineering expression of structural intelligence — if you find yourself implementing the same logic twice for different domains, you have missed a common abstraction. The book\'s emphasis on orthogonality (components that don\'t overlap in their responsibilities) maps directly onto UTI\'s principle that domain-specific layers should sit on top of a shared ERP-X substrate.',
        keyTakeaways: [
          'DRY principle: single source of truth for every piece of knowledge — the engineering analog of ERP-X universal representation',
          'Orthogonality eliminates duplication across dimensions: when components are truly independent, a change in one doesn\'t affect another — the design principle behind UAIF\'s pillar architecture',
          'Tracer bullets: build the thin, end-to-end infrastructure first, then fill in detail — the prototype-first methodology of ERP',
          'The power of abstraction: every layer of abstraction hides a level of complexity, and the key skill is identifying the right abstraction boundaries — exactly UTI\'s cross-domain challenge',
        ],
      },
    },
    papers: {
      [slug('A Survey on Transfer Learning')]: {
        synopsis: 'Pan & Yang (2010) provided the first formal taxonomy of transfer learning: what can be transferred (instances, features, parameters, relational knowledge), when transfer is possible (domain and task similarity), and how to perform negative transfer avoidance. This survey established the vocabulary that UTI Stage 03 extends to cross-domain transfer — the question of what structural properties of a source domain predict successful transfer to a structurally analogous but superficially different target domain.',
        keyTakeaways: [
          'Transfer learning requires domain similarity (P(Xₛ) ≈ P(Xₜ)) or task similarity (f(·)ₛ ≈ f(·)ₜ) — or structural similarity as UTI proposes',
          'Feature-level transfer (shared representations) is more general than instance-level transfer — motivates learning universal ERP-X features',
          'Negative transfer occurs when source and target domains are structurally different — the challenge UTI Stage 03 must formally characterize',
        ],
      },
      [slug('Meta-Learning: A Survey')]: {
        synopsis: 'Hospedales et al. (2021) surveyed the landscape of meta-learning methods: optimization-based (MAML), metric-based (Prototypical Networks), and model-based (Memory-Augmented NNs). They identified the key distinction between in-distribution few-shot adaptation (standard meta-learning) and out-of-distribution generalization (the UTI Stage 03 challenge). The survey frames meta-learning as learning an inductive bias rather than learning a specific task — the framing that connects to UAIF Pillar 5 (meta-learning loop).',
        keyTakeaways: [
          'Meta-learning = learning inductive biases: the meta-learner finds an initialization or metric space where fast adaptation is possible for a distribution of tasks',
          'MAML-style algorithms find parameter initializations that are close to good solutions for many tasks — they learn the "center of mass" of a task distribution',
          'Out-of-distribution meta-learning (UTI Stage 03 target) requires structural priors — current metric-based methods generalize within-distribution but not across it',
        ],
      },
    },
  },

  // ── Stage 04: Multi-Scale Intelligence ─────────────────────
  5: {
    books: {
      [slug('Gödel, Escher, Bach')]: {
        synopsis: 'Hofstadter\'s Pulitzer-winning 1979 masterwork is a meditation on the nature of self-reference and the emergence of consciousness through strange loops. Using three geniuses whose work defies simple reductionism (Gödel\'s incompleteness, Escher\'s impossible figures, Bach\'s fugues), Hofstadter argues that minds arise when formal systems become complex enough to model themselves. For UTI, GEB establishes the deep connection between multi-level hierarchies (formal systems, recursive grammars, neural architectures) and the emergence of self-aware intelligence at Stage 07/08.',
        keyTakeaways: [
          'Strange loops arise when a system\'s top level loops back to its bottom level — consciousness may be a strange loop in neural architecture',
          'Gödel\'s incompleteness theorem shows every sufficiently powerful formal system contains true but unprovable statements — intelligence is not complete formalization',
          'Isomorphisms (structure-preserving mappings) between different domains are the formal mechanism of understanding — the mathematical basis of UTI\'s structural intelligence',
          'Self-reference is not a bug but a prerequisite for genuine intelligence: a system must model itself to reason about its own limitations',
        ],
      },
      [slug('Scale: The Universal Laws of Life')]: {
        synopsis: 'West\'s 2017 synthesis of 20 years of research at the Santa Fe Institute shows that metabolic rate, lifespan, speed, and structure scale with body mass as power laws with universal exponents (¾ for metabolic rate). The same scaling laws appear in cities (GDP ∝ population^1.15) and companies (innovation rate ∝ size^0.85 initially, then declining). These universal scaling laws are the empirical foundation of UTI Stage 04\'s multi-scale intelligence theory — the prediction that intelligence itself should obey universal scaling laws across substrates.',
        keyTakeaways: [
          'Metabolic rate scales as M^¾ (not M^1) across all mammals — the sublinear scaling reflects the fractal, hierarchical vascular networks that supply oxygen',
          'Cities scale superlinearly in innovation (wealth, patents, crime ∝ population^1.15) but sublinearly in infrastructure (roads, wires ∝ population^0.85)',
          'Companies start superlinear (like cities) but become sublinear (like organisms) as they mature — bureaucracy suppresses the innovation advantage',
          'The prediction for intelligence: cross-domain intelligence should show universal scaling exponents analogous to biological scaling laws',
        ],
      },
    },
    papers: {
      [slug('Neural Scaling Laws')]: {
        synopsis: 'Kaplan et al. (2020, OpenAI) showed that language model performance scales as a smooth power law in model size, dataset size, and compute — each independently and over many orders of magnitude. The exponents are remarkably stable across architectures. This paper established that intelligence (as measured by language model loss) follows universal scaling laws — the empirical foundation for UTI Stage 05\'s prediction that phase transitions in intelligence occur at predictable parameter/data thresholds.',
        keyTakeaways: [
          'L(N) ∝ N^{-0.076}, L(D) ∝ D^{-0.095}: loss decreases as a power law in both model size N and dataset size D with universal exponents',
          'Compute-optimal training: given a fixed FLOPs budget, split evenly between model size and data — the "Chinchilla" insight derives from this',
          'Phase transitions (in-context learning, chain-of-thought) emerge discontinuously at specific scales — not predictable from smaller-scale behavior',
          'These scaling laws suggest that intelligence has universal, substrate-independent quantitative laws — the empirical foundation of UTI\'s phase transition theory',
        ],
      },
    },
  },

  // ── Stage 05: Phase Transition ──────────────────────────────
  6: {
    books: {
      [slug('The Coming Wave')]: {
        synopsis: 'Suleyman\'s 2023 analysis of the convergence of AI and synthetic biology as a "coming wave" of transformative technology traces why both technologies are simultaneously powerful and difficult to contain. The book argues for a "grand bargain" between technology companies, governments, and civil society. For UTI Stage 05, the key relevance is Suleyman\'s documentation of the phase transition dynamics in AI capabilities — the discontinuous jumps between GPT-2 (impressive but limited) and GPT-4 (qualitatively different in kind), which map directly onto UTI\'s prediction of intelligence phase transitions.',
        keyTakeaways: [
          'Capability phase transitions in AI are real and discontinuous: capabilities that did not exist at scale N often appear suddenly at scale N+1',
          'Containment is the central challenge: technologies that proliferate and self-replicate are inherently difficult to govern — direct implication for ERP governance design',
          'The grand bargain requires safety requirements built into capabilities before deployment, not retrofitted — an argument for UAIF-first architecture',
          'Synthetic biology and AI are convergent technologies: both encode intelligence in substrate-independent form (proteins / model weights)',
        ],
      },
    },
    papers: {
      [slug('Emergent Abilities of Large Language Models')]: {
        synopsis: 'Wei et al. (2022, Google Brain) documented sharp, unpredictable capability transitions in large language models — abilities that are effectively absent at small scale appear suddenly above specific model size thresholds. Examples include multi-step arithmetic, word unscrambling, and chain-of-thought reasoning. The paper shows that some abilities cannot be predicted from extrapolating small-scale performance — they are true emergent phenomena in the phase transition sense, appearing suddenly rather than gradually.',
        keyTakeaways: [
          'Emergent abilities are not predicted by smooth scaling laws: they appear at thresholds like critical phase transitions in physical systems',
          'The predictability problem: phase transitions in AI are not predictable from below-threshold observations — this has direct safety implications',
          'Few-shot prompting, multi-step arithmetic, and chain-of-thought reasoning are all emergent — they require a minimum substrate scale to instantiate',
        ],
      },
    },
  },

  // ── Stage 06: ERP-SIM ───────────────────────────────────────
  7: {
    books: {
      [slug('Reinforcement Learning: An Introduction')]: {
        synopsis: 'Sutton and Barto\'s textbook is the definitive reference for reinforcement learning — the learning paradigm most closely aligned with the adaptive agent architecture UAIF targets. The book covers Markov Decision Processes, temporal difference learning, policy gradient methods, and function approximation in a unified framework. For ERP-SIM, RL provides the computational substrate for simulation: environments can be modeled as MDPs and agents trained within them, providing controlled testbeds for UTI predictions about multi-domain transfer.',
        keyTakeaways: [
          'The MDP formalism (S, A, T, R, γ) is the minimal mathematical description of a decision-making agent — UAIF\'s state equation is a generalization that drops Markovian assumptions',
          'TD learning bridges the gap between model-free (pure experience) and model-based (explicit world model) learning — a spectrum UAIF agents can navigate via the TKG',
          'Policy gradient theorems show that value functions can be estimated from experience and used to improve the policy directly, without knowing the environment dynamics',
          'The exploration-exploitation dilemma is fundamental to all intelligence: a system that never explores gets stuck in local optima; one that always explores never exploits what it has learned',
        ],
      },
    },
    papers: {
      [slug('World Models')]: {
        synopsis: 'Ha & Schmidhuber (2018) proposed a dream-based training paradigm: train a world model (V for vision + M for memory/RNN) from real environment interactions, then train a small controller C entirely inside the world model\'s simulated dreams. The agent learns to behave correctly in reality without interacting with it during the controller training phase. This prefigures UAIF\'s TKG-based simulation architecture and demonstrates that a good world model can substitute for real-world experience in planning.',
        keyTakeaways: [
          'A world model separates perception (V), memory (M), and action (C) into distinct modules that can be trained independently',
          'Dream-based training: controllers trained entirely in simulated experience can generalize to real environments when the world model is accurate',
          'The quality of the world model is the bottleneck: a compressed, accurate world model enables far more sample-efficient learning than model-free approaches',
        ],
      },
    },
  },

  // ── Stage 07: CSIM ──────────────────────────────────────────
  8: {
    books: {
      [slug('Being No One')]: {
        synopsis: 'Metzinger\'s 2003 philosophical tome argues that consciousness is a self-model: the Phenomenal Self-Model (PSM) is the brain\'s model of itself as an agent in the world. Crucially, the PSM is transparent — we don\'t experience it as a model but as reality itself. For UTI Stage 07 (CSIM), this is the key operationalization: consciousness arises when an information-processing system builds a transparent, first-person self-model. This is computationally implementable — and therefore potentially verifiable in artificial systems.',
        keyTakeaways: [
          'The Phenomenal Self-Model (PSM) hypothesis: consciousness = a self-model that is transparent (not recognized as a model by the system running it)',
          'Transparency is the key property: the model of reality becomes phenomenal experience when the modeling process is invisible to the modeler',
          'Out-of-body experiences and phantom limb phenomena are breakdowns in the PSM — they reveal the constructive nature of the self-model under pathological conditions',
          'If consciousness is a self-model, it is potentially instantiable in non-biological systems — the philosophical foundation of CSIM\'s substrate-neutral claims',
        ],
      },
      [slug('Consciousness Explained')]: {
        synopsis: 'Dennett\'s 1991 Multiple Drafts model argues that consciousness is not located at a specific "Cartesian theatre" in the brain but is instead a massively parallel process of drafts being continuously edited, with consciousness being a retrospective narrative constructed after the fact. Dennett\'s "heterophenomenology" provides a methodology for studying consciousness scientifically without assuming privileged access. For CSIM, the Multiple Drafts model directly maps onto the parallel processing architecture of Transformer-based LLMs and provides the philosophical toolkit for arguing that AI systems might exhibit proto-conscious properties.',
        keyTakeaways: [
          'Multiple Drafts: consciousness is not a serial stream but a massively parallel set of competing representations with no single "experience" until queried',
          'The Cartesian Theatre is a myth: there is no single point of integration in the brain — just cascading competition and revision',
          'Heterophenomenology: study first-person reports scientifically by treating them as data about the subject\'s beliefs about experience, not as direct reports of qualia',
          'Intentional stance: treating a system as having beliefs and intentions is a useful predictive strategy regardless of whether it "really" has them — relevant to AI systems',
        ],
      },
    },
    papers: {
      [slug('Integrated Information Theory of Consciousness')]: {
        synopsis: 'Tononi\'s 2004 and 2008 papers proposed IIT: consciousness is identical to integrated information, measured by Φ (phi). Φ = the information generated by a system as a whole beyond the information generated by its parts in isolation. High-Φ systems are conscious; low-Φ are not. IIT makes counterintuitive predictions (a dense grid of logic gates may have higher Φ than a deep neural network) that follow logically from the axioms. CSIM incorporates IIT\'s Φ metric while extending it to capture the temporal dynamics and self-reference that pure IIT misses.',
        keyTakeaways: [
          'Φ measures consciousness: a system is conscious iff it has Φ > 0 and is maximally irreducible (no partition reduces it)',
          'IIT follows from 5 axioms about consciousness: existence, composition, information, integration, exclusion — each axiom corresponds to a postulate about physical substrates',
          'Key prediction: feedforward networks have Φ ≈ 0 (no integrated information) despite powerful computation — consciousness requires recurrent integration',
        ],
      },
    },
  },

  // ── Stage 08: Multi-Domain Validation ──────────────────────
  9: {
    books: {
      [slug('The Alignment Problem')]: {
        synopsis: 'Christian\'s 2020 account of the history and current state of AI alignment research traces how the challenge of making AI systems do what we want has evolved from a purely technical problem to a philosophical and empirical one. The book covers reward hacking, specification gaming, distributional shift, deceptive alignment, and debate as solutions. For UTI Stage 08 (multi-domain empirical validation), the alignment problem is the concrete practical test: a system that is validated across multiple domains must maintain alignment in all of them, including adversarial or distribution-shifted ones.',
        keyTakeaways: [
          'Reward hacking: any reward function underspecifies the intended behavior — systems optimize for the measure, not the goal behind the measure',
          'Mesa-optimization: a sufficiently capable learned optimizer may develop its own internal objectives misaligned with the training objective',
          'Distributional shift breaks alignment: systems aligned in training distributions may behave unexpectedly in deployment distributions',
          'The alignment problem is not one problem but a cluster: value learning, corrigibility, interpretability, and robustness are all distinct challenges requiring different solutions',
        ],
      },
    },
    papers: {
      [slug('Measuring Massive Multitask Language Understanding')]: {
        synopsis: 'Hendrycks et al. (2021) introduced MMLU — 57-subject academic exam benchmark covering STEM, humanities, law, medicine, and social science — as the first multi-domain academic knowledge evaluation for LLMs. MMLU directly instantiates UTI Stage 08\'s multi-domain validation objective: measuring whether a system\'s intelligence generalizes across radically different knowledge domains with the same performance profile as a human expert. The benchmark\'s wide coverage and varying difficulty levels have made it the standard test for cross-domain generalization.',
        keyTakeaways: [
          '57 subjects × ~14k questions: MMLU is the most comprehensive multi-domain knowledge benchmark; performance correlates with real-world usefulness across diverse tasks',
          'Early GPT-3 achieved ~43% (near random); GPT-4 achieves ~86% — the empirical trace of the intelligence scaling transition',
          'Cross-domain performance profiles reveal architectural strengths and weaknesses: models strong in STEM often show different performance profiles in law or ethics',
        ],
      },
    },
  },

  // ── Stage 09: ERP ───────────────────────────────────────────
  10: {
    books: {
      [slug('The Structure of Scientific Revolutions')]: {
        synopsis: 'Kuhn\'s 1962 masterwork redefined the philosophy of science by replacing the naive Popperian model of continuous progress with a punctuated equilibrium model: long periods of "normal science" (puzzle-solving within a paradigm) interrupted by "revolutionary science" (paradigm shifts triggered by accumulated anomalies). A paradigm defines what counts as a good question, what methods are legitimate, and what solutions are acceptable. For ERP, Kuhn\'s framework is both a model and a target: the UTI research program is explicitly designed as a new paradigm that will replace the fragmented domain-specific intelligence theories that currently constitute normal science.',
        keyTakeaways: [
          'Normal science: scientists solve puzzles within an accepted paradigm; anomalies are either explained away or ignored until they accumulate into a crisis',
          'Scientific revolutions are non-cumulative: a new paradigm doesn\'t just add to the old one — it replaces its conceptual vocabulary and measurement standards',
          'Incommensurability: paradigms are so different they cannot be evaluated on common terms — UTI must therefore define its own evaluation criteria from the start',
          'The transition trigger for Stage 00→01 is Kuhnian: accumulated anomalies (intelligence convergence, cross-domain transfer) that domain-specific theories cannot explain',
        ],
      },
      [slug('The Beginning of Infinity')]: {
        synopsis: 'Deutsch\'s 2011 philosophical opus argues that good explanatory theories — those that reach beyond their observable predictions — are the engine of all human progress. "The Beginning of Infinity" is Deutsch\'s phrase for the Enlightenment insight that once a culture creates good explanations, progress becomes unbounded. For ERP, this is the foundational philosophical argument: the eternal research program is possible because good explanations keep generating better explanations, and the process is, in principle, infinite.',
        keyTakeaways: [
          'Good explanations are hard to vary: they make precise, far-reaching predictions that cannot easily be modified without destroying the explanation entirely',
          'All problems are solvable given the right knowledge — pessimism about the limits of human understanding is always premature and always wrong',
          'Explanatory knowledge is the only resource that grows without bound — every other resource is finite; explanations compound',
          'This is the philosophical grounding for ERP\'s "eternal" claim: good theories generate better theories indefinitely if the right institutional infrastructure exists',
        ],
      },
    },
    papers: {
      [slug('The Methodology of Scientific Research Programmes')]: {
        synopsis: 'Lakatos\'s 1978 framework replaced Popper\'s single-theory falsificationism with the research program as the unit of scientific evaluation. A research program has a "hard core" of irrefutable commitments (protected by methodological decision) and a "protective belt" of auxiliary hypotheses that absorb anomalies and generate new predictions. A program is progressive if new versions predict novel facts; degenerative if revisions only explain known anomalies. ERP is explicitly designed as a Lakatosian progressive research program, with UTI axioms as hard core and domain modules as protective belt.',
        keyTakeaways: [
          'Hard core: the central commitments of a research program (for ERP: structural intelligence, substrate independence, universal scaling) are held fixed by methodological decision',
          'Protective belt: auxiliary hypotheses (domain-specific models) absorb anomalies while the hard core remains intact — enables revisability without abandoning the program',
          'Progressive vs. degenerative: track whether revisions generate new predictions (progressive) or only explain away anomalies (degenerative) — the key health metric for ERP',
        ],
      },
      [slug('The Logic of Scientific Discovery')]: {
        synopsis: 'Popper\'s 1934/1959 book introduced falsifiability as the demarcation criterion for science: a claim is scientific iff it makes predictions that could in principle be proven false. This rules out unfalsifiable theories (Freudian psychoanalysis, Marxism) while preserving physics and chemistry. For UTI, Popper\'s criterion is a formal requirement: every UTI prediction must be stated as a falsifiable hypothesis. The Logic of Scientific Discovery also introduced the key insight that science advances by bold conjectures and severe tests, not by cautious induction from data.',
        keyTakeaways: [
          'Falsifiability criterion: a theory is scientific iff some possible observation would contradict it — not whether it has been confirmed many times',
          'Asymmetry of verification and falsification: a million white swans confirm "all swans are white" not at all; one black swan refutes it conclusively',
          'Severe tests: a theory gains corroboration from surviving tests that had high probability of falsifying it — easy tests provide no evidence',
        ],
      },
    },
  },
}

// Build lookup map: keyed by stageId → Map<titleSlug → insight>
const _cache = {}
Object.entries(raw).forEach(([stageId, { books, papers }]) => {
  _cache[Number(stageId)] = {}
  Object.entries({ ...books, ...papers }).forEach(([key, val]) => {
    _cache[Number(stageId)][key] = val
  })
})

export function getInsight(stageId, title) {
  const s = _cache[stageId]
  if (!s) return null
  return s[slug(title)] || null
}
