import type { Metadata } from "next";
import Link from "next/link";
import { BlogVisual } from "@/components/blog/blog-visual";
import { BlogIndex } from "@/components/blog/blog-index";
import { getBlogPosts } from "@/sanity/lib/blog";
import { SITE_URL, safeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog",
  description: "Ideas, practical guides, and product stories about stablecoins and global money movement from Kaloq.",
  alternates: { canonical: "/blog" },
  keywords: ["stablecoin payments", "global money movement", "digital asset spending", "cross-border payments", "Kaloq"],
  openGraph: {
    type: "website",
    title: "Kaloq Journal — Ideas in motion",
    description: "Perspectives, practical guides, and product stories about making stablecoins useful in everyday life.",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaloq Journal — Ideas in motion",
    description: "Perspectives, practical guides, and product stories about making stablecoins useful in everyday life.",
  },
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0];
  if (!featuredPost) {
    return <main className="blog-page flex min-h-[70vh] items-center bg-[#F8F6EF] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[760px] text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7E6F4F]">Kaloq journal</p>
        <h1 className="mt-5 font-display text-[clamp(48px,7vw,82px)] leading-[.98] text-[#0E2A1E]">Articles are on the way.</h1>
        <p className="mx-auto mt-6 max-w-xl text-[18px] leading-[1.65] text-[#536057]">No published English articles are currently available in the Sanity production dataset.</p>
      </div>
    </main>;
  }
  return <div className="blog-page overflow-hidden bg-[#F8F6EF]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Kaloq Journal",
      description: "Perspectives, practical guides, and product stories about stablecoins and global money movement.",
      url: `${SITE_URL}/blog`,
      publisher: { "@type": "Organization", name: "Kaloq", url: SITE_URL },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [featuredPost, ...blogPosts.filter((post) => !post.featured)].map((post, index) => ({
          "@type": "ListItem", position: index + 1, url: `${SITE_URL}/blog/${post.slug}`, name: post.title,
        })),
      },
    }) }} />
    <section className="relative border-b border-[#DCD7CA] px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
      <div aria-hidden="true" className="absolute -right-28 -top-40 h-[440px] w-[440px] rounded-full border-[70px] border-lime/40" />
      <div className="relative mx-auto max-w-[1240px]">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7E6F4F]">Kaloq journal · Ideas in motion</p>
        <h1 className="mt-6 max-w-[870px] font-display text-[clamp(62px,8.5vw,122px)] font-normal leading-[0.89] tracking-[-0.035em] text-[#0E2A1E]">Money should move<br/><em className="blog-editorial-accent text-[#568069]">like the internet.</em></h1>
        <p className="mt-8 max-w-xl text-[18px] leading-[1.65] text-[#42544A]">Perspectives, practical guides, and product stories about making stablecoins useful in everyday life.</p>
      </div>
    </section>

    <section className="px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1240px]">
        <Link href={`/blog/${featuredPost.slug}`} className="group grid overflow-hidden rounded-[30px] bg-[#EEE9DC] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7E6F4F]">Featured · {featuredPost.category}</p>
            <h2 className="mt-5 font-display text-[clamp(40px,4.5vw,64px)] leading-[1.02] tracking-[-0.02em] text-[#0E2A1E]">{featuredPost.title}</h2>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-[#536057]">{featuredPost.excerpt}</p>
            <div className="mt-8 flex items-center gap-5 text-sm text-[#42544A]"><span>{featuredPost.date}</span><span className="h-px w-8 bg-[#8E998F]"/><span>{featuredPost.readTime}</span></div>
            <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#1B4533] px-5 py-3 text-sm font-semibold text-white transition-colors group-hover:bg-[#2D6549]">Read the story <span aria-hidden="true">↗</span></span>
          </div>
          <BlogVisual post={featuredPost} className="min-h-[420px] lg:min-h-[630px]" />
        </Link>
      </div>
    </section>

    <section className="px-6 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-7 flex items-end justify-between gap-6 border-b border-[#DCD7CA] pb-6"><div><p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7E6F4F]">Explore the journal</p><h2 className="mt-3 font-display text-[44px] leading-none text-[#0E2A1E]">Latest stories</h2></div><p className="hidden max-w-sm text-right text-sm leading-relaxed text-[#68736B] md:block">Clear thinking on the infrastructure, products, and habits shaping global money.</p></div>
        <BlogIndex allPosts={blogPosts} />
      </div>
    </section>

    <section className="bg-lime px-6 py-16 md:px-10 md:py-20"><div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="font-mono text-xs uppercase tracking-[0.16em] text-[#1B4533]/70">Kaloq notes</p><h2 className="mt-3 max-w-2xl font-display text-[clamp(42px,5vw,68px)] leading-[.98] text-[#0E2A1E]">A calmer way to follow the future of money.</h2></div><Link href="/contact" className="inline-flex w-fit rounded-full bg-[#1B4533] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#0E2A1E]">Stay in touch</Link></div></section>
  </div>;
}
