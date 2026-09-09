"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * GIOS_P5_Patient_Conversion_OS.docx Part 8 "blog_engagement" event —
 * fires once when a reader's scroll reaches this invisible sentinel,
 * placed at the end of the article body (~95% of the page). An
 * IntersectionObserver is used instead of a raw scroll listener so this
 * never adds a scroll-jank risk to the page.
 */
export function BlogEngagementTracker({
  blogTitle,
  blogCategory,
}: {
  blogTitle: string;
  blogCategory: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !fired.current) {
          fired.current = true;
          trackEvent("blog_engagement", { blog_title: blogTitle, blog_category: blogCategory });
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [blogTitle, blogCategory]);

  return <div ref={ref} aria-hidden className="h-px w-full" />;
}
