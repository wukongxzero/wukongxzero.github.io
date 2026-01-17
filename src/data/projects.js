export const projects = [
  // =========================
  // FLAGSHIP (Tier 1)
  // =========================
  {
  slug: "articulus-surgical-robotics",
  title: "Articulus Surgical Robotics",
  subtitle:
    "Cosmos architecture powering Pulsar: real-time control, teleoperation, and safety-aware motion",
  year: "2023–2025",
  tier: 1,
  tags: ["C++", "Real-time", "Control", "DDS", "Safety", "Systems"],

  // Use proof/architecture image, not logo
  hero: "/projects/articulus/Articulus.jpg",

  links: {
    website: "https://www.articulussurgical.com",
    github: "",
    video: "",
  },

  // ✅ CRITICAL: separate robot vs architecture explicitly
  robotName: "Pulsar",
  architectureName: "Cosmos",
  architectureNote:
    "Pulsar is the surgical robotic platform. Cosmos is the real-time control + communication architecture I designed and implemented to run it.",

  role: "Lead Software Developer — Architect of Cosmos (Real-Time Control Platform)",
  roleDescription:
    "Designed and architected Cosmos, the real-time control and communication architecture powering the Pulsar surgical robot. Owned the execution model, safety-aware motion gating, teleoperation behaviors, tool lifecycle handling, and observability used during bring-up, validation, and live demos.",

  systemOverview:
    "Cosmos is a real-time control and communication architecture for multi-DOF teleoperated surgical robots such as Pulsar. It supports deterministic tool-frame motion (RPY + insertion), dynamic instrument swaps, safety-aware state gating, and low-latency teleoperation under strict timing and reliability constraints.",

  confidentialityNote:
    "This page shows representative architecture only. Details are generalized to respect confidentiality.",

  problem:
    "Architect deterministic real-time control and communication pipelines for a multi-DOF surgical robotics platform, supporting tool-frame orientation and insertion control (RPY + linear tool-axis motion), dynamic instrument swaps, teleoperated micro/macro motion, and safety-aware behavior aligned with applicable ISO standards.",

  gallery: [
    {
      title: "Cosmos Architecture (Representative)",
      src: "/projects/articulus/SoftwareArchitecture.jpg",
      caption:
        "High-level Cosmos control + communication architecture (representative and non-proprietary).",
    },
    {
      title: "Tool-Frame Motion & Orientation",
      src: "/projects/articulus/tool-frame.png",
      caption:
        "Representative tool-frame control: Roll/Pitch/Yaw orientation and linear insertion along tool axis.",
      group: "articulus-diagrams",
    },
    {
      title: "Tool Swap / Instrument Lifecycle",
      src: "/projects/articulus/tool-swap.png",
      caption:
        "Representative instrument lifecycle: attach/identify, parameter load, limits update, and safe re-enable after swap.",
      group: "articulus-diagrams",
    },
    {
      title: "Safety & Limits Management",
      src: "/projects/articulus/safety-limits.png",
      caption:
        "Layered safety concept: soft limits, fault monitoring, and hard-stop/shutdown paths (representative).",
      group: "articulus-diagrams",
    },
  ],

  approach: [
    "Architected Cosmos’ core real-time pipeline: feedback ingestion → synchronized control loops → deterministic actuation",
    "Designed multithreaded execution models with explicit scheduling and timing guarantees",
    "Integrated DDS communication for low-latency, reliable exchange between robotic subsystems",
    "Implemented safety and constraint handling: limits, saturation, fault responses, standards-aware workflows",
    "Built tool-frame motion control (RPY + insertion) and integrated FK/IK into teleop + tracking pipelines",
    "Designed tool lifecycle handling for instrument swaps: identification, frame updates, safety re-init, pipeline reconfig",
    "Built observability: high-rate logging + dashboards for bring-up/debug/validation",
  ],

  decisions: [
    {
      title: "Deterministic execution",
      detail:
        "Explicit real-time loop timing and scheduling boundaries to reduce jitter and simplify debugging.",
    },
    {
      title: "Safety gating (faults + E-stop)",
      detail:
        "State-driven enable/disable logic with latched fault handling so stops lead to predictable recovery paths.",
    },
    {
      title: "Observability-first design",
      detail:
        "High-rate logging and dashboards to shorten bring-up, validation, and demo iteration cycles.",
    },
    {
      title: "IMU/telemetry integration (extensible)",
      detail:
        "Synchronized telemetry channels designed to support monitoring, diagnostics, and future state-estimation extensions.",
    },
  ],

  ownership: [
    "Architecture ownership of Cosmos scheduling, determinism, and loop timing",
    "Teleoperation behavior + tool-frame motion pipeline",
    "FK/IK integration for instrument tracking and motion execution",
    "Safety constraints, fault responses, and lifecycle re-initialization",
    "Observability tooling (logging + dashboards) for validation and demos",
  ],

  results: [
    "~1–3 ms control-cycle compute budget for core control tasks under RT scheduling",
    "~22–26 ms end-to-end command → motion latency for improved teleop responsiveness",
    "Safe dynamic instrument swaps without losing control continuity",
    "Faster bring-up/debug via integrated logging and visualization tooling",
  ],

  bullets: [
    "Architected Cosmos: the real-time control + communication + safety-aware motion architecture powering Pulsar",
    "Tool-frame motion (RPY + insertion), teleop micro/macro behaviors, and lifecycle handling",
    "Deterministic multithreaded execution with RT scheduling and observability",
    "DDS-based low-latency comms across distributed robot subsystems",
  ],
},

  // =========================
  // SELECTED (Tier 2)
  // =========================
  {
    slug: "sae-baja",
    title: "SAE BAJA — Vehicle Build",
    subtitle: "End-to-end systems thinking under real competition constraints",
    year: "2021–2023",
    tier: 2,
    tags: ["Systems", "Integration", "Testing", "Leadership"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },

    problem:
      "Deliver a working vehicle system under timeline, cost, and reliability constraints.",
    approach: [
      "Owned subsystem design decisions and integration planning",
      "Iterated through build → test → failure → fix loops",
      "Documented tradeoffs and communicated decisions under time pressure",
    ],
    results: [
      "Competition-ready build with iterative field testing",
      "Stronger engineering instincts: integration, reliability, debugging",
    ],
    bullets: [
      "Subsystem integration + build-test iteration cycles",
      "Engineering tradeoffs under time/cost/reliability constraints",
      "Execution under pressure + team leadership",
    ],
  },

  {
    slug: "mujoco-simulation",
    title: "MuJoCo Manipulation Simulation",
    subtitle: "Controller design, tracking, and repeatable evaluation in simulation",
    year: "2025",
    tier: 2,
    tags: ["MuJoCo", "Python", "Control", "Manipulation"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },

    problem:
      "Build stable manipulation behaviors in simulation and evaluate control/tracking performance.",
    approach: [
      "Implemented joint-space and task-space tracking controllers",
      "Built task environments + evaluation scripts for repeatability",
      "Studied tuning tradeoffs (Kp/Kd, limits, stability behavior)",
    ],
    results: [
      "Stable tracking demos with a repeatable evaluation setup",
      "Clear tuning workflow + failure mode understanding",
    ],
    bullets: [
      "Controller implementation + tuning workflow",
      "Task environments and evaluation scripts",
      "Stability and performance tradeoff analysis",
    ],
  },

  {
    slug: "ex-hand",
    title: "Ex-Hand — Gesture-Controlled Hand",
    subtitle: "Vision/gesture → commands → embedded actuation (prototype build)",
    year: "2025",
    tier: 2,
    tags: ["Embedded", "Control", "Vision", "Mechatronics"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },

    problem:
      "Convert human hand motion into smooth, stable actuator commands for a robotic mechanism.",
    approach: [
      "Generated reference commands from vision/gesture signals",
      "Implemented feedback control + safety constraints",
      "Iterated transmission + firmware integration for reliability",
    ],
    results: [
      "Working perception → command → actuation loop",
      "Improved stability via filtering + controller tuning",
    ],
    bullets: [
      "Perception-to-control command pipeline",
      "Embedded integration + feedback control",
      "Mechanical + firmware iteration",
    ],
  },

  {
    slug: "pixhawk-px4",
    title: "Pixhawk + PX4 Development",
    subtitle: "Autopilot stack exploration, SITL, and control/system behavior",
    year: "2025",
    tier: 2,
    tags: ["PX4", "Embedded", "Control", "Autonomy"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },

    problem:
      "Learn and extend an autopilot stack with a focus on control + system behavior.",
    approach: [
      "Studied PX4 architecture and module structure",
      "Ran SITL workflows and parameter tuning experiments",
      "Built small extensions for data capture and behavior checks",
    ],
    results: [
      "Working PX4 dev workflow with simulation iteration",
      "Better understanding of flight stack design and tuning constraints",
    ],
    bullets: [
      "PX4 architecture understanding + dev workflow",
      "Simulation-first testing approach",
      "Control and parameter tuning experience",
    ],
  },

  {
    slug: "home-service-robot",
    title: "Home Service Robot (Prototype)",
    subtitle: "Autonomy-oriented integration: sensing + planning + control",
    year: "2025",
    tier: 2,
    tags: ["Robotics", "Autonomy", "Integration"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },

    problem:
      "Build a small robot system that can sense, decide, and act reliably in a home-like environment.",
    approach: [
      "Defined a minimal autonomy stack (sense → plan → act)",
      "Built integration paths for sensors and control logic",
      "Focused on reliability and repeatable behaviors",
    ],
    results: [
      "Integrated prototype with a clear system breakdown",
      "Roadmap for robustness and feature expansion",
    ],
    bullets: [
      "System integration mindset (not just code)",
      "Repeatable behavior testing",
      "Autonomy workflow foundation",
    ],
  },

  // =========================
  // EXPLORATORY / WIP (Tier 3)
  // =========================
  {
    slug: "advanced-mechatronics",
    title: "Advanced Mechatronics Project (Planned)",
    subtitle: "Raspberry Pi system build (planned / in progress)",
    year: "2026",
    tier: 3,
    tags: ["Raspberry Pi", "Mechatronics", "Systems"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },

    problem:
      "Design a complete mechatronic system that can be demonstrated end-to-end.",
    approach: [
      "Pick a scope you can finish fast (sensor → controller → actuator)",
      "Document the stack: design, electronics, firmware, tests",
    ],
    results: ["In progress — will become a polished end-to-end writeup"],
    bullets: [
      "Planned full-stack build with clear deliverables",
      "Focus on demonstrable outcome + documentation",
    ],
  },

  {
    slug: "ml-modeling",
    title: "ML Modeling Projects",
    subtitle: "Applied modeling work from GitHub",
    year: "2023–2025",
    tier: 3,
    tags: ["ML", "Python", "Modeling"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },

    problem: "Build practical models and evaluate performance with clear metrics.",
    approach: [
      "Clean datasets and define evaluation metrics",
      "Iterate models and compare baselines",
      "Communicate results clearly (plots + takeaways)",
    ],
    results: ["Documented ML experiments and repos on GitHub"],
    bullets: ["Metric-driven evaluation", "Baselines + iteration", "Clear reporting"],
  },

  {
    slug: "missile-analysis",
    title: "High-Speed Missile Analysis (Research Work)",
    subtitle: "Modeling/analysis with engineering reporting",
    year: "2022–2023",
    tier: 3,
    tags: ["Analysis", "Modeling", "Research"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },

    problem:
      "Analyze high-speed dynamics with defensible assumptions and clear outputs.",
    approach: [
      "Structured assumptions, equations, and validation steps",
      "Produced plots and summaries for engineering readability",
    ],
    results: ["Research-style writeup and analysis workflow"],
    bullets: ["Structured modeling + reporting", "Engineering documentation"],
  },

  {
    slug: "middle-monkey",
    title: "Middle Monkey (WIP)",
    subtitle: "Ongoing build — documenting progress publicly",
    year: "2026",
    tier: 3,
    tags: ["WIP", "Robotics", "Systems"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },

    problem: "Ship measurable progress and a clean story while building in public.",
    approach: ["Weekly progress checkpoints", "Document decisions + failures + fixes"],
    results: ["In progress — will evolve into a polished project page"],
    bullets: ["Work-in-progress with public documentation", "Iteration + learning captured"],
  },
];
