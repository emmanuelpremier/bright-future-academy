"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { school } from "@/lib/school";
import Container from "@/components/ui/Container";

const DWELL_MS = 6000;
const SWIPE_THRESHOLD = 60;

const testimonials = school.testimonials;

const slideTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isKeyboardFocusWithin, setIsKeyboardFocusWithin] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [isManual, setIsManual] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  const current = testimonials[index];

  const paused =
    isPaused ||
    isHovered ||
    isKeyboardFocusWithin ||
    !isDocumentVisible ||
    !isInView ||
    Boolean(shouldReduceMotion);

  const ariaLive = !paused && !isManual ? "off" : "polite";

  useEffect(() => {
    const handleVisibilityChange = () => setIsDocumentVisible(!document.hidden);
    handleVisibilityChange();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (paused) return;

    const timeout = window.setTimeout(() => {
      setIsManual(false);
      setDirection(1);
      setIndex((previous) => (previous + 1) % testimonials.length);
    }, DWELL_MS);

    return () => window.clearTimeout(timeout);
  }, [index, paused]);

  const goTo = useCallback(
    (target: number, forcedDirection?: 1 | -1) => {
      setDirection(forcedDirection ?? (target > index ? 1 : -1));
      setIndex(target);
      setIsManual(true);
    },
    [index]
  );

  const moveBy = useCallback((step: 1 | -1) => {
    setDirection(step);
    setIndex(
      (previous) =>
        (previous + step + testimonials.length) % testimonials.length
    );
    setIsManual(true);
  }, []);

  const goNext = useCallback(() => {
    moveBy(1);
  }, [moveBy]);

  const goPrevious = useCallback(() => {
    moveBy(-1);
  }, [moveBy]);

  const togglePause = () => {
    setIsPaused((value) => !value);
    setIsManual(true);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      goNext();
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      goPrevious();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrevious();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  const variants = shouldReduceMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        enter: (slideDirection: number) => ({
          x: slideDirection > 0 ? 48 : -48,
          opacity: 0,
        }),
        center: { x: 0, opacity: 1 },
        exit: (slideDirection: number) => ({
          x: slideDirection > 0 ? -48 : 48,
          opacity: 0,
        }),
      };

  const transition = shouldReduceMotion ? { duration: 0.3 } : slideTransition;

  const quoteClasses =
    "text-xl md:text-2xl font-heading font-normal text-navy leading-relaxed max-w-3xl mx-auto";
  const controlClasses =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors duration-300 hover:border-[#9A6B2F] hover:text-[#9A6B2F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A6B2F]/50 focus-visible:ring-offset-2 motion-reduce:transition-none";

  return (
    <section
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Parent testimonials"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onPointerCancel={() => setIsHovered(false)}
      onPointerDown={() => setIsKeyboardFocusWithin(false)}
      onFocusCapture={(event) => {
        const target = event.target as HTMLElement;
        setIsKeyboardFocusWithin(target.matches(":focus-visible"));
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsKeyboardFocusWithin(false);
        }
      }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="py-24 lg:py-32 bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A6B2F]/50 focus-visible:ring-offset-2"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div
            aria-hidden="true"
            className="text-6xl text-gold font-heading font-normal mb-4"
          >
            &ldquo;
          </div>

          <div className="grid" aria-live={ariaLive} aria-atomic="true">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                aria-hidden="true"
                className="invisible col-start-1 row-start-1"
              >
                <blockquote className={quoteClasses}>{testimonial.quote}</blockquote>
                <div className="mt-8">
                  <p className="text-navy font-semibold">{testimonial.name}</p>
                  <p className="text-slate text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}

            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${testimonials.length}`}
                drag={shouldReduceMotion ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                dragSnapToOrigin
                onDragEnd={handleDragEnd}
                className="col-start-1 row-start-1 w-full touch-pan-y"
              >
                <blockquote className={quoteClasses}>{current.quote}</blockquote>
                <div className="mt-8">
                  <p className="text-navy font-semibold">{current.name}</p>
                  <p className="text-slate text-sm">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous testimonial"
              className={controlClasses}
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>

            <div className="flex items-center gap-1">
              {testimonials.map((testimonial, dotIndex) => {
                const isActive = dotIndex === index;
                return (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => goTo(dotIndex)}
                    aria-label={`Go to testimonial ${dotIndex + 1}`}
                    aria-current={isActive ? "true" : undefined}
                    className="flex h-10 w-7 shrink-0 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A6B2F]/50 focus-visible:ring-offset-2"
                  >
                    <span
                      aria-hidden="true"
                      className={`h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                        isActive
                          ? "w-6 bg-[#9A6B2F]"
                          : "w-2 bg-navy/20 hover:bg-navy/40"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className={controlClasses}
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={togglePause}
              aria-label={isPaused ? "Play testimonials" : "Pause testimonials"}
              className={controlClasses}
            >
              {isPaused ? (
                <Play size={16} aria-hidden="true" />
              ) : (
                <Pause size={16} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
