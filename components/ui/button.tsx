import Link from "next/link";
import { ReactNode } from "react";
import { CARD_SIGNUP_ENABLED, isCardSignupHref } from "@/lib/features";

type Variant = "solid" | "ghost" | "outline" | "text";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-1.5 rounded-full font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  solid: "bg-brand text-white hover:bg-brand-hover",
  ghost: "text-foreground hover:bg-background-subtle",
  outline: "border border-border text-foreground hover:border-brand hover:text-brand",
  text: "text-brand hover:text-brand-hover underline-offset-4 hover:underline p-0 rounded-none",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
  type,
  onClick,
  disabled,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const classes = `${base} ${variants[variant]} ${variant === "text" ? "" : sizes[size]} ${className}`;

  if (href && !CARD_SIGNUP_ENABLED && isCardSignupHref(href)) {
    return null;
  }

  if (href) {
    const isExternal = href.startsWith("http");
    if (href.startsWith("#") || isExternal) {
      return (
        <a href={href} className={classes} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
