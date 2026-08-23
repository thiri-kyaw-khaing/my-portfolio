"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 bg-white/70 text-primary-600 transition-all hover:scale-110 hover:bg-primary-50 dark:border-primary-500/30 dark:bg-white/5 dark:text-primary-300 dark:hover:bg-primary-500/10"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
