"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  value: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const formatter = new Intl.NumberFormat("en-US");

export default function CountUp({
  value,
  duration = 1.8,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const shouldReduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);

  const finalText = `${prefix}${formatter.format(value)}${suffix}`;

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setCurrent(value);
      return;
    }

    const controls = animate(0, value, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate(latest) {
        setCurrent(Math.round(latest));
      },
      onComplete() {
        setCurrent(value);
      },
    });

    return () => controls.stop();
  }, [isInView, shouldReduceMotion, value, duration, delay]);

  const displayText = `${prefix}${formatter.format(current)}${suffix}`;

  if (shouldReduceMotion) {
    return <span className={className}>{finalText}</span>;
  }

  return (
    <span ref={ref} className={`inline-grid ${className}`}>
      <span className="col-start-1 row-start-1 invisible" aria-hidden="true">
        {finalText}
      </span>
      <span className="col-start-1 row-start-1" aria-hidden="true">
        {displayText}
      </span>
      <span className="sr-only">{finalText}</span>
    </span>
  );
}
