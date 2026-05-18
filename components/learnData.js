export const learnData = {

  /* ──────────────────────────────────────────────────────────────────
     STAGE 00 — Pre-Foundational Phase
  ────────────────────────────────────────────────────────────────── */
  1: {
    books: [
      {
        title: 'The Mathematical Theory of Communication',
        authors: 'Claude Shannon & Warren Weaver',
        year: 1949,
        level: 'Intermediate',
        description: 'The founding text of information theory. Shannon\'s original paper, paired with Weaver\'s accessible commentary. Essential reading to understand why bits became the universal language of intelligence.',
        url: 'https://archive.org/details/mathematicaltheo00shan',
      },
      {
        title: 'Cybernetics: Control and Communication in the Animal and the Machine',
        authors: 'Norbert Wiener',
        year: 1948,
        level: 'Advanced',
        description: 'The first rigorous attempt at a cross-domain theory of intelligence. Wiener unifies feedback, control, and goal-directed behavior across machines, animals, and social systems. Foundational context for the entire UTI program.',
        url: 'https://www.amazon.com/Cybernetics-Control-Communication-Animal-Machine/dp/026273009X',
      },
      {
        title: 'Complexity: A Guided Tour',
        authors: 'Melanie Mitchell',
        year: 2009,
        level: 'Beginner',
        description: 'The most accessible introduction to complex systems science. Covers emergence, self-organization, networks, evolution, and computation — all the cross-domain patterns that motivate Stage 00\'s transition to Stage 01.',
        url: 'https://www.amazon.com/Complexity-Guided-Tour-Melanie-Mitchell/dp/0199798111',
      },
      {
        title: 'Hidden Order: How Adaptation Builds Complexity',
        authors: 'John H. Holland',
        year: 1995,
        level: 'Intermediate',
        description: 'Holland\'s framework for complex adaptive systems — the intellectual foundation of Santa Fe Institute research. Explains how simple rules create complex adaptive behavior across all domains.',
        url: 'https://www.amazon.com/Hidden-Order-Adaptation-Builds-Complexity/dp/0201442302',
      },
      {
        title: 'The Fifth Discipline',
        authors: 'Peter M. Senge',
        year: 1990,
        level: 'Beginner',
        description: 'Systems thinking applied to organizations. A non-technical introduction to feedback loops, causal structures, and emergent behavior — the structural patterns that reappear across all domains in UTI research.',
        url: 'https://www.amazon.com/Fifth-Discipline-Practice-Learning-Organization/dp/0385517254',
      },
    ],
    articles: [
      {
        title: 'What is Complexity Science?',
        source: 'Santa Fe Institute',
        description: 'An accessible introduction to complexity science — the interdisciplinary field studying emergent phenomena in biology, economics, and AI. Explains why domain-specific theories are insufficient.',
        type: 'Overview',
        url: 'https://www.santafe.edu/research/themes/complexity-science',
      },
      {
        title: 'The Unreasonable Effectiveness of Mathematics',
        source: 'Eugene Wigner (1960)',
        description: 'Wigner\'s famous observation that mathematics developed for one purpose repeatedly proves applicable in completely unrelated domains. The intellectual ancestor of structural intelligence theory.',
        type: 'Essay',
        url: 'https://www.dartmouth.edu/~matc/MathDrama/reading/Wigner.html',
      },
      {
        title: 'Emergence: The Connected Lives of Ants, Brains, Cities and Software',
        source: 'Quanta Magazine',
        description: 'Modern treatment of emergence — how simple local rules create sophisticated global behavior in systems as different as ant colonies, neural circuits, and cities.',
        type: 'Feature',
        url: 'https://www.quantamagazine.org/the-surprising-origins-of-lifes-complexity-20130614/',
      },
      {
        title: 'Power Laws and the New Science of Complexity',
        source: 'Barabási Lab',
        description: 'Explains why power law distributions appear in seemingly unrelated complex systems — a key structural invariant linking biology, economics, and information networks.',
        type: 'Research Summary',
        url: 'https://barabasi.com/research/network-science',
      },
    ],
    labs: [
      { name: 'Santa Fe Institute', type: 'Research Institute', location: 'Santa Fe, NM, USA', focus: 'Complexity science, complex adaptive systems, cross-domain research', url: 'https://www.santafe.edu' },
      { name: 'New England Complex Systems Institute', type: 'Research Institute', location: 'Cambridge, MA, USA', focus: 'Complex systems across biology, society, and economics', url: 'https://necsi.edu' },
      { name: 'Network Science Institute (Northeastern)', type: 'University Lab', location: 'Boston, MA, USA', focus: 'Universal network structures across all domains', url: 'https://www.networkscienceinstitute.org' },
      { name: 'Complex Systems Society', type: 'Academic Society', location: 'Global', focus: 'Connecting complexity researchers across disciplines', url: 'https://cssociety.org' },
    ],
    papers: [
      { title: 'A Mathematical Theory of Communication', authors: 'C.E. Shannon', year: 1948, venue: 'Bell System Technical Journal', description: 'Defines information as substrate-independent entropy. The first universal framework for information — the direct ancestor of ERP\'s universal intelligence representation.', url: 'https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf', mustRead: true },
      { title: 'More Is Different', authors: 'Philip W. Anderson', year: 1972, venue: 'Science', description: 'Argues that each level of complexity has its own emergent laws — quantum mechanics doesn\'t explain psychology. Essential context for Stage 07\'s multi-scale unification challenge.', url: 'https://cse-robotics.engr.tamu.edu/dshell/cs689/papers/anderson72more_is_different.pdf', mustRead: true },
      { title: 'Emergence of Scaling in Random Networks', authors: 'Barabási & Albert', year: 1999, venue: 'Science', description: 'Shows that power-law network growth appears independently in the internet, biology, and social systems — the first rigorous demonstration of cross-domain structural invariants.', url: 'https://arxiv.org/abs/cond-mat/9910332', mustRead: false },
      { title: 'The Organization of Behavior', authors: 'Donald O. Hebb', year: 1949, venue: 'Book', description: 'Introduced Hebbian learning — "neurons that fire together, wire together." The biological learning rule that later inspired artificial neural networks.', url: 'https://www.amazon.com/Organization-Behavior-Neuropsychological-Theory/dp/0805843000', mustRead: false },
    ],
    code: [
      { title: 'NetworkX', description: 'Python library for creating, manipulating, and studying complex networks. Essential for Stage 00 analysis of cross-domain network structures and power-law distributions.', language: 'Python', platform: 'GitHub', url: 'https://networkx.org', stars: '14k+' },
      { title: 'Mesa', description: 'Agent-based modeling framework in Python. Build and analyze complex adaptive systems — the foundational simulation tool for ERP-SIM (Stage 05).', language: 'Python', platform: 'GitHub', url: 'https://mesa.readthedocs.io', stars: '2.4k+' },
      { title: 'NetLogo', description: 'Multi-agent simulation environment with a large model library. Excellent for exploring emergent phenomena in ecosystems, markets, and social systems without writing custom code.', language: 'NetLogo', platform: 'Northwestern University', url: 'https://ccl.northwestern.edu/netlogo/', stars: 'N/A' },
    ],
    diagrams: [
      { title: 'The Scale of Complexity', source: 'Santa Fe Institute', description: 'Visual map of how complexity science connects biology, economics, AI, and physics. Shows the structural relationships that motivate the UTI program.', type: 'Concept Map', url: 'https://www.santafe.edu/research/themes/complexity-science' },
      { title: 'Network Science Visualizations', source: 'Barabási Lab', description: 'Interactive visualizations showing universal network structures across domains — a visual demonstration of cross-domain structural invariants.', type: 'Interactive', url: 'https://barabasi.com/networksciencebook/' },
      { title: 'Information Theory Visual Introduction', source: 'Visual Information Theory', description: 'Beautiful visual explanation of entropy, mutual information, and KL divergence — the information-theoretic foundations of UTI.', type: 'Visual Tutorial', url: 'https://colah.github.io/posts/2015-09-Visual-Information/' },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────
     STAGE 01 — Information-Centric Intelligence
  ────────────────────────────────────────────────────────────────── */
  2: {
    books: [
      {
        title: 'Deep Learning',
        authors: 'Goodfellow, Bengio & Courville',
        year: 2016,
        level: 'Advanced',
        description: 'The definitive graduate-level textbook. Part III covers sequence models and attention. Chapters 10–12 are essential for understanding the pre-Transformer landscape that attention mechanisms replaced.',
        url: 'https://www.deeplearningbook.org',
      },
      {
        title: 'Dive into Deep Learning (D2L)',
        authors: 'Zhang, Lipton, Li & Smola',
        year: 2023,
        level: 'Intermediate',
        description: 'Fully interactive textbook with code in PyTorch, TensorFlow, and JAX. Chapters 10–11 cover attention and Transformer architecture in detail with runnable implementations.',
        url: 'https://d2l.ai',
      },
      {
        title: 'Build a Large Language Model (From Scratch)',
        authors: 'Sebastian Raschka',
        year: 2024,
        level: 'Intermediate',
        description: 'Step-by-step guide to building a GPT-style model from scratch. The most practical book for understanding Stage 01 systems — you build everything rather than just reading about it.',
        url: 'https://www.manning.com/books/build-a-large-language-model-from-scratch',
      },
      {
        title: 'Natural Language Processing with Transformers',
        authors: 'Lewis Tunstall et al. (O\'Reilly)',
        year: 2022,
        level: 'Intermediate',
        description: 'Practical guide to using Transformers via HuggingFace. Covers fine-tuning, RAG, and deployment. The best bridge between theory (Attention Is All You Need) and practice.',
        url: 'https://www.oreilly.com/library/view/natural-language-processing/9781098136789/',
      },
    ],
    articles: [
      {
        title: 'The Illustrated Transformer',
        source: 'Jay Alammar (jalammar.github.io)',
        description: 'The single best visual explanation of the Transformer architecture. Animates attention, multi-head attention, and encoder-decoder architecture step by step. Essential first reading before the paper.',
        type: 'Visual Tutorial',
        url: 'https://jalammar.github.io/illustrated-transformer/',
      },
      {
        title: 'The Illustrated GPT-2',
        source: 'Jay Alammar',
        description: 'Walks through how a decoder-only Transformer generates text token by token. Extends the Illustrated Transformer to autoregressive generation — the basis of all GPT-style models.',
        type: 'Visual Tutorial',
        url: 'https://jalammar.github.io/illustrated-gpt2/',
      },
      {
        title: 'A Visual Guide to Using BERT',
        source: 'Jay Alammar',
        description: 'Explains BERT\'s encoder-only architecture and how it differs from GPT. Essential for understanding the full landscape of Stage 01 Transformer variants.',
        type: 'Visual Tutorial',
        url: 'https://jalammar.github.io/a-visual-guide-to-using-bert-for-the-first-time/',
      },
      {
        title: 'Software 2.0',
        source: 'Andrej Karpathy (Medium)',
        description: 'Karpathy\'s influential essay arguing that neural networks trained on data are replacing hand-coded software as the dominant programming paradigm. Explains why Stage 01 matters beyond research.',
        type: 'Essay',
        url: 'https://karpathy.medium.com/software-2-0-a64152b37c35',
      },
      {
        title: 'Scaling Laws for Neural Language Models',
        source: 'OpenAI Blog',
        description: 'Explains the power-law scaling discovery that unlocked the foundation model era. Accessible summary of one of the most consequential empirical results in modern AI.',
        type: 'Research Blog',
        url: 'https://openai.com/research/scaling-laws-for-neural-language-models',
      },
    ],
    labs: [
      { name: 'Google DeepMind', type: 'Industry Lab', location: 'London / Mountain View', focus: 'Foundation models, Gemini, AlphaFold, reinforcement learning', url: 'https://deepmind.google' },
      { name: 'OpenAI', type: 'Industry Lab', location: 'San Francisco, CA', focus: 'GPT series, ChatGPT, DALL-E, Codex, reinforcement learning from human feedback', url: 'https://openai.com/research' },
      { name: 'Anthropic', type: 'Industry Lab', location: 'San Francisco, CA', focus: 'Claude, Constitutional AI, interpretability, safety research', url: 'https://www.anthropic.com/research' },
      { name: 'Meta AI (FAIR)', type: 'Industry Lab', location: 'Menlo Park, CA', focus: 'LLaMA, open-source models, representation learning', url: 'https://ai.meta.com/research/' },
      { name: 'Stanford HAI', type: 'University Lab', location: 'Stanford, CA', focus: 'Foundation models, AI policy, human-centered AI', url: 'https://hai.stanford.edu' },
      { name: 'MIT CSAIL', type: 'University Lab', location: 'Cambridge, MA', focus: 'NLP, vision, robotics, theory of computation', url: 'https://www.csail.mit.edu' },
    ],
    papers: [
      { title: 'Attention Is All You Need', authors: 'Vaswani, Shazeer et al.', year: 2017, venue: 'NeurIPS 2017', description: 'Introduces the Transformer architecture. Self-attention replaces recurrence entirely, enabling parallel processing and capturing long-range dependencies. Every modern LLM is built on this.', url: 'https://arxiv.org/abs/1706.03762', mustRead: true },
      { title: 'Language Models are Few-Shot Learners (GPT-3)', authors: 'Brown et al.', year: 2020, venue: 'NeurIPS 2020', description: 'GPT-3: 175B parameters, in-context few-shot learning, emergent capabilities. The paper that launched the foundation model era and made scaling the dominant AI strategy.', url: 'https://arxiv.org/abs/2005.14165', mustRead: true },
      { title: 'Scaling Laws for Neural Language Models', authors: 'Kaplan et al.', year: 2020, venue: 'OpenAI Technical Report', description: 'Empirical discovery that LLM performance scales predictably as a power law with compute, data, and parameters. Transforms AI from craft to engineering.', url: 'https://arxiv.org/abs/2001.08361', mustRead: true },
      { title: 'Chain-of-Thought Prompting Elicits Reasoning in LLMs', authors: 'Wei et al.', year: 2022, venue: 'NeurIPS 2022', description: 'Discovers that prompting models to "think step by step" dramatically improves reasoning. The first step toward Stage 02\'s structured reasoning architectures.', url: 'https://arxiv.org/abs/2201.11903', mustRead: false },
      { title: 'BERT: Pre-training of Deep Bidirectional Transformers', authors: 'Devlin et al.', year: 2019, venue: 'NAACL 2019', description: 'Encoder-only Transformer that dominated NLP benchmarks. Demonstrated that pre-training + fine-tuning is a universal approach for language understanding tasks.', url: 'https://arxiv.org/abs/1810.04805', mustRead: false },
    ],
    code: [
      { title: 'nanoGPT', description: 'Andrej Karpathy\'s minimal, clean implementation of a GPT-style model in ~300 lines of PyTorch. The best way to deeply understand Stage 01 systems by building one.', language: 'Python / PyTorch', platform: 'GitHub', url: 'https://github.com/karpathy/nanoGPT', stars: '38k+' },
      { title: 'HuggingFace Transformers', description: 'The standard library for working with pre-trained models. 500k+ models, easy fine-tuning, pipelines for every NLP task. The practical entry point for Stage 01 experimentation.', language: 'Python', platform: 'GitHub / HuggingFace Hub', url: 'https://github.com/huggingface/transformers', stars: '133k+' },
      { title: 'LangChain', description: 'Framework for building LLM-powered applications. Chains, memory, agents, and tool integration. The foundation for Stage 02 EEI systems.', language: 'Python / TypeScript', platform: 'GitHub', url: 'https://github.com/langchain-ai/langchain', stars: '94k+' },
      { title: 'Annotated Transformer (Harvard NLP)', description: 'Line-by-line implementation of "Attention Is All You Need" with explanatory annotations for every operation. The gold standard for understanding the paper deeply.', language: 'Python / PyTorch', platform: 'Web', url: 'https://nlp.seas.harvard.edu/annotated-transformer/', stars: 'N/A' },
    ],
    diagrams: [
      { title: 'Transformer Architecture (Jay Alammar)', source: 'jalammar.github.io', description: 'Animated step-by-step walkthrough of how a Transformer processes a sentence. The clearest visual explanation of attention, multi-head attention, and positional encoding.', type: 'Animated Tutorial', url: 'https://jalammar.github.io/illustrated-transformer/' },
      { title: '3Blue1Brown — Attention in Transformers', source: 'YouTube / 3Blue1Brown', description: 'Mathematical visual explanation of how attention weights are computed and why they work. The best video for building geometric intuition for attention.', type: 'Video', url: 'https://www.youtube.com/watch?v=eMlx5fFNoYc' },
      { title: 'Andrej Karpathy — Let\'s build GPT from scratch', source: 'YouTube', description: 'Complete video walkthrough of building a character-level GPT. 2 hours of the deepest practical understanding of Stage 01 systems available.', type: 'Video', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' },
      { title: 'Neural Network Playground (TensorFlow)', source: 'playground.tensorflow.org', description: 'Interactive browser-based tool for experimenting with neural network architectures. Builds foundational intuition before diving into Transformers.', type: 'Interactive', url: 'https://playground.tensorflow.org' },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────
     STAGE 02 — Epistemic Intelligence (EEI)
  ────────────────────────────────────────────────────────────────── */
  3: {
    books: [
      {
        title: 'Knowledge Graphs',
        authors: 'Hogan, Blomqvist et al.',
        year: 2021,
        level: 'Advanced',
        description: 'Comprehensive academic treatment of knowledge graph construction, querying, and reasoning. Covers RDF, SPARQL, ontologies, and graph-based inference — the structured memory layer of EEI systems.',
        url: 'https://arxiv.org/abs/2003.02320',
      },
      {
        title: 'Graph Databases (O\'Reilly)',
        authors: 'Ian Robinson, Jim Webber & Emil Eifrem',
        year: 2015,
        level: 'Beginner',
        description: 'Practical introduction to graph data models and Neo4j. Explains why graph representations capture relationship structure that relational databases miss — essential context for EEI\'s knowledge layer.',
        url: 'https://www.oreilly.com/library/view/graph-databases-2nd/9781491930885/',
      },
      {
        title: 'AI Engineering: Building Applications with Foundation Models',
        authors: 'Chip Huyen',
        year: 2025,
        level: 'Intermediate',
        description: 'The most up-to-date practical guide to building production AI systems. Covers RAG, memory, agentic architectures, and evaluation — the engineering stack for EEI implementation.',
        url: 'https://www.oreilly.com/library/view/ai-engineering/9781098166298/',
      },
      {
        title: 'Designing Machine Learning Systems',
        authors: 'Chip Huyen',
        year: 2022,
        level: 'Intermediate',
        description: 'Covers evaluation, feature engineering, and production ML — essential for measuring EEI system quality and designing the benchmarks that validate Stage 02 claims.',
        url: 'https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/',
      },
    ],
    articles: [
      {
        title: 'LangGraph Documentation',
        source: 'LangChain / LangGraph',
        description: 'Official documentation for LangGraph — the stateful workflow graph framework for building EEI systems. Covers nodes, edges, checkpointing, and human-in-the-loop patterns.',
        type: 'Documentation',
        url: 'https://langchain-ai.github.io/langgraph/',
      },
      {
        title: 'Model Context Protocol (MCP) Specification',
        source: 'Anthropic',
        description: 'The open standard for connecting AI models to tools, data sources, and memory systems. Essential for building EEI systems that integrate with external knowledge stores.',
        type: 'Specification',
        url: 'https://modelcontextprotocol.io',
      },
      {
        title: 'Patterns for Building LLM-based Systems & Products',
        source: 'Eugene Yan',
        description: 'Comprehensive survey of real-world patterns for memory, retrieval, and multi-agent orchestration. The most practical guide to implementing EEI architecture patterns.',
        type: 'Technical Blog',
        url: 'https://eugeneyan.com/writing/llm-patterns/',
      },
      {
        title: 'Building a Knowledge Graph-powered RAG System',
        source: 'Neo4j Blog',
        description: 'Step-by-step guide to combining vector retrieval with knowledge graph traversal — the core hybrid retrieval architecture of EEI systems.',
        type: 'Tutorial',
        url: 'https://neo4j.com/developer-blog/knowledge-graph-rag-application/',
      },
    ],
    labs: [
      { name: 'Stanford AI Lab (SAIL)', type: 'University Lab', location: 'Stanford, CA', focus: 'Knowledge representation, natural language understanding, multi-agent systems', url: 'https://ai.stanford.edu' },
      { name: 'Allen Institute for AI (AI2)', type: 'Research Institute', location: 'Seattle, WA', focus: 'Knowledge graphs, scientific AI, commonsense reasoning', url: 'https://allenai.org' },
      { name: 'LangChain / LangGraph', type: 'Company', location: 'San Francisco, CA', focus: 'Agent orchestration, memory systems, knowledge retrieval', url: 'https://www.langchain.com' },
      { name: 'LlamaIndex', type: 'Company', location: 'Remote / SF', focus: 'Enterprise RAG, knowledge management, agentic data access', url: 'https://www.llamaindex.ai' },
      { name: 'Weaviate', type: 'Company', location: 'Amsterdam / Remote', focus: 'Vector + graph hybrid databases for AI memory systems', url: 'https://weaviate.io' },
    ],
    papers: [
      { title: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks', authors: 'Lewis et al.', year: 2020, venue: 'NeurIPS 2020', description: 'Foundational RAG paper. Combines a dense retriever with a generative model — the memory retrieval architecture that EEI builds upon and extends with graph structure.', url: 'https://arxiv.org/abs/2005.11401', mustRead: true },
      { title: 'Reflexion: Language Agents with Verbal Reinforcement Learning', authors: 'Shinn et al.', year: 2023, venue: 'NeurIPS 2023', description: 'Agents that reflect on their own outputs and revise based on verbal feedback. Empirically demonstrates that self-reflection improves reasoning accuracy — the EEI reflection layer in action.', url: 'https://arxiv.org/abs/2303.11366', mustRead: true },
      { title: 'HippoRAG: Neurobiologically Inspired Long-Term Memory for LLMs', authors: 'Guo et al.', year: 2024, venue: 'NeurIPS 2024', description: 'Knowledge graph-augmented RAG inspired by the hippocampus. Shows that graph-based memory significantly improves multi-hop QA over standard RAG — direct EEI validation.', url: 'https://arxiv.org/abs/2405.14831', mustRead: true },
      { title: 'Self-RAG: Learning to Retrieve, Generate, and Critique', authors: 'Asai et al.', year: 2023, venue: 'ICLR 2024', description: 'LLM that decides when to retrieve, critiques its own outputs with special tokens, and selects the best generation. The self-evaluation loop that makes EEI systems epistemic rather than just generative.', url: 'https://arxiv.org/abs/2310.11511', mustRead: false },
      { title: 'KGRAG: Knowledge Graph-Enhanced Retrieval-Augmented Generation', authors: 'Edge et al.', year: 2024, venue: 'arXiv', description: 'Microsoft\'s GraphRAG system — shows global and local graph community structures dramatically improve QA on long-context documents. State-of-the-art EEI retrieval.', url: 'https://arxiv.org/abs/2404.16130', mustRead: false },
    ],
    code: [
      { title: 'LangGraph', description: 'Stateful agent workflow framework. Build EEI systems with persistent memory, conditional logic, and human oversight using directed graph architectures.', language: 'Python', platform: 'GitHub', url: 'https://github.com/langchain-ai/langgraph', stars: '10k+' },
      { title: 'Neo4j + Python Driver', description: 'Graph database for EEI knowledge storage. Stores entities and relationships, supports Cypher queries, and integrates with LangChain for graph-augmented retrieval.', language: 'Python / Cypher', platform: 'Neo4j', url: 'https://neo4j.com/docs/python-manual/current/', stars: 'N/A' },
      { title: 'ChromaDB', description: 'Open-source vector database for EEI semantic memory. Easy setup, persistent storage, and LangChain integration — the fastest path to EEI episodic memory.', language: 'Python', platform: 'GitHub', url: 'https://github.com/chroma-core/chroma', stars: '16k+' },
      { title: 'GraphRAG (Microsoft)', description: 'Open-source implementation of graph-based RAG. Builds a knowledge graph from documents and uses community detection for global + local retrieval — production-grade EEI memory.', language: 'Python', platform: 'GitHub', url: 'https://github.com/microsoft/graphrag', stars: '20k+' },
    ],
    diagrams: [
      { title: 'LangGraph Architecture Diagrams', source: 'LangChain Documentation', description: 'Official diagrams showing stateful agent graph architectures — nodes, edges, checkpoints, and branching patterns. The clearest visual representation of EEI system structure.', type: 'Architecture Diagram', url: 'https://langchain-ai.github.io/langgraph/concepts/' },
      { title: 'RAG vs Graph RAG Comparison', source: 'Microsoft Research', description: 'Visual comparison of flat RAG vs knowledge graph-augmented RAG retrieval. Shows how graph structure enables multi-hop reasoning that vector similarity alone cannot.', type: 'Comparison Diagram', url: 'https://arxiv.org/abs/2404.16130' },
      { title: 'EEI Architecture Blueprint (Memory + Graph + Reasoning)', source: 'AI Engineering Patterns', description: 'System architecture diagram showing the three-layer EEI stack: vector memory, knowledge graph, and reasoning engine. Based on emerging production patterns for epistemic AI systems.', type: 'System Architecture', url: 'https://eugeneyan.com/writing/llm-patterns/' },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────
     STAGE 03 — Structural Intelligence Theory
  ────────────────────────────────────────────────────────────────── */
  4: {
    books: [
      {
        title: 'Nonlinear Dynamics and Chaos',
        authors: 'Steven H. Strogatz',
        year: 1994,
        level: 'Intermediate',
        description: 'The most readable introduction to dynamical systems — bifurcations, attractors, chaos, and phase portraits. Essential mathematics for Stage 03\'s structural analysis of intelligence dynamics.',
        url: 'https://www.amazon.com/Nonlinear-Dynamics-Chaos-Applications-Nonlinearity/dp/0813349109',
      },
      {
        title: 'Category Theory for Programmers',
        authors: 'Bartosz Milewski',
        year: 2019,
        level: 'Intermediate',
        description: 'Free book introducing category theory through programming analogies. Covers categories, functors, monads, and natural transformations — the formal language for describing structure-preserving mappings between domains (ERP-X foundation).',
        url: 'https://bartoszmilewski.com/2014/10/28/category-theory-for-programmers-the-preface/',
      },
      {
        title: 'Algebraic Graph Theory',
        authors: 'Norman Biggs',
        year: 1993,
        level: 'Advanced',
        description: 'Spectral graph theory and algebraic methods for analyzing graph structure. Eigenvalue techniques for structural comparison — the mathematical core of Stage 03\'s invariant detection methods.',
        url: 'https://www.cambridge.org/core/books/algebraic-graph-theory/7C7A09A3FAED8DD2EB4CA0A0AB3E98D2',
      },
      {
        title: 'Information Geometry and Its Applications',
        authors: 'Shun-ichi Amari',
        year: 2016,
        level: 'Advanced',
        description: 'The foundational text on information geometry — studying probability distributions as points on a curved manifold with the Fisher information metric. The mathematical framework for understanding learning dynamics in information-geometric terms.',
        url: 'https://www.springer.com/gp/book/9784431559771',
      },
      {
        title: 'Network Science',
        authors: 'Albert-László Barabási',
        year: 2016,
        level: 'Intermediate',
        description: 'Free textbook covering the full scope of network science — degree distributions, clustering, community detection, and network evolution. The structural vocabulary for Stage 03\'s cross-domain analysis.',
        url: 'https://networksciencebook.com',
      },
    ],
    articles: [
      {
        title: 'A Gentle Introduction to Graph Neural Networks',
        source: 'Distill.pub',
        description: 'Beautiful visual explanation of how GNNs process graph structure. Covers message passing, graph classification, and node embedding — the core computational methods for Stage 03 structural encoding.',
        type: 'Visual Tutorial',
        url: 'https://distill.pub/2021/gnn-intro/',
      },
      {
        title: 'Graph Representation Learning: A Survey',
        source: 'arXiv / McGill',
        description: 'Comprehensive survey of methods for learning structural representations from graphs. Covers spectral methods, random walk approaches, and GNNs — Stage 03\'s full methodological toolkit.',
        type: 'Survey',
        url: 'https://arxiv.org/abs/1709.05584',
      },
      {
        title: 'An Introduction to Category Theory',
        source: 'nLab',
        description: 'The authoritative online reference for category theory. Dense but comprehensive — the go-to resource for formalizing ERP-X transfer operators using categorical language.',
        type: 'Reference',
        url: 'https://ncatlab.org/nlab/show/category+theory',
      },
      {
        title: 'The Topology of Dynamical Systems',
        source: 'Quanta Magazine',
        description: 'Accessible explanation of how topological tools reveal the structure of complex dynamical systems — the mathematical approach Stage 03 applies to intelligence dynamics.',
        type: 'Feature',
        url: 'https://www.quantamagazine.org/how-topology-is-revolutionizing-biology-20171023/',
      },
    ],
    labs: [
      { name: 'MIT CSAIL — Theory of Computation Group', type: 'University Lab', location: 'Cambridge, MA', focus: 'Algorithms, graph theory, computational complexity', url: 'https://www.csail.mit.edu/research/theory-computation' },
      { name: 'Santa Fe Institute', type: 'Research Institute', location: 'Santa Fe, NM', focus: 'Complexity, emergence, cross-domain structural patterns', url: 'https://www.santafe.edu' },
      { name: 'Geometric Deep Learning Group (Twitter / X)', type: 'Research Group', location: 'Remote / Global', focus: 'Symmetry, invariance, and geometric structure in neural networks', url: 'https://geometricdeeplearning.com' },
      { name: 'TU Berlin — Machine Learning Group', type: 'University Lab', location: 'Berlin, Germany', focus: 'Structural learning, kernel methods, graph kernels', url: 'https://www.ml.tu-berlin.de' },
    ],
    papers: [
      { title: 'A Relational Inductive Bias for Structural Learning and Reasoning', authors: 'Battaglia et al. (DeepMind)', year: 2018, venue: 'arXiv', description: 'Argues that relational inductive biases — built-in structural assumptions — are the key to learning generalizable intelligence. The theoretical foundation for Stage 03\'s structural encoding approach.', url: 'https://arxiv.org/abs/1806.01261', mustRead: true },
      { title: 'Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges', authors: 'Bronstein, Bruna et al.', year: 2021, venue: 'arXiv', description: 'Unifies CNNs, GNNs, and Transformers under a single mathematical framework of symmetry and invariance. Shows that all successful deep learning architectures exploit structural invariants.', url: 'https://arxiv.org/abs/2104.13478', mustRead: true },
      { title: 'The Graph Neural Network Model', authors: 'Scarselli et al.', year: 2009, venue: 'IEEE Transactions on Neural Networks', description: 'The original GNN paper. Defines message passing over graph structure — the computational primitive for all structural encoding methods in Stage 03.', url: 'https://ieeexplore.ieee.org/document/4700287', mustRead: false },
      { title: 'How Powerful Are Graph Neural Networks?', authors: 'Xu, Hu, Leskovec et al.', year: 2019, venue: 'ICLR 2019', description: 'Theoretical analysis of GNN expressive power using the Weisfeiler-Lehman isomorphism test. Defines the mathematical limits of graph structural comparison — essential for Stage 03.', url: 'https://arxiv.org/abs/1810.00826', mustRead: false },
    ],
    code: [
      { title: 'PyTorch Geometric (PyG)', description: 'The standard library for graph neural networks in PyTorch. Implements 50+ GNN architectures, graph pooling, and structural featurization for Stage 03 structural encoding.', language: 'Python / PyTorch', platform: 'GitHub', url: 'https://github.com/pyg-team/pytorch_geometric', stars: '21k+' },
      { title: 'Deep Graph Library (DGL)', description: 'Framework-agnostic GNN library. Efficient message passing, built-in structural encodings, and support for heterogeneous graphs — good for cross-domain structural analysis.', language: 'Python', platform: 'GitHub', url: 'https://github.com/dmlc/dgl', stars: '13k+' },
      { title: 'NetworkX', description: 'Python library for network analysis. Graph metrics (clustering coefficient, path length, centrality), spectral analysis, and community detection for Stage 03 invariant detection.', language: 'Python', platform: 'GitHub', url: 'https://networkx.org', stars: '14k+' },
      { title: 'GraKel (Graph Kernels)', description: 'Python library implementing 15+ graph kernel methods for comparing graph structures — the classical ML approach to structural similarity, complementary to GNN approaches.', language: 'Python', platform: 'GitHub', url: 'https://github.com/ysig/GraKeL', stars: '500+' },
    ],
    diagrams: [
      { title: 'Geometric Deep Learning Blueprint', source: 'geometricdeeplearning.com', description: 'The definitive diagram showing how symmetry groups unify all deep learning architectures. Shows the mathematical structure underlying all Stage 03 structural encoding methods.', type: 'Conceptual Map', url: 'https://geometricdeeplearning.com' },
      { title: 'GNN Message Passing Visualization', source: 'Distill.pub', description: 'Animated visualization of how GNNs propagate structural information through a graph via message passing. The core computational operation for Stage 03 structural encoders.', type: 'Animated Diagram', url: 'https://distill.pub/2021/gnn-intro/' },
      { title: 'Attractor Landscapes in Dynamical Systems', source: 'Strogatz / MIT OpenCourseWare', description: 'Phase portraits and attractor visualizations showing how dynamical systems organize around stable states — the framework Stage 03 uses to compare intelligence dynamics across domains.', type: 'Mathematical Diagram', url: 'https://ocw.mit.edu/courses/18-385j-nonlinear-dynamics-and-chaos-fall-2004/' },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────
     STAGE 04 — ERP-X Cross-Domain Intelligence
  ────────────────────────────────────────────────────────────────── */
  5: {
    books: [
      {
        title: 'Computational Optimal Transport',
        authors: 'Gabriel Peyré & Marco Cuturi',
        year: 2019,
        level: 'Advanced',
        description: 'The definitive reference on optimal transport theory and computational methods. OT is the mathematical framework for the ERP-X mapping operator — finds minimum-cost transformations between probability distributions across domains.',
        url: 'https://optimaltransport.github.io',
      },
      {
        title: 'Transfer Learning',
        authors: 'Qiang Yang et al.',
        year: 2020,
        level: 'Intermediate',
        description: 'Comprehensive survey and textbook of transfer learning methods. Covers instance-based, feature-based, and model-based transfer — the ML foundation that ERP-X extends to structural cross-domain transfer.',
        url: 'https://www.cambridge.org/core/books/transfer-learning/3F6E77CF3B73F7E4F4A40C51E96B7C91',
      },
      {
        title: 'Pattern Recognition and Machine Learning',
        authors: 'Christopher Bishop',
        year: 2006,
        level: 'Advanced',
        description: 'The standard graduate-level ML textbook. Chapters on latent variable models and kernel methods provide the mathematical foundations for ERP-X\'s structural representation and mapping approaches.',
        url: 'https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/',
      },
    ],
    articles: [
      {
        title: 'An Introduction to Optimal Transport',
        source: 'Distill.pub / arXiv',
        description: 'Visual and mathematical introduction to optimal transport — Earth Mover\'s Distance, Wasserstein distances, and Sinkhorn iterations. The mathematical core of the ERP-X mapping operator.',
        type: 'Tutorial',
        url: 'https://arxiv.org/abs/1803.00567',
      },
      {
        title: 'Domain Adaptation: A Survey',
        source: 'arXiv',
        description: 'Comprehensive survey of domain adaptation techniques — aligning feature distributions across source and target domains. ERP-X extends this from content features to structural invariant features.',
        type: 'Survey',
        url: 'https://arxiv.org/abs/2010.03978',
      },
      {
        title: 'Representation Alignment Across Modalities',
        source: 'Distill.pub',
        description: 'How representation spaces learned in different modalities (images, text, audio) can be aligned. ERP-X applies the same principle to align representation spaces across different intelligent domains.',
        type: 'Visual Tutorial',
        url: 'https://distill.pub/2020/grand-tour/',
      },
      {
        title: 'A Conceptual Introduction to Hamiltonian Monte Carlo',
        source: 'Michael Betancourt',
        description: 'Intuition for geometry-aware sampling — relevant for understanding how ERP-X traverses the structural representation space to find optimal domain mappings.',
        type: 'Technical Article',
        url: 'https://arxiv.org/abs/1701.02434',
      },
    ],
    labs: [
      { name: 'Stanford HAI — AI for Social Good', type: 'University Lab', location: 'Stanford, CA', focus: 'Transfer learning, cross-domain AI, foundation model generalization', url: 'https://hai.stanford.edu' },
      { name: 'FAIR (Meta AI Research)', type: 'Industry Lab', location: 'Menlo Park, CA', focus: 'Representation learning, cross-modal transfer, generalization', url: 'https://ai.meta.com/research/' },
      { name: 'DeepMind Research', type: 'Industry Lab', location: 'London, UK', focus: 'Multi-task learning, transfer, generalization across environments', url: 'https://deepmind.google/research/' },
      { name: 'MIT Learning and Intelligent Systems Group', type: 'University Lab', location: 'Cambridge, MA', focus: 'Structured prediction, relational learning, transfer', url: 'https://lis.csail.mit.edu' },
    ],
    papers: [
      { title: 'Taskonomy: Disentangling Task Transfer Learning', authors: 'Zamir et al.', year: 2018, venue: 'CVPR 2018 Best Paper', description: 'Systematically maps transfer relationships between 26 visual tasks. Shows which tasks benefit from which source tasks — the first large-scale empirical map of cross-domain transfer relationships.', url: 'https://arxiv.org/abs/1804.08328', mustRead: true },
      { title: 'Optimal Transport for Domain Adaptation', authors: 'Courty et al.', year: 2017, venue: 'IEEE TPAMI', description: 'Uses optimal transport to align feature distributions for domain adaptation. The mathematical framework ERP-X uses for its mapping operator.', url: 'https://arxiv.org/abs/1507.00504', mustRead: true },
      { title: 'Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks', authors: 'Zhu et al.', year: 2017, venue: 'ICCV 2017', description: 'CycleGAN: learns transformations between unpaired domains using cycle-consistency constraints. The domain mapping approach ERP-X applies to structural representations.', url: 'https://arxiv.org/abs/1703.10593', mustRead: false },
      { title: 'A Survey on Transfer Learning', authors: 'Pan & Yang', year: 2010, venue: 'IEEE TKDE', description: 'Foundational survey defining transfer learning problem settings. ERP-X extends this taxonomy to structural cross-domain transfer — a problem type not covered by the original taxonomy.', url: 'https://ieeexplore.ieee.org/document/5288526', mustRead: false },
    ],
    code: [
      { title: 'Python Optimal Transport (POT)', description: 'Comprehensive Python library for optimal transport computations. Implements Wasserstein distances, Sinkhorn algorithm, and OT-based domain adaptation — the core of ERP-X\'s mapping operator.', language: 'Python', platform: 'GitHub', url: 'https://github.com/PythonOT/POT', stars: '2.2k+' },
      { title: 'ADAPT (Domain Adaptation Toolbox)', description: 'Python library implementing 30+ domain adaptation methods. The reference implementation library for testing ERP-X\'s structural transfer against classical domain adaptation baselines.', language: 'Python', platform: 'GitHub', url: 'https://github.com/adapt-python/adapt', stars: '600+' },
      { title: 'Geomstats', description: 'Python library for computations on Riemannian manifolds. Used for ERP-X\'s information-geometric mapping operations in curved probability spaces.', language: 'Python', platform: 'GitHub', url: 'https://github.com/geomstats/geomstats', stars: '1.1k+' },
    ],
    diagrams: [
      { title: 'Optimal Transport Visualization', source: 'Gabriel Peyré / Twitter', description: 'Animated visualization of Earth Mover\'s Distance finding minimum-cost transport between distributions. The geometric intuition for how ERP-X\'s mapping operator works.', type: 'Animation', url: 'https://optimaltransport.github.io/slides/' },
      { title: 'Taskonomy Transfer Graph', source: 'Stanford SAIL', description: 'Full directed graph of transfer relationships between 26 visual tasks — the clearest visualization of how structured cross-domain transfer works empirically.', type: 'Research Diagram', url: 'https://taskonomy.stanford.edu' },
      { title: 'CycleGAN Domain Translation Examples', source: 'ICCV 2017', description: 'Visual examples of unpaired image-to-image translation (horse↔zebra, photo↔Monet). The most intuitive demonstration of structure-preserving cross-domain mapping.', type: 'Gallery', url: 'https://junyanz.github.io/CycleGAN/' },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────
     STAGE 05 — ERP-SIM Simulation Science
  ────────────────────────────────────────────────────────────────── */
  6: {
    books: [
      {
        title: 'Growing Artificial Societies',
        authors: 'Epstein & Axtell',
        year: 1996,
        level: 'Intermediate',
        description: 'The founding text of agent-based social simulation. Shows how complex social phenomena (trade, conflict, culture) emerge from simple agent rules. The conceptual blueprint for ERP-SIM synthetic universes.',
        url: 'https://www.amazon.com/Growing-Artificial-Societies-Science-Adaptive/dp/0262550253',
      },
      {
        title: 'The Nature of Computation',
        authors: 'Cristopher Moore & Stephan Mertens',
        year: 2011,
        level: 'Advanced',
        description: 'Deep exploration of computational complexity, phase transitions, and the computational universality that underlies all intelligent systems. Essential mathematics for ERP-SIM\'s emergence detection.',
        url: 'https://www.amazon.com/Nature-Computation-Cristopher-Moore/dp/0199233217',
      },
      {
        title: 'Artificial Intelligence: A Modern Approach',
        authors: 'Russell & Norvig',
        year: 2020,
        level: 'Intermediate',
        description: 'Standard AI textbook. Part III covers intelligent agents, search, and planning — the agent design principles that inform ERP-SIM\'s agent architectures.',
        url: 'https://aima.cs.berkeley.edu',
      },
      {
        title: 'An Introduction to Multi-Agent Systems',
        authors: 'Michael Wooldridge',
        year: 2009,
        level: 'Intermediate',
        description: 'Formal treatment of multi-agent system theory — agent architectures, communication, coordination, and game theory. The theoretical foundation for ERP-SIM\'s multi-agent synthetic universes.',
        url: 'https://www.amazon.com/Introduction-MultiAgent-Systems-Michael-Wooldridge/dp/0470519460',
      },
    ],
    articles: [
      {
        title: 'Mesa: Agent-Based Modeling in Python',
        source: 'Journal of Open Source Software',
        description: 'The original Mesa paper describing the architecture and design of the primary Python ABM framework. Essential reading before building ERP-SIM prototypes.',
        type: 'Tool Paper',
        url: 'https://joss.theoj.org/papers/10.21105/joss.00168',
      },
      {
        title: 'Emergent Complexity in Simple Rules',
        source: 'Stephen Wolfram / Quanta Magazine',
        description: 'Exploration of how elementary cellular automata (Conway\'s Life, Rule 110) produce arbitrarily complex behavior from minimal rules. The conceptual foundation for ERP-SIM universe design.',
        type: 'Feature',
        url: 'https://www.quantamagazine.org/the-computer-scientist-who-cant-stop-theorizing-20170711/',
      },
      {
        title: 'Building Simulations with PettingZoo',
        source: 'Farama Foundation',
        description: 'Documentation and tutorials for PettingZoo — the standard multi-agent reinforcement learning environment library. ERP-SIM uses PettingZoo environments as synthetic universe substrates.',
        type: 'Documentation',
        url: 'https://pettingzoo.farama.org',
      },
      {
        title: 'Statistical Mechanics of Self-Replication',
        source: 'Jeremy England (MIT)',
        description: 'Argues that self-replication and adaptation are thermodynamically inevitable under certain conditions. The physics basis for why intelligence emergence should be predictable from ERP-SIM\'s structural conditions.',
        type: 'Research Article',
        url: 'https://arxiv.org/abs/1209.1179',
      },
    ],
    labs: [
      { name: 'MIT Media Lab', type: 'University Lab', location: 'Cambridge, MA', focus: 'Complex systems, synthetic intelligence, social simulation', url: 'https://www.media.mit.edu' },
      { name: 'Santa Fe Institute', type: 'Research Institute', location: 'Santa Fe, NM', focus: 'Agent-based modeling, complex adaptive systems, emergence', url: 'https://www.santafe.edu' },
      { name: 'Brookings Institution — Center for Universal Education', type: 'Think Tank', location: 'Washington, DC', focus: 'Social simulation, policy modeling, complex system analysis', url: 'https://www.brookings.edu' },
      { name: 'OpenAI — Safety & Alignment (Multi-agent)', type: 'Industry Lab', location: 'San Francisco, CA', focus: 'Multi-agent environments, emergent behavior, alignment in simulation', url: 'https://openai.com/research' },
      { name: 'Farama Foundation', type: 'Nonprofit', location: 'Remote', focus: 'Open-source multi-agent RL environments (PettingZoo, Gymnasium)', url: 'https://farama.org' },
    ],
    papers: [
      { title: 'Emergent Tool Use From Multi-Agent Autocurricula', authors: 'Baker et al. (OpenAI)', year: 2019, venue: 'ICLR 2020', description: 'Multi-agent hide-and-seek simulation produces emergent tool use — agents invent strategies not anticipated by designers. A landmark demonstration of ERP-SIM-style emergence from simple multi-agent environments.', url: 'https://arxiv.org/abs/1909.07528', mustRead: true },
      { title: 'Mastering the Game of Go with Deep Neural Networks and Tree Search', authors: 'Silver et al. (DeepMind)', year: 2016, venue: 'Nature', description: 'AlphaGo: intelligence emerging in a highly constrained synthetic environment (Go). Demonstrates that complex strategic intelligence emerges predictably given sufficient simulation + learning resources.', url: 'https://www.nature.com/articles/nature16961', mustRead: false },
      { title: 'Evolution of Cooperation in the Prisoner\'s Dilemma', authors: 'Axelrod & Hamilton', year: 1981, venue: 'Science', description: 'Computational tournament showing cooperation emerges from selfish agent interactions. One of the earliest and clearest demonstrations of ERP-SIM-style emergent collective intelligence.', url: 'https://www.science.org/doi/10.1126/science.7466396', mustRead: false },
      { title: 'Reward is Enough', authors: 'Silver, Singh et al. (DeepMind)', year: 2021, venue: 'Artificial Intelligence', description: 'Argues that a single reward signal in an appropriately structured environment is sufficient to produce all capabilities associated with intelligence. Directly motivates ERP-SIM\'s fitness-function approach.', url: 'https://www.sciencedirect.com/science/article/pii/S0004370221000862', mustRead: true },
    ],
    code: [
      { title: 'Mesa', description: 'Python agent-based modeling framework. Build synthetic universe simulations with grids, networks, and time-stepped or event-driven agents. The primary ERP-SIM prototyping tool.', language: 'Python', platform: 'GitHub', url: 'https://github.com/projectmesa/mesa', stars: '2.4k+' },
      { title: 'PettingZoo', description: 'Multi-agent reinforcement learning environment library. Implements 50+ parallel and sequential multi-agent environments — ready-made synthetic universes for ERP-SIM experiments.', language: 'Python', platform: 'GitHub', url: 'https://github.com/Farama-Foundation/PettingZoo', stars: '2.5k+' },
      { title: 'Gymnasium (OpenAI Gym)', description: 'Single-agent reinforcement learning environment standard. The baseline for agent intelligence evaluation against which ERP-SIM\'s cross-domain transfer improvements are measured.', language: 'Python', platform: 'GitHub', url: 'https://github.com/Farama-Foundation/Gymnasium', stars: '7k+' },
      { title: 'NetLogo', description: 'Visual agent-based modeling environment with 300+ built-in models across ecology, economics, physics, and social systems. Excellent for rapid ERP-SIM prototyping and visualization.', language: 'NetLogo', platform: 'Northwestern University', url: 'https://ccl.northwestern.edu/netlogo/', stars: 'N/A' },
    ],
    diagrams: [
      { title: 'OpenAI Hide-and-Seek Emergence Progression', source: 'OpenAI Research Blog', description: 'Frame-by-frame visualization of emergent tool use in multi-agent hide-and-seek — agents learning to use boxes and ramps in unanticipated ways. The clearest visual demonstration of ERP-SIM-type emergence.', type: 'Research Video', url: 'https://openai.com/research/emergent-tool-use' },
      { title: 'Conway\'s Game of Life Patterns', source: 'LifeWiki', description: 'Visual catalog of emergent patterns in Conway\'s Life — a single-rule cellular automaton producing gliders, oscillators, and self-replicators. The simplest demonstration of ERP-SIM\'s emergence-from-rules principle.', type: 'Interactive Gallery', url: 'https://conwaylife.com' },
      { title: 'Mesa Visualization Examples', source: 'Mesa Documentation', description: 'Interactive browser visualizations of agent-based simulations — Schelling segregation, virus spread, forest fire. Shows how ERP-SIM synthetic universes can be visualized in real time.', type: 'Interactive Simulation', url: 'https://mesa.readthedocs.io/stable/tutorials/visualization_tutorial.html' },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────
     STAGE 06 — CSIM Universal Intelligence Metrics
  ────────────────────────────────────────────────────────────────── */
  7: {
    books: [
      {
        title: 'Elements of Information Theory',
        authors: 'Cover & Thomas',
        year: 2006,
        level: 'Advanced',
        description: 'The standard graduate textbook for information theory. Chapters on entropy, mutual information, channel capacity, and rate-distortion theory provide the mathematical foundations for CSIM\'s compression-based intelligence metrics.',
        url: 'https://www.wiley.com/en-us/Elements+of+Information+Theory%2C+2nd+Edition-p-9780471241959',
      },
      {
        title: 'An Introduction to Kolmogorov Complexity and Its Applications',
        authors: 'Li & Vitányi',
        year: 2019,
        level: 'Advanced',
        description: 'Definitive treatment of algorithmic complexity theory — the theoretical foundation for CSIM\'s compression efficiency metric. Defines intelligence as minimum description length, substrate-independently.',
        url: 'https://link.springer.com/book/10.1007/978-3-030-11298-1',
      },
      {
        title: 'Causality: Models, Reasoning, and Inference',
        authors: 'Judea Pearl',
        year: 2009,
        level: 'Advanced',
        description: 'Pearl\'s foundational work on causal inference — do-calculus, causal graphs, counterfactuals. The mathematical framework for CSIM\'s causal depth index: measuring how deeply a system understands causal structure.',
        url: 'https://www.cambridge.org/core/books/causality/B0046844FAE10CBF274D4ACBDAEB5F5B',
      },
      {
        title: 'The Book of Why',
        authors: 'Judea Pearl & Dana Mackenzie',
        year: 2018,
        level: 'Beginner',
        description: 'Accessible introduction to causal reasoning — why correlation isn\'t causation, and how causal graphs enable reasoning about interventions. Essential background for understanding CSIM\'s causal depth metric.',
        url: 'https://www.amazon.com/Book-Why-Science-Cause-Effect/dp/046509760X',
      },
    ],
    articles: [
      {
        title: 'Universal Intelligence: A Definition of Machine Intelligence',
        source: 'Shane Legg & Marcus Hutter (2007)',
        description: 'The foundational paper CSIM builds upon — defines intelligence as the ability to achieve goals in a wide range of environments. CSIM operationalizes this definition into measurable substrate-independent metrics.',
        type: 'Foundational Paper',
        url: 'https://arxiv.org/abs/0712.5440',
      },
      {
        title: 'Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models',
        source: 'BIG-Bench (Google Research)',
        description: 'Massive benchmark with 200+ tasks probing diverse language model capabilities. The current state-of-the-art in multi-dimensional AI evaluation — the baseline CSIM must generalize beyond.',
        type: 'Research Paper',
        url: 'https://arxiv.org/abs/2206.04615',
      },
      {
        title: 'Holistic Evaluation of Language Models (HELM)',
        source: 'Stanford CRFM',
        description: 'Multi-metric evaluation framework for LLMs across accuracy, calibration, robustness, fairness, and efficiency. An important reference point showing what domain-specific evaluation misses.',
        type: 'Research Paper',
        url: 'https://arxiv.org/abs/2211.09110',
      },
      {
        title: 'ARC Prize: AI Reasoning Challenge',
        source: 'ARC Prize / François Chollet',
        description: 'Abstract reasoning benchmark requiring fluid intelligence rather than knowledge retrieval. Based on Chollet\'s framework for measuring intelligence as skill acquisition efficiency — closely related to CSIM.',
        type: 'Challenge Overview',
        url: 'https://arcprize.org',
      },
    ],
    labs: [
      { name: 'Allen Institute for AI (AI2)', type: 'Research Institute', location: 'Seattle, WA', focus: 'AI evaluation, commonsense reasoning, scientific AI', url: 'https://allenai.org' },
      { name: 'Stanford CRFM (Center for Research on Foundation Models)', type: 'University Lab', location: 'Stanford, CA', focus: 'Foundation model evaluation, HELM benchmark', url: 'https://crfm.stanford.edu' },
      { name: 'EleutherAI', type: 'Nonprofit', location: 'Remote / Global', focus: 'Open-source AI evaluation, LM evaluation harness', url: 'https://www.eleuther.ai' },
      { name: 'CHAI — Center for Human-Compatible AI', type: 'University Lab', location: 'UC Berkeley, CA', focus: 'Intelligence measurement, AI alignment, capability evaluation', url: 'https://humancompatible.ai' },
    ],
    papers: [
      { title: 'On the Measure of Intelligence', authors: 'François Chollet', year: 2019, venue: 'arXiv', description: 'Proposes measuring intelligence as skill acquisition efficiency — how quickly a system adapts to novel tasks, normalized by prior experience. The closest existing formal definition to CSIM\'s adaptability metric.', url: 'https://arxiv.org/abs/1911.01547', mustRead: true },
      { title: 'Universal Intelligence: A Definition of Machine Intelligence', authors: 'Legg & Hutter', year: 2007, venue: 'Minds and Machines', description: 'Defines machine intelligence as the expected reward sum over all computable environments, weighted by simplicity. CSIM operationalizes this theoretical definition into practical substrate-independent metrics.', url: 'https://arxiv.org/abs/0712.5440', mustRead: true },
      { title: 'Measuring Massive Multitask Language Understanding', authors: 'Hendrycks et al.', year: 2021, venue: 'ICLR 2021', description: 'MMLU benchmark: 57 academic subjects for measuring breadth of language model knowledge. A domain-specific baseline that CSIM must transcend by measuring structural rather than knowledge-based intelligence.', url: 'https://arxiv.org/abs/2009.03300', mustRead: false },
    ],
    code: [
      { title: 'LM Evaluation Harness (EleutherAI)', description: 'Unified framework for evaluating LLMs across 200+ benchmarks. The reference implementation for AI evaluation — the baseline CSIM must extend to cover non-AI substrates.', language: 'Python', platform: 'GitHub', url: 'https://github.com/EleutherAI/lm-evaluation-harness', stars: '7k+' },
      { title: 'CAUSALLEARN', description: 'Python toolkit for causal discovery algorithms (PC, GES, NOTEARS, LiNGAM). Essential for implementing CSIM\'s causal depth index — measuring how deeply a system understands causal structure.', language: 'Python', platform: 'GitHub', url: 'https://github.com/py-why/causal-learn', stars: '1.7k+' },
      { title: 'ARC Evaluation Kit', description: 'Official evaluation toolkit for Chollet\'s Abstract Reasoning Corpus. The current best proxy for measuring fluid intelligence — the domain-specific precursor to CSIM\'s substrate-independent adaptability metric.', language: 'Python', platform: 'GitHub', url: 'https://github.com/fchollet/ARC-AGI', stars: '2.5k+' },
    ],
    diagrams: [
      { title: 'The Ladder of Causation', source: 'Judea Pearl — The Book of Why', description: 'Pearl\'s three-rung ladder: Seeing (correlation) → Doing (intervention) → Imagining (counterfactual). Visualizes the hierarchy of causal depth that CSIM\'s causal depth index measures.', type: 'Conceptual Diagram', url: 'https://www.amazon.com/Book-Why-Science-Cause-Effect/dp/046509760X' },
      { title: 'HELM Evaluation Radar Charts', source: 'Stanford CRFM', description: 'Multi-dimensional radar charts comparing LLMs across accuracy, calibration, robustness, and efficiency. Shows the multi-metric evaluation approach CSIM extends to all substrates.', type: 'Evaluation Visualization', url: 'https://crfm.stanford.edu/helm/latest/' },
      { title: 'Chollet Intelligence Framework Diagram', source: 'François Chollet / arXiv', description: 'Visual framework distinguishing skill from intelligence, and defining intelligence as skill-acquisition efficiency. The conceptual foundation for CSIM\'s adaptability coefficient.', type: 'Conceptual Framework', url: 'https://arxiv.org/abs/1911.01547' },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────
     STAGE 07 — Multi-Scale Intelligence Unification
  ────────────────────────────────────────────────────────────────── */
  8: {
    books: [
      {
        title: 'Emergence: From Chaos to Order',
        authors: 'John H. Holland',
        year: 1998,
        level: 'Intermediate',
        description: 'How higher-level phenomena emerge from lower-level rules — the central question of Stage 07. Holland examines emergence in computing, biology, and economics as precursors to a general theory.',
        url: 'https://www.amazon.com/Emergence-Chaos-Order-John-Holland/dp/0738201421',
      },
      {
        title: 'The Fractal Geometry of Nature',
        authors: 'Benoît Mandelbrot',
        year: 1982,
        level: 'Intermediate',
        description: 'Mandelbrot\'s landmark work showing self-similar fractal structures appear across biology, geography, and finance. Scale invariance in nature — the visual intuition for Stage 07\'s cross-scale invariant search.',
        url: 'https://www.amazon.com/Fractal-Geometry-Nature-Benoit-Mandelbrot/dp/0716711869',
      },
      {
        title: 'Statistical Physics of Fields',
        authors: 'Mehran Kardar',
        year: 2007,
        level: 'Advanced',
        description: 'Graduate-level statistical physics covering renormalization group theory — the mathematical framework for understanding how physics laws transform across scales. Stage 07 applies RG thinking to intelligence.',
        url: 'https://www.cambridge.org/core/books/statistical-physics-of-fields/2DE724A98B8C61EAB5CFEC7B4C40B9BC',
      },
      {
        title: 'Scale: The Universal Laws of Growth, Innovation, Sustainability',
        authors: 'Geoffrey West',
        year: 2017,
        level: 'Beginner',
        description: 'West\'s discovery that metabolic rate, city infrastructure, and company performance all follow the same power-law scaling. Demonstrates that universal scaling laws connect biology, economics, and urban systems.',
        url: 'https://www.amazon.com/Scale-Universal-Innovation-Sustainability-Organisms/dp/1594205582',
      },
    ],
    articles: [
      {
        title: 'More Is Different — Philip Anderson',
        source: 'Science, 1972',
        description: 'The canonical argument that each scale has its own emergent laws — broken symmetry at each level creates qualitatively new phenomena. The philosophical foundation for Stage 07\'s multi-scale intelligence program.',
        type: 'Foundational Essay',
        url: 'https://cse-robotics.engr.tamu.edu/dshell/cs689/papers/anderson72more_is_different.pdf',
      },
      {
        title: 'Power Laws in Biology',
        source: 'Quanta Magazine',
        description: 'Survey of power-law scaling relationships in biology — metabolic rate, genome size, neural connectivity. Shows that intelligence and information processing scale predictably across biological scales.',
        type: 'Feature',
        url: 'https://www.quantamagazine.org/the-surprising-simplicity-of-scaling-laws-20200323/',
      },
      {
        title: 'Renormalization Group: A Brief Introduction',
        source: 'John Baez / Mathematics',
        description: 'Accessible introduction to renormalization group theory — how physics descriptions change as you zoom in or out. The mathematical tool Stage 07 adapts for analyzing intelligence across scales.',
        type: 'Tutorial',
        url: 'https://math.ucr.edu/home/baez/renormalization.html',
      },
    ],
    labs: [
      { name: 'Santa Fe Institute', type: 'Research Institute', location: 'Santa Fe, NM', focus: 'Scaling laws, emergence, cross-scale complex systems', url: 'https://www.santafe.edu' },
      { name: 'Kavli Institute for Theoretical Physics', type: 'Research Institute', location: 'Santa Barbara, CA', focus: 'Statistical physics, renormalization, emergence in physical systems', url: 'https://www.kitp.ucsb.edu' },
      { name: 'Broad Institute of MIT and Harvard', type: 'Research Institute', location: 'Cambridge, MA', focus: 'Molecular-to-systems biology, multi-scale genomics', url: 'https://www.broadinstitute.org' },
      { name: 'Allen Institute for Brain Science', type: 'Research Institute', location: 'Seattle, WA', focus: 'Neural-to-cognitive scale brain mapping, multi-scale connectomics', url: 'https://alleninstitute.org/what-we-do/brain-science/' },
    ],
    papers: [
      { title: 'Scaling Laws for Neural Language Models', authors: 'Kaplan et al.', year: 2020, venue: 'arXiv / OpenAI', description: 'Demonstrates that LLM performance follows power-law scaling with compute, data, and parameters. Stage 07 asks whether similar scaling laws connect intelligence across biological and artificial scales.', url: 'https://arxiv.org/abs/2001.08361', mustRead: true },
      { title: 'A General Model for the Origin of Allometric Scaling Laws in Biology', authors: 'West, Brown & Enquist', year: 1997, venue: 'Science', description: 'Derives universal 3/4 power-law scaling of metabolic rate from fractal network structure. Demonstrates that universal scaling laws arise from structural invariants — exactly Stage 07\'s prediction.', url: 'https://www.science.org/doi/10.1126/science.276.5309.122', mustRead: true },
      { title: 'Statistical Mechanics of Self-Replication', authors: 'Jeremy England', year: 2013, venue: 'Journal of Chemical Physics', description: 'Derives thermodynamic conditions under which self-replication is inevitable. Suggests intelligence emergence has physics-level predictability from molecular-scale conditions.', url: 'https://arxiv.org/abs/1209.1179', mustRead: false },
    ],
    code: [
      { title: 'NetKet (Machine Learning for Quantum Systems)', description: 'Python framework for studying quantum many-body physics using neural networks. Bridges molecular-scale quantum intelligence and neural-scale AI — the bottom of Stage 07\'s scale hierarchy.', language: 'Python / JAX', platform: 'GitHub', url: 'https://github.com/netket/netket', stars: '850+' },
      { title: 'Brian2 (Computational Neuroscience)', description: 'Simulator for spiking neural networks at the neural-scale level of Stage 07\'s hierarchy. Bridge from molecular (ion channels) to cognitive (neural circuits) intelligence.', language: 'Python', platform: 'GitHub', url: 'https://github.com/brian-team/brian2', stars: '900+' },
      { title: 'Mesa', description: 'Agent-based modeling — simulates collective intelligence emerging from individual agent interactions. The agent-to-collective level of Stage 07\'s scale hierarchy.', language: 'Python', platform: 'GitHub', url: 'https://github.com/projectmesa/mesa', stars: '2.4k+' },
    ],
    diagrams: [
      { title: 'The Scale of Intelligence Hierarchy', source: 'Santa Fe Institute', description: 'Visual map showing how intelligence phenomena connect from molecular chemistry through neural cognition to collective social behavior. The foundational diagram for Stage 07 research.', type: 'Conceptual Hierarchy', url: 'https://www.santafe.edu/research/themes/complexity-science' },
      { title: 'Biological Allometric Scaling Plots', source: 'West, Brown & Enquist (Science 1997)', description: 'Log-log plots showing metabolic rate, lifespan, and heart rate all scaling as power laws across 27 orders of magnitude of body mass. The empirical template for Stage 07\'s cross-scale intelligence scaling laws.', type: 'Scientific Figure', url: 'https://www.science.org/doi/10.1126/science.276.5309.122' },
      { title: 'Renormalization Group Flow Diagrams', source: 'Physics / Wikipedia', description: 'Visualization of how physical theories flow toward fixed points under renormalization group transformation. The mathematical template for Stage 07\'s analysis of intelligence across scales.', type: 'Mathematical Diagram', url: 'https://en.wikipedia.org/wiki/Renormalization_group' },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────
     STAGE 08 — Universal Theory of Intelligence (UTI)
  ────────────────────────────────────────────────────────────────── */
  9: {
    books: [
      {
        title: 'Gödel, Escher, Bach: An Eternal Golden Braid',
        authors: 'Douglas Hofstadter',
        year: 1979,
        level: 'Intermediate',
        description: 'Pulitzer Prize-winning exploration of self-reference, consciousness, and formal systems. The deepest exploration of the relationship between formal mathematical systems and intelligent understanding — essential context for UTI axiom design.',
        url: 'https://www.amazon.com/Gödel-Escher-Bach-Eternal-Golden/dp/0465026567',
      },
      {
        title: 'The Fabric of Reality',
        authors: 'David Deutsch',
        year: 1997,
        level: 'Intermediate',
        description: 'Deutsch\'s argument for a unified theory of everything — quantum mechanics, epistemology, evolution, and computation as four strands of a single explanatory fabric. The philosophical vision most aligned with UTI\'s unification goal.',
        url: 'https://www.amazon.com/Fabric-Reality-Parallel-Universes-Implications/dp/014027541X',
      },
      {
        title: 'On Intelligence',
        authors: 'Jeff Hawkins',
        year: 2004,
        level: 'Beginner',
        description: 'Hawkins\' memory-prediction framework for intelligence — argues all cortical intelligence reduces to hierarchical temporal memory and prediction. A substrate-specific UTI hypothesis that Stage 08 must either incorporate or contradict.',
        url: 'https://www.amazon.com/Intelligence-Understanding-Creation-Intelligent-Machines/dp/0805078533',
      },
      {
        title: 'Universal Artificial Intelligence',
        authors: 'Marcus Hutter',
        year: 2005,
        level: 'Advanced',
        description: 'Formal definition of AIXI — the optimal reinforcement learning agent that UTI builds upon and generalizes. Hutter proves theoretical optimality but AIXI is incomputable. UTI seeks a computable approximation.',
        url: 'https://www.springer.com/gp/book/9783540221388',
      },
    ],
    articles: [
      {
        title: 'The Hard Problem of Consciousness',
        source: 'David Chalmers (1995)',
        description: 'Defines the distinction between the "easy" problems of cognition (functions) and the "hard" problem (subjective experience). UTI explicitly scopes to the functional/structural theory only — this paper defines what UTI does not claim.',
        type: 'Philosophical Paper',
        url: 'https://consc.net/papers/facing.html',
      },
      {
        title: 'Integrated Information Theory (IIT 3.0)',
        source: 'Tononi et al. / PLOS Computational Biology',
        description: 'Formal theory of consciousness as integrated information (Φ). IIT is the most rigorous existing substrate-independent intelligence/consciousness theory. UTI must position itself relative to IIT explicitly.',
        type: 'Research Paper',
        url: 'https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003588',
      },
      {
        title: 'The Bitter Lesson',
        source: 'Rich Sutton (2019)',
        description: 'Argues that general computation methods (search, learning) always beat domain-specific human knowledge in AI. Implies that a universal theory should be grounded in computation, not domain expertise — directly relevant to UTI axiom design.',
        type: 'Essay',
        url: 'http://www.incompleteideas.net/IncIdeas/BitterLesson.html',
      },
      {
        title: 'Falsifiability and the Philosophy of Science',
        source: 'Karl Popper (Stanford Encyclopedia)',
        description: 'Popper\'s criterion for scientific theories: falsifiable predictions. Stage 08 requires UTI to make specific falsifiable predictions. This is the philosophical standard UTI must meet to be accepted as science rather than philosophy.',
        type: 'Reference',
        url: 'https://plato.stanford.edu/entries/popper/',
      },
    ],
    labs: [
      { name: 'Future of Humanity Institute (FHI) — Oxford', type: 'University Lab', location: 'Oxford, UK', focus: 'Long-term AI, universal intelligence theory, existential risk', url: 'https://www.fhi.ox.ac.uk' },
      { name: 'Machine Intelligence Research Institute (MIRI)', type: 'Research Institute', location: 'Berkeley, CA', focus: 'Mathematical theory of AI, agent foundations, decision theory', url: 'https://intelligence.org' },
      { name: 'ARC (Alignment Research Center)', type: 'Research Institute', location: 'Berkeley, CA', focus: 'AI safety, interpretability, formal AI theory', url: 'https://www.alignment.org' },
      { name: 'Anthropic Alignment Science', type: 'Industry Lab', location: 'San Francisco, CA', focus: 'Constitutional AI, interpretability, formal safety guarantees', url: 'https://www.anthropic.com/research' },
    ],
    papers: [
      { title: 'Universal Intelligence: A Definition of Machine Intelligence', authors: 'Legg & Hutter', year: 2007, venue: 'Minds and Machines', description: 'The formal mathematical definition of machine intelligence UTI builds upon. Defines intelligence as sum over all environments of performance, weighted by algorithmic simplicity.', url: 'https://arxiv.org/abs/0712.5440', mustRead: true },
      { title: 'Phi: A Measure of the Amount of Integrated Information in a System', authors: 'Tononi', year: 2004, venue: 'BMC Neuroscience', description: 'Foundational IIT paper defining integrated information Φ. UTI must either subsume or contradict IIT\'s approach to substrate-independent intelligence measurement.', url: 'https://bmcneurosci.biomedcentral.com/articles/10.1186/1471-2202-5-42', mustRead: false },
      { title: 'Attention Is All You Need (Revisited)', authors: 'Vaswani et al.', year: 2017, venue: 'NeurIPS 2017', description: 'The architecture that Stage 01 was built on — now reread as a specific instantiation of UTI\'s universal state equation with particular structural choices. UTI should be able to derive Stage 01 as a special case.', url: 'https://arxiv.org/abs/1706.03762', mustRead: false },
      { title: 'A Formal Theory of Inductive Inference (Solomonoff)', authors: 'Ray Solomonoff', year: 1964, venue: 'Information and Control', description: 'Universal prior for inductive inference — the algorithmic probability that AIXI and UTI\'s compression efficiency metric trace their lineage to. The mathematical foundation of universal intelligence measurement.', url: 'https://www.sciencedirect.com/science/article/pii/S0019995864902232', mustRead: false },
    ],
    code: [
      { title: 'AIXI Implementation (AIXIjs)', description: 'JavaScript implementation of CTW-approximated AIXI. The only working implementation of the universal intelligence definition UTI generalizes — essential for understanding what UTI builds beyond.', language: 'JavaScript', platform: 'GitHub', url: 'https://github.com/aslanides/aixijs', stars: '300+' },
      { title: 'Lean 4 (Formal Verification)', description: 'Interactive theorem prover for formal mathematics. UTI axioms require machine-verified proofs — Lean 4 is the current state-of-the-art for formalizing mathematical theories computationally.', language: 'Lean 4', platform: 'GitHub', url: 'https://github.com/leanprover/lean4', stars: '4.5k+' },
      { title: 'PyMDPs (Active Inference)', description: 'Python implementation of Active Inference — Friston\'s framework for intelligence as free-energy minimization. A UTI candidate framework that uses information-geometric principles for substrate-independent intelligence.', language: 'Python', platform: 'GitHub', url: 'https://github.com/infer-actively/pymdp', stars: '500+' },
    ],
    diagrams: [
      { title: 'The Great Chain of Intelligence (UTI Scope Diagram)', source: 'UTI Research Program', description: 'Visualization of UTI\'s scope: from molecular chemistry through neural cognition, AI systems, organizations, and civilizations — all described by the same formal framework.', type: 'Scope Diagram', url: 'https://arxiv.org/abs/0712.5440' },
      { title: 'IIT Phi Diagram — Integrated Information', source: 'Tononi Lab / Wisconsin', description: 'Visual explanation of how integrated information (Φ) is computed from system connectivity. Shows both the power and limitation of IIT that UTI must address.', type: 'Concept Diagram', url: 'https://integratedinformationtheory.org/calculate.html' },
      { title: 'AIXI Decision-Making Loop', source: 'Marcus Hutter', description: 'Diagram of the AIXI perception-action-reward loop — the formal universal agent architecture. UTI\'s universal state equation is a generalization of this loop to multi-domain, multi-scale intelligence.', type: 'Architecture Diagram', url: 'https://www.hutter1.net/ai/uaibook.htm' },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────
     STAGE 09 — Eternal Research Program (ERP)
  ────────────────────────────────────────────────────────────────── */
  10: {
    books: [
      {
        title: 'The Structure of Scientific Revolutions',
        authors: 'Thomas S. Kuhn',
        year: 1962,
        level: 'Beginner',
        description: 'The definitive account of how scientific paradigms form, persist through anomalies, and eventually are replaced. ERP is designed to be a Kuhnian paradigm — this book explains what that means and what makes paradigms durable.',
        url: 'https://www.amazon.com/Structure-Scientific-Revolutions-Thomas-Kuhn/dp/0226458121',
      },
      {
        title: 'Consilience: The Unity of Knowledge',
        authors: 'E.O. Wilson',
        year: 1998,
        level: 'Beginner',
        description: 'Wilson\'s vision of unifying all scientific knowledge — biology, physics, social sciences, and humanities — under a common explanatory framework. The intellectual vision ERP operationalizes for intelligence science specifically.',
        url: 'https://www.amazon.com/Consilience-Unity-Knowledge-Edward-Wilson/dp/0679768688',
      },
      {
        title: 'The Beginning of Infinity',
        authors: 'David Deutsch',
        year: 2011,
        level: 'Intermediate',
        description: 'Argues that good explanatory theories are the most powerful human achievement — and that once a culture of good explanations exists, knowledge grows without bound. The philosophical argument for why ERP should be designed as an eternal program.',
        url: 'https://www.amazon.com/Beginning-Infinity-Explanations-Transform-World/dp/0143121359',
      },
      {
        title: 'Against Method',
        authors: 'Paul Feyerabend',
        year: 1975,
        level: 'Advanced',
        description: 'The contrarian argument that scientific progress requires breaking methodological rules. ERP should understand both the case for structured methodology (Kuhn, Popper) and the case against rigid method — the tension determines how ERP evolves.',
        url: 'https://www.amazon.com/Against-Method-Paul-Feyerabend/dp/1844674428',
      },
    ],
    articles: [
      {
        title: 'Research Programs: Lakatos vs Popper',
        source: 'Stanford Encyclopedia of Philosophy',
        description: 'Explanation of Imre Lakatos\'s research program concept — a "hard core" of irrefutable assumptions protected by a "protective belt" of modifiable auxiliary hypotheses. Directly describes ERP\'s architecture: permanent core + evolving domain modules.',
        type: 'Reference',
        url: 'https://plato.stanford.edu/entries/lakatos/',
      },
      {
        title: 'The Unreasonable Effectiveness of Mathematics in the Natural Sciences',
        source: 'Eugene Wigner (1960)',
        description: 'Wigner\'s observation that mathematical structures developed for pure aesthetics repeatedly turn out to describe reality precisely. The epistemological miracle that UTI relies on — and that ERP must keep producing.',
        type: 'Essay',
        url: 'https://www.dartmouth.edu/~matc/MathDrama/reading/Wigner.html',
      },
      {
        title: 'How Science Works',
        source: 'National Academies of Science',
        description: 'Clear description of the scientific method, peer review, replication, and institutional structures that make science self-correcting. ERP must build all of these structures — this is the operational blueprint.',
        type: 'Reference',
        url: 'https://www.nap.edu/read/6024/chapter/3',
      },
      {
        title: 'Open Science and Reproducible Research',
        source: 'Center for Open Science',
        description: 'The open science movement — pre-registration, open data, replication requirements. ERP must adopt all open science practices to survive as an eternal research program across generations of researchers.',
        type: 'Guide',
        url: 'https://www.cos.io/blog/open-science-defined',
      },
    ],
    labs: [
      { name: 'Future of Humanity Institute (FHI) — Oxford', type: 'University Lab', location: 'Oxford, UK', focus: 'Long-run AI research programs, existential risk, universal intelligence', url: 'https://www.fhi.ox.ac.uk' },
      { name: 'Long-Term Future Fund (LTFF)', type: 'Funding Organization', location: 'Global', focus: 'Funding long-horizon research programs in AI safety and intelligence theory', url: 'https://funds.effectivealtruism.org/funds/far-future' },
      { name: 'Survival and Flourishing Fund', type: 'Funding Organization', location: 'USA', focus: 'Long-horizon AI research with civilizational significance', url: 'https://survivalandflourishing.fund' },
      { name: 'Open Philanthropy AI', type: 'Funding Organization', location: 'San Francisco, CA', focus: 'Funding high-impact long-horizon AI safety and theory research', url: 'https://www.openphilanthropy.org/focus/global-catastrophic-risks/potential-risks-advanced-artificial-intelligence' },
    ],
    papers: [
      { title: 'The Methodology of Scientific Research Programmes', authors: 'Imre Lakatos', year: 1978, venue: 'Cambridge University Press', description: 'Lakatos\'s framework for research programs — hard core, protective belt, progressive vs degenerative programs. ERP is explicitly designed as a Lakatosian progressive research program.', url: 'https://www.cambridge.org/core/books/methodology-of-scientific-research-programmes/14EE8C7C6C29CC6DD1F5DF6A77B14ED0', mustRead: true },
      { title: 'The Logic of Scientific Discovery', authors: 'Karl Popper', year: 1959, venue: 'Book', description: 'Popper\'s falsifiability criterion — a theory is scientific if and only if it makes predictions that could be proven false. Every UTI claim and ERP milestone must meet this standard.', url: 'https://www.amazon.com/Logic-Scientific-Discovery-Routledge-Classics/dp/0415278449', mustRead: true },
      { title: 'Science in Action', authors: 'Bruno Latour', year: 1987, venue: 'Book', description: 'Sociological analysis of how scientific facts are constructed through networks of people, instruments, and institutions. Understanding how ERP must build its institutional infrastructure to produce durable scientific facts.', url: 'https://www.amazon.com/Science-Action-Follow-Scientists-Engineers/dp/0674792912', mustRead: false },
    ],
    code: [
      { title: 'Open Science Framework (OSF)', description: 'Platform for pre-registration, open data, and reproducible research. ERP uses OSF for pre-registering experiments, sharing data, and managing the living research record across institutions.', language: 'Web Platform', platform: 'OSF', url: 'https://osf.io', stars: 'N/A' },
      { title: 'Quarto (Scientific Publishing)', description: 'Open-source scientific publishing system for creating reproducible research documents, websites, and papers. ERP\'s primary format for publishing living research documents and versioned roadmaps.', language: 'Python / R / Julia', platform: 'GitHub', url: 'https://github.com/quarto-dev/quarto-cli', stars: '3.5k+' },
      { title: 'ArXiv and Semantic Scholar APIs', description: 'Programmatic access to the research literature. ERP uses these APIs to track citations, map research frontiers, and monitor which ERP predictions are being confirmed or refuted by independent groups.', language: 'Python (REST API)', platform: 'arXiv / Semantic Scholar', url: 'https://api.semanticscholar.org', stars: 'N/A' },
    ],
    diagrams: [
      { title: 'Lakatos Research Program Structure', source: 'Philosophy of Science', description: 'Visual diagram of the Lakatosian research program structure: hard core protected by auxiliary hypotheses. The direct architectural template for ERP\'s permanent core and evolving domain modules.', type: 'Conceptual Diagram', url: 'https://plato.stanford.edu/entries/lakatos/' },
      { title: 'The ERP Research Loop', source: 'UTI Evolution', description: 'The core ERP feedback loop: Build → Test → Measure (CSIM) → Revise Theory → Repeat. The operational diagram that defines how the eternal program advances stage by stage.', type: 'Process Diagram', url: '/' },
      { title: 'History of Scientific Revolutions Timeline', source: 'Kuhn / Wellcome Collection', description: 'Visual timeline of major scientific paradigm shifts — Copernican, Newtonian, Quantum, DNA. Shows the multi-decade timescales and institutional structures that successful scientific revolutions require.', type: 'Historical Timeline', url: 'https://www.amazon.com/Structure-Scientific-Revolutions-Thomas-Kuhn/dp/0226458121' },
    ],
  },
}
