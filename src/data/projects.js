export const projects = [
   {
    slug: "articulus-surgical-robotics",
    title: "Articulus Surgical Robotics",
    subtitle:
      "Real-time control, teleoperation, and safety-aware motion for surgical robotic systems",
    year: "2023–2025",
    tier: 1,
    tags: [
      "C++",
      "Real-time",
      "Control",
      "Systems",
      "Surgical Robotics",
      "DDS",
      "Teleoperation",
    ],

    // Used by cards / lists (project detail page no longer shows hero)
    hero: "/projects/articulus/Articulus.jpg",

    links: { github: "", video: "" },

    problem:
      "Architect deterministic real-time control and communication pipelines for a multi-DOF surgical robotics platform, supporting tool-frame orientation and insertion control (RPY + linear tool-axis motion), dynamic instrument swaps, teleoperated micro/macro motion, and safety-aware behavior aligned with applicable ISO standards.",

    gallery: [
      {
        title: "Tool-Frame Motion & Orientation",
        src: "/projects/articulus/tool-frame.png",
        caption:
          "Representative tool-frame control: Roll/Pitch/Yaw orientation control and linear insertion along the tool axis.",
        group: "articulus-diagrams",
      },
      {
        title: "Tool Swap / Instrument Lifecycle",
        src: "/projects/articulus/tool-swap.png",
        caption:
          "State flow for tool attach/identify, parameter load, limit updates, and safely re-enabling control after a swap.",
        group: "articulus-diagrams",
      },
      {
        title: "Safety & Limits Management",
        src: "/projects/articulus/safety-limits.png",
        caption:
          "Layered safety concept: software-defined soft limits + fault monitoring + hardware-enforced hard limits / shutdown paths.",
        group: "articulus-diagrams",
      },

      {
        title: "System Architecture (Representative)",
        src: "/projects/articulus/SoftwareArchitecture.jpg",
        caption:
          "High-level control + communication architecture (representative; non-proprietary).",
      },
      {
        title: "Bring-up / Debug Context",
        src: "/projects/articulus/workflow.jpg",
        caption: "Personal workspace photo.",
      },
    ],

    approach: [
      "Architected and implemented the core real-time software pipeline spanning encoder feedback ingestion, synchronized control and planning loops, and deterministic actuator command execution",
      "Designed multithreaded real-time execution models with explicit scheduling and timing guarantees for control, communication, and monitoring tasks",
      "Integrated DDS-based communication for low-latency, reliable data exchange between distributed robotic components",
      "Implemented safety and constraint handling (hard limits, soft limits, saturation, fault responses) informed by applicable ISO and medical robotics safety standards",
      "Designed coordinated motion strategies supporting teleoperated micro- and macro-scale movements on a multi-axis robotic system",
      "Implemented tool-frame motion control supporting roll, pitch, yaw orientation and linear insertion along the tool axis",
      "Integrated kinematics (FK/IK) into teleoperation, instrument tracking, and trajectory execution workflows",
      "Designed and tuned PID-based joint controllers for stable tracking under real hardware constraints",
      "Integrated instrument tracking into the real-time control pipeline for tool-aware motion, safety enforcement, and operator feedback",
      "Designed tool lifecycle handling for dynamic instrument attachment and swap events, including tool identification, frame updates, safety re-initialization, and control pipeline reconfiguration",
      "Developed observability tooling including high-frequency data logging and IMGUI-based dashboards for bring-up, debugging, and validation",
    ],

    results: [
      "Predictable, deterministic system behavior during demos and validation",
      "Safe handling of dynamic tool swaps without loss of control or teleoperation continuity",
      "Improved bring-up and debug cycles through integrated logging and visualization tools",
      "Reduced hardware risk through simulation-first validation and staged deployment",
    ],

    bullets: [
      "End-to-end ownership of real-time control, communication, and safety-aware motion pipelines for surgical robotics",
      "Multi-DOF coordinated motion with micro/macro motion decomposition under teleoperation",
      "Tool-frame motion control supporting RPY orientation and linear tool-axis insertion",
      "Dynamic instrument tracking and tool swap handling with safe pipeline re-initialization",
      "Deterministic multithreaded execution with explicit real-time scheduling guarantees",
      "DDS-based low-latency communication across distributed robotic subsystems",
      "Standards-aware development aligned with applicable ISO safety requirements",
    ],
  },

  {
    slug: "sae-baja",
    title: "SAE BAJA (Team / Vehicle Build)",
    subtitle: "End-to-end mechanical + systems work under competition constraints",
    year: "2021–2023",
    tier: 1,
    tags: ["Systems", "Design", "Testing", "Leadership"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },
    problem:
      "Deliver a working vehicle system under timeline, cost, and reliability constraints.",
    approach: [
      "Owned subsystem-level design decisions and integration planning",
      "Iterated through build → test → failure → fix loops",
      "Documented and communicated engineering tradeoffs to the team",
    ],
    results: [
      "A competition-ready build with field testing and iteration cycles",
      "Stronger system-level thinking: integration, reliability, debugging",
    ],
    bullets: [
      "Subsystem integration and build-test iteration cycles",
      "Engineering tradeoffs under real constraints (time/cost/reliability)",
      "Team communication + execution pressure experience",
    ],
  },

  {
    slug: "mujoco-simulation",
    title: "MuJoCo Manipulation Simulation",
    subtitle: "Torque control, tracking, and task design in simulation",
    year: "2025",
    tier: 1,
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
      "Stable tracking demos with repeatable evaluation setup",
      "Clear controller tuning workflow + failure mode understanding",
    ],
    bullets: [
      "Controller implementation + tuning workflow",
      "Task environments and evaluation scripts",
      "Stability and performance tradeoff analysis",
    ],
  },

  {
    slug: "ex-hand",
    title: "Ex-Hand / Gesture-Controlled Hand (Build)",
    subtitle: "Vision/gesture → commands → embedded actuation",
    year: "2025",
    tier: 2,
    tags: ["Embedded", "Control", "Computer Vision", "Mechatronics"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },
    problem:
      "Convert human hand motion into smooth, stable actuator commands for a robotic mechanism.",
    approach: [
      "Used vision/gesture signals to generate reference commands",
      "Implemented feedback control + safety constraints",
      "Iterated mechanical transmission + firmware integration",
    ],
    results: [
      "Working prototype loop: perception → command → actuation",
      "Improved stability through filtering + controller tuning",
    ],
    bullets: [
      "Perception-to-control command pipeline",
      "Embedded integration + feedback control",
      "Mechanical + firmware iteration for reliability",
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
      "Integrated prototype with structured system breakdown",
      "Clear roadmap for expansion and robustness",
    ],
    bullets: [
      "System integration mindset (not just code)",
      "Repeatable behavior testing",
      "Autonomy workflow foundation",
    ],
  },

  {
    slug: "pixhawk-px4",
    title: "Pixhawk + PX4 Development",
    subtitle: "Autopilot stack exploration and control integration",
    year: "2025",
    tier: 2,
    tags: ["PX4", "Embedded", "Control", "Autonomy"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },
    problem:
      "Learn and extend an autopilot stack with a focus on control + system behavior.",
    approach: [
      "Studied PX4 architecture and module structure",
      "Ran simulations / SITL workflows and parameter tuning",
      "Designed small extensions for data capture and behavior checks",
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
    slug: "advanced-mechatronics",
    title: "Advanced Mechatronics Project (Planned)",
    subtitle: "Raspberry Pi system build (planned / in progress)",
    year: "2026",
    tier: 3,
    tags: ["Raspberry Pi", "Mechatronics", "Systems"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },
    problem: "Design a complete mechatronic system that can be demonstrated end-to-end.",
    approach: [
      "Pick a scope you can finish fast (sensor → controller → actuator)",
      "Document the full stack: design, electronics, firmware, tests",
    ],
    results: ["In progress — will become a polished end-to-end build writeup"],
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
      "Iterate models and baseline comparisons",
      "Communicate results clearly (plots + takeaways)",
    ],
    results: ["Documented ML experiments and repos on GitHub"],
    bullets: ["Metric-driven evaluation", "Baselines + iteration mindset", "Clear reporting of results"],
  },

  {
    slug: "missile-analysis",
    title: "High-Speed Missile Analysis (Research Work)",
    subtitle: "Modeling/analysis work with engineering reporting",
    year: "2022–2023",
    tier: 3,
    tags: ["Analysis", "Modeling", "Research"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },
    problem: "Analyze high-speed dynamics with defensible assumptions and clear outputs.",
    approach: ["Structured assumptions, equations, and validation steps", "Produced plots / summaries for engineering readability"],
    results: ["Research-style writeup and analysis workflow"],
    bullets: ["Structured modeling + reporting", "Engineering-style documentation"],
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
    problem: "An ongoing build where the goal is to ship measurable progress and a clean story.",
    approach: ["Weekly progress checkpoints", "Document decisions + failures + fixes"],
    results: ["In progress — will evolve into a polished project page"],
    bullets: ["Work-in-progress with public documentation", "Iteration + learning captured cleanly"],
  },
];
