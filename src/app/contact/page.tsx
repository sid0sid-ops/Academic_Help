import React from "react";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { Card } from "@/components/ui/Card";
import { TRUST_NOTE } from "@/data/pricing";

export default function ContactPage() {
  return (
    <Section variant="light">
      {/* Header Info */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 800,
          color: "var(--text-primary)",
          letterSpacing: "-0.03em",
          marginBottom: "12px"
        }}>
          Get in Touch
        </h1>
        <p style={{
          fontSize: "1rem",
          color: "var(--text-secondary)",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: 1.5
        }}>
          Share your assignment, dissertation, or document formatting criteria. Fill the form below, and we will align on details on WhatsApp.
        </p>
      </div>

      {/* Contact Layout */}
      <div className="grid-2" style={{ alignItems: "flex-start", gap: "40px", maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Contact details and guide */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          <h2 style={{
            fontSize: "1.3rem",
            fontWeight: 800,
            color: "var(--text-primary)",
            marginBottom: "8px"
          }}>
            WhatsApp Direct Setup
          </h2>
          
          <p style={{
            fontSize: "0.9rem",
            color: "var(--text-secondary)",
            lineHeight: 1.5
          }}>
            Our setup is completely WhatsApp-first to save you time. You don't need to register an account or log in to a dashboard. Simply share your layout, outline, or files directly.
          </p>

          {/* Quick info list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            
            {/* Phone Info */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ fontSize: "1.5rem" }}>📞</div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
                  Primary Contact
                </div>
                <a href="https://wa.me/919412116374" target="_blank" rel="noopener noreferrer" style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  +91 9412116374
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ fontSize: "1.5rem" }}>⏱️</div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
                  Response Time
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>
                  Within minutes (10 AM to 10 PM IST)
                </div>
              </div>
            </div>

            {/* File support */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ fontSize: "1.5rem" }}>📁</div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
                  Accepted File Formats
                </div>
                <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  PDF, DOCX, PPTX, XLSX, LaTeX, TXT, Scanned Images
                </div>
              </div>
            </div>

          </div>

          {/* Ethical Guidance Card */}
          <Card hoverLift={false} style={{
            border: "1px solid var(--border-dark)",
            backgroundColor: "var(--bg-secondary)",
            marginTop: "12px"
          }}>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px", textTransform: "uppercase" }}>
              ⚖️ Important Notice
            </h4>
            <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
              {TRUST_NOTE}
            </p>
          </Card>
          
        </div>

        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>

      </div>
    </Section>
  );
}
