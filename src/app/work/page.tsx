"use client";

import React, { useState, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PillTabs } from "@/components/ui/PillTabs";
import { DocumentIcon, PresentationIcon } from "@/components/ui/Icons";
import { CATEGORIES, getCategoryBySlug } from "@/lib/categories";
import workIndexJson from "@/data/work-index.json";
import { motion, AnimatePresence } from "framer-motion";

interface WorkItem {
  fileName: string;
  title: string;
  filePath: string;
  type: string;
  category: string;
  modifiedDate?: string;
}

const workIndex = workIndexJson as WorkItem[];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [works, setWorks] = useState<WorkItem[]>([]);
  const [isIndexedEmpty, setIsIndexedEmpty] = useState(true);

  // Illustrative samples used if work-index.json is empty
  const illustrativeSamples: WorkItem[] = [
    {
      fileName: "dissertation_outline_humanities.pdf",
      title: "Doctoral Dissertation Outline (APA Structure)",
      filePath: "#",
      type: "PDF",
      category: "dissertation"
    },
    {
      fileName: "bioinformatics_codon_sequence_run.pptx",
      title: "Codon Sequence Bioinformatics Analysis Presentation",
      filePath: "#",
      type: "PPTX",
      category: "bioinformatics"
    },
    {
      fileName: "thesis_layout_standard_margins.pdf",
      title: "Thesis Document Layout (Standard Margins & Spacing)",
      filePath: "#",
      type: "PDF",
      category: "thesis"
    },
    {
      fileName: "scientific_poster_physics_a0.pdf",
      title: "Condensed Matter Physics Seminar Poster Layout",
      filePath: "#",
      type: "PDF",
      category: "poster"
    },
    {
      fileName: "cv_resume_industry_ats.pdf",
      title: "ATS-Friendly Resume & CV Layout Blueprint",
      filePath: "#",
      type: "PDF",
      category: "cv"
    },
    {
      fileName: "lab_report_chemistry_titration.pdf",
      title: "Chemistry Lab Experiment Report Structure",
      filePath: "#",
      type: "PDF",
      category: "report"
    },
    {
      fileName: "excel_data_plot_bar_graphs.pptx",
      title: "Data Visualization & Descriptive Plots Slide deck",
      filePath: "#",
      type: "PPTX",
      category: "presentation"
    },
    {
      fileName: "mla_citation_guide_matrix.pdf",
      title: "Literature Matrix & Bibliography Organization Sheet",
      filePath: "#",
      type: "PDF",
      category: "general"
    }
  ];

  useEffect(() => {
    if (workIndex && workIndex.length > 0) {
      setWorks(workIndex);
      setIsIndexedEmpty(false);
    } else {
      setWorks(illustrativeSamples);
      setIsIndexedEmpty(true);
    }
  }, []);

  // Filter & Search Logic
  const filteredWorks = works.filter((work) => {
    const matchesCategory = activeTab === "all" || work.category === activeTab;
    const matchesSearch = work.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          work.fileName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Category list converted to PillTabs format
  const tabs = CATEGORIES.map((cat) => ({
    id: cat.slug,
    name: cat.name,
  }));

  const handleCardAction = (item: WorkItem) => {
    if (isIndexedEmpty) {
      alert("This is an illustrative sample. To test actual file downloads, upload real PDF or PPTX files into the 'public/work/' folder on your device and run the build script!");
      return;
    }
    window.open(item.filePath, item.type === "PDF" ? "_blank" : "_self");
  };

  return (
    <Section variant="light">
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 800,
          color: "var(--text-primary)",
          letterSpacing: "-0.03em",
          marginBottom: "12px"
        }}>
          Previous Work Samples
        </h1>
        <p style={{
          fontSize: "1rem",
          color: "var(--text-secondary)",
          maxWidth: "600px",
          margin: "0 auto 30px auto",
          lineHeight: 1.5
        }}>
          Explore our portfolio of academic slides, report outlines, formatting layouts, and data visualizations.
        </p>

        {/* Search bar */}
        <div style={{ maxWidth: "450px", margin: "0 auto 24px auto" }}>
          <input
            type="text"
            className="form-input"
            placeholder="🔍 Search files by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ borderRadius: "var(--radius-pill)", padding: "12px 24px" }}
          />
        </div>

        {/* Responsive Pill Tabs */}
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <PillTabs
            tabs={tabs}
            activeTabId={activeTab}
            onChange={setActiveTab}
          />
        </div>
      </div>

      {isIndexedEmpty && (
        <div style={{
          backgroundColor: "rgba(0, 149, 246, 0.04)",
          border: "1px solid rgba(0, 149, 246, 0.12)",
          borderRadius: "var(--radius-md)",
          padding: "16px 20px",
          maxWidth: "800px",
          margin: "0 auto 30px auto",
          textAlign: "center",
          fontSize: "0.85rem",
          color: "var(--text-secondary)",
          lineHeight: 1.5
        }}>
          ⚙️ <strong>Note:</strong> Showing <strong>illustrative samples</strong>. To populate this gallery with your own works, drop <code>.pdf</code> or <code>.pptx</code> files inside the <code>public/work</code> folder and run <code>npm run build</code>.
        </div>
      )}

      {/* Instagram-inspired Cards Grid */}
      <motion.div layout className="grid-3">
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((work) => {
            const catInfo = getCategoryBySlug(work.category);
            return (
              <motion.div
                layout
                key={work.fileName}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Card hoverLift style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between",
                  minHeight: "220px",
                  borderStyle: isIndexedEmpty ? "dashed" : "solid"
                }}>
                  <div>
                    {/* Header info */}
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "16px"
                    }}>
                      <Badge type={work.type.toLowerCase() as any}>{work.type}</Badge>
                      <span style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        textTransform: "uppercase"
                      }}>
                        {catInfo.name}
                      </span>
                    </div>

                    {/* Title */}
                    <div style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start"
                    }}>
                      {work.type === "PDF" ? (
                        <DocumentIcon size={24} style={{ color: "#ff3b30", flexShrink: 0, marginTop: "2px" }} />
                      ) : (
                        <PresentationIcon size={24} style={{ color: "#ff9500", flexShrink: 0, marginTop: "2px" }} />
                      )}
                      <div>
                        <h2 style={{
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          lineHeight: 1.3,
                          marginBottom: "4px"
                        }}>
                          {work.title}
                        </h2>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                          {work.fileName}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ marginTop: "20px" }}>
                    <Button
                      onClick={() => handleCardAction(work)}
                      variant="outline"
                      size="sm"
                      fullWidth
                    >
                      {work.type === "PDF" ? "View Document" : "Download Slide Deck"}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredWorks.length === 0 && (
        <div style={{
          textAlign: "center",
          padding: "60px 20px",
          border: "1px dashed var(--border-dark)",
          borderRadius: "var(--radius-md)",
          maxWidth: "500px",
          margin: "40px auto"
        }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>🔍</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>
            No results found
          </h3>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
            We couldn't find any work sample matching "{searchQuery}" in category "{getCategoryBySlug(activeTab).name}".
          </p>
          <Button onClick={() => { setSearchQuery(""); setActiveTab("all"); }} variant="secondary" size="sm">
            Reset Filters
          </Button>
        </div>
      )}
    </Section>
  );
}
