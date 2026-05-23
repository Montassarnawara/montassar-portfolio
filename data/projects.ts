export type Project = {
  title: string
  summary: string
  impact: string
  stack: string[]
  repo?: string
  live?: string
  status?: "public" | "private"
}

export const projects: Project[] = [
  {
    title: "Khayyata Platform",
    summary:
      "Scalable full-stack marketplace connecting customers with local artisans through a Go backend and React frontend.",
    impact:
      "Deployed cloud infrastructure with low-latency delivery and production-ready API integration.",
    stack: ["Go", "React", "AWS", "Cloudflare", "REST APIs"],
    repo: "https://github.com/Montassarnawara",
    status: "public",
  },
  {
    title: "GOB Agent",
    summary:
      "Embedded AI voice multi-agent pipeline combining STT, intent classification, LLM inference, and TTS on ESP32.",
    impact:
      "Designed offline-resilient command workflows and near real-time control for physical devices.",
    stack: ["ESP32", "Python", "LLM Agents", "React", "Capacitor", "Android"],
    repo: "https://github.com/Montassarnawara/gob-edge-ai",
    status: "public",
  },
  {
    title: "KINDR NLP",
    summary:
      "Real-time toxicity detection and rewriting pipeline with ML classification and LLM rewriting in one API call.",
    impact:
      "Integrated into a Chrome extension and React dashboard with live monitoring and analytics.",
    stack: ["Python", "FastAPI", "Detoxify", "Groq/Llama", "React", "TypeScript"],
    repo: "https://github.com/Montassarnawara/KINDR-GROUP",
    status: "public",
  },
  {
    title: "Aggression Detection AI",
    summary:
      "Audio classification pipeline from DSP feature extraction to embedded inference for verbal aggression detection.",
    impact:
      "Achieved around 82% F1-score and optimized inference for ESP32 memory and latency constraints.",
    stack: ["scikit-learn", "Audio DSP", "MFCC", "ESP32", "REST APIs"],
    repo: "https://github.com/Montassarnawara/Smart-Platform-for-Verbal-Aggression-Detection",
    status: "public",
  },
]
