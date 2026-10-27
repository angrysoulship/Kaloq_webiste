import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogVisual } from "@/components/blog/blog-visual";
import { PortableArticle } from "@/components/blog/portable-article";
import { getProductNote } from "@/lib/blog-content";
import { getBlogPost, getBlogPosts, getBlogSlugs } from "@/sanity/lib/blog";
import { SITE_URL, safeJsonLd } from "@/lib/seo";

export async function generateStaticParams() { return (await getBlogSlugs()).map((slug) => ({ slug })); }

function getBodyHeadings(body: Array<Record<string, unknown>> | undefined) {
  if (!body) return [];
  return body.flatMap((block) => {
    if (block._type !== "block" || block.style !== "h2" || typeof block._key !== "string" || !Array.isArray(block.children)) return [];
    const title = block.children.map((child) => typeof child === "object" && child && "text" in child ? String(child.text) : "").join("");
    return title ? [{ id: block._key, title }] : [];
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = await getBlogPost((await params).slug);
  return post ? {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedTime,
      modifiedTime: post.modifiedTime,
      authors: [post.author],
      section: post.category,
      ...(post.coverImageUrl ? { images: [{ url: post.coverImageUrl, alt: post.coverImageAlt || post.title }] } : {}),
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  } : {};
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getBlogPost((await params).slug);
  if (!post) notFound();
  const blogPosts = await getBlogPosts();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const articleUrl = `${SITE_URL}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishedTime,
        dateModified: post.modifiedTime,
        mainEntityOfPage: articleUrl,
        articleSection: post.category,
        inLanguage: "en",
        keywords: post.keywords.join(", "),
        author: { "@type": "Organization", name: post.author },
        publisher: { "@type": "Organization", name: "Kaloq", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/images/kaloq-logo-dark.png` } },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
        ],
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  const articleHeadings = post.body?.length ? getBodyHeadings(post.body) : post.sections.map(({ id, title }) => ({ id, title }));

  return <article lang="en" className="blog-page bg-[#FAF8F1]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
    <header className="px-6 pb-12 pt-16 md:px-10 md:pb-20 md:pt-24">
      <div className="mx-auto max-w-[1100px] text-center">
        <Link href="/blog" className="font-mono text-xs uppercase tracking-[0.16em] text-[#617067] hover:text-[#1B4533]">← Back to journal</Link>
        <p className="mt-12 font-mono text-xs uppercase tracking-[0.16em] text-[#7E6F4F]">{post.category} · {post.readTime}</p>
        <h1 className="mx-auto mt-5 max-w-[970px] font-display text-[clamp(50px,7vw,92px)] font-normal leading-[0.98] tracking-[-0.03em] text-[#0E2A1E]">{post.title}</h1>
        <p className="mx-auto mt-7 max-w-2xl text-[19px] leading-[1.65] text-[#536057]">{post.excerpt}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-[#657068]"><span className="font-semibold text-[#1B4533]" rel="author">{post.author}</span><span>·</span><span>{post.role}</span><span>·</span><time dateTime={post.publishedTime}>{post.date}</time></div>
      </div>
    </header>

    <div className="px-6 md:px-10"><BlogVisual post={post} className="mx-auto aspect-[16/8] max-w-[1240px] rounded-[28px] md:rounded-[38px]" /></div>

    <div className="mx-auto grid max-w-[1040px] gap-12 px-6 py-16 md:grid-cols-[180px_minmax(0,680px)] md:px-10 md:py-24">
      <aside className="md:sticky md:top-28 md:self-start"><p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#7E6F4F]">In this guide</p><nav className="mt-4 flex flex-col gap-3 text-sm leading-snug text-[#657068]">{articleHeadings.map((section) => <a key={section.id} href={`#${section.id}`} className="hover:text-[#1B4533]">{section.title}</a>)}</nav></aside>
      <div className="article-body text-[18px] leading-[1.8] text-[#39483F]">
        <p className="font-display text-[31px] leading-[1.35] text-[#1B4533]">{post.intro}</p>
        {post.body?.length ? <PortableArticle value={post.body} /> : post.sections.map((section) => <section key={section.id} aria-labelledby={`${section.id}-heading`}>
          <h2 id={section.id} className="scroll-mt-28 pt-14 font-display text-[42px] leading-[1.08] text-[#0E2A1E]"><span id={`${section.id}-heading`}>{section.title}</span></h2>
          {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-5">{paragraph}</p>)}
          {section.bullets && <ul className="mt-6 space-y-4 pl-0">{section.bullets.map((item, index) => <li key={item} className="flex gap-4"><span className="font-mono text-sm text-[#7E6F4F]">{String(index + 1).padStart(2, "0")}</span><span>{item}</span></li>)}</ul>}
          {section.steps && <ol className="mt-7 space-y-4">{section.steps.map((step, index) => <li key={step.title} className="rounded-[18px] border border-[#DCD7CA] bg-white/50 p-5"><p className="font-mono text-xs text-[#7E6F4F]">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-1 font-display text-[27px] leading-tight text-[#1B4533]">{step.title}</h3><p className="mt-2 text-[16px] leading-relaxed text-[#536057]">{step.description}</p></li>)}</ol>}
        </section>)}
        <blockquote className="my-12 border-l-4 border-lime bg-[#F0EBDD] px-7 py-7 font-display text-[30px] leading-[1.25] text-[#1B4533]">{post.takeaway}</blockquote>
        {post.sources && <section aria-labelledby="sources-heading"><h2 id="sources-heading" className="pt-4 font-display text-[34px] text-[#0E2A1E]">Sources and further reading</h2><ul className="mt-4 space-y-2 text-base">{post.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="font-semibold text-[#1B4533] underline decoration-[#9DB68A] underline-offset-4">{source.label} ↗</a></li>)}</ul></section>}
        <section aria-labelledby="faq-heading"><h2 id="faq-heading" className="pt-14 font-display text-[42px] leading-[1.08] text-[#0E2A1E]">Frequently asked questions</h2><div className="mt-6 divide-y divide-[#DCD7CA] border-y border-[#DCD7CA]">{post.faq.map((item) => <div key={item.question} className="py-6"><h3 className="font-display text-[26px] leading-tight text-[#1B4533]">{item.question}</h3><p className="mt-3 text-[16px] leading-relaxed text-[#536057]">{item.answer}</p></div>)}</div></section>
        <div className="mt-12 rounded-[24px] bg-lime p-8 text-[#0E2A1E]"><p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#1B4533]/70">Kaloq</p><h2 className="mt-3 font-display text-[32px] leading-tight">{post.cta.title}</h2><p className="mt-3 text-[16px] leading-relaxed text-[#1B4533]/80">{post.cta.description}</p><Link href={post.cta.href} className="mt-6 inline-flex rounded-full bg-[#1B4533] px-5 py-3 text-sm font-semibold text-white">{post.cta.label} →</Link></div>
        <div className="mt-8 rounded-[24px] bg-[#1B4533] p-7 text-white"><p className="font-mono text-[11px] uppercase tracking-[0.16em] text-lime">A note from Kaloq</p><p className="mt-3 text-[16px] leading-relaxed text-white/75">{getProductNote("en")}</p></div>
      </div>
    </div>

    <section className="border-t border-[#DCD7CA] px-6 py-16 md:px-10 md:py-24"><div className="mx-auto max-w-[1240px]"><div className="flex items-end justify-between"><div><p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7E6F4F]">Keep reading</p><h2 className="mt-3 font-display text-[44px] text-[#0E2A1E]">Related stories</h2></div><Link href="/blog" className="hidden text-sm font-semibold text-[#1B4533] md:block">View all stories →</Link></div><div className="mt-8 grid gap-7 md:grid-cols-2">{related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="group grid overflow-hidden rounded-[24px] bg-[#EEE9DC] sm:grid-cols-2"><BlogVisual post={item} className="aspect-[4/3] sm:aspect-auto"/><div className="p-7"><p className="font-mono text-[11px] uppercase tracking-[.12em] text-[#7E6F4F]">{item.category}</p><h3 className="mt-3 font-display text-[29px] leading-[1.08] text-[#0E2A1E] group-hover:text-[#2D6549]">{item.title}</h3><p className="mt-5 text-sm font-medium text-[#1B4533]">Read article ↗</p></div></Link>)}</div></div></section>
  </article>;
}
