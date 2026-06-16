export interface PriceItem {
  serviceName: string;
  price: string;
  type: "flat" | "hourly" | "custom";
  description: string;
}

export const PRICING_ITEMS: PriceItem[] = [
  {
    serviceName: "Handwritten Work Support",
    price: "₹8 – ₹10",
    type: "flat",
    description: "Per page rate for handwriting assistance and document preparation based on scanned text."
  },
  {
    serviceName: "Online Formatting",
    price: "₹100",
    type: "hourly",
    description: "Per hour rate for live editing, margin alignment, and general formatting sessions."
  },
  {
    serviceName: "PPT / Presentation Design",
    price: "Starting from ₹300",
    type: "flat",
    description: "Visual design, layout structuring, and slide formatting."
  },
  {
    serviceName: "Poster Design",
    price: "Starting from ₹300",
    type: "flat",
    description: "Academic/scientific poster layout planning and print-ready graphic design."
  },
  {
    serviceName: "CV / Portfolio Help",
    price: "Starting from ₹300",
    type: "flat",
    description: "ATS-friendly layout design and career portfolio organization."
  },
  {
    serviceName: "Data Analysis Guidance",
    price: "Quote after discussion",
    type: "custom",
    description: "Varies based on dataset size, visualization requirements, and analysis methods."
  },
  {
    serviceName: "Bioinformatics Workflow Help",
    price: "Quote after discussion",
    type: "custom",
    description: "Varies based on analysis complexity, biological database setups, and tools needed."
  },
  {
    serviceName: "Project / Dissertation Support",
    price: "Quote after discussion",
    type: "custom",
    description: "Varies based on topic complexity, deadline constraints, length, and scope."
  }
];

export const PRICING_NOTE = "Final price depends on deadline, number of pages/slides, complexity, formatting rules, and source material.";
export const TRUST_NOTE = "We support learning, formatting, presentation, and project guidance. Students are responsible for final submission according to their institution rules.";
