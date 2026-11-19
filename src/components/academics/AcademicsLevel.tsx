import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import type { AcademicsLevelContent } from "@/lib/school";

interface AcademicsLevelProps {
  level: AcademicsLevelContent;
  index: number;
  teachingLabel: string;
  subjectsLabel: string;
}

export default function AcademicsLevel({
  level,
  index,
  teachingLabel,
  subjectsLabel,
}: AcademicsLevelProps) {
  const imageOnRight = index % 2 === 1;
  const textDirection: "left" | "right" = imageOnRight ? "left" : "right";

  return (
    <section
      id={level.id}
      aria-labelledby={`${level.id}-heading`}
      className="scroll-mt-28 overflow-x-clip py-20"
    >
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[36rem_1fr] lg:gap-16">
          <Reveal className={imageOnRight ? "lg:order-2" : "lg:order-1"}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-cream">
              <Image
                src={level.image}
                alt={level.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 576px, 100vw"
              />
            </div>
          </Reveal>

          <div className={imageOnRight ? "lg:order-1" : "lg:order-2"}>
            <Reveal fade delay={0.2} duration={0.9}>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-gold/40 bg-pill-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
                  {level.ages}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate">
                  {level.names}
                </span>
              </div>
            </Reveal>

            <Reveal direction={textDirection} duration={0.9}>
              <h2
                id={`${level.id}-heading`}
                className="mb-4 font-heading text-3xl font-semibold text-navy"
              >
                {level.title}
              </h2>
            </Reveal>

            <Reveal fade delay={0.2} duration={0.9}>
              <p className="mb-8 text-slate leading-relaxed">
                {level.paragraph}
              </p>

              <div className="grid gap-8 sm:grid-cols-[1.1fr_1fr]">
                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {teachingLabel}
                  </h3>
                  <ul className="space-y-3">
                    {level.teaching.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-slate"
                      >
                        <Check
                          size={16}
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-gold"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {subjectsLabel}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {level.subjects.map((subject) => (
                      <li
                        key={subject}
                        className="rounded-full border border-navy/10 bg-white px-3 py-1.5 text-xs text-navy"
                      >
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
