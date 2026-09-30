import Link from "next/link";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Button } from "@/components/ui/button";
import { CARD_SIGNUP_HREF } from "@/lib/features";
import { SolutionHero } from "@/components/marketing/solution-hero";
import { ScenarioFlow } from "@/components/marketing/scenario-flow";
import { SolutionIcon } from "@/components/marketing/solution-icons";
import { solutions } from "@/lib/content";

type Solution = (typeof solutions)[keyof typeof solutions];

export function PersonalSolutionTemplate({ solution }: { solution: Solution }) {
  return (
    <>
      <SolutionHero solution={solution} />

      <div className="personal-solution-canvas">
        <Section className="pb-20 pt-24">
          <FadeIn className="mx-auto max-w-[650px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">The friction</p>
            <h2 className="mt-3 font-display text-[clamp(38px,4.4vw,56px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">Your balance should work where you spend</h2>
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {solution.painPoints.map((pain, i) => (
              <FadeIn key={pain.text} delay={i * 100} className="rounded-[22px] border border-[#E8E2D1] bg-white/65 p-7 shadow-[0_8px_25px_rgba(92,80,58,.04)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F0E9D7] text-[#7E6F4F]"><SolutionIcon name={pain.icon} className="h-[18px] w-[18px]" /></div>
                <p className="mt-6 text-[16px] leading-[1.55] text-[#0E2A1E]">{pain.text}</p>
              </FadeIn>
            ))}
          </div>
        </Section>

        <ScenarioFlow heading={solution.flow.heading} sub={solution.flow.sub} steps={solution.flow.steps} />

        <Section className="py-[105px]">
          <FadeIn className="mx-auto max-w-[650px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">Built for your life</p>
            <h2 className="mt-3 font-display text-[clamp(38px,4.4vw,56px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">{solution.solutionIntro}</h2>
          </FadeIn>
          <div className="mx-auto mt-14 grid max-w-[1040px] gap-10 md:grid-cols-3">
            {solution.features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 100} className="border-t border-[#CFC7B4] pt-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F0E9D7] text-[#7E6F4F]"><SolutionIcon name={feature.icon} className="h-[18px] w-[18px]" /></div>
                <h3 className="mt-5 text-[17px] font-semibold text-[#0E2A1E]">{feature.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-[#42544A]">{feature.description}</p>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Section className="py-20">
          <div className="mx-auto grid max-w-[1040px] grid-cols-[1.1fr_.9fr] items-center gap-14 rounded-[30px] border border-[#E8E2D1] bg-[#F2EDDF] px-10 py-12 max-[800px]:grid-cols-1 max-[800px]:gap-10 max-[640px]:px-7">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">Real usage flow</p>
              <h2 className="mt-3 max-w-[470px] font-display text-[clamp(36px,4vw,50px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">From your balance to a real purchase</h2>
              <p className="mt-4 max-w-[430px] text-[15px] leading-[1.65] text-[#42544A]">Move supported stablecoins from your wallet, review your available balance, and use your Kaloq Card for the next thing your day needs.</p>
            </FadeIn>
            <FadeIn delay={120}>
              <div className="relative mx-auto max-w-[370px] rounded-[24px] bg-white/80 p-5 shadow-[0_18px_42px_rgba(92,80,58,.1)]">
                <div className="flex items-center justify-between border-b border-[#E8E2D1] pb-4">
                  <div className="text-sm font-semibold text-[#0E2A1E]">Kaloq activity</div>
                  <div className="rounded-full bg-[#F4F9D9] px-2.5 py-1 text-[10px] font-semibold text-[#557000]">Illustrative</div>
                </div>
                <div className="flex items-center gap-3 border-b border-[#E8E2D1] py-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0E9D7] text-[#557000]">↘</div>
                  <div className="min-w-0 flex-1"><div className="text-[13px] font-semibold text-[#0E2A1E]">Wallet balance</div><div className="text-[11px] text-[#7A8378]">Added to Kaloq</div></div>
                  <div className="font-mono text-[12px] text-[#0E2A1E]">Ready</div>
                </div>
                <div className="flex items-center gap-3 py-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF1EC] text-[#2F6B4E]">↗</div>
                  <div className="min-w-0 flex-1"><div className="text-[13px] font-semibold text-[#0E2A1E]">Kaloq Card</div><div className="text-[11px] text-[#7A8378]">Everyday purchase</div></div>
                  <div className="font-mono text-[12px] text-[#0E2A1E]">Approved</div>
                </div>
              </div>
            </FadeIn>
          </div>
          <p className="mx-auto mt-8 max-w-[720px] text-center text-xs leading-[1.7] text-[#6E756C]">Merchants do not receive digital assets directly. Supported digital assets are converted in the card transaction flow and the merchant receives ordinary fiat currency. KYC, transaction monitoring, source-of-funds review, and restrictions for certain regions or high-risk merchants may apply.</p>
        </Section>

        <Section className="pb-24 pt-16">
          <FadeIn className="mx-auto max-w-[720px]">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#7E6F4F]">Questions</p>
            <h2 className="mt-3 text-center font-display text-[clamp(38px,4.4vw,54px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">A clearer way to spend</h2>
            <div className="mt-10"><FaqAccordion items={solution.faq} /></div>
          </FadeIn>
        </Section>
      </div>

      <Section className="px-6 py-10 md:py-16">
        <FadeIn className="mx-auto flex max-w-[1160px] flex-col items-center rounded-[32px] bg-[#E9E2D1] px-6 py-16 text-center md:py-20">
          <h2 className="font-display text-[clamp(38px,4.4vw,56px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">Keep your balance ready to spend</h2>
          <p className="mt-4 max-w-[460px] text-[15.5px] leading-[1.6] text-[#42544A]">Start with your supported wallet balance and make more of everyday life.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href={CARD_SIGNUP_HREF} size="lg" className="bg-[#1B4533] text-white hover:bg-[#0E2A1E]">Get your card</Button>
            <Link href="/products/card" className="inline-flex items-center justify-center rounded-full border border-[#BEB39C] bg-white/45 px-6 py-3.5 text-base font-semibold text-[#1B4533] hover:bg-white">Explore Kaloq Card</Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
