"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="bg-transparent px-6 py-32 text-white">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10"
        >
          Engineering Reliable Intelligent Systems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg leading-relaxed"
        >
          I build production-minded software where backend performance, AI
          decision layers, and hardware constraints are treated as one unified
          system. My work focuses on real-time behavior, measurable outcomes,
          and architecture that scales under pressure.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 text-lg leading-relaxed mt-6"
        >
          From Go APIs optimized for low-latency throughput to embedded ML
          inference deployed on ESP32, I approach engineering as a systems
          discipline: performance, reliability, and intelligence must evolve
          together, not in isolation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          <div className="bg-gray-950 p-6 rounded-2xl border border-gray-800">
            <h3 className="font-semibold text-xl mb-2">Edge AI</h3>
            <p className="text-gray-500">
              Lightweight inference and DSP pipelines deployed on constrained
              devices.
            </p>
          </div>

          <div className="bg-gray-950 p-6 rounded-2xl border border-gray-800">
            <h3 className="font-semibold text-xl mb-2">Distributed Systems</h3>
            <p className="text-gray-500">
              High-throughput backend services with secure APIs and in-memory
              optimization.
            </p>
          </div>

          <div className="bg-gray-950 p-6 rounded-2xl border border-gray-800">
            <h3 className="font-semibold text-xl mb-2">Autonomous Agents</h3>
            <p className="text-gray-500">
              Agent pipelines combining reasoning, orchestration, and physical
              action.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
