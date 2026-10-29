import { cache } from "react";
import type { BlogPost } from "@/lib/blog-content";
import { sanityClient } from "@/sanity/lib/client";
import { postBySlugQuery, postSlugsQuery, postsQuery } from "@/sanity/lib/queries";

type SanityPost = Partial<BlogPost> & {
  _id: string;
  _updatedAt: string;
  slug: string;
  publishedAt?: string;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  }).format(new Date(value));
}

function normalizePost(post: SanityPost): BlogPost {
  const publishedTime = post.publishedAt || post._updatedAt;
  return {
    slug: post.slug,
    category: post.category || "Guides",
    title: post.title || "Untitled",
    excerpt: post.excerpt || "",
    date: formatDate(publishedTime),
    publishedTime,
    modifiedTime: post._updatedAt,
    readTime: post.readTime || "6 min read",
    author: post.author || "Kaloq Editorial",
    role: post.role || "Product Education",
    art: post.art || "portal",
    coverImageUrl: post.coverImageUrl,
    coverImageAlt: post.coverImageAlt || post.title || "Kaloq article cover",
    keywords: post.keywords || [],
    featured: post.featured || false,
    intro: post.intro || post.excerpt || "",
    sections: post.sections || [],
    body: post.body,
    takeaway: post.takeaway || "",
    faq: post.faq || [],
    sources: post.sources,
    cta: post.cta || {
      title: "Explore Kaloq",
      description: "See how Kaloq connects stablecoins with practical payment experiences.",
      label: "Explore products",
      href: "/products/card",
    },
  };
}

async function fetchSanityPosts(): Promise<BlogPost[]> {
  const posts = await sanityClient.fetch<SanityPost[]>(postsQuery, {}, {
    next: { revalidate: 60, tags: ["blog-posts"] },
  });
  return posts.map(normalizePost);
}

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  return fetchSanityPosts();
});

export const getBlogPost = cache(async (slug: string): Promise<BlogPost | undefined> => {
  const post = await sanityClient.fetch<SanityPost | null>(postBySlugQuery, { slug }, {
    next: { revalidate: 60, tags: ["blog-posts", `blog-post-${slug}`] },
  });
  return post ? normalizePost(post) : undefined;
});

export async function getBlogSlugs() {
  const slugs = await sanityClient.fetch<string[]>(postSlugsQuery, {}, {
    next: { revalidate: 60, tags: ["blog-posts"] },
  });
  return [...new Set(slugs)];
}
