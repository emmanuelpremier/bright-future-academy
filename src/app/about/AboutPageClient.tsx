"use client";

import Image from "next/image";
import { BookOpen, Compass, HeartHandshake, Sparkles } from "lucide-react";
import { aboutPage } from "@/lib/school";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

const ICONS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  BookOpen,
  Compass,
  HeartHandshake,
  Sparkles,
};

export function AboutPageClient() {
  return (
    <>
      {/* ---- Page Header ---- */}
      <section aria-labelledby="page-header-heading" className="bg-sand py-24">
        <Container>
          <Reveal>
            <SectionLabel className="block mb-6">ABOUT THE SCHOOL</SectionLabel>
            <h1
              id="page-header-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-heading text-navy max-w-2xl leading-tight mb-6"
            >
              Twenty years of steady,<br />
              serious schooling in Lekki
            </h1>
            <p className="text-slate max-w-2xl leading-relaxed">
              {aboutPage.headerIntro}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ---- Our Story ---- */}
      <section aria-labelledby="story-heading" className="bg-cream py-24">
        <Container>
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="space-y-6">
                <SectionLabel className="block mb-4">OUR STORY</SectionLabel>
                <h2
                  id="story-heading"
                  className="text-2xl md:text-3xl font-heading text-navy leading-tight mb-6"
                >
                  {aboutPage.storyTitle}
                </h2>
                {aboutPage.storyParagraphs.map((p, i) => (
                  <p key={i} className="text-slate leading-relaxed mb-6">
                    {p}
                  </p>
                ))}
              </div>
              <div className="max-w-[576px] w-full aspect-[5/4] rounded-3xl overflow-hidden mx-auto lg:mx-0">
                <div className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-3xl border border-[#9A6B2F]"></div>
                <Image
                  src="/images/campus-palms.jpg"
                  alt="Campus view with palm trees lining the main drive"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 576px"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---- What We Stand For ---- */}
      <section aria-labelledby="standfor-heading" className="bg-[#0F2A44] py-24 text-white">
        <Container>
          <Reveal>
            <SectionLabel className="block mb-8">WHAT WE STAND FOR</SectionLabel>
            <h2
              id="standfor-heading"
              className="text-2xl md:text-3xl font-heading text-white leading-tight mb-12"
            >
              {aboutPage.standForTitle}
            </h2>
            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
              {aboutPage.commitments.map((item, i) => {
                const Icon = ICONS[item.icon];
                return (
                  <div key={i} className="border-l border-white/15 pl-6">
                    <Icon className="w-5 h-5 text-[#9A6B2F] mb-4" aria-hidden="true" />
                    <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---- Leadership ---- */}
      <section aria-labelledby="leadership-heading" className="bg-cream py-24">
        <Container>
          <Reveal>
            <div className="space-y-8 max-w-5xl mx-auto">
              <SectionLabel className="block mb-4">LEADERSHIP</SectionLabel>
              <h2
                id="leadership-heading"
                className="text-2xl md:text-3xl font-heading text-navy leading-tight mb-6"
              >
                {aboutPage.leadershipTitle}
              </h2>
              <p className="text-slate max-w-2xl mb-12">{aboutPage.leadershipIntro}</p>
              <div className="grid md:grid-cols-3 gap-8">
                {aboutPage.leaders.map((leader, i) => (
                  <div key={i} className="space-y-4">
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                      <Image
                        src={`/images/${leader.image}.jpg`}
                        alt={`Portrait of ${leader.name}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                      />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-navy">
                      {leader.name}
                    </h3>
                    <p className="text-xs uppercase font-semibold tracking-[0.18em] text-[#9A6B2F] mb-3">
                      {leader.role}
                    </p>
                    <p className="text-slate text-sm leading-relaxed">{leader.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---- Facilities ---- */}
      <section aria-labelledby="facilities-heading" className="bg-sand py-24">
        <Container>
          <Reveal>
            <div className="space-y-8 max-w-6xl mx-auto">
              <SectionLabel className="block mb-4">FACILITIES</SectionLabel>
              <h2
                id="facilities-heading"
                className="text-2xl md:text-3xl font-heading text-navy leading-tight mb-8"
              >
                {aboutPage.facilitiesTitle}
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {aboutPage.facilities.map((facility, i) => (
                  <div key={i} className="space-y-4">
                    <div className="relative aspect-[3/2] rounded-3xl overflow-hidden">
                      <Image
                        src={`/images/${facility.image}.jpg`}
                        alt={facility.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-navy">
                      {facility.title}
                    </h3>
                    <p className="text-slate text-sm leading-relaxed">{facility.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---- Closing Card ---- */}
      <section aria-labelledby="closing-heading" className="bg-cream py-24">
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[#F3E6C4] border-[#D8C8A7] rounded-3xl p-12 text-center mx-auto">
                <h2
                  id="closing-heading"
                  className="font-heading font-semibold text-navy mb-6"
                >
                  {aboutPage.closingTitle}
                </h2>
                <p className="text-slate max-w-xl mx-auto leading-relaxed mb-8">
                  {aboutPage.closingBody}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/admissions" variant="primary" icon="arrow">
                    {aboutPage.closingPrimary}
                  </Button>
                  <Button href="/contact" variant="outline" icon="calendarCheck" iconPosition="left">
                    {aboutPage.closingSecondary}
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}