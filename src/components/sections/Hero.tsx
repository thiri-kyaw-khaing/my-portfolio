"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

const name = siteConfig.name;

const letterContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.3 } },
};

const letter = {
  hidden: { opacity: 0, y: 24, rotateX: 60 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      {/* Ambient gradient blobs */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary-300/40 blur-3xl dark:bg-primary-600/20" />
        <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-amber-200/30 blur-3xl dark:bg-orange-500/15" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl dark:bg-orange-400/10" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 inline-block rounded-full border border-primary-200 bg-white/60 px-4 py-1.5 text-sm font-medium text-primary-600 backdrop-blur dark:border-primary-500/30 dark:bg-white/5 dark:text-primary-300"
          >
            👋 Hello, welcome to my portfolio
          </motion.p>

          <motion.h1
            variants={letterContainer}
            initial="hidden"
            animate="visible"
            className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
            aria-label={name}
          >
            {"I'm "}
            <span className="gradient-text inline-block">
              {name.split("").map((ch, i) => (
                <motion.span key={i} variants={letter} className="inline-block" style={{ whiteSpace: "pre" }}>
                  {ch}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-4 font-heading text-lg font-semibold text-neutral-700 dark:text-neutral-200 sm:text-xl"
          >
            {siteConfig.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.25 }}
            className="mx-auto mt-5 max-w-xl text-neutral-600 dark:text-neutral-300 lg:mx-0"
          >
            {siteConfig.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <MagneticButton href={siteConfig.resumeUrl} download ariaLabel="Download resume">
              <Download size={18} /> Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline" ariaLabel="Go to contact section">
              <Mail size={18} /> Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        {/* Profile visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="relative mx-auto"
        >
          <div className="animate-float relative h-64 w-64 sm:h-80 sm:w-80">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary-400 via-orange-300 to-amber-200 opacity-80 blur-xl"
            />
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/60 shadow-2xl shadow-primary-500/30 dark:border-white/10">
              <Image
                src="/profile.jpg"
                alt="Thiri Kyaw Khaing"
                fill
                priority
                sizes="(min-width: 640px) 20rem, 16rem"
                className="scale-[1.8] object-cover object-[52%_62%] origin-[52%_68%]"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 rounded-2xl border border-primary-100 bg-white px-4 py-2 text-sm font-semibold text-primary-600 shadow-lg dark:border-primary-500/20 dark:bg-[#1f1810] dark:text-primary-300">
              ✨ Open to work
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 2 }, y: { repeat: Infinity, duration: 1.8 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-400"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
