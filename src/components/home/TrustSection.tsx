import React from "react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { TRUST_NOTE } from "@/data/pricing";

interface TrustPoint {
  emoji: string;
  title: string;
  description: string;
}

const TRUST_POINTS: TrustPoint[] = [
  {
    emoji: "💬",
    title: "WhatsApp-First Process",
    description: "No complex dashboards or forms. Chat directly on WhatsApp to share your instructions and get quick updates."
  },
  {
    emoji: "⚡",
    title: "Deadline-Aware Assistance",
    description: "We respect your timelines. Formatting, presentation layouts, and summaries are delivered when promised."
  },
  {
    emoji: "🤝",
    title: "Clear Communication",
    description: "Get honest answers on scope, deliverables, and capabilities before any commitment."
  },
  {
    emoji: "💰",
    title: "Student-Friendly Pricing",
    description: "Affordable rates like ₹8–₹10 per page for handwriting formatting and ₹100/hr for live styling checkups."
  },
  {
    emoji: "📚",
    title: "Previous Samples Available",
    description: "Examine our work gallery before booking our services. Transparency is at the core of what we do."
  },
  {
    emoji: "🏛️",
    title: "Ethical Learning Focus",
    description: "We assist with formatting, organization, layout design, and study notes. You remain in control of your academic submission."
  }
];

export const TrustSection: React.FC = () => {
  return (
    <Section variant="alt" id="trust-section">
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{
          fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
          fontWeight: 800,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          marginBottom: "12px"
        }}>
          Why Students Choose Academic Help
        </h2>
        <p style={{
          fontSize: "0.95rem",
          color: "var(--text-secondary)",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          A simple, transparent, and student-focused approach to document formatting, presentation layouts, and data organization.
        </p>
      </div>

      {/* Grid of Trust Cards */}
      <div className="grid-3">
        {TRUST_POINTS.map((point) => (
          <Card key={point.title} hoverLift style={{ padding: "28px" }}>
            <div style={{
              fontSize: "2rem",
              marginBottom: "16px"
            }}>
              {point.emoji}
            </div>
            <h3 style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "8px"
            }}>
              {point.title}
            </h3>
            <p style={{
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              lineHeight: 1.5
            }}>
              {point.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Ethical Trust Disclaimer Note */}
      <div style={{
        marginTop: "48px",
        padding: "24px",
        borderRadius: "var(--radius-md)",
        backgroundColor: "var(--bg-primary)",
        border: "1px solid var(--border-dark)",
        textAlign: "center",
        maxWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        <h4 style={{
          fontSize: "0.85rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--text-primary)",
          marginBottom: "8px"
        }}>
          ⚖️ Important Academic Integrity Note
        </h4>
        <p style={{
          fontSize: "0.82rem",
          color: "var(--text-secondary)",
          lineHeight: 1.6
        }}>
          {TRUST_NOTE}
        </p>
      </div>
    </Section>
  );
};
