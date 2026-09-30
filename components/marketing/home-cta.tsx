import Image from "next/image";
import Link from "next/link";
import { home } from "@/lib/content";
import { CARD_SIGNUP_ENABLED } from "@/lib/features";

export function HomeCta() {
  const { readyCta } = home;

  return (
    <section className="relative overflow-hidden px-8 py-[120px] pb-[130px] text-center text-white">
      <Image
        src="/images/use-cases/hero-landscape.jpg"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 object-cover opacity-[.55]"
        style={{ objectPosition: "center 70%" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,42,30,.72)_0%,rgba(14,42,30,.28)_55%,rgba(14,42,30,.78)_100%)]"
      />
      <div className="relative">
        <h2 className="font-display text-[clamp(42px,5vw,64px)] font-normal leading-[1.05]">
          <span className="i18n-en-only">{readyCta.heading}</span>
          <span className="i18n-zh-only">准备好</span>
          <em className="not-italic italic text-lime">
            <span className="i18n-en-only">{readyCta.headingAccent}</span>
            <span className="i18n-zh-only">体验了吗？</span>
          </em>
        </h2>
        <p className="mt-4 text-base text-white/78">{readyCta.sub}</p>
        <div className="mt-[34px] flex flex-wrap justify-center gap-3">
          {CARD_SIGNUP_ENABLED ? (
            <a
              href={readyCta.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-lime px-8 py-[15px] text-base font-semibold text-[#0E2A1E] transition-colors hover:bg-lime-hover"
            >
              {readyCta.primaryCta.label}
            </a>
          ) : null}
          <Link
            href={readyCta.secondaryCta.href}
            className="rounded-full border border-white/22 bg-white/14 px-8 py-[15px] text-base font-semibold text-white backdrop-blur-[10px] transition-colors hover:bg-white/24"
          >
            {readyCta.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
