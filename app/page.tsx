import { HomeHero } from "@/components/marketing/home-hero";
import { CapabilitiesBento } from "@/components/marketing/capabilities-bento";
import { TheCard } from "@/components/marketing/the-card";
import { UseCases } from "@/components/marketing/use-cases";
import { HomeCta } from "@/components/marketing/home-cta";

export default function HomePage() {
  return (
    <>
      {/* S1 — Hero */}
      <HomeHero />

      {/* S1.5 — Capabilities */}
      <CapabilitiesBento />

      {/* S1.6 — The Card */}
      <TheCard />

      {/* S1.7 — Use Cases */}
      <UseCases />

      {/* S8 — Final CTA */}
      <HomeCta />
    </>
  );
}
