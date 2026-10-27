import { getCliClient } from "sanity/cli";
import { blogPosts, type BlogPost } from "../lib/blog-content";

const client = getCliClient({ apiVersion: "2026-10-27" });
const key = (prefix: string, index: number) => `${prefix}-${index + 1}`;

function textBlock(text: string, style = "normal", blockKey: string) {
  return { _type: "block", _key: blockKey, style, markDefs: [], children: [{ _type: "span", _key: `${blockKey}-span`, marks: [], text }] };
}

function listBlocks(items: string[], prefix: string) {
  return items.map((text, index) => ({ ...textBlock(text, "normal", key(prefix, index)), listItem: "bullet", level: 1 }));
}

function bodyFromPost(post: BlogPost) {
  return post.sections.flatMap((section, sectionIndex) => {
    const prefix = `section-${sectionIndex + 1}`;
    return [
      textBlock(section.title, "h2", `${prefix}-heading`),
      ...(section.paragraphs || []).map((text, index) => textBlock(text, "normal", key(`${prefix}-paragraph`, index))),
      ...listBlocks(section.bullets || [], `${prefix}-bullet`),
      ...(section.steps?.length ? [{
        _type: "steps", _key: `${prefix}-steps`,
        items: section.steps.map((step, index) => ({ _type: "step", _key: key(`${prefix}-step`, index), ...step })),
      }] : []),
    ];
  });
}

function documentFromPost(post: BlogPost) {
  return {
    _id: `post.${post.slug}`,
    _type: "post",
    title: post.title,
    slug: { _type: "slug", current: post.slug },
    category: post.category,
    publishedAt: post.publishedTime,
    featured: Boolean(post.featured),
    author: post.author,
    role: post.role,
    readTime: post.readTime,
    art: post.art,
    excerpt: post.excerpt,
    keywords: post.keywords,
    intro: post.intro,
    body: bodyFromPost(post),
    takeaway: post.takeaway,
    faq: post.faq.map((item, index) => ({ _type: "faq", _key: key("faq", index), ...item })),
    sources: post.sources?.map((item, index) => ({ _type: "source", _key: key("source", index), ...item })),
    cta: { _type: "cta", ...post.cta },
    claimsReviewed: true,
  };
}

async function main() {
  let transaction = client.transaction();
  const websitePosts = blogPosts.filter((post) => post.locale === "en");
  for (const post of websitePosts) transaction = transaction.createOrReplace(documentFromPost(post));
  const result = await transaction.commit();
  console.log(`Imported ${websitePosts.length} Kaloq blog posts in transaction ${result.transactionId}.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
