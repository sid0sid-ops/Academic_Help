export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  whatsappMessage: string;
  iconType: string;
}

export const SERVICES: Service[] = [
  {
    id: "project-work",
    title: "Project Work Support",
    description: "Guidance on choosing topics, planning structures, and organizing academic project documentation.",
    details: [
      "Project planning & structural outlines",
      "Drafting and layout organization",
      "Reviewing and editing methodologies",
      "Formatting final submissions based on rubrics"
    ],
    whatsappMessage: "Hello Academic Help, I would like to get support for my Academic Project Work. Please let me know the process.",
    iconType: "project"
  },
  {
    id: "dissertation",
    title: "Dissertation Help",
    description: "Comprehensive assistance in structuring, organizing, and formatting complex, multi-chapter college dissertations.",
    details: [
      "Literature review layout and compilation",
      "Methodology section structures",
      "Results description and formatting",
      "Bibliography and citation management"
    ],
    whatsappMessage: "Hello Academic Help, I'm looking for formatting and structural guidance for my Dissertation. Could we discuss?",
    iconType: "dissertation"
  },
  {
    id: "thesis-formatting",
    title: "Thesis Formatting",
    description: "Ensure your thesis strictly complies with university guidelines, margins, typography, page numbers, and citation styles.",
    details: [
      "APA, MLA, Chicago, Harvard formatting standards",
      "Table of contents and list of figures automation",
      "Margin correction, font settings, and pagination alignment",
      "Citation checking and reference list cleanup"
    ],
    whatsappMessage: "Hello Academic Help, I need professional formatting assistance for my Thesis to meet university guidelines.",
    iconType: "thesis"
  },
  {
    id: "report-writing",
    title: "Report Writing Support",
    description: "Structural organization and professional layout design for internship reports, lab manuals, and technical reports.",
    details: [
      "Executive summary and abstract structuring",
      "Clear chapter transitions and headings hierarchy",
      "Visual chart placements and formatting",
      "Proofreading and language refinement"
    ],
    whatsappMessage: "Hello Academic Help, I need support in structuring and layout formatting for my Report.",
    iconType: "report"
  },
  {
    id: "ppt-presentation",
    title: "PPT & Presentation Making",
    description: "Premium visual design, slide structure, and key takeaway organization for high-stakes classroom and thesis defenses.",
    details: [
      "Slide layout and typography hierarchy",
      "Visual storytelling using custom graphics and icons",
      "Presentation notes structure",
      "Academic poster conversions to slide decks"
    ],
    whatsappMessage: "Hello Academic Help, I need to design a professional PPT/Presentation for my upcoming academic delivery.",
    iconType: "presentation"
  },
  {
    id: "data-analysis",
    title: "Data Analysis Guidance",
    description: "Help organizing raw data, selecting appropriate visualization charts, and compiling descriptive results tables.",
    details: [
      "Data formatting and cleanup",
      "Creating clear visual graphs (Excel, R, Python styles)",
      "Descriptive statistics compilation",
      "Structuring results section reporting"
    ],
    whatsappMessage: "Hello Academic Help, I need guidance in organizing my research data and creating clear data visualizations.",
    iconType: "data"
  },
  {
    id: "bioinformatics",
    title: "Bioinformatics Help",
    description: "Guidance on designing biological workflows, sequence analysis, pathway charts, and organizing genetic research reports.",
    details: [
      "Structuring sequence alignment and genetic reports",
      "Pathway charts and phylogenetic tree setups",
      "Formatting data files for biological databases",
      "Literature organization for bioinformatics studies"
    ],
    whatsappMessage: "Hello Academic Help, I need support with bioinformatics workflow visualization and report organization.",
    iconType: "bioinformatics"
  },
  {
    id: "assignment-support",
    title: "Assignment Support",
    description: "Assistance in understanding complex prompt criteria, compiling study guides, and organizing solution templates.",
    details: [
      "Structuring answers according to grading guidelines",
      "Topic research and literature collection",
      "Grammar checking and plagiarism checks",
      "Clear formatting of formulas and responses"
    ],
    whatsappMessage: "Hello Academic Help, I would like guidance on structuring and formatting my academic assignment.",
    iconType: "assignment"
  },
  {
    id: "poster-design",
    title: "Poster Design",
    description: "Layout design and visual organization of scientific posters for college exhibitions, seminars, and conferences.",
    details: [
      "Standard academic print sizes (A0, A1, etc.)",
      "High-resolution graphics and layout planning",
      "Concise text formatting for high readability",
      "Clear section divisions (Intro, Methods, Results, Conclusion)"
    ],
    whatsappMessage: "Hello Academic Help, I need to design an academic/scientific poster for a seminar or conference.",
    iconType: "poster"
  },
  {
    id: "cv-portfolio",
    title: "CV & Portfolio Help",
    description: "Clean, ATS-friendly resumes and academic portfolio outlines to present your college credentials and achievements professionally.",
    details: [
      "ATS-compliant layout designs",
      "Structuring academic achievements and publications",
      "Tailoring statements to university applications",
      "Clean digital portfolio layout structures"
    ],
    whatsappMessage: "Hello Academic Help, I need help building an ATS-friendly CV/Resume and academic portfolio.",
    iconType: "cv"
  },
  {
    id: "document-formatting",
    title: "Document Formatting",
    description: "Cleanup of messy MS Word or Google Doc files, resolving alignment issues, line spacing, and styles.",
    details: [
      "Standardizing fonts, line spacing, and margins",
      "Resolving page break and header/footer errors",
      "Correcting layout styling for tables and lists",
      "Converting file formats cleanly (DOCX to PDF, etc.)"
    ],
    whatsappMessage: "Hello Academic Help, I have a messy document that needs cleanup, formatting, and layout correction.",
    iconType: "document"
  },
  {
    id: "literature-organization",
    title: "Research Summary & Lit. Organization",
    description: "Structuring literature review tables, bibliography matrices, and summarizing research articles.",
    details: [
      "Creating research matrix tables",
      "Synthesizing key findings into bullet points",
      "Reference list formatting (BibTeX, EndNote templates)",
      "Organizing study databases and folders"
    ],
    whatsappMessage: "Hello Academic Help, I need help organizing literature summaries and reference tables for my research.",
    iconType: "literature"
  }
];

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((service) => service.id === id);
}
