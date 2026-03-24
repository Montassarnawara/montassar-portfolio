export type SkillCategory = {
  category: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend and Systems",
    items: ["Go", "FastAPI", "REST APIs", "Hazelcast", "Distributed Systems", "Docker"],
  },
  {
    category: "AI and ML",
    items: ["scikit-learn", "TensorFlow/Keras", "LLMs", "NLP", "Audio DSP", "MFCC", "Computer Vision"],
  },
  {
    category: "Web and Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Capacitor", "Chrome Extension"],
  },
  {
    category: "Embedded and IoT",
    items: ["ESP32", "Arduino", "GPIO", "Sensors", "Real-Time Systems"],
  },
  {
    category: "Cloud and Workflow",
    items: ["AWS", "Cloudflare", "Linux", "Git/GitHub", "Agile/Scrum", "UML"],
  },
]
