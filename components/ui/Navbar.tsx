"use client"

import { motion } from "framer-motion"

const links = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Credentials", href: "/#credentials" },
  { label: "Contact", href: "/#contact" },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto mt-4 flex w-[min(1024px,92vw)] items-center justify-between rounded-full border border-white/15 bg-black/60 px-4 py-3 backdrop-blur-md md:px-6">
        <a href="#top" className="text-sm font-semibold tracking-wide text-white md:text-base">
          Montassar Nawara
        </a>

        <div className="hidden items-center gap-5 text-sm text-gray-300 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/#contact"
          className="rounded-full border border-white/25 px-4 py-2 text-xs font-medium text-white transition hover:bg-white hover:text-black md:text-sm"
        >
          Hire Me
        </a>
      </nav>
    </motion.header>
  )
}
