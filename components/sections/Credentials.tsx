"use client"

import { motion } from "framer-motion"
import {
  academicFormation,
  globalCommunication,
  globalCommunicationNote,
  researchPublications,
  technicalLearningPath,
} from "@/data/experience"

export default function Credentials() {
  return (
    <section id="credentials" className="bg-transparent px-6 py-24 text-white">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-800 bg-gray-950/70 p-7"
        >
          <h3 className="mb-2 text-2xl font-semibold">Academic Formation</h3>
          <p className="mb-6 text-sm text-gray-400">
            Engineering foundation built around systems rigor, real-time constraints,
            and production-oriented intelligent architectures.
          </p>

          <div className="space-y-7">
            {academicFormation.map((item) => (
              <article key={item.title}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="text-base font-medium text-white">{item.title}</p>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-gray-300">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-400">{item.subtitle}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-gray-500">
                  Core Orientation
                </p>

                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <article className="rounded-xl border border-white/10 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">Research and Publication</p>

              <div className="mt-3 space-y-4">
                {researchPublications.map((paper) => (
                  <div key={paper.title}>
                    <p className="text-base font-medium text-white">{paper.title}</p>
                    <p className="mt-1 text-sm text-gray-400">{paper.summary}</p>
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-sm text-gray-200 underline decoration-white/30 underline-offset-4 transition hover:text-white"
                    >
                      {paper.status}
                    </a>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-gray-800 bg-gray-950/70 p-7 lg:col-span-2"
          >
            <h3 className="mb-2 text-2xl font-semibold">Technical Learning Path</h3>
            <p className="mb-6 text-sm text-gray-400">
              Continuous engineering learning across AI systems, production ML,
              scalable infrastructure, and agentic architectures.
            </p>

            <div className="space-y-5">
              {technicalLearningPath.map((domain) => (
                <article key={domain.domain} className="rounded-xl border border-white/10 p-4">
                  <p className="text-base font-medium text-white">{domain.domain}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {domain.topics.map((topic) => (
                      <span key={topic} className="rounded-md border border-white/10 px-2 py-1 text-xs text-gray-300">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-sm text-gray-400">{domain.focus}</p>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-gray-800 bg-gray-950/70 p-7"
          >
            <h3 className="mb-2 text-2xl font-semibold">Global Communication</h3>
            <p className="mb-5 text-sm text-gray-400">
              International collaboration profile for technical teams.
            </p>

            <ul className="space-y-3 text-sm text-gray-300">
              {globalCommunication.map((item) => (
                <li key={item} className="rounded-lg border border-white/10 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs leading-relaxed text-gray-500">{globalCommunicationNote}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
