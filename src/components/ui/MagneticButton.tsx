"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
  download?: boolean;
  type?: "button" | "submit";
  ariaLabel?: string;
};

/** Button that subtly follows the cursor and glows on hover. */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  download,
  type = "button",
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  function handleMouseMove(e: MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-semibold text-sm sm:text-base transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-primary-500 to-orange-400 text-white shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:brightness-110"
      : "border-2 border-primary-400 text-primary-600 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-500/10";

  const content = href ? (
    <a href={href} download={download} onClick={onClick} aria-label={ariaLabel} className={`${base} ${styles}`}>
      {children}
    </a>
  ) : (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className={`${base} ${styles}`}>
      {children}
    </button>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {content}
    </motion.div>
  );
}
