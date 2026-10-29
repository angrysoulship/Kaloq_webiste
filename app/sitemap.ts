import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/sanity/lib/blog";
import { SITE_URL } from "@/lib/seo";

const staticRoutes = [
  "", "/products/card", "/products/global-account", "/solutions/stablecoin-earners",
  "/solutions/cross-border-living", "/solutions/dollar-balance-holders",
  "/solutions/global-online-spending", "/pricing", "/contact", "/blog",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPosts();
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: "2026-10-26",
    changeFrequency: route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.9 : 0.7,
  }));

  return [
    ...pages,
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.modifiedTime,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
