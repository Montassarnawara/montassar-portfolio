"use client"

import { motion } from "framer-motion"
import { profile } from "@/data/profile"

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-6 pb-16 pt-36 text-white md:pt-40">
      <div className="max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold leading-tight md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-xl text-gray-300 md:text-2xl"
        >
          {profile.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-6 max-w-3xl text-lg text-gray-400"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {profile.focus.slice(0, 4).map((item) => (
            <span key={item} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-gray-200">
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-gray-600 px-6 py-3 transition hover:bg-gray-900"
          >
            Contact
          </a>

          <a
            href="https://github.com/Montassarnawara"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-gray-600 px-6 py-3 transition hover:bg-gray-900"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
