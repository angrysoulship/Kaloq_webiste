import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextValue } from "@/lib/blog-content";

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => <h2 id={value._key} className="scroll-mt-28 pt-14 font-display text-[42px] leading-[1.08] text-[#0E2A1E]">{children}</h2>,
    h3: ({ children }) => <h3 className="pt-9 font-display text-[30px] leading-tight text-[#1B4533]">{children}</h3>,
    normal: ({ children }) => <p className="mt-5">{children}</p>,
    blockquote: ({ children }) => <blockquote className="my-10 border-l-4 border-lime bg-[#F0EBDD] px-7 py-7 font-display text-[28px] leading-[1.3] text-[#1B4533]">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="mt-6 list-disc space-y-3 pl-6 marker:text-[#7E6F4F]">{children}</ul>,
    number: ({ children }) => <ol className="mt-6 list-decimal space-y-3 pl-6 marker:text-[#7E6F4F]">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => <a href={value?.href} target={value?.href?.startsWith("http") ? "_blank" : undefined} rel={value?.href?.startsWith("http") ? "noreferrer" : undefined} className="font-semibold text-[#1B4533] underline decoration-[#9DB68A] underline-offset-4">{children}</a>,
  },
  types: {
    callout: ({ value }) => <div className="my-9 rounded-[20px] bg-[#F0EBDD] p-6"><p className="font-display text-[25px] text-[#1B4533]">{value.heading}</p><p className="mt-2 text-[16px] leading-relaxed">{value.text}</p></div>,
    steps: ({ value }) => <ol className="mt-7 space-y-4">{value.items?.map((step: { _key?: string; title: string; description: string }, index: number) => <li key={step._key || step.title} className="rounded-[18px] border border-[#DCD7CA] bg-white/50 p-5"><p className="font-mono text-xs text-[#7E6F4F]">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-1 font-display text-[27px] leading-tight text-[#1B4533]">{step.title}</h3><p className="mt-2 text-[16px] leading-relaxed text-[#536057]">{step.description}</p></li>)}</ol>,
  },
};

export function PortableArticle({ value }: { value: PortableTextValue }) {
  return <PortableText value={value} components={components} />;
}
