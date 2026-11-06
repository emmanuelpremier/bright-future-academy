"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  trigger?: "scroll" | "load";
  duration?: number;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  trigger = "scroll",
  duration,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const isLoad = trigger === "load";
  const resolvedDuration = duration ?? (isLoad ? 1.0 : 0.7);
  const resolvedDelay = isLoad ? (delay || 0.15) : delay;
  const resolvedY = isLoad ? (y === 24 ? 72 : y) : y;

  if (shouldReduceMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: resolvedY }}
      animate={isLoad || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: resolvedY }}
      transition={{
        duration: resolvedDuration,
        delay: resolvedDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
