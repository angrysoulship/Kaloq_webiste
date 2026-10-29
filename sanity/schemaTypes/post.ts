import { defineArrayMember, defineField, defineType } from "sanity";

function required<T extends { required: () => T }>(rule: T): T {
  return rule.required();
}

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
    { name: "publishing", title: "Publishing" },
  ],
  fields: [
    defineField({ name: "title", title: "Title", type: "string", group: "content", validation: required }),
    defineField({ name: "slug", title: "URL slug", type: "slug", group: "publishing", options: { source: "title", maxLength: 96 }, validation: required }),
    defineField({ name: "category", title: "Category", type: "string", group: "publishing", initialValue: "Guides", options: { list: ["Perspectives", "Guides", "Product", "Company"] }, validation: required }),
    defineField({ name: "publishedAt", title: "Publish date", type: "datetime", group: "publishing", initialValue: () => new Date().toISOString(), validation: required }),
    defineField({ name: "featured", title: "Featured article", type: "boolean", group: "publishing", initialValue: false }),
    defineField({ name: "author", title: "Author", type: "string", group: "publishing", initialValue: "Kaloq Editorial" }),
    defineField({ name: "role", title: "Author role", type: "string", group: "publishing", initialValue: "Product Education" }),
    defineField({ name: "readTime", title: "Read time", type: "string", group: "publishing", initialValue: "6 min read" }),
    defineField({ name: "art", title: "Fallback artwork", type: "string", group: "publishing", initialValue: "portal", options: { list: ["portal", "ledger", "orbit", "bridge", "signal"] } }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", group: "content", options: { hotspot: true }, fields: [{ name: "alt", title: "Alt text", type: "string" }] }),
    defineField({ name: "excerpt", title: "Summary", description: "Used on article cards and as the meta description.", type: "text", rows: 3, group: "seo", validation: (rule) => rule.required().max(180) }),
    defineField({ name: "keywords", title: "SEO keywords", type: "array", group: "seo", of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({ name: "intro", title: "Opening paragraph", type: "text", rows: 5, group: "content", validation: required }),
    defineField({
      name: "body", title: "Article body", type: "array", group: "content", validation: required,
      of: [
        defineArrayMember({ type: "block", styles: [{ title: "Normal", value: "normal" }, { title: "Heading 2", value: "h2" }, { title: "Heading 3", value: "h3" }, { title: "Quote", value: "blockquote" }], marks: { annotations: [{ name: "link", type: "object", title: "Link", fields: [{ name: "href", type: "url", title: "URL", validation: required }] }] } }),
        defineArrayMember({ type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alt text", type: "string", validation: required }, { name: "caption", title: "Caption", type: "string" }] }),
        defineArrayMember({ name: "callout", title: "Kaloq callout", type: "object", fields: [{ name: "heading", type: "string", title: "Heading" }, { name: "text", type: "text", title: "Text", validation: required }] }),
        defineArrayMember({ name: "steps", title: "Numbered steps", type: "object", fields: [{ name: "items", title: "Steps", type: "array", of: [{ type: "object", fields: [{ name: "title", type: "string", validation: required }, { name: "description", type: "text", validation: required }] }] }] }),
      ],
    }),
    defineField({ name: "takeaway", title: "Key takeaway", type: "text", rows: 3, group: "content", validation: required }),
    defineField({ name: "faq", title: "FAQ", type: "array", group: "content", of: [{ type: "object", fields: [{ name: "question", type: "string", validation: required }, { name: "answer", type: "text", rows: 3, validation: required }] }] }),
    defineField({ name: "sources", title: "Sources", type: "array", group: "content", of: [{ type: "object", fields: [{ name: "label", type: "string", validation: required }, { name: "url", type: "url", validation: required }] }] }),
    defineField({ name: "cta", title: "Product call to action", type: "object", group: "content", fields: [{ name: "title", type: "string", validation: required }, { name: "description", type: "text", rows: 2, validation: required }, { name: "label", type: "string", validation: required }, { name: "href", title: "Internal path", description: "Example: /products/card", type: "string", validation: required }] }),
    defineField({ name: "claimsReviewed", title: "Product claims reviewed", description: "Confirm assets, networks, countries, fees, partners, availability, and regulatory wording before publishing.", type: "boolean", group: "publishing", initialValue: false, validation: (rule) => rule.custom((value) => value ? true : "Complete the product claims review before publishing.") }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
});
