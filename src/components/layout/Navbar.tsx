"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 24));
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        aria-label="Main navigation"
        className={`flex w-full max-w-4xl items-center justify-between rounded-full border px-5 py-2.5 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-primary-200/70 bg-white/85 shadow-lg shadow-primary-500/10 dark:border-primary-500/20 dark:bg-[#1f1810]/85"
            : "border-transparent bg-white/50 dark:bg-white/5"
        }`}
      >
        <a
          href="#home"
          className="font-heading whitespace-nowrap text-base font-bold text-primary-600 dark:text-primary-300 sm:text-lg"
        >
          Thiri Kyaw Khaing<span className="text-orange-400">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-1.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:text-neutral-200 dark:hover:bg-primary-500/10 dark:hover:text-primary-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-primary-600 dark:text-primary-300 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute top-16 w-[calc(100%-2rem)] max-w-3xl rounded-3xl border border-primary-200/70 bg-white/95 p-4 shadow-xl backdrop-blur-xl dark:border-primary-500/20 dark:bg-[#1f1810]/95 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-2.5 font-medium text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:text-neutral-200 dark:hover:bg-primary-500/10"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
