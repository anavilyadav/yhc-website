import Link from "next/link";

const sections = [
  {
    href: "/admin/videos",
    title: "Related Videos",
    description: "Add YouTube videos, tagged by condition, to the Related Videos Gallery shown on disease pages.",
  },
  {
    href: "/admin/photos",
    title: "Photo Gallery",
    description: "Add photos to the page-level photo gallery — pick which page each photo appears on.",
  },
  {
    href: "/admin/settings",
    title: "Social Links",
    description: "Set the Facebook, Instagram, and YouTube links shown in the header and footer.",
  },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="font-serif text-2xl text-navy">Admin</h1>
      <p className="mt-1 text-sm text-text-mid">Manage site content that doesn&apos;t need a redeploy.</p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-xl border border-navy/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="font-serif text-lg text-navy">{section.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-text-mid">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
