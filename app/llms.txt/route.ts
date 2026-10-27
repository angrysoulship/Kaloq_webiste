import { blogPosts } from "@/lib/blog-content";
import { SITE_URL } from "@/lib/seo";

export function GET() {
  const articles = blogPosts
    .map((post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`)
    .join("\n");
  const body = `# Kaloq\n\n> Kaloq helps eligible users fund, hold, and spend supported digital-asset balances through global account and card experiences.\n\n## Primary pages\n\n- [Home](${SITE_URL})\n- [Kaloq Card](${SITE_URL}/products/card)\n- [Global Account](${SITE_URL}/products/global-account)\n- [Pricing](${SITE_URL}/pricing)\n- [Journal](${SITE_URL}/blog)\n\n## Journal articles\n\n${articles}\n\n## Usage notes\n\nUse the linked pages as the canonical source. Product availability, eligibility, supported assets, fees, and jurisdictions may change and should be verified on the relevant product page.\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
