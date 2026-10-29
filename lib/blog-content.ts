export type BlogCategory = "Perspectives" | "Guides" | "Product" | "Company";
export type ArticleSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: { title: string; description: string }[];
};
export type PortableTextValue = Array<Record<string, unknown>>;

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  title: string;
  excerpt: string;
  date: string;
  publishedTime: string;
  modifiedTime: string;
  readTime: string;
  author: string;
  role: string;
  art: "portal" | "ledger" | "orbit" | "bridge" | "signal";
  coverImageUrl?: string;
  coverImageAlt?: string;
  keywords: string[];
  featured?: boolean;
  intro: string;
  sections: ArticleSection[];
  body?: PortableTextValue;
  takeaway: string;
  faq: { question: string; answer: string }[];
  sources?: { label: string; url: string }[];
  cta: { title: string; description: string; label: string; href: string };
};

export function getProductNote() {
  return "Product availability, supported assets, networks, countries, currencies, and merchant categories vary by eligibility and jurisdiction. This article is for general information only and is not financial, legal, or investment advice.";
}
