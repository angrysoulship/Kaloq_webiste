import Image from "next/image";
import type { BlogPost } from "@/lib/blog-content";

const cropByVariant: Record<BlogPost["art"], string> = {
  portal: "object-[50%_center] scale-[1.08]",
  bridge: "object-[63%_center] scale-[1.18]",
  ledger: "object-[78%_center] scale-[1.12]",
  orbit: "object-[37%_center] scale-[1.2]",
  signal: "object-[88%_center] scale-[1.16]",
};

const washByVariant: Record<BlogPost["art"], string> = {
  portal: "bg-[#0E2A1E]/20",
  bridge: "bg-[#0E2A1E]/32",
  ledger: "bg-[#DBFC00]/10 mix-blend-color",
  orbit: "bg-[#D8CDB2]/10",
  signal: "bg-[#0E2A1E]/42",
};

/**
 * Uses only the approved Kaloq pastoral-doorway image from the Figma library.
 * Source: file ye13t6dU1ZIvg4fEwKfdQp, Article cover 85:74 / raw image fill.
 */
export function ArticleArt({ variant, className = "" }: { variant: BlogPost["art"]; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#183F2E] ${className}`} aria-hidden="true">
      <Image
        src="/images/blog/kaloq-brand-doorway.jpg"
        alt=""
        fill
        sizes="(min-width: 1024px) 55vw, 100vw"
        className={`object-cover contrast-[1.03] saturate-[.82] ${cropByVariant[variant]}`}
      />
      <div className={`absolute inset-0 ${washByVariant[variant]}`} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,42,30,.12),rgba(14,42,30,.44))]" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(244,240,230,.52)_.7px,transparent_.9px)] [background-size:4px_4px] mix-blend-soft-light" />
      <div className="absolute left-6 top-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/90">
        <span className="h-8 w-[3px] rounded-full bg-lime" />
        Kaloq journal
      </div>
      <span className="absolute bottom-5 right-6 font-mono text-[10px] uppercase tracking-[0.14em] text-lime">Make it spendable.</span>
    </div>
  );
}
