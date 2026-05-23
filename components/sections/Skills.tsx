"use client"

import { motion } from "framer-motion"
import { skillCategories } from "@/data/skills"
import TechIconBadge from "@/components/ui/TechIcon"

export default function Skills() {
  return (
    <section id="skills" className="bg-transparent px-6 py-32 text-white">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Core Expertise
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-gray-800 bg-gray-950 p-6 transition hover:border-white"
            >
              <h3 className="mb-4 text-xl font-semibold">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <TechIconBadge key={item} name={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
