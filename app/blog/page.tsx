import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/data/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | Homeopathy Insights From Dr Anavil Yadav",
  description:
    "Honest, experience-based articles on vitiligo, autism, kidney disease and classical homeopathy from Dr Anavil Yadav, Yadav Homeo Clinic, Jaipur.",
  alternates: { canonical: `${siteConfig.url}/blog/` },
  openGraph: {
    title: "Blog | Yadav Homeo Clinic",
    description:
      "Honest, experience-based articles on vitiligo, autism, kidney disease and classical homeopathy from Dr Anavil Yadav.",
    url: `${siteConfig.url}/blog/`,
    type: "website",
  },
};

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <section className="bg-navy px-5 py-14 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber">
            From Dr Anavil Yadav
          </p>
          <h1 className="font-serif text-3xl leading-tight text-cream sm:text-5xl">
            Honest Answers, Not Sales Pitches
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Articles written from 30 years of clinical experience treating chronic and complex
            disease with classical homeopathy — what it can do, what it cannot, and what to
            realistically expect.
          </p>
        </div>
      </section>

      <section className="bg-cream-bg px-5 py-14 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
