"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="bg-transparent px-6 py-32 text-white">
      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Let&apos;s Build Intelligent Systems Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-10"
        >
          I am currently open to internship opportunities in AI systems,
          robotics, and distributed intelligent infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:montasar.nawara@gmail.com"
            className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
          >
            Email
          </a>

          <a
            href="https://github.com/Montassarnawara"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-gray-600 px-6 py-3 transition hover:bg-gray-900"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/montassar-nawara-963a87350"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-gray-600 px-6 py-3 transition hover:bg-gray-900"
          >
            LinkedIn
          </a>
        </motion.div>

      </div>
    </section>
  )
}
