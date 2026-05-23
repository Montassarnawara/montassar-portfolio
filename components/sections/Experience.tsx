"use client"

import { motion } from "framer-motion"
import { experiences } from "@/data/experience"
import TechIconBadge from "@/components/ui/TechIcon"

export default function Experience() {
  return (
    <section id="experience" className="bg-transparent px-6 py-32 text-white">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Engineering Experience
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.org}-${exp.role}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="border border-gray-800 rounded-2xl p-8 bg-black"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="mt-1 text-gray-400">{exp.org} - {exp.location}</p>
                </div>
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-gray-300">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-5 space-y-3 text-gray-300">
                {exp.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <TechIconBadge key={tech} name={tech} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
