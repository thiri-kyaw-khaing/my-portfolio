"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="What I Specialize In"
        title="Skills & Expertise"
        subtitle="From pixels to processes — the tools and practices I use to ship thoughtful products."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={0.1 * gi} className="h-full">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glow-hover flex h-full flex-col rounded-3xl border border-primary-100 bg-white/70 p-6 backdrop-blur dark:border-primary-500/15 dark:bg-white/[0.04]"
            >
              <div
                className={`font-heading mb-5 inline-block self-start rounded-full bg-gradient-to-r ${group.accent} px-4 py-1.5 text-sm font-bold text-white shadow-md`}
              >
                {group.title}
              </div>
              <ul className="flex flex-col gap-4">
                {group.skills.map((skill, si) => (
                  <li key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-xs text-primary-500 dark:text-primary-300">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-primary-100 dark:bg-primary-500/15">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 * si, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${group.accent}`}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
