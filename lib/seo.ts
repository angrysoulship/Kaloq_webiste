export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://kaloq.com").replace(/\/$/, "");

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kaloq",
  url: SITE_URL,
  logo: `${SITE_URL}/images/kaloq-logo-dark.png`,
  sameAs: ["https://x.com/kaloqx"],
};

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
