export type EducationEntry = {
  school: string
  degree: string
  period: string
  details: string
}

export type ProjectEntry = {
  name: string
  description: string
  stack: string[]
}

export type LanguageEntry = {
  name: string
  level: string
}

export type TechnicalSkills = {
  ai: string[]
  backend: string[]
  embedded: string[]
  web: string[]
  devops: string[]
  automation: string[]
}

export type Profile = {
  name: string
  title: string
  tagline: string
  location: string
  email: string
  focus: string[]
  education: EducationEntry[]
  technicalSkills: TechnicalSkills
  majorProjects: ProjectEntry[]
  researchInterests: string[]
  certifications: string[]
  languages: LanguageEntry[]
  goals: string[]
  careerVision: string
}

export const profile: Profile = {
  name: "Montassar Nawara",
  title: "AI Systems Engineer",
  tagline:
    "Engineering intelligent systems across Edge AI, Distributed Backend and Autonomous Agents",

  location: "Tunisia",
  email: "montassar.nawara@ensi-uma.tn",

  focus: [
    "Edge Artificial Intelligence",
    "AI Agents and Autonomous Systems",
    "High Performance Backend Engineering",
    "Distributed Systems",
    "Embedded Intelligence",
    "Real-Time AI Systems",
  ],

  education: [
    {
      school: "National School of Computer Science (ENSI)",
      degree: "Engineering Degree in Computer Science",
      period: "2024 - Present",
      details: "Special focus on AI Systems, Distributed Architecture and Intelligent Automation",
    },
    {
      school: "Preparatory Institute of Engineering of Nabeul",
      degree: "Mathematics and Physics",
      period: "2021 - 2024",
      details: "Strong foundation in mathematics, signal processing and system modeling",
    },
  ],

  technicalSkills: {
    ai: [
      "Machine Learning",
      "Signal Processing",
      "Audio Machine Learning",
      "Edge AI",
      "Computer Vision",
      "LLM Agents",
      "RAG Systems",
      "Prompt Engineering",
      "AI System Design",
    ],

    backend: [
      "Go",
      "Distributed Systems",
      "Hazelcast",
      "High Performance API Design",
      "Memory Optimization",
      "Concurrent Systems",
      "Event Driven Architecture",
    ],

    embedded: [
      "ESP32",
      "Embedded C++",
      "Real-Time Systems",
      "Sensor Integration",
      "IoT Systems",
      "Edge Inference",
    ],

    web: ["Next.js", "React", "TypeScript", "Tailwind", "API Integration"],

    devops: ["Docker", "Linux", "GitHub", "Cloud Deployment", "System Debugging"],

    automation: ["n8n", "Workflow Orchestration", "AI Automation", "Agent Pipelines"],
  },

  majorProjects: [
    {
      name: "Embedded AI Violence Detection System",
      description:
        "Edge AI system capable of detecting aggressive audio patterns using ESP32 and real-time signal processing. Designed to operate autonomously and trigger alerts through IoT communication.",
      stack: ["ESP32", "Audio ML", "Signal Processing", "Embedded C++", "Edge AI"],
    },
    {
      name: "High Performance Distributed Backend System",
      description:
        "Distributed backend system built using Go and Hazelcast with heavy memory optimization. Achieved significant performance gains compared to traditional database architectures.",
      stack: ["Go", "Hazelcast", "Distributed Systems", "Performance Optimization"],
    },
    {
      name: "AI Multi-Agent Orchestration System",
      description:
        "Autonomous agent system capable of interpreting user intent and executing workflows through LLM coordination and embedded execution layers.",
      stack: ["LLM", "Agents", "Automation", "System Design"],
    },
  ],

  researchInterests: [
    "Autonomous AI Systems",
    "Edge Intelligence",
    "Human-AI Interaction",
    "Distributed AI Architectures",
    "AI for Social Impact",
  ],

  certifications: [
    "Machine Learning Fundamentals",
    "AI Fundamentals",
    "MLOps Fundamentals",
    "Containerization and Virtualization",
    "RAG Systems with OpenAI",
  ],

  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Intermediate" },
    { name: "English", level: "Intermediate" },
    { name: "Italian", level: "Basic" },
  ],

  goals: [
    "Build real world AI systems",
    "Work on intelligent embedded systems",
    "Design large scale AI infrastructures",
    "Create AI products impacting society",
  ],

  careerVision:
    "Design intelligent systems that bridge embedded intelligence, distributed computation, and autonomous decision-making.",
}
