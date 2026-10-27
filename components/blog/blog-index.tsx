"use client";

import { useState } from "react";
import Link from "next/link";
import { BlogVisual } from "@/components/blog/blog-visual";
import { type BlogCategory, type BlogPost } from "@/lib/blog-content";

const categories: Array<"All" | BlogCategory> = ["All", "Perspectives", "Guides", "Product", "Company"];

export function BlogIndex({ allPosts }: { allPosts: BlogPost[] }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const posts = allPosts.filter((post) => !post.featured && (category === "All" || post.category === category));

  return <>
    <div className="flex flex-wrap gap-2" aria-label="Filter articles by category">
      {categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${category === item ? "border-[#1B4533] bg-[#1B4533] text-white" : "border-[#CFC9BA] text-[#42544A] hover:border-[#1B4533]"}`}>{item}</button>)}
    </div>
    <div className="mt-9 grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
        <BlogVisual post={post} className="aspect-[4/3] rounded-[24px] transition-transform duration-300 group-hover:-translate-y-1" />
        <div className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#7E6F4F]"><span>{post.category}</span><span>·</span><span>{post.readTime}</span></div>
        <h2 className="mt-3 font-display text-[31px] leading-[1.08] tracking-[-0.01em] text-[#0E2A1E] group-hover:text-[#2D6549]">{post.title}</h2>
        <p className="mt-3 text-[15px] leading-[1.65] text-[#5A655D]">{post.excerpt}</p>
        <p className="mt-4 text-sm font-medium text-[#1B4533]">Read article <span aria-hidden="true">↗</span></p>
      </Link>)}
    </div>
    {posts.length === 0 && <p className="py-16 text-[#5A655D]">More stories in this category are coming soon.</p>}
  </>;
}
