"use client";

import { useEffect, useState } from "react";

type ArticleHeading = {
  id: string;
  title: string;
};

export function ArticleTableOfContents({ headings }: { headings: ArticleHeading[] }) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    if (!headings.length) return;

    let frame = 0;

    const updateActiveHeading = () => {
      frame = 0;
      const readingLine = Math.min(window.innerHeight * 0.32, 280);
      let currentId = headings[0].id;

      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element && element.getBoundingClientRect().top <= readingLine) {
          currentId = heading.id;
        }
      }

      setActiveId((previousId) => previousId === currentId ? previousId : currentId);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveHeading);
    };

    updateActiveHeading();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [headings]);

  if (!headings.length) return null;

  return <aside className="md:sticky md:top-28 md:self-start">
    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#7E6F4F]">In this guide</p>
    <nav aria-label="Article sections" className="mt-4 flex flex-col gap-3 text-sm leading-snug">
      {headings.map((heading) => {
        const isActive = heading.id === activeId;

        return <a
          key={heading.id}
          href={`#${heading.id}`}
          aria-current={isActive ? "location" : undefined}
          className={`transition-colors duration-200 ${isActive ? "font-medium text-[#1B4533]" : "text-[#7A827C] hover:text-[#1B4533]"}`}
        >
          {heading.title}
        </a>;
      })}
    </nav>
  </aside>;
}
