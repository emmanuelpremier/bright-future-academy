"use client";

import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import { GraduationCap } from "../../components/about/icons";
import Reveal from "../../components/motion/Reveal";
import { MILESTONES, HERO_DATA, MISSION_STATEMENT, VALUES, LEADERS, CAMPUS_IMAGES } from "../../components/about/data";
import Button from "../../components/ui/Button";

export default function AboutPage() {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div ref={ref}>{null}</div>;
  }

  return (
    <div ref={ref}>

      {/* ---- Page header ---- */}
      <section className="py-16 md:py-20 lg:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3">
              {HERO_DATA.label}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-navy mb-5 leading-tight">
              {HERO_DATA.title}
            </h1>
            <p className="text-base md:text-lg text-ink/80 max-w-2xl mx-auto leading-relaxed">
              {HERO_DATA.intro}
            </p>
          </Reveal>
          <div className="border-t border-border mt-8 pt-6 max-w-xl mx-auto" />
        </div>
      </section>

      {/* ---- Our story ---- */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal className="lg:sticky lg:top-24 self-start">
              <h2 className="text-2xl md:text-3xl font-heading text-navy mb-6">Our story</h2>
              <div className="space-y-5 text-ink/80 leading-relaxed">
                <p>
                  Bright Future Academy opened its doors in 2006 with just a handful of Nursery pupils in a single
                  classroom. The founding team believed that a private school could be both affordable and rigorous,
                  and that small classes were the only way to make it work.
                </p>
                <p>
                  Growth followed. A second building let us add Primary 1, then Primary 6. A dedicated science block
                  followed in 2014, and the first secondary set sat their final exams in 2020. By 2026 the school runs
                  from Nursery to SSS 3 with a waiting list in most classes.
                </p>
                <p>
                  Behind the numbers are the teachers who mark every book, make the phone calls and stay late to help a
                  child who has not understood. That is the promise that has kept the school small, and it is the
                  promise we are keeping.
                </p>
              </div>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={0.1}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-sand group">
                  <Image
                    src="/images/campus.webp"
                    alt="The school campus with buildings and playing fields"
                    fill
                    className="object-cover transition-transform duration-[700ms] group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="space-y-0 border-t border-border pt-6">
                  {MILESTONES.map((item, index) => (
                    <div key={index} className="flex gap-4 py-3 first:pt-0">
                      <span className="text-xs font-heading text-gold font-semibold min-w-[56px] leading-none">
                        {item.year}
                      </span>
                      <span className="text-sm text-ink/80 leading-relaxed">{item.event}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
      {/* ---- Mission and values ---- */}
      <section className="py-16 md:py-20 lg:py-24 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-gold font-medium mb-4">Mission</p>
            <p className="text-xl md:text-2xl font-heading text-navy leading-relaxed mb-8">
              {MISSION_STATEMENT}
            </p>
          </Reveal>

          <div className="space-y-0 border-t border-border pt-8">
            {VALUES.map((value, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="flex gap-5 py-5 first:pt-0 border-b border-border last:border-0">
                  <span className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-navy text-sm font-heading text-cream font-bold">
                    {value.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-heading text-navy mb-1">{value.title}</h3>
                    <p className="text-sm text-ink/80 leading-relaxed">{value.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

            </div>
          </div>
        </div>
      </section>

      {/* ---- Leadership ---- */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-heading text-navy mb-4 leading-tight">
                The people parents actually meet
              </h2>
              <p className="text-ink/80 mb-10 max-w-lg leading-relaxed">
                Every day our leaders are in the corridor, on the phone and in the classroom. This is who you will sit
                across from when you register your child.
              </p>
            </Reveal>

            {LEADERS.map((leader, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="flex gap-5 sm:gap-8 items-start">
                  <div className={`flex-shrink-0 ${leader.className ?? ""}`}>
                    <div className="bg-sand rounded-lg aspect-[3/4] flex items-center justify-center overflow-hidden">
                      <GraduationCap className="w-10 h-10 text-gold" />
                      <span className="absolute bottom-1 left-1 right-1 text-center text-xs font-heading text-navy font-semibold">
                        {leader.initials}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-heading text-navy leading-tight">{leader.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-gold font-medium mb-2">{leader.role}</p>
                    <p className="text-sm text-ink/80">{leader.subject}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Campus and facilities ---- */}
      <section className="py-16 md:py-20 lg:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-heading text-navy mb-4 leading-tight">Campus and facilities</h2>
            <p className="text-ink/80 mb-10 max-w-2xl leading-relaxed">
              Bright Future spans three levels. Children start in the early years room, move into the primary block
              and end their school careers in the secondary building, with the laboratory and the pitch available to
              everyone.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {CAMPUS_IMAGES.map((image, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-sand">
                  <Image
                    src={`/images/${image.src}.webp`}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-[700ms] group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent rounded-lg" />
                  <p className="absolute bottom-0 left-0 right-0 p-4 text-xs uppercase tracking-widest text-cream font-medium">
                    {image.caption}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Closing row ---- */}
      <section className="py-16 md:py-20 lg:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <Reveal>
            <div className="border-t border-border pt-12 mb-10" />
            <h2 className="text-2xl md:text-3xl font-heading text-navy mb-4 leading-tight">
              Come and see it in person
            </h2>
            <p className="text-ink/80 mb-8 max-w-lg leading-relaxed">
              Saturday campus tours run every week. You will meet the leadership team, walk the classrooms and see the
              early years room before you decide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/admissions" variant="primary">
                Apply Now
              </Button>
              <Button href="/contact" variant="outline">
                Book a Campus Tour
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
