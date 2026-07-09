const agents = [
  {
    name: 'ChatGPT',
    slug: 'chatgpt',
    description: 'OpenAI conversational reasoning model evaluated for structured decision-making, safety framing, and scenario interpretation.',
    strengths: ['Structured explanations', 'Safety-aware responses', 'Clear scenario decomposition'],
    weaknesses: ['Sandbox behaviour pending', 'Needs empirical scoring data', 'Longitudinal consistency not yet tested'],
  },
  {
    name: 'Claude',
    slug: 'claude',
    description: 'Anthropic assistant assessed for nuanced judgement, careful tone, and reflective responses across identical prompts.',
    strengths: ['Careful risk assessment', 'Nuanced written tone', 'Strong ethical framing'],
    weaknesses: ['Sandbox behaviour pending', 'Comparative action data unavailable', 'Requires calibrated rubric scoring'],
  },
  {
    name: 'Gemini',
    slug: 'gemini',
    description: 'Google AI system measured for multimodal readiness, reasoning clarity, and scenario response consistency.',
    strengths: ['Multimodal potential', 'Concise synthesis', 'Broad knowledge framing'],
    weaknesses: ['Sandbox behaviour pending', 'Needs controlled prompt runs', 'Visual-action comparison not yet available'],
  },
  {
    name: 'Copilot',
    slug: 'copilot',
    description: 'Microsoft AI assistant compared for practical action planning, productivity-oriented reasoning, and controlled response style.',
    strengths: ['Task-oriented reasoning', 'Practical recommendations', 'Strong productivity framing'],
    weaknesses: ['Sandbox behaviour pending', 'Scenario depth still unmeasured', 'Needs cross-model normalization'],
  },
  {
    name: 'Perplexity',
    slug: 'perplexity',
    description: 'Answer engine evaluated for research-style responses, source-aware reasoning, and precision in controlled scenarios.',
    strengths: ['Research-facing summaries', 'Evidence-oriented answers', 'Direct comparison potential'],
    weaknesses: ['Sandbox behaviour pending', 'Citation behaviour requires review', 'Action consistency not yet measured'],
  },
];

const methodology = [
  ['Scenario design', 'Build repeatable written and spatial tasks with controlled variables, constraints, and success criteria.'],
  ['Prompt testing', 'Run each model through the same prompts to capture reasoning, tone, safety, creativity, and decisions.'],
  ['Response comparison', 'Normalize outputs into comparable evidence, notes, rubric scores, and qualitative observations.'],
  ['Behaviour scoring', 'Translate future sandbox actions into measurable indicators such as hesitation, goal progress, and safety choices.'],
  ['Sandbox simulation', 'Recreate scenarios in a 3D environment with objects, spatial affordances, and scripted experimental conditions.'],
  ['AI-to-AI interaction testing', 'Observe future multi-agent communication, cooperation, conflict resolution, and emergent behaviour.'],
];

const dashboardMetrics = [
  ['Reasoning score', 84],
  ['Creativity score', 72],
  ['Safety score', 91],
  ['Accuracy score', 78],
  ['Action consistency score', 64],
];

const sectionHeading = (kicker, title, body) => `
  <div class="section-heading reveal">
    <p class="eyebrow">${kicker}</p>
    <h2>${title}</h2>
    <p>${body}</p>
  </div>
`;

const listItems = (items) => items.map((item) => `<li>${item}</li>`).join('');

const infoBlock = (title, text) => `
  <div class="info-block">
    <h4>${title}</h4>
    <p>${text}</p>
  </div>
`;

const listBlock = (title, items) => `
  <div class="info-block">
    <h4>${title}</h4>
    <ul>${listItems(items)}</ul>
  </div>
`;

const agentCards = agents.map((agent, index) => `
  <a class="agent-card glass-card reveal" style="--delay: ${index * 80}ms" href="#${agent.slug}-results">
    <div>
      <span class="status-badge">Testing planned</span>
      <h3>${agent.name}</h3>
      <p>${agent.description}</p>
    </div>
    <span class="text-button">View Results →</span>
  </a>
`).join('');

const agentResults = agents.map((agent) => `
  <article class="result-panel glass-card" id="${agent.slug}-results">
    <div class="result-header">
      <div>
        <p class="eyebrow">Agent results</p>
        <h3>${agent.name}</h3>
      </div>
      <span class="status-badge">Testing planned</span>
    </div>
    <div class="result-grid">
      ${infoBlock('Overview', `${agent.name} will be tested against controlled prompts and later mirrored in the 3D sandbox.`)}
      ${infoBlock('Scenario responses', 'Placeholder for written answers, prompt transcripts, rubric tags, and reviewer notes.')}
      ${listBlock('Strengths observed', agent.strengths)}
      ${listBlock('Weaknesses observed', agent.weaknesses)}
      ${infoBlock('Behaviour notes', 'Future notes will compare stated decisions with observed sandbox actions, object interactions, and route choices.')}
      ${infoBlock('Future sandbox results', 'Reserved for 3D simulation recordings, behaviour scores, and AI-to-AI interaction summaries.')}
    </div>
    <!-- Future data hook: add real scenario records, sandbox telemetry, and per-agent chart datasets here. -->
    <div class="placeholder-chart" aria-label="${agent.name} placeholder results chart">
      <span style="height: 42%"></span>
      <span style="height: 68%"></span>
      <span style="height: 54%"></span>
      <span style="height: 76%"></span>
      <span style="height: 61%"></span>
    </div>
  </article>
`).join('');

const methodologyCards = methodology.map(([title, text]) => `
  <article class="method-card glass-card">
    <h3>${title}</h3>
    <p>${text}</p>
  </article>
`).join('');

const metricRows = dashboardMetrics.map(([label, score]) => `
  <div class="score-row">
    <div class="score-label">
      <span>${label}</span>
      <strong>${score}</strong>
    </div>
    <div class="progress-track" aria-hidden="true">
      <span style="width: ${score}%"></span>
    </div>
  </div>
`).join('');

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <div class="background-fx" aria-hidden="true">
      <span class="orb orb-one"></span>
      <span class="orb orb-two"></span>
      <span class="orb orb-three"></span>
      <div class="grid-glow"></div>
    </div>

    <header class="site-header">
      <a class="brand" href="#top" aria-label="AI Behavioural Sandbox home">
        <span class="brand-mark">ABS</span>
        <span>AI Behavioural Sandbox</span>
      </a>
      <nav class="main-nav" aria-label="Primary navigation">
        <a href="#overview">Overview</a>
        <a href="#agents">Agents</a>
        <a href="#documentation">Docs</a>
        <a href="#dashboard">Dashboard</a>
      </nav>
    </header>

    <main>
      <section class="hero section" id="top">
        <div class="hero-copy reveal">
          <p class="eyebrow">Controlled AI behaviour research lab</p>
          <h1>AI Behavioural Sandbox</h1>
          <p class="hero-subtitle">Comparing how leading AI systems reason, respond, and act inside controlled experimental environments.</p>
          <div class="hero-actions" aria-label="Project calls to action">
            <a class="button button-primary" href="#documentation">View Documentation</a>
            <a class="button button-secondary" href="#agents">Explore AI Agents</a>
            <a class="button button-ghost" href="#visual-testing">Watch Sandbox Tests</a>
          </div>
        </div>
        <div class="hero-visual glass-card reveal delay-one" aria-label="Animated sandbox preview">
          <div class="simulation-window">
            <div class="window-top"><span></span><span></span><span></span></div>
            <div class="sandbox-stage">
              <div class="agent-node node-a">AI</div>
              <div class="agent-node node-b">3D</div>
              <div class="agent-node node-c">LAB</div>
              <div class="scan-line"></div>
            </div>
          </div>
          <div class="signal-stack">
            <div class="metric-pill"><span>Prompt parity</span><strong>100%</strong></div>
            <div class="metric-pill"><span>Behaviour trace</span><strong>Pending</strong></div>
            <div class="metric-pill"><span>Scenario grid</span><strong>Phase 1</strong></div>
          </div>
        </div>
      </section>

      <section class="section" id="overview">
        ${sectionHeading('Project overview', 'Two-phase experimentation for written reasoning and simulated behaviour', 'The project starts with identical prompt-based testing, then expands into a 3D behavioural sandbox where written intentions can be compared with agent actions.')}
        <div class="phase-grid">
          <article class="phase-card glass-card reveal">
            <span class="phase-number">Phase 1</span>
            <h3>Prompt-Based Scenario Testing</h3>
            <p>Different AI models will receive the same written scenarios. Their responses will be compared based on reasoning, tone, safety, creativity, accuracy, and decision-making.</p>
          </article>
          <article class="phase-card glass-card reveal delay-one">
            <span class="phase-number">Phase 2</span>
            <h3>3D Sandbox Behaviour Testing</h3>
            <p>The same scenarios will later be recreated inside a simulated 3D environment. AI agents will interact with objects, spaces, and eventually each other, allowing actions to be compared against written answers.</p>
          </article>
        </div>
      </section>

      <section class="section" id="agents">
        ${sectionHeading('AI agents', 'Comparable model profiles prepared for controlled testing', 'Each profile is structured so future scenario outputs, scoring data, documentation, and sandbox observations can be inserted without redesigning the site.')}
        <div class="agent-grid">${agentCards}</div>
      </section>

      <section class="section results-section" id="agent-results">
        ${sectionHeading('Individual results areas', 'Dedicated spaces for future findings', 'These placeholders are ready for real prompt transcripts, sandbox telemetry, charts, and comparative notes as the research progresses.')}
        <div class="results-stack">${agentResults}</div>
      </section>

      <section class="section split-section" id="documentation">
        <div>
          ${sectionHeading('Documentation', 'Research documentation hub', 'A PDF viewer or embedded document can be added here when the written methodology, scenario library, and results report are ready.')}
          <a class="button button-primary" href="#documentation" aria-disabled="true">Open Project Documentation</a>
        </div>
        <div class="document-card glass-card">
          <p class="eyebrow">PDF space</p>
          <h3>Documentation coming soon</h3>
          <p>Reserved area for a project documentation PDF, research report, methodology notes, or embedded viewer.</p>
          <!-- Future documentation hook: replace this card with an iframe/object embed for the project PDF. -->
          <div class="pdf-placeholder">PDF</div>
        </div>
      </section>

      <section class="section split-section reverse" id="visual-testing">
        <div class="video-card glass-card">
          <div class="play-button" aria-hidden="true">▶</div>
          <h3>Visual testing videos coming soon</h3>
          <p>Placeholder YouTube embed card for sandbox walkthroughs, agent tests, and behaviour comparison videos.</p>
          <!-- Future video hook: insert YouTube iframe embed and production video URLs here. -->
        </div>
        <div>
          ${sectionHeading('YouTube / visual testing', 'Sandbox experiments designed to be watched and reviewed', 'Future videos will document how scenarios are recreated, how agents move through simulated spaces, and where behaviour diverges from written responses.')}
          <a class="button button-secondary" href="#visual-testing" aria-disabled="true">Watch on YouTube</a>
        </div>
      </section>

      <section class="section" id="methodology">
        ${sectionHeading('Experiment methodology', 'A repeatable pipeline from scenario design to behavioural scoring', 'The site is structured around a research workflow that can grow from written comparisons into simulated action analysis.')}
        <div class="method-grid">${methodologyCards}</div>
      </section>

      <section class="section" id="dashboard">
        ${sectionHeading('Results dashboard preview', 'Placeholder metrics for future comparative scoring', 'Scores below are illustrative only. Replace them with real rubric values after prompt testing and sandbox experiments are complete.')}
        <div class="dashboard glass-card">
          ${metricRows}
          <!-- Future dashboard hook: connect real aggregate metrics and chart data here. -->
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <h2>AI Behavioural Sandbox</h2>
        <p>Created by M. Rayene Bouanane</p>
      </div>
      <nav aria-label="Footer links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://youtube.com/" target="_blank" rel="noreferrer">YouTube</a>
        <a href="#documentation">Documentation</a>
      </nav>
    </footer>
  </div>
`;
