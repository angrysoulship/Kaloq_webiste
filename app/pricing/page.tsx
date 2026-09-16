import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FeeTable } from "@/components/ui/fee-table";
import { pricing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description: pricing.intro,
};

export default function PricingPage() {
  return (
    <main className="bg-[#F8F6EF]">
      <Section className="pt-20 pb-12 md:pt-28">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">Kaloq Card pricing</p>
          <h1 className="mt-4 font-display text-[clamp(46px,5.2vw,72px)] font-normal leading-[1.04] tracking-[-0.02em] text-[#0E2A1E]">{pricing.h1}</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#42544A]">{pricing.intro}</p>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0E2A1E]">Indicative card fee</h2>
          </div>
          <FeeTable heading="The Card" rows={pricing.cardFees} />

          <div className="mb-4 mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0E2A1E]">Other fee</h2>
          </div>
          <FeeTable rows={pricing.otherFees} />
        </FadeIn>
      </Section>

      <Section className="px-6 py-10 md:py-16">
        <FadeIn className="mx-auto flex max-w-[1160px] flex-col items-center rounded-[32px] bg-[#E9E2D1] px-6 py-14 text-center md:py-18">
          <h2 className="font-display text-[clamp(38px,4.4vw,56px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">Ready to make your balance spendable?</h2>
          <p className="mt-4 max-w-[480px] text-[15.5px] leading-[1.6] text-[#42544A]">Start with supported stablecoins and review the final cost before you confirm.</p>
          <Button href="https://card.kaloq.com" size="lg" className="mt-7 bg-[#1B4533] text-white hover:bg-[#0E2A1E]">Get your card</Button>
        </FadeIn>
      </Section>

      <Section className="bg-[#FAF8F1]">
        <FadeIn className="mx-auto max-w-2xl">
          <h2 className="text-center font-display text-[clamp(38px,4.4vw,54px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">Pricing questions</h2>
          <div className="mt-10"><FaqAccordion items={pricing.faq} /></div>
        </FadeIn>
      </Section>
    </main>
  );
}
