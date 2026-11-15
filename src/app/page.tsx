import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, GraduationCap, ArrowRight, Users, BookCheck, FlaskConical, MessageSquare, Trophy } from "lucide-react";
import { school } from "@/lib/school";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import ImageReveal from "@/components/motion/ImageReveal";
import CountUp from "@/components/motion/CountUp";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(232,200,130,0.35),transparent_65%)] pointer-events-none z-0"></div>
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold"></div>
                <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">LEKKI, LAGOS · ESTABLISHED {school.established}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-[52px] font-semibold text-navy leading-[1.1] tracking-tight max-w-[520px]">
                Every child known.{" "}
                <br className="hidden sm:block" />
                Every lesson{" "}
                <br className="hidden sm:block" />
                taught properly.
              </h1>
              <p className="text-lg leading-relaxed text-slate max-w-xl mt-6">
                Bright Future Academy is a private nursery, primary and secondary school in Lekki, Lagos. Since 2006 we have prepared children for Common Entrance, BECE, WAEC and NECO, in small classes, with teachers who mark the books.
              </p>
              <div className="flex flex-col gap-3 mt-8 sm:flex-row sm:gap-4">
                <Button href="/admissions" variant="primary" icon="arrow" className="h-12 w-full justify-center whitespace-nowrap px-6 text-[15px] sm:w-auto">
                  Apply Now
                </Button>
                <Button href="/contact" variant="outline" icon="calendarCheck" iconPosition="left" className="h-12 w-full justify-center whitespace-nowrap px-6 text-[15px] sm:w-auto">
                  Book a Campus Tour
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate mt-6">
                <ShieldCheck size={16} className="text-gold" />
                <span>Approved by the Lagos State Ministry of Education</span>
              </div>
            </Reveal>
            <Reveal trigger="scroll" y={72} delay={0.15} duration={1.0} amount={0.15} margin="0px">
              <div className="relative">
                <div className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-3xl border border-gold/35"></div>
                <div className="relative aspect-[4/3.2] rounded-3xl overflow-hidden">
                  <Image
                    src="/images/hero.jpg"
                    alt="Students walking across the school grounds"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 35%' }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 left-6 bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg shadow-black/5">
                  <div className="w-10 h-10 bg-[#F8E9C6] rounded-xl flex items-center justify-center">
                    <Trophy size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-lg text-navy">{school.heroCard.number} {school.heroCard.label}</div>
                    <div className="text-xs text-slate">{school.heroCard.subLabel}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-navy text-cream">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {school.stripStats.map((stat, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="text-center lg:text-left relative">
                  <div className="text-4xl lg:text-5xl font-heading font-semibold text-gold mb-2">
                    <CountUp value={stat.countTo} duration={1.8} delay={index * 0.1} prefix={stat.prefix} suffix={stat.suffix} />
                    <noscript>{stat.display}</noscript>
                  </div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-cream/60">{stat.sub}</div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute right-0 top-0 h-full w-px bg-cream/15"></div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why families choose us */}
      <section className="py-24 lg:py-32 bg-cream">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-px bg-gold"></div>
                    <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">WHY FAMILIES CHOOSE US</span>
                  </div>
                  <h2 className="text-4xl mb-4 text-navy">Four commitments we keep, term after term</h2>
                  <p className="text-slate">Parents do not choose a school for its brochure. They choose it for what happens between 8am and 2pm, every day, for thirteen years. Here is what that looks like at Bright Future.</p>
                </Reveal>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-0">
                {[
                  { icon: Users, title: "Twelve students to one teacher", text: "Nursery classes are capped at 14, Primary at 20, Secondary at 24. Your child's teacher will know their strengths by name, and their weak subjects too." },
                  { icon: BookCheck, title: "Teachers who mark the books", text: "Every exercise is marked and returned with corrections written out. Report cards show what was tested, what your child scored, and exactly what to revise." },
                  { icon: FlaskConical, title: "Real laboratories, from JSS 1", text: "Separate junior and senior science labs, a 40-seat CBT centre and a robotics workshop. Students conduct experiments themselves, not from diagrams." },
                  { icon: MessageSquare, title: "A call before a problem grows", text: "Class teachers phone parents when a pattern appears, not at the end of term. Termly meetings are booked in advance, and you can email a teacher directly." }
                ].map((item, index) => (
                  <Reveal key={index} delay={index * 0.1}>
                    <div className="py-8 border-t border-border first:pt-0 last:border-b">
                      <div className="flex gap-6">
                        <div className="w-12 h-12 bg-tan rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.icon size={24} className="text-gold" />
                        </div>
                        <div>
                          <h3 className="text-xl mb-2 text-navy font-heading">{item.title}</h3>
                          <p className="text-slate">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Academics */}
      <section className="py-24 lg:py-32 bg-sand overflow-x-clip">
        <Container>
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold"></div>
              <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">ACADEMICS</span>
            </div>
            <h2 className="text-4xl lg:text-[44px] mb-4 text-navy max-w-2xl">From first steps in Nursery to final papers in SSS 3</h2>
            <p className="text-slate max-w-3xl mb-16">One school, four stages, one standard. Each level builds deliberately on the one before it, so no child meets WAEC unprepared.</p>
          </Reveal>
          
          <div className="space-y-24">
            {[
              {
                title: "Pre-Nursery & Nursery",
                ages: "AGES 2 – 5",
                text: "Play-based Montessori classrooms led by trained early-years practitioners. The first years of school should feel like an extension of home.",
                fact: "Phonics-first pre-reading, numeracy through play",
                link: "Explore nursery",
                image: "/images/nursery.jpg",
                alt: "Nursery students in classroom"
              },
              {
                title: "Primary School",
                ages: "AGES 6 – 11",
                text: "The Nigerian national curriculum with a reading culture built in: a book a month, and Common Entrance preparation from Primary 4.",
                fact: "National Common Entrance preparation from Primary 4",
                link: "Explore primary school",
                image: "/images/primary.jpg",
                alt: "Primary students learning"
              },
              {
                title: "Secondary, JSS & SSS",
                ages: "AGES 12 – 18",
                text: "Laboratory science from JSS 1, WAEC and NECO syllabus completed by SSS 2, and a revision year with timed past papers and Saturday JAMB classes.",
                fact: "96% WAEC/NECO pass rate, 41 distinctions in 2026",
                link: "Explore secondary, JSS & SSS",
                image: "/images/secondary.jpg",
                alt: "Secondary students in class"
              }
            ].map((level, index) => {
              const imageOnRight = index % 2 === 1;
              return (
                <Reveal key={index} delay={index * 0.1}>
                  <div className={`grid gap-8 lg:gap-16 items-center ${imageOnRight ? 'lg:grid-cols-[1fr_36rem]' : 'lg:grid-cols-[36rem_1fr]'}`}>
                    <div className={imageOnRight ? 'lg:order-2' : ''}>
                      <ImageReveal>
                        <div className="relative aspect-[5/4] bg-cream rounded-3xl overflow-hidden group w-full lg:w-[576px]">
                          <Image
                            src={level.image}
                            alt={level.alt}
                            fill
                            className="object-cover transition-transform duration-[700ms] group-hover:scale-[1.04] motion-reduce:transition-none"
                            sizes="(min-width: 1024px) 576px, 100vw"
                          />
                        </div>
                      </ImageReveal>
                    </div>
                    <div className={imageOnRight ? 'lg:order-1' : ''}>
                      <Reveal fade delay={0.2} duration={0.9}>
                        <span className="inline-block px-3 py-1 text-xs border border-gold/40 bg-pill-gold text-gold mb-4 rounded-full font-semibold tracking-wider">{level.ages}</span>
                      </Reveal>
                      <Reveal direction={imageOnRight ? "left" : "right"} duration={0.9}>
                        <h3 className="text-4xl mb-4 text-navy font-heading">{level.title}</h3>
                      </Reveal>
                      <Reveal fade delay={0.2} duration={0.9}>
                        <p className="text-slate mb-4">{level.text}</p>
                        <div className="flex items-center gap-2 mb-4">
                          <GraduationCap size={16} className="text-gold" />
                          <span className="text-navy font-medium">{level.fact}</span>
                        </div>
                        <a href="#" className="inline-flex items-center gap-2 text-gold group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A6B2F]/50 focus-visible:ring-offset-2 rounded-sm motion-reduce:transition-none">
                          <span>{level.link}</span>
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                        </a>
                      </Reveal>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      <Reveal>
        <TestimonialCarousel />
      </Reveal>

      {/* News and events */}
      <section className="py-24 lg:py-32 bg-sand">
        <Container>
          <Reveal>
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-gold"></div>
                  <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">NEWS AND EVENTS</span>
                </div>
                <h2 className="text-3xl md:text-4xl text-navy font-heading">This term at Bright Future</h2>
              </div>
              <a href="#" className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-[#9A6B2F] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893B]/60 focus-visible:ring-offset-2 rounded-sm motion-reduce:transition-none">
                <span>More from the school</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
              </a>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <article>
                <ImageReveal>
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden">
                    <Image
                      src={school.news.featured.image}
                      alt={school.news.featured.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </ImageReveal>
                <div className="mt-6">
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#9A6B2F] mb-3">{school.news.featured.label}</p>
                  <h3 className="font-heading text-[28px] font-medium text-navy max-w-sm mb-3">{school.news.featured.title}</h3>
                  <p className="text-[#5B6676] max-w-[30rem]">{school.news.featured.excerpt}</p>
                </div>
              </article>
            </Reveal>

            <div>
              {school.news.items.map((item, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <article className={index > 0 ? "pt-6 mt-6 border-t border-navy/12" : ""}>
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#9A6B2F] mb-3">{item.label}</p>
                    <h3 className="font-heading text-[22px] font-medium text-navy mb-3">{item.title}</h3>
                    <p className="text-[#5B6676]">{item.excerpt}</p>
                  </article>
                </Reveal>
              ))}
              <Reveal delay={0.2}>
                <Link
                  href={school.news.openDay.href}
                  className="mt-8 block bg-[#F3E6C4] border border-[#D8C8A7] rounded-2xl p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893B]/60 focus-visible:ring-offset-2"
                >
                  <h3 className="font-heading text-xl text-navy mb-2">{school.news.openDay.title}</h3>
                  <p className="text-[#5B6676]">{school.news.openDay.text}</p>
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Admissions banner */}
      <section className="pt-24 lg:pt-32 pb-32 bg-cream">
        <Container>
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/campus.webp"
                alt="School campus"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-navy/85"></div>
              <div className="relative p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="max-w-[40rem]">
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B8893B] mb-3">ADMISSIONS</p>
                  <h2 className="text-3xl md:text-[34px] lg:text-[32px] text-cream mb-4 font-heading lg:whitespace-nowrap">September 2026 admissions are open</h2>
                  <p className="text-white/80 max-w-xl">Entrance assessments hold every Saturday in March. Places remain in most classes. Primary 4 and JSS 1 fill fastest each year.</p>
                </div>
                <div className="flex flex-col items-start lg:items-end gap-4">
                  <Link href="/admissions" className="inline-flex h-[52px] px-8 items-center justify-center rounded-full bg-[#A88041] text-white text-[15px] font-semibold transition-colors duration-300 hover:bg-[#8D6433] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893B]/60 focus-visible:ring-offset-2 motion-reduce:transition-none">
                    Apply Now
                  </Link>
                  <Link href="/contact" className="inline-flex h-[52px] px-8 items-center justify-center rounded-full border border-white/30 bg-transparent text-white text-[15px] font-semibold transition-colors duration-300 hover:bg-white/10 hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893B]/60 focus-visible:ring-offset-2 motion-reduce:transition-none">
                    Book a Campus Tour
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
