/**
 * Cross-links between related disease pages, per GIOS_P2_SEO_Schema_
 * WordPress.docx Section 3 ("Related disease page pairs") and the same
 * pairs repeated in the sitemap master doc's internal-linking table.
 * Deliberately one-directional entries below are mirrored both ways so
 * each page in a pair links to the other.
 */
export const RELATED_CONDITIONS: Record<string, { slug: string; label: string }[]> = {
  "skin-diseases": [{ slug: "autoimmune-diseases", label: "Autoimmune Diseases" }],
  "autoimmune-diseases": [{ slug: "skin-diseases", label: "Skin Diseases" }],

  autism: [
    { slug: "childrens-health", label: "Children's Health" },
    { slug: "genetic-diseases", label: "Genetic & Rare Diseases" },
  ],
  "childrens-health": [
    { slug: "autism", label: "Autism & Child Development" },
    { slug: "nervous-system-disease", label: "Nervous System Disorders" },
  ],
  "genetic-diseases": [{ slug: "autism", label: "Autism & Child Development" }],

  "renal-diseases": [{ slug: "hormonal-diseases", label: "Hormonal & Endocrine" }],
  "hormonal-diseases": [
    { slug: "renal-diseases", label: "Kidney & Renal Diseases" },
    { slug: "womens-health", label: "Women's Health" },
  ],

  "womens-health": [{ slug: "hormonal-diseases", label: "Hormonal & Endocrine" }],

  "nervous-system-disease": [{ slug: "childrens-health", label: "Children's Health" }],
};

/**
 * Forward links from a parent disease page down to its dedicated
 * sub-pages (e.g. Skin Diseases → Vitiligo, Psoriasis). Sub-pages already
 * link back up to their parent (see each sub-page's own component), so
 * this closes the loop in both directions per the sitemap master doc's
 * internal-linking rule.
 */
export const SUB_PAGE_LINKS: Record<string, { slug: string; label: string }[]> = {
  "skin-diseases": [
    { slug: "skin-diseases/vitiligo-treatment-jaipur", label: "Vitiligo — dedicated treatment page" },
    { slug: "skin-diseases/psoriasis-treatment-jaipur", label: "Psoriasis — dedicated treatment page" },
  ],
  "nervous-system-disease": [
    {
      slug: "nervous-system-disease/cerebral-palsy-treatment-jaipur",
      label: "Cerebral Palsy — dedicated treatment page",
    },
  ],
  "genetic-diseases": [
    {
      slug: "genetic-diseases/down-syndrome-treatment-jaipur",
      label: "Down Syndrome — dedicated treatment page",
    },
  ],
};
