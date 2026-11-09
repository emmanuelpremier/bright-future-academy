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
  direction?: "left" | "right";
  fade?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  trigger = "scroll",
  duration,
  direction,
  fade = false,
}: RevealProps) {
  const ref = useRef(null);
  const hasDirection = direction === "left" || direction === "right";
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: hasDirection ? 0.4 : "some",
  });
  const shouldReduceMotion = useReducedMotion();

  const isLoad = trigger === "load";
  const resolvedDuration = duration ?? (isLoad || hasDirection ? (hasDirection ? 0.9 : 1.0) : 0.7);
  const resolvedDelay = isLoad ? (delay || 0.15) : delay;

  let initial: { opacity: number; x?: number; y?: number } = { opacity: 0, y: isLoad ? (y === 24 ? 72 : y) : y };
  let animateTo: { opacity: number; x?: number; y?: number } = { opacity: 1, y: 0 };

  if (hasDirection) {
    initial = { opacity: 0, x: direction === "right" ? 40 : -40 };
    animateTo = { opacity: 1, x: 0 };
  } else if (fade) {
    initial = { opacity: 0 };
    animateTo = { opacity: 1 };
  }

  if (shouldReduceMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isLoad || isInView ? animateTo : initial}
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
