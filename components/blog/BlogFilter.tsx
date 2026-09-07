"use client";

import { useState } from "react";
import type { BlogPost } from "@/lib/types";
import { BlogCard } from "@/components/blog/BlogCard";

const ALL = "All Posts";

/**
 * UW report ch.3.8: category filtering becomes useful once the post count
 * grows past ~10-12 — with only a handful of posts today it's low-value,
 * but the mechanism costs nothing to have ready now, and categories are
 * derived from the posts themselves so nothing needs updating by hand as
 * new posts are added.
 */
export function BlogFilter({ posts }: { posts: BlogPost[] }) {
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  const [active, setActive] = useState<string>(ALL);
  const visible = active === ALL ? posts : posts.filter((p) => p.category === active);

  if (categories.length <= 1) {
    return (
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap justify-center gap-2">
        {[ALL, ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
              active === category
                ? "border-navy bg-navy text-cream"
                : "border-navy/20 bg-white text-navy hover:border-amber"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {visible.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
