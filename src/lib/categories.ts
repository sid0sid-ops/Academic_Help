export interface Category {
  slug: string;
  name: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  { slug: "all", name: "All", description: "All previous work samples" },
  { slug: "project", name: "Projects", description: "Academic and research projects" },
  { slug: "dissertation", name: "Dissertations", description: "Dissertation assistance and writing layouts" },
  { slug: "thesis", name: "Thesis Formatting", description: "Thesis layout, citations, and structure formatting" },
  { slug: "formatting", name: "Formatting", description: "General document design and layout optimization" },
  { slug: "presentation", name: "Presentations", description: "PPT and slideshow design" },
  { slug: "poster", name: "Posters", description: "Academic posters and presentation graphics" },
  { slug: "report", name: "Reports", description: "Academic reports and literature summaries" },
  { slug: "bioinformatics", name: "Bioinformatics", description: "Bioinformatics workflows, data organization, and analyses" },
  { slug: "cv", name: "CV / Portfolio", description: "Professional CVs and academic portfolios" },
  { slug: "general", name: "General", description: "General academic documents" }
];

/**
 * Returns the category object for a given slug.
 */
export function getCategoryBySlug(slug: string): Category {
  return CATEGORIES.find((cat) => cat.slug === slug) || CATEGORIES[CATEGORIES.length - 1];
}
