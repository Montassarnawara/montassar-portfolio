"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  academicFormation,
  attestationDocuments,
  certificateDocuments,
  globalCommunication,
  globalCommunicationNote,
  researchPublications,
  technicalLearningPath,
} from "@/data/experience"

export default function Credentials() {
  const featuredCertificates = certificateDocuments.filter((certificate) => certificate.featured)

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
                <motion.article
                  key={domain.domain}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl border border-white/10 p-4"
                >
                  <p className="text-base font-medium text-white">{domain.domain}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {domain.topics.map((topic) => (
                      <span key={topic} className="rounded-md border border-white/10 px-2 py-1 text-xs text-gray-300">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-sm text-gray-400">{domain.focus}</p>
                </motion.article>
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900/80 to-slate-950 p-8"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
          />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Verified</p>
                <h3 className="mt-2 text-2xl font-semibold">Certifications and Attestations</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Selected credentials stay on the homepage, with the full archive on a dedicated page.
                </p>
              </div>

              <Link
                href="/certifications"
                className="inline-flex items-center gap-2 rounded-full border border-amber-200/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-amber-100 transition hover:border-amber-200 hover:bg-amber-200 hover:text-black"
              >
                View all credentials
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-xs uppercase tracking-wide text-gray-400">Featured certifications</p>
                <ul className="mt-4 space-y-3">
                  {featuredCertificates.map((certificate) => (
                    <motion.li
                      key={certificate.file}
                      whileHover={{ y: -3, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-black/30 p-4 transition hover:border-white/30"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">{certificate.title}</p>
                        <p className="mt-1 text-xs uppercase tracking-wide text-amber-200/80">
                          {certificate.category}
                        </p>
                      </div>
                      <a
                        href={certificate.file}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold uppercase tracking-wide text-gray-300 transition group-hover:text-white"
                      >
                        PDF
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-xs uppercase tracking-wide text-gray-400">Internship attestations</p>
                <ul className="mt-4 space-y-3">
                  {attestationDocuments.map((attestation) => (
                    <motion.li
                      key={attestation.file}
                      whileHover={{ y: -3, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-black/30 p-4 transition hover:border-white/30"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">{attestation.title}</p>
                        <p className="mt-1 text-xs text-gray-400">
                          {attestation.organization} · {attestation.period}
                        </p>
                      </div>
                      <a
                        href={attestation.file}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold uppercase tracking-wide text-gray-300 transition group-hover:text-white"
                      >
                        PDF
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
