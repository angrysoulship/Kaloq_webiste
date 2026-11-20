import Link from "next/link";
import { pricing, productCard } from "@/lib/content";

export function FeesSection() {
  const { fees } = productCard;
  const rows = pricing.cardFees.filter((row) => fees.labels.includes(row.label));
  return (
    <section className="px-8 pb-20 pt-[100px]">
      <div className="mx-auto max-w-[1160px] text-center">
        <h2 className="font-display text-[clamp(38px,4.4vw,48px)] font-normal leading-[1.06] tracking-[-0.01em] text-[#0E2A1E]">
            {fees.heading}
            <em className="bg-[linear-gradient(transparent_68%,#DBFC00_68%)] px-[3px] not-italic italic">{fees.headingAccent}</em>
          </h2>
        <p className="mx-auto mt-[18px] max-w-[460px] text-[15.5px] leading-[1.6] text-[#42544A]">{fees.copy}</p>

        <div className="mx-auto mt-[42px] max-w-[760px] text-left">
          {rows.map((row) => (
            <div key={row.label} className="flex items-baseline justify-between gap-4 border-t border-[#E6DFCC] py-3.5">
              <div><span className="text-[14.5px] text-foreground">{row.label}</span><p className="mt-1 text-xs leading-relaxed text-[#536057]">{row.note}</p></div>
              <span className={`font-mono text-[13.5px] ${row.value === "Free" ? "text-[#2F6B4E]" : "text-foreground"}`}>{row.value}</span>
            </div>
          ))}
          <div className="border-t border-[#E6DFCC]" />
        </div>

        <Link
          href={fees.moreLink.href}
          className="mt-6 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[#25573F] hover:text-[#0E2A1E]"
        >
          {fees.moreLink.label}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
