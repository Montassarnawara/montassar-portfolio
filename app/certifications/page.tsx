"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { attestationDocuments, certificateDocuments } from "@/data/experience"
import ChatWidget from "@/components/ui/ChatWidget"
import Footer from "@/components/ui/Footer"
import GalaxyBackground from "@/components/ui/GalaxyBackground"
import Navbar from "@/components/ui/Navbar"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export default function CertificationsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05070f] text-white">
      <GalaxyBackground />
      <Navbar />

      <main className="relative z-10 px-6 pt-32 pb-24">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900/80 to-slate-950 p-10"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Credential Vault</p>
            <h1 className="mt-4 text-4xl font-semibold">Certifications and Attestations</h1>
            <p className="mt-4 max-w-2xl text-sm text-gray-300">
              Complete archive of professional certifications and internship attestations,
              each linked to its official PDF document.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-white/60"
              >
                Back to portfolio
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-amber-200/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-amber-100 transition hover:border-amber-200 hover:bg-amber-200 hover:text-black"
              >
                Contact
              </Link>
            </div>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-black/50 p-8"
            >
              <motion.div variants={itemVariants} className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Certifications</h2>
                  <p className="mt-2 text-sm text-gray-400">
                    {certificateDocuments.length} credentials across AI, data, and infrastructure.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="mt-6 grid gap-4 sm:grid-cols-2"
              >
                {certificateDocuments.map((certificate) => (
                  <motion.article
                    key={certificate.file}
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-black/70 to-black/40 p-4 transition hover:border-white/30"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">{certificate.title}</p>
                      <p className="mt-2 text-xs uppercase tracking-wide text-amber-200/80">
                        {certificate.category}
                      </p>
                    </div>
                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-300 transition group-hover:text-white"
                    >
                      Open PDF
                    </a>
                  </motion.article>
                ))}
              </motion.div>
            </motion.section>

            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-black/50 p-8"
            >
              <motion.div variants={itemVariants} className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Internship Attestations</h2>
                  <p className="mt-2 text-sm text-gray-400">
                    Verified internship completions and official attestations.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={containerVariants} className="mt-6 space-y-4">
                {attestationDocuments.map((attestation) => (
                  <motion.article
                    key={attestation.file}
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group rounded-2xl border border-white/10 bg-gradient-to-br from-black/70 to-black/40 p-5 transition hover:border-white/30"
                  >
                    <p className="text-sm font-semibold text-white">{attestation.title}</p>
                    <p className="mt-2 text-sm text-gray-400">
                      {attestation.organization} · {attestation.period}
                    </p>
                    <a
                      href={attestation.file}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex text-xs font-semibold uppercase tracking-wide text-gray-300 transition group-hover:text-white"
                    >
                      Open PDF
                    </a>
                  </motion.article>
                ))}
              </motion.div>
            </motion.section>
          </div>
        </div>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  )
}
