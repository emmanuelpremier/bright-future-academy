import type { Metadata } from "next";
import { CircleCheck, FileText } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import AdmissionsForm from "@/components/admissions/AdmissionsForm";
import AdmissionsFaq from "@/components/admissions/AdmissionsFaq";
import { admissionsPage, school } from "@/lib/school";

export const metadata: Metadata = {
  title: "Admissions | Bright Future Academy",
  description:
    "How to apply to Bright Future Academy in Lekki, Lagos: the five-step admissions process, termly fees in Naira, enrolment requirements and answers to common questions.",
};

const content = admissionsPage;

export default function AdmissionsPage() {
  return (
    <>
      <section
        aria-labelledby="admissions-heading"
        className="border-b border-border bg-sand pb-16 pt-24 lg:pb-24 lg:pt-28"
      >
        <Container>
          <Reveal fade duration={0.8}>
            <SectionLabel className="mb-6">{content.header.label}</SectionLabel>
            <h1
              id="admissions-heading"
              className="max-w-3xl font-heading text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-navy sm:text-5xl lg:text-[56px]"
            >
              {content.header.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
              {content.header.intro}
            </p>
          </Reveal>
        </Container>
      </section>

      <section
        id="process"
        aria-labelledby="process-heading"
        className="scroll-mt-28 bg-cream py-16 lg:py-24"
      >
        <Container>
          <Reveal fade duration={0.7}>
            <SectionLabel className="mb-5">{content.process.label}</SectionLabel>
            <h2
              id="process-heading"
              className="font-heading text-3xl font-semibold tracking-[-0.02em] text-navy sm:text-4xl"
            >
              {content.process.title}
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
            {content.process.steps.map((step, index) => (
              <li key={step.number} className="border-t border-[#D8C8A7] pt-6">
                <Reveal delay={index * 0.08} duration={0.7}>
                  <span className="font-heading text-3xl font-semibold text-gold">
                    {step.number}
                  </span>
                  <p className="mt-3 font-heading text-lg font-medium text-navy">
                    {step.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {step.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        id="fees"
        aria-labelledby="fees-heading"
        className="scroll-mt-28 bg-sand py-16 lg:py-24"
      >
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1.75fr_1fr]">
            <div>
              <Reveal fade duration={0.7}>
                <SectionLabel className="mb-5">{content.fees.label}</SectionLabel>
                <h2
                  id="fees-heading"
                  className="font-heading text-3xl font-semibold tracking-[-0.02em] text-navy sm:text-4xl"
                >
                  {content.fees.title}
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-slate">
                  {content.fees.intro}
                </p>
              </Reveal>

              <Reveal fade delay={0.1} duration={0.8}>
                <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white">
                  <table className="w-full text-left">
                    <caption className="sr-only">{content.fees.caption}</caption>
                    <thead className="bg-[#EEF2F7]">
                      <tr>
                        <th
                          scope="col"
                          className="w-[58%] px-6 py-4 text-xs font-semibold uppercase tracking-wide text-navy"
                        >
                          {content.fees.levelColumn}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-navy"
                        >
                          {content.fees.tuitionColumn}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {content.fees.rows.map((row) => (
                        <tr key={row.level} className="border-t border-border">
                          <th scope="row" className="px-6 py-4 align-top">
                            <span className="block text-sm font-semibold text-navy">
                              {row.level}
                            </span>
                            <span className="mt-1 block text-xs text-muted">
                              {row.note}
                            </span>
                          </th>
                          <td className="whitespace-nowrap px-6 py-4 align-top font-heading text-lg font-medium text-gold">
                            {row.tuition}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            </div>

            <Reveal fade delay={0.1} duration={0.8}>
              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <h3
                  id="fees-note-title"
                  className="font-heading text-lg font-medium tracking-[-0.02em] text-navy"
                >
                  {content.fees.noteTitle}
                </h3>
                <ul className="mt-6 space-y-4">
                  {content.fees.notes.map((note) => (
                    <li key={note} className="flex items-start gap-3 text-sm leading-relaxed text-slate">
                      <CircleCheck
                        size={16}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-gold"
                      />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section
        id="requirements"
        aria-labelledby="requirements-heading"
        className="scroll-mt-28 bg-cream py-16 lg:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <Reveal fade duration={0.7}>
              <SectionLabel className="mb-5">{content.requirements.label}</SectionLabel>
              <h2
                id="requirements-heading"
                className="max-w-[18rem] font-heading text-3xl font-semibold tracking-[-0.02em] text-navy sm:text-4xl"
              >
                {content.requirements.title}
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-slate">
                {content.requirements.intro}
              </p>
            </Reveal>

            <Reveal fade delay={0.1} duration={0.8}>
              <ul className="divide-y divide-border border-y border-border">
                {content.requirements.items.map((item) => (
                  <li key={item} className="flex items-start gap-4 py-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-tan">
                      <FileText size={18} aria-hidden="true" className="text-gold" />
                    </span>
                    <span className="text-sm leading-relaxed text-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="apply-title faq-heading"
        className="bg-sand py-16 lg:py-24"
      >
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal fade duration={0.8}>
              <AdmissionsForm />
            </Reveal>

            <div id="faq" className="scroll-mt-28">
              <Reveal fade duration={0.8}>
                <SectionLabel className="mb-5">{content.faq.label}</SectionLabel>
                <h2
                  id="faq-heading"
                  className="font-heading text-3xl font-semibold tracking-[-0.02em] text-navy sm:text-4xl"
                >
                  {content.faq.title}
                </h2>
                <div className="mt-8">
                  <AdmissionsFaq />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="closing-heading" className="bg-cream pb-16 pt-4 lg:pb-24">
        <Container>
          <Reveal fade duration={0.8}>
            <div className="mx-auto max-w-4xl rounded-3xl bg-navy px-8 py-14 text-center md:px-16 md:py-20">
              <h2
                id="closing-heading"
                className="font-heading text-3xl font-medium tracking-[-0.02em] text-white"
              >
                {content.closing.title}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/75">
                {content.closing.beforePhone}{" "}
                <a
                  href={`tel:${school.phones[0].replace(/\s/g, "")}`}
                  className="rounded-sm text-white underline-offset-4 hover:text-[#B8893B] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893B] focus-visible:ring-offset-2"
                >
                  {school.phones[0]}
                </a>
                , {school.hours}
                {content.closing.afterPhone}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
