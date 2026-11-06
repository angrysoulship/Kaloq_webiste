import Image from "next/image";
import { ArticleArt } from "@/components/blog/article-art";
import type { BlogPost } from "@/lib/blog-content";

export function BlogVisual({ post, className = "", variant = "cover" }: { post: BlogPost; className?: string; variant?: "cover" | "featured" }) {
  const featured = variant === "featured" && !!post.featuredImageUrl;
  const source = featured ? post.featuredImageUrl : post.coverImageUrl;
  if (!source) return <ArticleArt variant={post.art} className={className} />;
  const imageUrl = new URL(source);
  const usesSanityCdn = imageUrl.hostname === "cdn.sanity.io";
  if (usesSanityCdn) {
    imageUrl.searchParams.set("auto", "format");
    imageUrl.searchParams.set("w", "1800");
    imageUrl.searchParams.set("q", "85");
  }
  const contain = !featured && post.coverImageFit === "contain";
  return <div className={`relative overflow-hidden ${contain ? "bg-white" : "bg-[#EEE9DC]"} ${className}`}><Image src={imageUrl.toString()} alt={(featured ? post.featuredImageAlt : post.coverImageAlt) || post.title} fill unoptimized={usesSanityCdn} sizes="(min-width: 1024px) 1240px, 100vw" className={contain ? "object-contain" : "object-cover"} /></div>;
}
