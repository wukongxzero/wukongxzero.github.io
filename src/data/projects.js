// projects.js
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

    hero: "/projects/articulus/Articulus.jpg",

    links: {
      website: "https://www.articulussurgical.com",
      github: "",
      video: "",
    },

    robotName: "Pulsar",
    architectureName: "Cosmos",
    architectureNote:
      "Pulsar is the surgical robotic platform. Cosmos is the real-time control and communication architecture I designed and implemented to run it.",

    role:
      "Lead Robotics Software Engineer — Architect of Cosmos (Reporting to CEO)",

    roleDescription:
      "Worked directly under the CEO to design and deliver Cosmos, the real-time control and communication architecture powering the Pulsar surgical robot. Acted as technical lead across robotics software, coordinating execution with control architects, computer vision engineers, and electronics/hardware teams. Owned system-level decisions, software execution, and integration required to bring the platform from development to validated demos.",

    systemOverview:
      "Cosmos is a real-time control and communication architecture for multi-DOF teleoperated surgical robots such as Pulsar. It supports deterministic tool-frame motion (RPY + insertion), dynamic instrument swaps, safety-aware state gating, and low-latency teleoperation under strict timing and reliability constraints. The software architecture was designed with medical device software lifecycle expectations (ISO 62304) and relevant IEC electronics standards in mind.",

    confidentialityNote:
      "This page shows representative architecture only. Details are generalized to respect confidentiality.",

    problem:
      "Architect deterministic real-time control and communication pipelines for a multi-DOF surgical robotics platform, supporting tool-frame orientation and insertion control (RPY + linear tool-axis motion), dynamic instrument swaps, teleoperated micro/macro motion, and safety-aware behavior aligned with medical device software and electronics standards.",

    gallery: [
  {
    title: "Cosmos Software Architecture (Representative)",
    src: "/projects/articulus/SoftwareArchitecture.jpg",
    caption:
      "High-level Cosmos control and communication architecture (representative and non-proprietary).",
  },
  {
    title: "Tool-Frame Motion Abstraction",
    src: "/projects/articulus/tool-frame.png",
    caption:
      "Tool-frame control abstraction supporting Roll/Pitch/Yaw orientation and linear insertion along the tool axis.",
  },
  {
    title: "Instrument Swap & Lifecycle Handling",
    src: "/projects/articulus/tool-swap.png",
    caption:
      "Instrument lifecycle handling: identification, parameter loading, limits update, and safe re-enable during tool swaps.",
    },
  {
    title: "Safety & Limits Management",
    src: "/projects/articulus/safety-limits.png",
    caption:
      "Layered safety model with limits enforcement, fault monitoring, and predictable recovery paths.",
  },
  {
    title: "NASSCOM Design and Engineering summit",
    src: "/projects/articulus/Nasscom.png",
    caption:
      "Layered safety model with limits enforcement, fault monitoring, and predictable recovery paths.",
  },
  
  ],


    approach: [
      "Architected Cosmos’ core real-time pipeline: feedback ingestion → synchronized control loops → deterministic actuation",
      "Designed multithreaded execution models with explicit scheduling and timing guarantees",
      "Integrated DDS middleware (Cyclone DDS, Fast DDS) for low-latency, reliable communication across robotic subsystems",
      "Designed software structures aligned with ISO 62304 medical device lifecycle expectations",
      "Implemented safety and constraint handling: limits, saturation, fault responses, standards-aware workflows",
      "Built tool-frame motion control (RPY + insertion) and integrated FK/IK into teleoperation pipelines",
      "Designed instrument lifecycle handling: identification, frame updates, safety re-initialization",
      "Built observability tooling: high-rate logging and dashboards for bring-up, debugging, and validation",
    ],

    decisions: [
      {
        title: "Deterministic execution",
        detail:
          "Explicit real-time scheduling boundaries to reduce jitter and simplify debugging.",
      },
      {
        title: "DDS middleware selection",
        detail:
          "Worked with Cyclone DDS and Fast DDS to balance latency, reliability, and configurability for real-time surgical robotics workloads.",
      },
      {
        title: "Safety gating and recovery",
        detail:
          "State-driven enable/disable logic with predictable fault recovery paths.",
      },
    ],

    ownership: [
      "Architecture ownership of Cosmos scheduling, determinism, and loop timing",
      "Direct collaboration with CEO on software strategy and delivery priorities",
      "Technical leadership across control architecture, computer vision, electronics, and hardware teams",
      "Designed software workflows aligned with ISO 62304 expectations",
      "Teleoperation behavior + tool-frame motion pipeline",
      "Safety constraints, fault responses, and lifecycle re-initialization",
      "Observability tooling for validation and live demos",
    ],

    results: [
      "~1–3 ms control-cycle compute budget under RT scheduling",
      "~22–26 ms end-to-end command → motion latency",
      "Safe dynamic instrument swaps without loss of control continuity",
      "Faster bring-up and debugging through integrated observability tooling",
    ],

    bullets: [
      "Led robotics software execution under the CEO, architecting Cosmos for real-time control, communication, and safety-aware motion",
      "Designed software aligned with ISO 62304 medical device lifecycle expectations and IEC electronics standards",
      "Integrated DDS middleware (Cyclone DDS, Fast DDS) across distributed robotic subsystems",
      "Served as technical integrator across control, computer vision, and hardware teams",
      "Built deterministic multithreaded execution, teleoperation behaviors, and tool-frame motion",
    ],
  },

  // =========================
  // SELECTED (Tier 2)
  // =========================
  {
    slug: "sae-baja",
    title: "SAE BAJA — Captain,Suspension & Vehicle Dynamics (Gas Monkeys Racing)",
    subtitle:
      "Suspension design, vehicle dynamics leadership, and test-driven tuning across BAJA ATV and kart platforms",
    year: "2019–2023",
    tier: 2,
    tags: [
      "Vehicle Dynamics",
      "Suspension",
      "DFMEA",
      "Testing",
      "Manufacturing",
      "Leadership",
    ],
    hero: "/projects/baja/Buggysolo.png",
    // video: {
    // src: "/projects/baja/eventvideo.mp4",
    // poster: "/projects/baja/Buggysolo.png", // pick any image as thumbnail
    // },


    problem:
      "Design and tune suspension systems that balance handling, durability, and manufacturability under competition constraints.",
    
    gallery: [
  { src: "/projects/baja/buggysolo2.png" },
  { src: "/projects/baja/Differentials.png" },
  { src: "/projects/baja/Engine.jpg" },
  { src: "/projects/baja/rollcage.jpg" },
  { src: "/projects/baja/Tigwelding.jpg" },
  { src: "/projects/baja/Teamworkingonthebuggy.jpeg" },
  { src: "/projects/baja/Teampicture.png" },
  { src: "/projects/baja/Teamgoingtotheeventsite.png" },

  { src: "/projects/baja/Eventpits.jpeg" },
  { src: "/projects/baja/wd40.avif" },
  {
    src: "/projects/baja/eventvideo.mp4",
    type: "video",
    poster: "/projects/baja/Buggysolo.png",
  },
  ],


    systemOverview:
      "Gas Monkeys Racing competed in SAE BAJA 2021, MEGA-ATV, and karting events. I worked across multiple vehicle generations with primary ownership of suspension systems and vehicle dynamics decisions.",

    approach: [
      "Defined suspension geometry and dynamics targets using Lotus Shark,MATLAB and Milliken vehicle dynamics principles",
      "Applied DFMEA-style risk analysis to identify and mitigate high-risk suspension failure modes",
      "Iterated designs based on field testing, driver feedback, and manufacturability constraints",
      "Used Asana to track issues, design decisions, and cross-functional progress",
    ],

    riskAnalysis: {
      title: "Risk & Failure Analysis (DFMEA)",
      points: [
        "Identified critical failure modes: joint failure, bracket deformation, misalignment, fastener loosening",
        "Prioritized risks by severity, likelihood, and detectability",
        "Drove design changes and test cases to mitigate high-risk items",
        "Updated assumptions based on real field failures and test feedback",
      ],
    },

    tooling: {
      title: "Tooling & Workflow",
      items: [
        "Lotus Shark — suspension geometry analysis",
        "Milliken Race Car Vehicle Dynamics — handling and stability modeling",
        "DFMEA — structured failure-mode prioritization",
        "Asana — project and issue tracking",
        "CAD + fabrication workflows",
      ],
    },

    results: [
      "Delivered suspension systems validated through iterative field testing across multiple vehicle builds",
      "Contributed to 2 SAE BAJA vehicle builds and supported 1 kart platform",
      "Developed strong dynamics intuition transferable to robotics systems",
    ],

    bullets: [
      "Vehicle Dynamics Head at Gas Monkeys Racing; led suspension tuning and dynamics decisions",
      "Co-Captain & Head of Suspension; owned suspension design and mentored ~20 members",
      "Applied DFMEA-driven risk analysis to suspension design and testing",
      "Used physics-based modeling and field testing to converge on reliable vehicle behavior",
    ],
  },

 {
  slug: "mujoco-simulation",
  title: "MuJoCo UR10e — Kinematics & Control + Mid-Air Intercept",
  subtitle:
    "FK/IK + Jacobian-based velocity kinematics in MuJoCo, plus offline torque planning for a mid-air 'Fruit Ninja' intercept task",
  year: "2025",
  tier: 2,
  tags: [
    "MuJoCo",
    "Python",
    "UR10e",
    "Kinematics",
    "FK/IK",
    "Jacobian",
    "Control",
    "Planning",
    "Torque Control",
  ],

  // Pick your cleanest overall gif frame/screenshot later
  hero: "/projects/mujoco/robot_dynamics_simulation (4).gif",
  heroFit: "cover",

  links: {
    github: "", // optional
    video: "",  // optional (youtube/drive)
    // Optional: host PDFs publicly by putting them in /public/projects/mujoco/
    // and then using a normal link button (requires slug.astro to render extra buttons
    // if you want a dedicated "Report" button; otherwise you can leave these out)
    // reportKinematics: "/projects/mujoco/UR10e_Report_Section.pdf",
    // reportFruit: "/projects/mujoco/Extra-Credit-Report_Pavan_Kushal_Velagaleti.pdf",
  },

  confidentialityNote: "",

  // This is the “two pillars” story in one paragraph.
  systemOverview:
    "Two-part MuJoCo UR10e simulation project: (1) a kinematics/control suite implementing DH forward kinematics, numerical inverse kinematics, Jacobian-based forward velocity kinematics, and pseudoinverse inverse velocity kinematics; and (2) a 'Fruit Ninja' mid-air interception task solved via offline torque planning with open-loop torque replay under fixed simulation constraints.",

  problem:
    "Build a UR10e simulation workflow that is both (a) mathematically correct for kinematics/velocity kinematics, and (b) realistic under constraints when executing a dynamic interception task using offline, open-loop torque replay.",

  approach: [
    // --- Part A: FK/IK/Jacobian ---
    "Forward kinematics using standard DH formulation and multiplying six joint transforms to get base→end-effector pose",
    "Inverse kinematics (position) using a numerical nonlinear solver (scipy.optimize.least_squares) with multiple initial guesses for convergence",
    "Forward velocity kinematics using the linear part of the geometric Jacobian (3×6) to map joint rates → end-effector linear velocity",
    "Inverse velocity kinematics using the Jacobian pseudoinverse to obtain minimum-norm joint velocities for desired end-effector velocities",

    // --- Part B: Fruit Ninja / Mid-air intercept ---
    "Offline torque planning in MuJoCo: predicted fruit trajectories with a ballistic model under gravity, selected intercept points, and generated torques offline",
    "Task-space PD mapped to joint torques via Jacobian transpose, replayed open-loop during execution",
    "Improved robustness by arriving slightly early at intercept points and holding position; prevented retargeting already-intercepted fruits; aligned offline rollout timing with execution timing",
  ],

  decisions: [
    {
      title: "Numerical IK over analytic IK",
      detail:
        "Used least-squares numerical IK (analytic IK is long and not required); multiple initial guesses improved convergence.",
    },
    {
      title: "Jacobian methods for velocity kinematics",
      detail:
        "Used the geometric Jacobian for forward velocity kinematics and pseudoinverse for minimum-norm inverse velocity solutions in a redundant 3×6 setup.",
    },
    {
      title: "Robustness strategy for open-loop torque replay",
      detail:
        "Open-loop replay is timing-sensitive, so the planner biases early-arrival + hold rather than perfect tracking at a single instant.",
    },
  ],

  ownership: [
    "DH FK implementation and validation against MuJoCo behavior",
    "Numerical IK pipeline (least-squares) and convergence strategy (multiple initial guesses)",
    "Jacobian computation and velocity kinematics (forward + pseudoinverse inverse)",
    "Offline planner for torque generation + execution alignment for the interception task",
    "Jupyter-based reporting, plots, and experiment documentation",
  ],

  results: [
    "FK matched MuJoCo simulation accurately; numerical IK reached most random targets reliably.",
    "Velocity predictions matched simulated motion; pseudoinverse behaved as expected including near singularities.",
    "For the interception task: all fruits spawned within the fixed simulation window were successfully intercepted (6 spawned during runtime).",
  ],

  bullets: [
    "DH FK + numerical IK (least_squares) validated against MuJoCo",
    "Jacobian velocity kinematics + pseudoinverse inverse velocity (minimum-norm)",
    "Offline torque planning for mid-air intercept with open-loop torque replay and timing-robust strategy",
  ],

  // ===== Gallery (5 GIFs) =====
  // Rename these filenames to match yours exactly.
  gallery: [
    {
      title: "FK Validation in MuJoCo",
      src: "/projects/mujoco/ur10e_FK_position (1).gif",
      caption: "Forward kinematics consistency check against MuJoCo visualization.",
    },
    {
      title: "Numerical IK Reaching Targets",
      src: "/projects/mujoco/ur10e_FK_velocity (1).gif",
      caption: "Numerical IK (least_squares) reaching random targets with improved convergence.",
    },
    {
      title: "Jacobian Velocity Kinematics",
      src: "/projects/mujoco/ur10e_IK_position (1).gif",
      caption: "End-effector velocity from joint velocities using Jacobian.",
    },
    {
      title: "Inverse Velocity via Pseudoinverse",
      src: "/projects/mujoco/ur10e_IK_velocity (1).gif",
      caption: "Minimum-norm joint velocities using Jacobian pseudoinverse (3×6 redundancy).",
    },
    {
      title: "Fruit Ninja — Mid-Air Intercept",
      src: "/projects/mujoco/robot_dynamics_simulation (4).gif",
      caption: "Offline torque planning + open-loop replay; timing-robust early-arrival + hold strategy.",
    },
  ],
},


  {
    slug: "ex-hand",
    title: "Vision-Based Gesture-Controlled Robotic Finger",
    subtitle: "Perception → control → embedded actuation (mechatronics prototype)",
    year: "2025",
    tier: 2,
    tags: ["Embedded", "Control", "Vision", "Mechatronics"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },
  },

  {
    slug: "pixhawk-px4",
    title: "Autopilot Integration & Control using PX4",
    subtitle: "SITL-based exploration of flight control and system behavior",
    year: "2025",
    tier: 2,
    tags: ["PX4", "Embedded", "Control", "Autonomy"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },
  },

  {
    slug: "home-service-robot",
    title: "Home Service Robot (Prototype)",
    subtitle: "Autonomy-oriented integration: sensing, planning, and control",
    year: "2025",
    tier: 2,
    tags: ["Robotics", "Autonomy", "Integration"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },
  },

  // =========================
  // EXPLORATORY (Tier 3)
  // =========================
  {
    slug: "ml-modeling",
    title: "ML Modeling Projects",
    subtitle: "Applied modeling experiments with clear evaluation metrics",
    year: "2023–2025",
    tier: 3,
    tags: ["ML", "Python", "Modeling"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },
  },

  {
    slug: "missile-analysis",
    title: "High-Speed Missile Analysis (Research Work)",
    subtitle: "Dynamics modeling and engineering analysis",
    year: "2022–2023",
    tier: 3,
    tags: ["Analysis", "Modeling", "Research"],
    hero: "/projects/_placeholder/hero.jpg",
    links: { github: "", video: "" },
  },
];
