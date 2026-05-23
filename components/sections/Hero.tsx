"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { profile } from "@/data/profile"

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pb-16 pt-36 text-white md:pt-40">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -2, scale: 1.01 }}
              className="text-5xl font-bold leading-tight transition md:text-7xl hover:bg-gradient-to-r hover:from-amber-200 hover:via-cyan-200 hover:to-blue-300 hover:bg-clip-text hover:text-transparent"
            >
              {profile.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ y: -2 }}
              className="mt-4 text-xl text-gray-300 transition hover:text-white md:text-2xl"
            >
              {profile.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -2 }}
              className="mx-auto mt-6 max-w-3xl text-lg text-gray-400 transition hover:text-gray-200 lg:mx-0"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              {profile.focus.slice(0, 4).map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ y: -2, scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-gray-200 transition hover:border-amber-200/60 hover:bg-white/10 hover:text-white"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-gradient-to-r hover:from-amber-100 hover:via-white hover:to-cyan-100"
              >
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl border border-gray-600 px-6 py-3 transition hover:border-white/70 hover:bg-white/5 hover:text-white"
              >
                Contact
              </motion.a>

              <motion.a
                href="https://github.com/Montassarnawara"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl border border-gray-600 px-6 py-3 transition hover:border-cyan-300/70 hover:bg-cyan-400/10 hover:text-cyan-100"
              >
                GitHub
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="relative mx-auto flex h-[260px] w-[260px] items-center justify-center md:h-[300px] md:w-[300px] lg:ml-auto"
          >
            <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-amber-200/30 via-cyan-300/20 to-blue-400/30 blur-2xl" />
            <div className="absolute inset-0 rounded-full border border-white/10 bg-black/30" />
            <div className="relative rounded-full border border-white/30 bg-black/40 p-1.5 shadow-2xl">
              <Image
                src="/images/montassar-portrait.jpg"
                alt="Montassar Nawara portrait"
                width={420}
                height={420}
                className="h-[250px] w-[250px] rounded-full object-cover md:h-[290px] md:w-[290px]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
