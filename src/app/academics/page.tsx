import type { Metadata } from "next";
import { academicsPage } from "@/lib/school";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import AcademicsLevel from "@/components/academics/AcademicsLevel";
import AcademicsClosing from "@/components/academics/AcademicsClosing";

export const metadata: Metadata = {
  title: "Academics | Bright Future Academy",
  description:
    "Our Nigerian curriculum runs from Pre-Nursery to SSS 3 at a private school in Lekki, Lagos, preparing students for Common Entrance, BECE, WAEC and NECO.",
};

export default function AcademicsPage() {
  return (
    <>
      <section className="bg-sand py-24">
        <Container>
          <Reveal>
            <SectionLabel className="mb-6">{academicsPage.headerLabel}</SectionLabel>
            <h1 className="mb-6 max-w-2xl font-heading text-3xl font-semibold leading-tight text-navy sm:text-4xl md:text-5xl">
              {academicsPage.headerTitle}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate">
              {academicsPage.headerIntro}
            </p>
          </Reveal>
        </Container>
      </section>

      <div className="bg-cream">
        {academicsPage.levels.map((level, index) => (
          <AcademicsLevel
            key={level.id}
            level={level}
            index={index}
            teachingLabel={academicsPage.teachingLabel}
            subjectsLabel={academicsPage.subjectsLabel}
          />
        ))}
      </div>

      <AcademicsClosing closing={academicsPage.closing} />
    </>
  );
}
