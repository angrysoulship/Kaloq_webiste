import Link from "next/link";
import { Container } from "@/components/ui/container";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/12 bg-footer text-footer-foreground">
      <Container className="py-16 pb-9">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <span className="inline-flex items-center gap-0.5 text-[22px] font-extrabold tracking-tight text-white">
              Kaloq
              <span aria-hidden="true" className="inline-block h-1.5 w-1.5 translate-y-2.5 rounded-full bg-lime" />
            </span>
            <p className="mt-4 max-w-[280px] text-[13.5px] leading-[1.6] text-white/55">{footer.tagline}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">{col.heading}</h3>
              <ul className="mt-3.5 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/72 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-[820px] border-t border-white/12 pt-6 text-xs leading-[1.6] text-white/40">
          <p className="mt-2">{footer.legalBlock.service}</p>
          <p className="mt-2">{footer.legalBlock.availability}</p>
          <p className="mt-2">{footer.legalBlock.notBank}</p>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-[13px]">
          <span className="text-white/45">{footer.legalBlock.copyright}</span>
          <a
            href={footer.social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/72 transition-colors hover:text-white"
          >
            {footer.social.label}
          </a>
        </div>
      </Container>
    </footer>
  );
}
