import { defineQuery } from "next-sanity";

export const postsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current) && coalesce(locale, "en") != "zh"] | order(featured desc, publishedAt desc) {
    _id, _updatedAt, title, "slug": slug.current, category, excerpt,
    publishedAt, readTime, author, role, art, featured, keywords, intro, body,
    "coverImageUrl": coverImage.asset->url, "coverImageAlt": coverImage.alt,
    sections[]{id, title, paragraphs, bullets, steps[]{title, description}},
    takeaway, faq[]{question, answer}, sources[]{label, url}, cta
  }
`);

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug && coalesce(locale, "en") != "zh"][0] {
    _id, _updatedAt, title, "slug": slug.current, category, excerpt,
    publishedAt, readTime, author, role, art, featured, keywords, intro, body,
    "coverImageUrl": coverImage.asset->url, "coverImageAlt": coverImage.alt,
    sections[]{id, title, paragraphs, bullets, steps[]{title, description}},
    takeaway, faq[]{question, answer}, sources[]{label, url}, cta
  }
`);

export const postSlugsQuery = defineQuery(`*[_type == "post" && defined(slug.current) && coalesce(locale, "en") != "zh"].slug.current`);
