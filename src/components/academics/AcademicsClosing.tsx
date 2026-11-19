import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import type { AcademicsPageContent } from "@/lib/school";

interface AcademicsClosingProps {
  closing: AcademicsPageContent["closing"];
}

export default function AcademicsClosing({ closing }: AcademicsClosingProps) {
  return (
    <section className="bg-cream py-20">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#D8C8A7] bg-[#F3E6C4] p-12 text-center md:p-16">
            <h2 className="mb-4 text-3xl font-semibold text-navy">
              {closing.title}
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-slate leading-relaxed">
              {closing.body}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href={closing.primaryHref} variant="primary">
                {closing.primaryLabel}
              </Button>
              <Button
                href={closing.secondaryHref}
                variant="outline"
                icon={null}
              >
                {closing.secondaryLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
