import Link from "next/link";
import type { BlogPost } from "@/lib/types";

export function RelatedPosts({ posts }: { posts: Pick<BlogPost, "slug" | "title" | "category">[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="font-serif text-lg text-navy">Related Reading</h2>
      <ul className="mt-4 space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-[15px] font-semibold text-amber-dark hover:text-navy"
            >
              {post.title} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
