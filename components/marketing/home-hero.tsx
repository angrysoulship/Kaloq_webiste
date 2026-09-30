import { ScrollScrubVideo } from "@/components/marketing/scroll-scrub-video";
import { home } from "@/lib/content";
import { CARD_SIGNUP_ENABLED } from "@/lib/features";

const { hero } = home;

export function HomeHero() {
  // -mt is the header's full flow height — h-16 plus its 1px bottom border —
  // otherwise a 1px strip of the white body shows above the hero
  return (
    <section
      data-hero-overlay
      className="relative -mt-[calc(4rem+1px)] h-[330vh] min-h-[1700px] bg-[#262A1C] text-white"
    >
      <div className="sticky top-0 flex h-screen min-h-[640px] flex-col overflow-hidden pt-16">
        <ScrollScrubVideo
          src="/videos/kaloq-demo-hero-v2.m4v"
          type="video/mp4"
          speed={1}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(38,42,28,0.46)_0%,rgba(38,42,28,0.26)_34%,rgba(38,42,28,0)_52%),linear-gradient(0deg,rgba(38,42,28,0.4)_0%,rgba(38,42,28,0)_22%)]"
        />

        <div className="relative mt-[clamp(56px,9vh,96px)] flex flex-col items-center px-6 text-center">
          <h1 className="font-display text-[clamp(48px,5.7vw,82px)] font-normal leading-[1.08] tracking-[-0.015em] text-white [text-shadow:0_2px_24px_rgba(38,42,28,0.28)] [text-wrap:balance]">
            {hero.h1Line1}
            <br />
            <em className="localized-hero-accent italic text-lime">{hero.h1Accent}</em>
          </h1>
        </div>

        <div className="relative mt-auto flex flex-col items-center gap-4 px-6 pb-[clamp(36px,6vh,52px)]">
          <p className="font-display-sans text-center text-[clamp(15px,1.3vw,18px)] leading-normal text-white/95 [text-shadow:0_1px_12px_rgba(38,42,28,0.45)]">
            {hero.sub}
          </p>

          {CARD_SIGNUP_ENABLED && (
            <a
              href={hero.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display-sans inline-flex rounded-full bg-lime px-8 py-[18px] text-[15px] font-semibold leading-none text-[#1B4533] transition-colors duration-150 hover:bg-lime-hover"
            >
              {hero.submitLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
