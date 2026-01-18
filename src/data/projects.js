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

  tags: [
    "C++",
    "Real-time",
    "Control",
    "Motor Control",
    "BLDC",
    "FOC",
    "FPGA",
    "ODrive",
    "mjbots moteus",
    "DDS",
    "Safety",
    "Systems",
  ],

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
    "Worked directly under the CEO to design and deliver Cosmos, the real-time control and communication architecture powering the Pulsar surgical robot. Acted as technical lead across robotics software, coordinating execution with control architects, computer vision engineers, and electronics/hardware teams. Owned system-level decisions, software execution, and hardware–software integration required to bring the platform from development to validated demos.",

  systemOverview:
    "Cosmos is a real-time control and communication architecture for multi-DOF teleoperated surgical robots such as Pulsar. It supports deterministic tool-frame motion (RPY + insertion), dynamic instrument swaps, safety-aware state gating, and low-latency teleoperation under strict timing and reliability constraints. The architecture spans high-level teleoperation and kinematics down to FPGA-backed BLDC motor control, integrating commercial motor-control platforms such as ODrive and mjbots moteus for deterministic actuation, closed-loop stability, and fault-safe behavior. The software was designed with medical device software lifecycle expectations (ISO 62304) and relevant IEC electronics standards in mind.",

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
      title: "NASSCOM Design and Engineering Summit",
      src: "/projects/articulus/Nasscom.png",
      caption:
        "Public demonstration of the Pulsar surgical robotic system and Cosmos control architecture.",
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
    "Designed and tuned BLDC motor control loops (current, velocity, position) using FOC for surgical manipulators",
    "Integrated and validated commercial BLDC motor controllers (e.g., ODrive, mjbots moteus) within a real-time surgical control architecture.",
    "Developed FPGA-based real-time motor-control and IO pipelines (PWM generation, encoder decoding, safety interlocks)",
    "Integrated FPGA and motor-controller actuation paths with Cosmos’ real-time C++ control stack, debugging jitter, race conditions, and timing faults across hardware–software boundaries",
  ],

  decisions: [
    {
      title: "Deterministic execution",
      detail:
        "Explicit real-time scheduling boundaries to reduce jitter and simplify debugging across control and actuation layers.",
    },
    {
      title: "Motor controller selection and abstraction",
      detail:
        "Evaluated and integrated ODrive and mjbots moteus to balance performance, observability, and safety, while abstracting actuation behind Cosmos’ real-time control interfaces.",
    },
    {
      title: "Safety gating and recovery",
      detail:
        "State-driven enable/disable logic with predictable fault recovery paths spanning software, FPGA IO, and motor controllers.",
    },
  ],

  ownership: [
    "Architecture ownership of Cosmos scheduling, determinism, and loop timing",
    "Direct collaboration with CEO on software strategy and delivery priorities",
    "Technical leadership across control architecture, computer vision, electronics, and hardware teams",
    "Designed software workflows aligned with ISO 62304 expectations",
    "Teleoperation behavior and tool-frame motion pipelines",
    "Ownership of BLDC motor control behavior, tuning, and closed-loop performance",
    "Integration and validation of ODrive and mjbots moteus motor controllers",
    "FPGA-based real-time IO, motor actuation pipelines, and safety interlocks",
    "Safety constraints, fault responses, and lifecycle re-initialization",
    "Observability tooling for validation and live demos",
  ],

  results: [
    "~1–3 ms control-cycle compute budget under RT scheduling",
    "~22–26 ms end-to-end command → motion latency",
    "Stable closed-loop BLDC actuation using ODrive and mjbots moteus under deterministic real-time constraints",
    "Safe dynamic instrument swaps without loss of control continuity",
    "Faster bring-up and debugging through integrated observability tooling",
  ],

  bullets: [
    "Led robotics software execution under the CEO, architecting Cosmos for real-time control, communication, and safety-aware motion",
    "Designed software aligned with ISO 62304 medical device lifecycle expectations and IEC electronics standards",
    "Integrated DDS middleware (Cyclone DDS, Fast DDS) across distributed robotic subsystems",
    "Served as technical integrator across control, computer vision, electronics, and hardware teams",
    "Built deterministic multithreaded execution, teleoperation behaviors, tool-frame motion, and FPGA-backed BLDC motor control pipelines",
    "Integrated and validated ODrive and mjbots moteus motor controllers for closed-loop surgical actuation",
    "Designed and validated real-time motor control and actuation paths critical to surgical motion fidelity and safety",
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
  title: "Vision based— Gesture-Controlled Robotic Finger",
  subtitle:
    "Vision-based human-in-the-loop control: MediaPipe gesture → reference mapping → encoder PD → tendon-driven actuation",
  year: "2025",
  tier: 2,
  tags: [
    "Mechatronics",
    "Control",
    "Embedded",
    "Computer Vision",
    "Arduino",
    "DC Motor",
    "Encoder",
    "MATLAB/Simulink",
  ],

  hero: "/projects/exhand/Mediapipe.gif",
  heroFit: "contain",

  links: { github: "", video: "" },

  systemOverview:
    "Built a single-DOF robotic finger that tracks a human finger gesture in real time. A monocular webcam + MediaPipe estimates finger flexion, filters the signal (low-pass + deadband), maps it to a motor reference, and sends commands over serial to an Arduino. The Arduino closes the loop using rotary encoder feedback and a PD controller to drive a DC motor through an H-bridge, actuating a tendon/spool mechanism with elastic return for extension.",

  problem:
    "Translate noisy vision-based finger motion into smooth, stable actuator commands for a tendon-driven finger—while maintaining real-time behavior, safe bounds, and reliable tracking with motor-side encoder feedback.",

  approach: [
    // Perception → reference
    "Used a webcam + MediaPipe to track 21 hand landmarks and estimate finger bend using inter-segment angles (dot-product geometry).",
    "Applied signal conditioning (low-pass smoothing + deadband) to suppress jitter and prevent actuator chatter.",
    "Mapped filtered finger angle to a motor reference angle with scaling + saturation to respect mechanical/electrical limits.",

    // Embedded control
    "Implemented a lightweight Arduino firmware loop: receive reference via UART (115200), read encoder, compute error, set motor direction + PWM through an H-bridge.",
    "Added embedded safety constraints: PWM saturation, reference bounds, and a serial timeout fail-safe.",

    // Modeling + validation
    "Derived a SISO electromechanical plant model for the DC motor + transmission and designed a PD controller for stable tracking.",
    "Validated control behavior in MATLAB/Simulink before hardware testing (closed-loop step response + Bode analysis).",
  ],

  decisions: [
    {
      title: "DC motor + encoder over hobby servo",
      detail:
        "A servo was evaluated early but lacked torque for tendon friction/elastic load; the final design uses a DC motor with rotary encoder feedback for controllable torque and closed-loop position tracking.",
    },
    {
      title: "Filter + deadband to stabilize vision control",
      detail:
        "Vision-based angle estimates are noisy; smoothing and a deadband prevent high-frequency jitter from becoming motor chatter.",
    },
    {
      title: "Partition compute: vision on host, control on MCU",
      detail:
        "Vision processing stays on the PC; Arduino handles deterministic low-level control for reliability under serial timing variability.",
    },
  ],

  ownership: [
    "System integration: vision → reference generation → serial protocol → embedded control → electromechanical actuation",
    "Encoder processing and motor position estimation from counts-per-rev conversion",
    "PD controller implementation + stability-focused tuning for tendon compliance",
    "Hardware iteration: tendon routing, spool/encoder alignment, mechanical guards + return mechanism",
  ],

  results: [
    "Achieved stable, damped closed-loop tracking of gesture-derived reference commands with noise suppression and safety constraints.",
    "Demonstrated a complete end-to-end pipeline: perception → reference → embedded control → mechanical motion.",
    "Produced a full engineering report with modeling + Simulink validation prior to hardware execution.",
  ],

  bullets: [
    "MediaPipe gesture sensing → filtered reference mapping → Arduino PD control with encoder feedback",
    "DC motor + H-bridge actuation of tendon/spool finger with elastic return + mechanical safeguards",
    "Modeled SISO plant and validated controller stability in MATLAB/Simulink before hardware tests",
  ],

  // Add your images/GIFs into /public/projects/exhand/
  // If you don't have them yet, keep placeholders and update filenames later.
  gallery: [
  {
    title: "System Architecture",
    src: "/projects/exhand/Systemarchitecture.png",
    caption:
      "End-to-end pipeline: camera input → hand tracking → finger angle estimation → Arduino-based control → DC motor actuation with encoder feedback.",
  },
  {
    title: "Hand Tracking with MediaPipe",
    src: "/projects/exhand/Mediapipe.gif",
    caption:
      "MediaPipe hand landmark detection used to extract finger joint positions in real time.",
  },
  {
    title: "Finger Angle Estimation",
    src: "/projects/exhand/Fingerangle_estimation.png",
    caption:
      "Geometric computation of finger bend angle from tracked hand landmarks, used as the control reference.",
  },
  {
    title: "Bench-Tested Robotic Finger Prototype",
    src: "/projects/exhand/finger.png",
    caption:
      "Single-DOF tendon-driven robotic finger with DC motor actuation and encoder feedback, tested on the bench.",
  },
  {
    title: "Control System Design (Simulink)",
    src: "/projects/exhand/Simulink.png",
    caption:
      "Simulink model used to design and validate the closed-loop PD controller before hardware deployment.",
  },
  {
    src: "/projects/exhand/demo.mp4",
    type: "video",
    poster: "/projects/baja/Mediapipe.png",
  },
],
},


  {
  slug: "ros2-px4-offboard-autonomy",
  title: "ROS 2 + PX4 Offboard Autonomy",
  subtitle:
    "Vision-guided offboard control using ROS 2, PX4 SITL, and ArUco-based mission logic",
  year: "2025",
  tier: 2,
  tags: [
    "PX4",
    "ROS 2",
    "Autonomy",
    "Offboard Control",
    "Computer Vision",
    "ArUco",
    "Robotics Systems",
    "SITL",
  ],

  hero: "/projects/px4/px4_sitl.png", // optional later (QGC / Gazebo / RViz screenshot if you add one)
  links: {
    github: "https://github.com/wukongxzero/ros2-px4-spiral-aruco-waypoint-method",
  },

  systemOverview:
    "Developed a ROS 2–based offboard autonomy stack integrated with PX4 SITL to execute waypoint missions and vision-triggered behaviors. The system combines PX4 flight control with ROS 2 mission logic and ArUco marker detection to dynamically alter flight behavior during runtime, demonstrating middleware integration, autonomy logic, and perception-driven control.",

  problem:
    "Design an offboard autonomy workflow that allows high-level mission logic and vision-based triggers to influence PX4-controlled flight behavior, while maintaining stable low-level flight control and clean separation between autonomy and autopilot responsibilities.",

  approach: [
    "Set up PX4 SITL with Gazebo and QGroundControl for simulation-based development and testing.",
    "Implemented ROS 2 nodes for offboard control, waypoint publishing, and mission state management.",
    "Integrated PX4 offboard mode to accept position setpoints from ROS 2 at a fixed control rate.",
    "Used ArUco marker detection as a perception trigger to switch mission phases (e.g., waypoint update or spiral descent).",
    "Designed spiral and waypoint trajectories in ROS 2 rather than embedding mission logic inside PX4 firmware.",
    "Managed multi-process execution (PX4 SITL, ROS 2 nodes, vision pipeline) with clear startup and timing coordination.",
  ],

  decisions: [
    {
      title: "Offboard autonomy instead of PX4 firmware modification",
      detail:
        "Kept PX4 as a stable low-level flight controller while implementing mission logic in ROS 2 for flexibility, debuggability, and faster iteration.",
    },
    {
      title: "Vision as a mission trigger, not a control loop",
      detail:
        "Used ArUco detection to trigger discrete mission state changes rather than directly closing a visual servoing loop, improving robustness.",
    },
    {
      title: "Simulation-first development",
      detail:
        "Developed and validated mission logic entirely in PX4 SITL before considering hardware execution.",
    },
  ],

  ownership: [
    "PX4 SITL setup and configuration (Gazebo + QGroundControl).",
    "ROS 2 offboard control node design and implementation.",
    "Mission logic for waypoint navigation and spiral trajectories.",
    "Vision pipeline integration using ArUco markers.",
    "System-level debugging across PX4, ROS 2, and simulation tools.",
  ],

  results: [
    "Successfully executed offboard waypoint missions controlled entirely from ROS 2.",
    "Demonstrated vision-triggered mission transitions using ArUco marker detection.",
    "Validated a modular autonomy architecture separating perception, mission logic, and flight control.",
  ],

  bullets: [
    "Built ROS 2 offboard autonomy stack integrated with PX4 SITL",
    "Implemented waypoint and spiral mission logic driven by ArUco vision triggers",
    "Demonstrated clean separation between autonomy logic and PX4 flight control",
  ],

  // No gallery required — this project is architecture & systems focused
},


  {
  slug: "home-service-bot",
  title: "Home Service Robot — SLAM, Localization & Autonomous Delivery",
  subtitle:
    "ROS Noetic + Gazebo autonomy stack: RTAB-Map SLAM, AMCL localization, navigation, and simulated pickup/drop-off via markers",
  year: "2024–2025",
  tier: 2,
  tags: [
    "ROS (Noetic)",
    "Gazebo",
    "RViz",
    "SLAM",
    "RTAB-Map",
    "AMCL",
    "Navigation Stack",
    "Autonomy",
    "C++",
  ],

  hero: "/projects/home-robot/vid_homeservice_rviz_window.gif", // add later (Gazebo/RViz screenshot works great)
  heroFit: "cover",

  links: {
    github: "https://github.com/wukongxzero/home-service-bot",
    video: "", // optional later
  },

  systemOverview:
    "Built a simulated home-service delivery robot in Gazebo using a full ROS autonomy pipeline. The robot performs mapping (RTAB-Map RGB-D SLAM), localization (AMCL particle filter on a saved map), and autonomous navigation using the ROS Navigation Stack. A pickup-and-delivery task is simulated by navigating to a pickup zone, hiding a marker, then navigating to a drop-off zone and re-spawning the marker in RViz.",

  problem:
    "Create a mobile robot workflow that can (1) build or use a map, (2) localize reliably, and (3) navigate autonomously between task waypoints—then simulate a pickup/drop-off operation in a repeatable, testable way.",

  approach: [
    "Developed and tested on Ubuntu 20.04 with ROS Noetic, Gazebo, and RViz for simulation and visualization.",
    "Used RTAB-Map for RGB-D SLAM to generate a 3D map and validate loop-closures during mapping.",
    "Used map_server + AMCL (adaptive Monte Carlo localization) to localize the robot on a known map.",
    "Used the ROS Navigation Stack to plan and execute safe motion using costmaps and a local planner.",
    "Implemented the task as staged scripts: SLAM test, navigation test, pick_objects (autonomous goals), add_marker (marker hide/show), and a full home_service run.",
  ],

  decisions: [
    {
      title: "Leverage mature ROS autonomy packages",
      detail:
        "Used RTAB-Map, AMCL, and the Navigation Stack rather than re-implementing SLAM/localization from scratch, focusing effort on integration and system behavior.",
    },
    {
      title: "Scripted workflows for repeatability",
      detail:
        "Wrapped the pipeline into launch/scripts (test_slam, test_navigation, pick_objects, add_marker, home_service) to make runs consistent and easy to debug.",
    },
    {
      title: "Tune costmaps and planner parameters",
      detail:
        "Adjusted costmap and local planner YAML parameters (inflation, obstacle/raytrace range, planner limits) to achieve stable navigation behavior in the environment.",
    },
  ],

  ownership: [
    "Autonomy pipeline integration across mapping, localization, navigation, and task execution",
    "Launch/script orchestration for SLAM, navigation, and pickup/drop-off simulation runs",
    "Costmap and local planner parameter tuning for stable navigation",
    "End-to-end debugging using RViz (maps/markers) and ROS tools",
  ],

  results: [
    "Demonstrated a full autonomy workflow: SLAM → localization → navigation → simulated pickup/drop-off delivery task.",
    "Created repeatable run scripts for testing and a full mission execution flow.",
    "Validated navigation stability through costmap/planner parameter tuning.",
  ],

  bullets: [
    "Integrated RTAB-Map SLAM, AMCL localization, and ROS Navigation Stack in Gazebo",
    "Built a full delivery mission: navigate to pickup/drop-off zones + marker-based pickup simulation in RViz",
    "Packaged runs into repeatable scripts and tuned costmaps/planners for stable behavior",
  ],

  // Optional: add later when you capture screenshots
  gallery: [
  {
    title: "Gazebo Environment",
    src: "/projects/home-robot/gazebo_image.jpg",
    caption: "Robot navigating in the simulated indoor environment."
  },
  {
    title: "SLAM Visualization (RViz)",
    src: "/projects/home-robot/vid_homeservice_rviz_window.gif",
    caption: "Live RViz visualization during SLAM and navigation."
  },
  {
    title: "AMCL + Navigation",
    src: "/projects/home-robot/nav_sample.jpg",
    caption: "Localization and navigation stack driving autonomous motion."
  },
  {
    title: "Pickup / Drop-off Marker",
    src: "/projects/home-robot/add_marker_test.jpg",
    caption: "Marker hide/show simulating pickup and delivery in RViz."
  },
  {
    title: "Saved Map Output",
    src: "/projects/home-robot/saved_map.jpg",
    caption: "Generated occupancy grid map after SLAM."
  }
],

},


  // =========================
// TIER 3 — Research / WIP
// =========================

{
  slug: "ml-modeling",
  title: "ML Modeling Projects",
  subtitle: "Applied modeling experiments with clear evaluation metrics",
  year: "2023–2025",
  tier: 3,
  tags: ["Python", "Machine Learning", "Modeling"],
  hero: "/projects/ml/ML.png",
  links: { github: "https://github.com/wukongxzero" },

  systemOverview:
    "A collection of exploratory machine learning and learning-based control experiments focused on problem formulation, data pipelines, and quantitative evaluation. Emphasis is on modeling discipline and metrics rather than production ML systems.",

  approach: [
    "Customer Segmentation — clustering-based analysis with feature normalization and metric-driven evaluation",
    "Sign Language Detection (LSTM) — sequence modeling for temporal gesture classification and performance evaluation",
    "CartPole — learning-based control benchmark; reward shaping, convergence behavior, and stability tradeoffs",
    "Time Pilot — reward-driven decision-making in a simulated environment",
    "Autonomous Driving (Gym) — simulated driving behaviors using learning-based policies",
  ],
},

{
  slug: "missile-analysis",
  title: "Supersonic Jet Interaction — CFD Research (Publication)",
  subtitle: "Numerical exploration of sonic injection into supersonic crossflow (CFD / compressible flow)",
  year: "2022–2023",
  tier: 3,

  tags: ["CFD", "Compressible Flow", "Supersonic", "Numerical Methods", "Research"],

  // Use placeholder until you add a real image:
  hero: "/projects/missile/pressurecontour.png",
  // Or if you create one later:
  // hero: "/projects/missile-analysis/hero.jpg",

  links: {
    // Keep these links public + safe
    website:
      "https://www.semanticscholar.org/paper/Numerical-Exploration-of-Sonic-Injection-In-Cross-Boggarapu-Velagaleti/bf6faff9cbc64005bd8bc88c03d1b17e4bca523d",
    // If you want a PDF button later, drop the pdf into /public/projects/missile-analysis/
    // and then add:
    // report: "/projects/missile-analysis/paper.pdf",
  },

  systemOverview:
    "Co-authored a CFD research study investigating sonic jet injection into a supersonic crossflow. The work focuses on compressible-flow behavior and jet–crossflow interaction phenomena relevant to high-speed aerodynamic control and mixing problems.",

  problem:
    "Characterize how a transverse sonic jet interacts with a supersonic freestream and identify key flow features and trends using numerical simulation.",

  approach: [
    "Set up a numerical simulation workflow for compressible, high-speed flow conditions",
    "Studied jet–crossflow interaction behavior and resulting shock/flow structures in the simulation domain",
    "Analyzed flow-field outputs qualitatively and quantitatively to extract trends and engineering insights",
    "Documented methodology, assumptions, and findings in a publication-style research writeup",
  ],

  results: [
    "Produced a complete numerical study and research writeup on sonic injection in supersonic crossflow",
    "Identified and documented dominant interaction patterns and flow features observed in simulation",
    "Published the work with co-authors as a research contribution",
  ],

  bullets: [
    "Co-authored a CFD paper on sonic jet injection into supersonic crossflow",
    "Analyzed compressible-flow interaction patterns and flow-field trends from numerical simulations",
    "Delivered a publication-style report documenting setup, assumptions, and findings",
  ],
},


];
