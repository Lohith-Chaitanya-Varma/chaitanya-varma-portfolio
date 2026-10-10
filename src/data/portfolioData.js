export const PERSONAL_INFO = {
  name: "S. Lohith Chaitanya Varma",
  shortName: "Lohith C. Varma",
  monogram: "SLCV",
  title: "B.E. Artificial Intelligence & Machine Learning",
  location: "Bellary, Karnataka, India",
  email: "chaitanya.aiml.rymec@gmail.com",
  college: "Rao Bahadur Y Mahabaleswarappa Engineering College (RYMEC)",
  degree: "B.E. in Artificial Intelligence and Machine Learning",
  graduationYear: 2027,
  cgpa: "7.14",
  status: "Undergraduate Scholar • Available for AI & Software Internships",
  bio: "Pre-final year Artificial Intelligence and Machine Learning undergraduate at Rao Bahadur Y Mahabaleswarappa Engineering College. Focused on building robust software systems, computer vision applications, and intelligent full-stack tools. Grounded in solid algorithmic principles, Object-Oriented Programming, and rapid modern web architecture with React and Python.",
};

export const PROJECTS = [
  {
    id: "golden-ratio-face-analyzer",
    title: "Golden Ratio Face Analyzer",
    tagline: "Facial Proportion Geometry & Phi (1.618) Analysis Engine",
    category: "Computer Vision & Frontend Engineering",
    description: "A web application for analyzing facial proportions using golden-ratio measurements and visually presenting the results through geometric overlays and harmony indices.",
    image: "/images/golden_ratio.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Computer Vision"],
    statusBadge: "Implemented & Tested",
    featured: true,
    accentColor: "#8b5cf6",
    keyHighlights: [
      "Facial Landmark Coordinate Extraction: Detects key facial landmarks to calculate geometric distances between facial feature pairs.",
      "Phi Proportion Benchmark: Compares measured ratios against the divine golden ratio (1:1.618) to evaluate classical geometric symmetry.",
      "Real-time Visual Overlay: Renders dynamic SVG/canvas measurement grids and spiral guidelines directly over analyzed inputs.",
      "Interactive Metric Dashboard: Visual breakdown of symmetry scores, eye-to-nose distances, and mouth-to-chin proportions with zero latency."
    ],
    architecture: {
      inputLayer: "Webcam stream or high-resolution portrait upload with responsive client preprocessing.",
      visionEngine: "Computer Vision landmark detection identifying facial contours, ocular planes, and vertical balance axes.",
      calculationCore: "Euclidean distance measurement and Phi deviation algorithms implemented in JavaScript.",
      presentationUI: "Modular React components rendering interactive overlays, harmonic scorecards, and visual reports."
    }
  },
  {
    id: "aiva-ai-virtual-assistant",
    title: "AIVA — AI Virtual Assistant",
    tagline: "Intelligent Aptitude, Coding & Interview Preparation Platform",
    category: "Full-Stack AI & LLM Systems",
    description: "An AI-powered platform for aptitude testing, coding practice, mock interviews, and personalized interview preparation powered by ultra-low-latency Groq LLM inference.",
    image: "/images/aiva.jpg",
    technologies: ["React", "JavaScript", "Python", "FastAPI", "Groq API"],
    statusBadge: "Implemented & Tested",
    featured: true,
    accentColor: "#6366f1",
    keyHighlights: [
      "AI Mock Interview Simulator: Conducts structured technical and behavioral mock interview sessions with contextual follow-up questioning.",
      "Aptitude Testing Engine: Quantitative, logical, and verbal diagnostic assessments with real-time scoring and instant feedback.",
      "Interactive Coding Environment: Multi-language coding workspace with syntax support for problem-solving practice.",
      "Ultra-Fast Inference via Groq API: High-speed LLM processing ensuring conversational fluidity with minimal latency.",
      "FastAPI Asynchronous Backend: Python API endpoints managing test sessions, candidate responses, and prompt orchestration."
    ],
    architecture: {
      clientApp: "React single-page application with dark-mode coding editor, chat simulator, and timer controllers.",
      backendService: "FastAPI server providing asynchronous routing, session state tracking, and validation.",
      inferenceEngine: "Groq API integration delivering sub-second response times for realistic interview back-and-forth.",
      feedbackModule: "Structured evaluation pipelines analyzing user code correctness, problem-solving efficiency, and interview responses."
    }
  }
];

export const SKILL_CATEGORIES = [
  {
    id: "languages",
    title: "Programming Languages",
    subtitle: "Core syntax & querying foundations",
    skills: [
      { name: "Python", description: "Primary language for AI pipelines, FastAPI backends, and algorithmic scripts", badge: "Primary" },
      { name: "JavaScript", description: "Modern ES6+ syntax for dynamic web applications and DOM logic", badge: "Core" },
      { name: "SQL", description: "Relational database querying, schema structuring, and data retrieval", badge: "Database" },
      { name: "HTML", description: "Semantic markup, accessibility compliance, and structural layouts", badge: "Web" },
      { name: "CSS", description: "Responsive layouts, Flexbox, CSS Grid, and custom dark aesthetics", badge: "Styling" }
    ]
  },
  {
    id: "frameworks",
    title: "Frameworks & Web Technologies",
    subtitle: "Modern client and server architectures",
    skills: [
      { name: "React", description: "Component-driven architecture, custom hooks, and state management", badge: "Frontend" },
      { name: "FastAPI", description: "High-performance Python asynchronous APIs for machine learning services", badge: "Backend" },
      { name: "Computer Vision", description: "Visual feature detection, image processing, and geometric landmark mapping", badge: "AI / Vision" },
      { name: "Groq API", description: "High-throughput, ultra-low-latency LLM inference orchestration", badge: "AI / LLM" }
    ]
  },
  {
    id: "core-concepts",
    title: "Core Computer Science",
    subtitle: "Essential theoretical and architectural pillars",
    skills: [
      { name: "Data Structures & Algorithms", description: "Arrays, lists, trees, graphs, sorting, searching, and complexity analysis (DSA)", badge: "DSA" },
      { name: "Object-Oriented Programming", description: "Encapsulation, inheritance, polymorphism, abstraction, and clean design patterns", badge: "OOP" },
      { name: "Algorithmic Problem Solving", description: "Analytical problem breakdown and optimal space-time trade-off evaluation", badge: "Theory" }
    ]
  },
  {
    id: "tools",
    title: "Developer Tooling & Workflow",
    subtitle: "Modern version control and engineering environments",
    skills: [
      { name: "Git", description: "Distributed version control, branching workflows, and commit history management", badge: "VCS" },
      { name: "GitHub", description: "Code collaboration, repository hosting, and project maintenance", badge: "Platform" },
      { name: "VS Code", description: "Integrated development environment, debugging setups, and extensions", badge: "IDE" }
    ]
  }
];

export const EDUCATION_DATA = {
  degree: "Bachelor of Engineering (B.E.) in Artificial Intelligence and Machine Learning",
  institution: "Rao Bahadur Y Mahabaleswarappa Engineering College (RYMEC)",
  affiliation: "Affiliated to Visvesvaraya Technological University (VTU)",
  location: "Bellary, Karnataka, India",
  timeline: "2023 — 2027 (Expected)",
  graduationYear: "2027",
  cgpa: "7.14",
  cgpaScale: "10.00",
  coreFocusAreas: [
    "Artificial Intelligence Foundations",
    "Machine Learning Algorithms",
    "Data Structures & Algorithms (DSA)",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (SQL)",
    "Computer Vision & Pattern Recognition"
  ],
  institutionNote: "RYMEC is one of the premier technical institutions in the Hyderabad-Karnataka region, known for dedicated engineering academics and technological development."
};
