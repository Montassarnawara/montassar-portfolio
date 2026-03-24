export type ExperienceItem = {
  role: string
  org: string
  location: string
  period: string
  highlights: string[]
  stack: string[]
}

export type EducationItem = {
  school: string
  degree: string
  location: string
  period: string
}

export type AcademicFormationItem = {
  title: string
  subtitle: string
  period: string
  bullets: string[]
}

export type LearningDomain = {
  domain: string
  focus: string
  topics: string[]
}

export type ResearchPublication = {
  title: string
  status: string
  link: string
  summary: string
}

export const experiences: ExperienceItem[] = [
  {
    role: "Backend Development Intern",
    org: "DotCom",
    location: "Nabeul, Tunisia",
    period: "Jul 2025 - Aug 2025",
    highlights: [
      "Built high-performance Go REST APIs backed by Hazelcast with response times under 5 ms.",
      "Implemented API key validation and endpoint-level protection for secure production access.",
      "Containerized the service stack with Docker and benchmarked concurrent load scenarios.",
    ],
    stack: ["Go", "Hazelcast", "Docker", "fasthttp", "Gob Serialization"],
  },
  {
    role: "AI and Embedded Systems Research Intern",
    org: "ENSI Research Laboratory",
    location: "Tunis, Tunisia",
    period: "Jun 2025 - Aug 2025",
    highlights: [
      "Designed an end-to-end audio ML pipeline with around 82% F1-score for aggression detection.",
      "Built REST communication between inference services and embedded capture systems.",
      "Optimized model inference for ESP32 memory and latency constraints.",
    ],
    stack: ["Python", "scikit-learn", "Audio DSP", "MFCC", "ESP32", "REST APIs"],
  },
]

export const education: EducationItem[] = [
  {
    school: "National School of Computer Science (ENSI)",
    degree: "Engineering Degree in Computer Science",
    location: "Manouba, Tunisia",
    period: "2024 - Present",
  },
  {
    school: "Preparatory Institute of Engineering of Nabeul",
    degree: "Preparatory Engineering - Mathematics and Physics",
    location: "Nabeul, Tunisia",
    period: "2021 - 2024",
  },
]

export const certifications: string[] = [
  "Machine Learning Fundamentals",
  "AI Fundamentals",
  "MLOps Fundamentals",
  "Containerization and Virtualization",
  "RAG with OpenAI (Azure)",
]

export const languages: string[] = ["Arabic (Native)", "French (Intermediate)", "English (Intermediate)", "Italian (Basic)"]

export const academicFormation: AcademicFormationItem[] = [
  {
    title: "AI Systems Engineering Track - ENSI",
    subtitle: "Engineering Degree in Computer Science, Manouba, Tunisia",
    period: "2024 - Present",
    bullets: [
      "Systems-oriented engineering formation centered on real-time computing, software architecture, and algorithmic rigor.",
      "Applied focus on intelligent systems: edge inference constraints, backend performance, and AI integration in production workflows.",
      "Project-driven execution across embedded hardware, distributed services, and ML pipelines with measurable latency and reliability targets.",
    ],
  },
  {
    title: "Preparatory Engineering Cycle",
    subtitle: "Preparatory Institute of Engineering of Nabeul, Nabeul, Tunisia",
    period: "2021 - 2024",
    bullets: [
      "Intensive scientific foundation in mathematics, physics, and analytical problem solving.",
      "Quantitative base applied to optimization, signal processing, and machine learning system design.",
    ],
  },
]

export const technicalLearningPath: LearningDomain[] = [
  {
    domain: "Applied AI and ML Systems",
    topics: ["Machine Learning Fundamentals", "AI Fundamentals", "Practical NLP and model-serving workflows"],
    focus: "From model understanding to deployment-aware engineering decisions.",
  },
  {
    domain: "MLOps and Production Readiness",
    topics: ["MLOps Fundamentals", "Evaluation and reproducibility", "ML lifecycle practices"],
    focus: "Shipping maintainable AI services instead of notebook-only prototypes.",
  },
  {
    domain: "Infrastructure and Platform Engineering",
    topics: ["Containerization and Virtualization", "Cloud deployment patterns", "Scalable service operations"],
    focus: "Runtime reliability, portability, and operational efficiency.",
  },
  {
    domain: "LLM and Agentic Architectures",
    topics: ["RAG with OpenAI (Azure)", "Retrieval + generation integration", "Task-oriented AI workflows"],
    focus: "Controllable LLM systems connected to backend infrastructure.",
  },
]

export const globalCommunication: string[] = [
  "Arabic - Native",
  "English - Professional working proficiency",
  "French - Professional working proficiency",
  "Italian - Basic proficiency",
]

export const globalCommunicationNote =
  "Used for technical collaboration, documentation, and cross-functional communication in international engineering environments."

export const researchPublications: ResearchPublication[] = [
  {
    title: "AI-Based Energy and Water Optimization for Sustainable Agriculture",
    status: "Research Repository",
    link: "https://github.com/Montassarnawara/AI_Based_Energy_Water_Optimization",
    summary:
      "Multi-model intelligent architecture for irrigation scheduling and energy optimization in smart agriculture systems.",
  },
]
