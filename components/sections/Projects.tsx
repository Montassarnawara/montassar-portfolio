"use client"

import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import TechIconBadge from "@/components/ui/TechIcon"

export default function Projects() {
  return (
    <section id="projects" className="bg-transparent px-6 py-32 text-white">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Selected Systems
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-gray-800 bg-black p-8 transition hover:border-white"
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                {p.status === "private" ? (
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-gray-300">
                    Private
                  </span>
                ) : null}
              </div>

              <p className="text-gray-300">{p.summary}</p>
              <p className="mt-3 text-sm text-gray-500">{p.impact}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <TechIconBadge key={tech} name={tech} />
                ))}
              </div>

              {p.repo ? (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-gray-200 underline decoration-white/30 underline-offset-4 transition hover:text-white"
                >
                  View repository
                </a>
              ) : null}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
