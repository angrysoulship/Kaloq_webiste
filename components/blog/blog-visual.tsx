import Image from "next/image";
import { ArticleArt } from "@/components/blog/article-art";
import type { BlogPost } from "@/lib/blog-content";

export function BlogVisual({ post, className = "" }: { post: BlogPost; className?: string }) {
  if (!post.coverImageUrl) return <ArticleArt variant={post.art} className={className} />;
  return <div className={`relative overflow-hidden bg-[#EEE9DC] ${className}`}><Image src={post.coverImageUrl} alt={post.coverImageAlt || post.title} fill sizes="(min-width: 1024px) 1240px, 100vw" className="object-cover" /></div>;
}
