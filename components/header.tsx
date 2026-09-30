"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-provider";
import { nav, type NavDropdownItem } from "@/lib/content";
import { CARD_SIGNUP_ENABLED } from "@/lib/features";

function NavDropdown({ label, items }: { label: string; items: NavDropdownItem[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex items-center gap-1 py-2 text-sm font-medium text-current hover:text-brand"
      >
        {label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-1/2 top-full z-40 w-80 -translate-x-1/2 pt-3"
        >
          <div className="rounded-2xl border border-border bg-white p-2 shadow-lg">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 hover:bg-background-subtle"
              >
                <div className="text-sm font-medium text-foreground">{item.label}</div>
                <div className="mt-0.5 text-xs leading-snug text-foreground/40">{item.description}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [overHero, setOverHero] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const hero = document.querySelector("[data-hero-overlay]");
    if (!hero) {
      const frame = window.requestAnimationFrame(() => setOverHero(false));
      return () => window.cancelAnimationFrame(frame);
    }

    const update = () => {
      const rect = hero.getBoundingClientRect();
      setOverHero(rect.bottom > 72 && window.scrollY < rect.height - 72);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  const overlayClass = overHero
    ? "border-transparent bg-transparent text-white"
    : "border-border bg-white/95 text-foreground backdrop-blur";

  return (
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${overlayClass}`}>
      <div className="mx-auto grid h-16 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-6 md:px-10">
        <Logo variant={overHero ? "light" : "dark"} />

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          <NavDropdown label="Products" items={nav.products} />
          <NavDropdown label="Solutions" items={nav.solutions} />
          <Link href={nav.pricing.href} className="py-2 text-sm font-medium text-current hover:text-brand">
            {nav.pricing.label}
          </Link>
        </nav>

        <div className="hidden items-center justify-end gap-7 md:flex">
          <LanguageToggle />
          {CARD_SIGNUP_ENABLED && (
            <Button href={nav.demo.href} variant="solid" className="bg-lime px-7 py-3 text-sm font-semibold !text-[#1B4533] transition-colors duration-150 hover:bg-lime-hover">
              {nav.demo.label}
            </Button>
          )}
        </div>

        <button
          type="button"
          className="col-start-3 ml-auto flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
            <path d="M0 1h22M0 8h22M0 15h22" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return createPortal(
    <div className="fixed inset-0 z-50 flex flex-col bg-white md:hidden">
      <div className="flex h-16 items-center justify-between border-b border-border px-6">
        <Logo />
        <button type="button" aria-label="Close menu" onClick={onClose} className="flex h-10 w-10 items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        <MobileGroup title="Products" items={nav.products} onNavigate={onClose} />
        <MobileGroup title="Solutions" items={nav.solutions} onNavigate={onClose} />
        <Link href={nav.pricing.href} onClick={onClose} className="block border-b border-border py-4 text-base font-medium text-foreground">
          {nav.pricing.label}
        </Link>
        <div className="mt-6 flex items-center">
          <LanguageToggle className="text-foreground" />
        </div>
      </div>

      {CARD_SIGNUP_ENABLED && (
        <div className="border-t border-border p-6">
          <Button href={nav.demo.href} variant="solid" size="lg" className="w-full bg-lime !text-[#1B4533] hover:bg-lime-hover">
            {nav.demo.label}
          </Button>
        </div>
      )}
    </div>,
    document.body
  );
}

function MobileGroup({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: NavDropdownItem[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-base font-medium text-foreground"
      >
        {title}
        <span aria-hidden="true" className="text-xl text-foreground-muted">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="pb-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="block rounded-xl px-2 py-3 text-sm text-foreground-muted hover:bg-background-subtle hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
