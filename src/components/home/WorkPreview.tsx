import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ChevronRightIcon, DocumentIcon, PresentationIcon } from "@/components/ui/Icons";
import workIndex from "@/data/work-index.json";
import { getCategoryBySlug } from "@/lib/categories";

export const WorkPreview: React.FC = () => {
  // Take the first 3 items from work-index.json
  const previewItems = (workIndex as any[]).slice(0, 3);
  const isEmpty = previewItems.length === 0;

  // Illustrative samples shown when folder is empty
  const placeholderSamples = [
    {
      title: "Molecular Genetics Dissertation Layout",
      category: "dissertation",
      type: "PDF",
      description: "Sample outline, margins, spacing, and citation matrix formatting."
    },
    {
      title: "Bioinformatics Pipeline Presentation",
      category: "bioinformatics",
      type: "PPTX",
      description: "Genetic sequence analysis workflow diagram and pathway slides."
    },
    {
      title: "Undergraduate Research Project Report",
      category: "project",
      type: "PDF",
      description: "Structured report layout, title page styling, and appendix organization."
    }
  ];

  return (
    <Section variant="light" id="work-preview">
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "40px",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
          fontWeight: 800,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          marginBottom: "12px"
        }}>
          Previous Work Gallery
        </h2>
        <p style={{
          fontSize: "0.95rem",
          color: "var(--text-secondary)",
          maxWidth: "600px",
          margin: "0 auto 24px auto"
        }}>
          Take a look at how we format documents, organize slide presentations, and compile biological workflows.
        </p>
      </div>

      {isEmpty ? (
        // Showcase illustrative templates when no files have been uploaded yet
        <div>
          <div className="grid-3" style={{ marginBottom: "40px" }}>
            {placeholderSamples.map((sample, idx) => {
              const catInfo = getCategoryBySlug(sample.category);
              return (
                <Card key={idx} hoverLift style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "220px",
                  borderStyle: "dashed"
                }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                      <Badge type={sample.type.toLowerCase() as any}>{sample.type}</Badge>
                      <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase" }}>
                        {catInfo.name}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
                      {sample.type === "PDF" ? (
                        <DocumentIcon size={24} style={{ color: "#ff3b30", flexShrink: 0, marginTop: "2px" }} />
                      ) : (
                        <PresentationIcon size={24} style={{ color: "#ff9500", flexShrink: 0, marginTop: "2px" }} />
                      )}
                      <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3 }}>
                        {sample.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.4, marginLeft: "34px" }}>
                      {sample.description}
                    </p>
                  </div>
                  <div style={{ marginTop: "16px", paddingLeft: "34px" }}>
                    <Button variant="ghost" size="sm" href="/work" style={{ padding: "6px 12px" }}>
                      View Gallery Details
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          <div style={{
            textAlign: "center",
            padding: "20px",
            borderRadius: "var(--radius-md)",
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
              💡 <strong>Instruction for site owner:</strong> Paste your previous <code>.pdf</code> and <code>.pptx</code> files inside the <code>public/work/</code> folder and rebuild the project. The gallery page will automatically index and display them!
            </p>
          </div>
        </div>
      ) : (
        // Render actual files if they are indexed in work-index.json
        <div className="grid-3" style={{ marginBottom: "40px" }}>
          {previewItems.map((item) => {
            const catInfo = getCategoryBySlug(item.category);
            return (
              <Card key={item.fileName} hoverLift style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "200px"
              }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <Badge type={item.type.toLowerCase() as any}>{item.type}</Badge>
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase" }}>
                      {catInfo.name}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    {item.type === "PDF" ? (
                      <DocumentIcon size={24} style={{ color: "#ff3b30", flexShrink: 0 }} />
                    ) : (
                      <PresentationIcon size={24} style={{ color: "#ff9500", flexShrink: 0 }} />
                    )}
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3 }}>
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <Button
                    href={item.filePath}
                    external={item.type === "PDF"}
                    variant="outline"
                    size="sm"
                    fullWidth
                  >
                    {item.type === "PDF" ? "Open PDF" : "Download PPTX"}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {!isEmpty && (
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <Button href="/work" variant="primary" size="md" className="hover-lift">
            Browse All Work
            <ChevronRightIcon size={16} style={{ marginLeft: "6px" }} />
          </Button>
        </div>
      )}
    </Section>
  );
};
