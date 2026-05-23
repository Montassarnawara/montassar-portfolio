"use client"

import { motion } from "framer-motion"
import type { IconType } from "react-icons"
import {
  SiAndroid,
  SiArduino,
  SiCapacitor,
  SiCloudflare,
  SiDocker,
  SiEspressif,
  SiFastapi,
  SiGo,
  SiGooglechrome,
  SiGithub,
  SiKeras,
  SiLinux,
  SiOpenai,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiUml,
} from "react-icons/si"
import {
  FiActivity,
  FiCloud,
  FiCpu,
  FiDatabase,
  FiEye,
  FiHeadphones,
  FiLayers,
  FiPackage,
  FiRefreshCw,
  FiServer,
  FiShare2,
  FiShield,
  FiZap,
} from "react-icons/fi"

type TechIconEntry = {
  icon: IconType
  color: string
}

const iconMap: Record<string, TechIconEntry> = {
  Go: { icon: SiGo, color: "text-sky-300" },
  FastAPI: { icon: SiFastapi, color: "text-emerald-300" },
  React: { icon: SiReact, color: "text-cyan-300" },
  AWS: { icon: FiCloud, color: "text-amber-300" },
  Cloudflare: { icon: SiCloudflare, color: "text-orange-300" },
  "REST APIs": { icon: FiServer, color: "text-slate-300" },
  Hazelcast: { icon: FiDatabase, color: "text-indigo-300" },
  "Distributed Systems": { icon: FiShare2, color: "text-slate-200" },
  Docker: { icon: SiDocker, color: "text-blue-300" },
  ESP32: { icon: SiEspressif, color: "text-emerald-300" },
  Arduino: { icon: SiArduino, color: "text-teal-300" },
  GPIO: { icon: FiCpu, color: "text-slate-300" },
  Sensors: { icon: FiActivity, color: "text-lime-300" },
  "Real-Time Systems": { icon: FiZap, color: "text-amber-200" },
  Python: { icon: SiPython, color: "text-yellow-300" },
  "TensorFlow/Keras": { icon: SiTensorflow, color: "text-orange-300" },
  TensorFlow: { icon: SiTensorflow, color: "text-orange-300" },
  Keras: { icon: SiKeras, color: "text-rose-300" },
  LLMs: { icon: SiOpenai, color: "text-teal-300" },
  NLP: { icon: FiActivity, color: "text-rose-300" },
  "Computer Vision": { icon: FiEye, color: "text-cyan-200" },
  "LLM Agents": { icon: SiOpenai, color: "text-teal-300" },
  Capacitor: { icon: SiCapacitor, color: "text-indigo-300" },
  Android: { icon: SiAndroid, color: "text-green-400" },
  TypeScript: { icon: SiTypescript, color: "text-blue-400" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-cyan-300" },
  "Chrome Extension": { icon: SiGooglechrome, color: "text-amber-200" },
  Linux: { icon: SiLinux, color: "text-yellow-200" },
  "Git/GitHub": { icon: SiGithub, color: "text-gray-200" },
  "Agile/Scrum": { icon: FiRefreshCw, color: "text-emerald-200" },
  UML: { icon: SiUml, color: "text-slate-200" },
  Detoxify: { icon: FiShield, color: "text-rose-300" },
  "Groq/Llama": { icon: FiZap, color: "text-cyan-300" },
  "scikit-learn": { icon: SiScikitlearn, color: "text-orange-300" },
  "Audio DSP": { icon: FiHeadphones, color: "text-sky-200" },
  MFCC: { icon: FiActivity, color: "text-lime-300" },
  fasthttp: { icon: FiZap, color: "text-sky-200" },
  "Gob Serialization": { icon: FiPackage, color: "text-amber-200" },
  "Cloud Deployment": { icon: FiCloud, color: "text-sky-200" },
  "System Debugging": { icon: FiLayers, color: "text-slate-300" },
  "Event Driven Architecture": { icon: FiLayers, color: "text-slate-300" },
  "Memory Optimization": { icon: FiLayers, color: "text-slate-300" },
  "High Performance API Design": { icon: FiLayers, color: "text-slate-300" },
}

type TechIconBadgeProps = {
  name: string
}

export default function TechIconBadge({ name }: TechIconBadgeProps) {
  const entry = iconMap[name]
  const Icon = entry?.icon ?? FiCpu
  const colorClass = entry?.color ?? "text-gray-300"

  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.06 }}
      whileTap={{ scale: 0.98 }}
      className="group inline-flex items-center justify-center rounded-lg border border-white/10 bg-black/40 px-4 py-3.5 transition hover:border-white/30 hover:bg-white/5"
      title={name}
      aria-label={name}
    >
      <Icon className={`h-[1.75rem] w-[1.75rem] ${colorClass} transition group-hover:text-white`} aria-hidden="true" />
      <span className="sr-only">{name}</span>
    </motion.span>
  )
}
