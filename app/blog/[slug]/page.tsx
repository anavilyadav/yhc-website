import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getAllBlogSlugs, getBlogPosts } from "@/lib/data/blog";
import { getDoctorBySlug } from "@/lib/supabase/queries/doctors";
import { getDiseasePage } from "@/lib/data/disease-pages";
import { buildBlogPostingSchema } from "@/lib/schema";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { BlogContent } from "@/components/blog/BlogContent";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import DisclaimerBanner from "@/components/disease-page/DisclaimerBanner";

// Blog content is Supabase-backed (see lib/data/blog.ts) — ISR re-fetches
// hourly so admin-panel edits go live without a redeploy.
export const revalidate = 3600;

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  const postUrl = `${siteConfig.url}/blog/${post.slug}/`;

  return {
    title: { absolute: `${post.title} | ${siteConfig.name}` },
    description: post.metaDescription,
    keywords: [post.focusKeyword, ...post.secondaryKeywords],
    alternates: { canonical: postUrl },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: postUrl,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "article",
      publishedTime: post.publishedDate,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const [doctor, relatedDisease, allPosts] = await Promise.all([
    getDoctorBySlug(siteConfig.doctors.physician.slug),
    getDiseasePage(post.relatedDiseaseSlug),
    getBlogPosts(),
  ]);

  const relatedPosts = post.relatedPostSlugs
    .map((relatedSlug) => allPosts.find((p) => p.slug === relatedSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const schema = buildBlogPostingSchema(post);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="bg-cream px-5 py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-5 text-xs text-text-mid">
            <Link href="/" className="hover:text-amber-dark">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <Link href="/blog" className="hover:text-amber-dark">
              Blog
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-navy">{post.category}</span>
          </nav>

          <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">{post.category}</p>
          <h1 className="mt-2 font-serif text-2xl leading-snug text-navy md:text-4xl md:leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-text-mid">
            {formatDate(post.publishedDate)} · {post.readTime} read
          </p>
        </div>
      </article>

      <div className="bg-cream-bg px-5 py-14">
        <BlogContent intro={post.intro} sections={post.sections} />

        <div className="mx-auto mt-10 max-w-3xl">
          <AuthorBox doctor={doctor} lastReviewed={formatDate(post.publishedDate)} />
        </div>

        <div className="mx-auto mt-6 max-w-3xl">
          <DisclaimerBanner text="This article is written by Dr Anavil Yadav (BHMS), Homeopathic Physician at Yadav Homeo Clinic, Jaipur, for educational purposes only. Clinical outcomes described are from the author's practice experience. Individual results vary. This is not a substitute for professional medical advice." />
        </div>

        {relatedDisease && (
          <div className="mx-auto mt-8 max-w-3xl">
            <Link
              href={`/${relatedDisease.slug}`}
              className="text-[15px] font-semibold text-amber-dark hover:text-navy"
            >
              Read more about {relatedDisease.aboutCondition.name} →
            </Link>
          </div>
        )}

        {relatedPosts.length > 0 && (
          <div className="mt-10">
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}
      </div>

      <section className="bg-navy px-5 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-xl leading-snug text-cream md:text-3xl">{post.finalCta}</h2>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink(`Hello, I read your blog post "${post.title}" and would like to book a consultation.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-sm bg-amber px-7 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90 sm:w-auto"
            >
              💬 WhatsApp Us Now
            </a>
            <Link
              href="/appointment"
              className="w-full rounded-sm border-2 border-amber-light px-7 py-3 text-center text-sm font-bold uppercase tracking-wide text-amber-light transition-colors hover:bg-amber-light hover:text-navy sm:w-auto"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
