import Link from "next/link";
import type { BlogPost } from "@/lib/types";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col rounded-xl border border-navy/10 bg-white p-6 transition hover:border-amber/60 hover:shadow-sm"
    >
      <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">{post.category}</p>
      <h2 className="mt-2 font-serif text-lg text-navy md:text-xl">{post.title}</h2>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-text-mid">{post.metaDescription}</p>
      <p className="mt-4 text-xs text-text-light">
        {formatDate(post.publishedDate)} · {post.readTime} read
      </p>
    </Link>
  );
}
