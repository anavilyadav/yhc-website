import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllDiseasePageSlugs } from "@/lib/data/disease-pages";
import { getAllBlogSlugs } from "@/lib/data/blog";
import { getDoctors } from "@/lib/supabase/queries/doctors";

const STATIC_ROUTES = [
  "",
  "about",
  "our-doctors",
  "appointment",
  "online-consultation",
  "contact",
  "blog",
  "faq",
  "homeopathy-faq",
  "patient-stories",
  "homeopathy-doctor-jaipur",
  "homeopathy-clinic-jagatpura-jaipur",
  "skin-diseases/vitiligo-treatment-jaipur",
  "skin-diseases/psoriasis-treatment-jaipur",
  "nervous-system-disease/cerebral-palsy-treatment-jaipur",
  "genetic-diseases/down-syndrome-treatment-jaipur",
  "privacy-policy",
  "terms-of-use",
  "medical-disclaimer",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [diseaseSlugs, blogSlugs, doctors] = await Promise.all([
    getAllDiseasePageSlugs(),
    getAllBlogSlugs(),
    getDoctors(),
  ]);

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${siteConfig.url}/${route}${route ? "/" : ""}`,
    lastModified: new Date(),
  }));

  const diseaseEntries = diseaseSlugs.map((slug) => ({
    url: `${siteConfig.url}/${slug}/`,
    lastModified: new Date(),
  }));

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}/`,
    lastModified: new Date(),
  }));

  const doctorEntries = doctors.map((doctor) => ({
    url: `${siteConfig.url}/our-doctors/${doctor.slug}/`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...diseaseEntries, ...blogEntries, ...doctorEntries];
}
