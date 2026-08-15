export const PROFILE = {
  name: "Vasudevan R",
  nickname: "Vasu",
  role: "Mechanical Design Engineer",
  tagline: "Designing Precision. Building Innovation.",
  intro:
    "Enthusiastic Mechanical Engineering graduate with practical experience in mechanical design, CAD modelling, engineering drawings and product development. Skilled in CATIA V5, SolidWorks and Body-in-White (BIW) design, with hands-on internship exposure across manufacturing, automotive servicing and industrial design.",
  image: "/profile.png",
  portrait: "/portrait.png",
} as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Skills",
    link: "/skills",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Designs",
    link: "/designs",
  },
  {
    title: "Experience",
    link: "/experience",
  },
  {
    title: "Certifications",
    link: "/certifications",
  },
] as const;

export const PILLARS = [
  {
    title: "CATIA V5",
    description:
      "Parametric part design, assembly design and drafting workbenches for mechanical components.",
  },
  {
    title: "SolidWorks",
    description:
      "3D part and assembly modelling with production-ready engineering drawings.",
  },
  {
    title: "BIW & Sheet Metal",
    description:
      "Body-in-White structures and sheet metal design — flanges, bends and flat patterns.",
  },
  {
    title: "Design & Drafting",
    description:
      "Detailed engineering drawings, dimensioning and design documentation support.",
  },
] as const;

export const STATS = [
  {
    value: 4,
    suffix: "+",
    label: "Industry Internships",
  },
  {
    value: 2,
    suffix: "",
    label: "Major Engineering Projects",
  },
  {
    value: 7,
    suffix: "",
    label: "Certifications",
  },
  {
    value: 2025,
    suffix: "",
    label: "B.E. Mechanical Graduate",
  },
] as const;

export const ABOUT = {
  intro:
    "I'm Vasudevan R, a Mechanical Engineering graduate working across CAD modelling, assembly design and engineering drawings with CATIA V5 and SolidWorks — driven by precision, innovation and continuous learning.",
  story: [
    "My interest grew from shop floors during internships — a commercial vehicle service centre, a wire EDM job shop and a spinning mill — seeing how a drawing becomes a real part.",
    "At Industrial Intellect, I worked on model creation in CATIA V5 and SolidWorks, design and drafting support, and engineering drawings for manufacture.",
    "My coursework projects include an elderly person monitoring system with real-time sensor alerts and sustainable PCM bricks for indoor thermal comfort.",
  ],
  principles: [
    {
      title: "Mission",
      description:
        "Contribute to advanced mechanical design and product development work where every model, drawing and dimension is created with manufacturing in mind.",
    },
    {
      title: "Vision",
      description:
        "To grow into a design engineer who bridges CAD, analysis and the shop floor — turning concepts into dependable products.",
    },
    {
      title: "Engineering Mindset",
      description:
        "Understand the problem, model it carefully, then test it. Learn from every internship, drawing and prototype, and let results guide the design.",
    },
  ],
} as const;

export const EDUCATION = [
  {
    title: "Bachelor of Mechanical Engineering",
    institution: "Sri Krishna College of Technology, Coimbatore",
    period: "Graduated 2025",
    detail: "CGPA 6.82. Academic projects in sensor-based monitoring systems and sustainable PCM bricks.",
  },
  {
    title: "Higher Secondary (12th)",
    institution: "Swamy Vivekananda Matriculation Hr. Sec. School, Salem",
    period: "2020–2021",
    detail: "82%",
  },
  {
    title: "Secondary School (10th)",
    institution: "South Indian Matriculation Hr. Sec. School, Salem",
    period: "2018–2019",
    detail: "79%",
  },
] as const;

export const SKILL_LOGOS = [
  {
    skill_name: "CATIA V5",
    image: "catia.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "SolidWorks",
    image: "solidworks.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "BIW (Body In White)",
    image: "catia-biw.png",
    width: 80,
    height: 80,
  },
] as const;

export const CAD_SKILLS = [
  {
    skill_name: "CATIA V5",
    level: 96,
    note: "Part design, assembly design and drafting workbenches",
  },
  {
    skill_name: "SolidWorks",
    level: 94,
    note: "3D parts, assemblies and production drawings",
  },
  {
    skill_name: "BIW (Body In White)",
    level: 93,
    note: "Body-in-White structures, panels, joints and automotive sheet metal assemblies",
  },
  {
    skill_name: "Mechanical Design",
    level: 92,
    note: "Concept development through detailed design",
  },
  {
    skill_name: "Assembly Modeling",
    level: 95,
    note: "Mates, constraints and multi-part assemblies",
  },
  {
    skill_name: "Sheet Metal Design",
    level: 93,
    note: "Flanges, bends and flat pattern development",
  },
  {
    skill_name: "Engineering Drawings",
    level: 97,
    note: "2D detailing, views, dimensioning and tolerances",
  },
  {
    skill_name: "CAD Modeling",
    level: 91,
    note: "Parametric 3D modelling of mechanical components",
  },
] as const;

export const PROFESSIONAL_SKILLS = [
  {
    skill_name: "Analytical Thinking",
    level: 95,
    note: "Structured evaluation of engineering problems",
  },
  {
    skill_name: "Problem Solving",
    level: 94,
    note: "Practical solutions grounded in design fundamentals",
  },
  {
    skill_name: "Attention to Detail",
    level: 98,
    note: "Accuracy in modelling, drawings and inspection",
  },
  {
    skill_name: "Team Collaboration",
    level: 96,
    note: "Effective work with design and shop-floor teams",
  },
  {
    skill_name: "Communication",
    level: 93,
    note: "Clear technical documentation and reporting",
  },
  {
    skill_name: "Continuous Learning",
    level: 97,
    note: "Ongoing upskilling in CAD and design methods",
  },
] as const;

export const PROJECTS = [
  {
    year: "2024",
    title: "Elderly Person Monitoring System",
    summary:
      "A sensor-based monitoring system designed to improve the health and safety of elderly people through real-time monitoring and emergency alerts.",
    challenge:
      "Elderly people living alone have no dependable way to raise an alarm during a fall or a sudden health event, which delays assistance.",
    solution:
      "Designed and developed an integrated sensor system for real-time monitoring with automated emergency alerts, followed by structured testing and validation to confirm reliability.",
    tags: [
      "Real-time Monitoring",
      "Sensor Integration",
      "Emergency Alert System",
      "System Integration",
      "Testing & Validation",
      "Reliability Study",
    ],
  },
  {
    year: "2025",
    title: "Thermal Comfort Enhancement Using PCM Bricks",
    summary:
      "Sustainable Phase Change Material (PCM) bricks developed to improve indoor thermal comfort and reduce building energy consumption.",
    challenge:
      "Conventional brickwork struggles to hold comfortable indoor temperatures, increasing heating and cooling energy demand.",
    solution:
      "Developed PCM-integrated bricks and evaluated their thermal efficiency using heat transfer analysis, delivering an eco-friendly construction option with measurable energy savings.",
    tags: [
      "Sustainable Engineering",
      "Thermal Analysis",
      "Heat Transfer",
      "Energy Efficiency",
      "Phase Change Material",
      "Eco-friendly Construction",
    ],
  },
] as const;

export const DESIGN_CATEGORIES = [
  {
    title: "CATIA 3D Modeling",
    tools: "CATIA V5",
    description:
      "Precision 3D mechanical models created using CATIA V5 with parametric design techniques and engineering best practices.",
    items: [
      {
        name: "Winged Support Bracket",
        image:
          "https://i.im.ge/QMgzUk9/2._Winged_Support_Bracket.png",
        note: "Twin-bore support bracket with ribbed webs and counterbored mounting holes for stiffness under load.",
      },
      {
        name: "Linkage Arm",
        image: "https://i.im.ge/QMgziFX/3._Linkage_Arm.png",
        note: "Lightweight linkage arm with material-relief cut-outs, blended fillets and precision pivot bores.",
      },
      {
        name: "Intake Manifold Body",
        image: "https://i.im.ge/QMgz098/4._Intake_Manifold_Body.png",
        note: "Cast-style manifold body with mating flanges, gasket faces and internal flow passages.",
      },
    ],
  },
  {
    title: "CATIA Part & Assembly Products",
    tools: "CATIA V5",
    description:
      "Complete mechanical assemblies demonstrating fit, function, motion, and manufacturability.",
    items: [
      {
        name: "Bearing Pulley Assembly",
        image: "https://i.im.ge/QMgz5Rh/5._Bearing_Pulley_Assembly.png",
        note: "Pedestal-mounted pulley and bearing assembly constrained for true rotation about the shaft axis.",
      },
      {
        name: "Universal Joint Assembly",
        image: "https://i.im.ge/QMgzjTM/6._Universal_Joint_Assembly.png",
        note: "Yoke, cross and splined shaft assembly built to transmit torque through an angular offset.",
      },
      {
        name: "Piston & Crankshaft Assembly",
        image: "https://i.im.ge/QMgzmLY/7._Piston_Crankshaft_Assembly.png",
        note: "Four-cylinder piston, connecting rod and crankshaft assembly modelling reciprocating-to-rotary motion.",
      },
    ],
  },
  {
    title: "CATIA Surface Design Products",
    tools: "CATIA V5, Generative Shape Design",
    description:
      "Advanced surface models developed with controlled curves, continuity, and high-quality surface transitions.",
    items: [
      {
        name: "Curved Pipe Surface",
        image: "https://i.im.ge/QMgzw3D/8._Curved_Pipe_Surface.png",
        note: "Twin-branch pipe body from swept surfaces with tangent-continuous blends into the mounting flange.",
      },
      {
        name: "Contoured Grip Surface",
        image: "https://i.im.ge/QMgz6n4/9._Contoured_Grip_Surface.png",
        note: "Ergonomic grip developed with multi-section sweeps and ribbed detailing across a curved spine.",
      },
      {
        name: "Hair Dryer Surface Model",
        image: "https://i.im.ge/QMgzPqC/10._Hair_Dryer_Surface_Model.png",
        note: "Consumer-product housing formed from class-A style surfaces with smooth body-to-handle transitions.",
      },
    ],
  },
  {
    title: "CATIA Sheet Metal Design Products",
    tools: "CATIA V5, Sheet Metal Design",
    description:
      "Production-ready sheet metal components featuring bends, flanges, cut-outs, and manufacturable designs.",
    items: [
      {
        name: "Louvered Sheet Metal Enclosure",
        image:
          "https://i.im.ge/QMgzttq/11._Louvered_Sheet_Metal_Enclosure.png",
        note: "Ventilated enclosure with louvered cut-outs, hemmed edges and a hinged access door, flat-pattern ready.",
      },
      {
        name: "Sheet Metal Stand",
        image: "https://i.im.ge/QMgzHTJ/12._Sheet_Metal_Stand.png",
        note: "Formed stand combining bent brackets, stiffening beads and slotted vents for rigidity with minimal material.",
      },
      {
        name: "Multi Lug Bracket",
        image: "https://i.im.ge/QMgzykp/13._Multi_Lug_Bracket.png",
        note: "Four-lug mounting bracket with flanged walls, relief cut-outs and consistent bend radii for press-tool manufacture.",
      },
    ],
  },
  {
    title: "CATIA BIW (Body in White) Design Products",
    tools: "CATIA V5, BIW",
    description:
      "Automotive Body-in-White components created following BIW design methodologies and automotive engineering standards.",
    items: [
      {
        name: "BIW Reinforcement Bracket",
        image: "https://i.im.ge/QMgzCFP/14._BIW_Reinforcement_Bracket.png",
        note: "Curved reinforcement panel with embossed ribs and weld-stud locations to stiffen a body sub-structure.",
      },
      {
        name: "Center Console BIW Panel",
        image: "https://i.im.ge/QMgzEj1/15._Center_Console_BIW_Panel.png",
        note: "Contoured console structure combining draw-formed surfaces with functional apertures for interior mounting.",
      },
      {
        name: "Body Side Rail Reinforcement",
        image:
          "https://i.im.ge/QMgzxRf/16._Body_Side_Rail_Reinforcement.png",
        note: "Long side-rail reinforcement profile with flanged edges and a bulkhead section for crash-load distribution.",
      },
    ],
  },
  {
    title: "SolidWorks 3D Modeling",
    tools: "SolidWorks",
    description:
      "Mechanical components designed using SolidWorks with emphasis on manufacturability, precision, and mechanical functionality.",
    items: [
      {
        name: "Threaded Lifting Hook",
        image: "https://i.im.ge/QMgzYTm/17._Threaded_Lifting_Hook.png",
        note: "Forged-style lifting hook with a threaded shank and swept hook profile for load-bearing hardware.",
      },
      {
        name: "Dual-Port Manifold Bracket",
        image: "https://i.im.ge/QMgzbUr/18._Dual-Port_Manifold_Bracket.png",
        note: "Twin-port bracket with gusseted webs, wall-mount flange and embossed branding detail.",
      },
      {
        name: "Gearbox Housing",
        image: "https://i.im.ge/QMgzc3W/19._Gearbox_Housing.png",
        note: "Cast gearbox housing with bearing bosses, bolt-circle mounting face and integrated fastening lugs.",
      },
    ],
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Mechanical Design Intern",
    company: "Industrial Intellect",
    location: "Salem, India",
    period: "May 2025–Jun 2026",
    summary:
      "Design-focused internship creating 3D models and production-ready engineering drawings in CATIA V5 and SolidWorks.",
    points: [
      "Created 3D models using CATIA V5 and SolidWorks.",
      "Assisted in mechanical design and drafting activities.",
      "Prepared detailed engineering drawings.",
      "Worked on CAD-based product development.",
    ],
  },
  {
    role: "Intern, Precision Machining",
    company: "Micro Spark Wire Cut",
    location: "Salem, India",
    period: "May 2024",
    summary:
      "Short-cycle internship focused on Wire EDM machining and precision manufacturing practice.",
    points: [
      "Learned Wire EDM machining techniques.",
      "Assisted in machine operation.",
      "Participated in component inspection processes.",
      "Gained exposure to precision manufacturing methods.",
    ],
  },
  {
    role: "Intern, Production & Maintenance",
    company: "Sri Ganapathy Murugan Spinning Mill",
    location: "Coimbatore, India",
    period: "May 2024–Jun 2024",
    summary:
      "Plant internship observing industrial machinery operation, maintenance and production reporting.",
    points: [
      "Observed industrial machinery operations.",
      "Assisted in the preparation of production reports.",
      "Learned end-to-end manufacturing processes.",
      "Understood routine maintenance practices.",
    ],
  },
  {
    role: "Intern, Service & Maintenance",
    company: "Bharat Benz Prabal Trucking",
    location: "Coimbatore, India",
    period: "Apr 2024–May 2024",
    summary:
      "Automotive internship across commercial vehicle servicing, inspection and documentation.",
    points: [
      "Assisted in vehicle servicing and maintenance.",
      "Observed troubleshooting and repair techniques.",
      "Supported servicing documentation and inspection.",
    ],
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "Parametric Modeling (CATIA)",
    issuer: "Certification",
    year: "2026",
    id: "CATIA-PM",
    focus: "Parametric part design and drafting in CATIA V5",
  },
  {
    title: "SolidWorks Certification",
    issuer: "Certification",
    year: "2025",
    id: "SW-CERT",
    focus: "Part modelling, assemblies and engineering drawings",
  },
  {
    title: "BIW (Body in White)",
    issuer: "Certification",
    year: "2026",
    id: "BIW-CERT",
    focus: "Automotive body-in-white structure and sheet metal design",
  },
  {
    title: "Internship Certificate",
    issuer: "Industrial Intellect",
    year: "2026",
    id: "INT-II",
    focus: "CAD model creation, design and drafting",
  },
  {
    title: "Internship Certificate",
    issuer: "Bharat Benz Prabal Trucking",
    year: "2024",
    id: "INT-BB",
    focus: "Commercial vehicle servicing and maintenance",
  },
  {
    title: "Internship Certificate",
    issuer: "Micro Spark Wire Cut",
    year: "2024",
    id: "INT-MS",
    focus: "Wire EDM machining and precision manufacturing",
  },
  {
    title: "Internship Certificate",
    issuer: "Sri Ganapathy Murugan Spinning Mill",
    year: "2024",
    id: "INT-SGM",
    focus: "Industrial machinery operation and production reporting",
  },
] as const;
