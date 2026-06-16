"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PRICING_ITEMS, PRICING_NOTE, TRUST_NOTE } from "@/data/pricing";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";

export default function PricingPage() {
  const whatsappLink = createWhatsAppLink(
    "Hello Academic Help, I would like to get a custom quote for an academic formatting project."
  );

  return (
    <Section variant="light">
      {/* Header Info */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h1 style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 800,
          color: "var(--text-primary)",
          letterSpacing: "-0.03em",
          marginBottom: "12px"
        }}>
          Affordable Student Pricing
        </h1>
        <p style={{
          fontSize: "1rem",
          color: "var(--text-secondary)",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: 1.5
        }}>
          Simple, transparent rates designed with a college student's budget in mind. No hidden fees. Pay only for the formatting and layout support you need.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid-3" style={{ marginBottom: "48px" }}>
        {PRICING_ITEMS.map((item, index) => (
          <motion.div
            key={item.serviceName}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card hoverLift style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between",
              padding: "28px"
            }}>
              <div>
                <h3 style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "8px"
                }}>
                  {item.serviceName}
                </h3>
                
                {/* Price Display */}
                <div style={{
                  margin: "16px 0",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "4px"
                }}>
                  <span style={{
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    color: "var(--accent-color)"
                  }}>
                    {item.price}
                  </span>
                  {item.type === "hourly" && (
                    <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      / hour
                    </span>
                  )}
                  {item.type === "flat" && item.price.includes("₹8") && (
                    <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      / page
                    </span>
                  )}
                </div>

                <p style={{
                  fontSize: "0.82rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                  marginBottom: "16px"
                }}>
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div style={{ marginTop: "16px" }}>
                <Button
                  href={createWhatsAppLink(`Hello Academic Help, I would like to get details or a quote for: *${item.serviceName}*.`)}
                  external
                  variant={item.type === "custom" ? "outline" : "whatsapp"}
                  size="sm"
                  fullWidth
                >
                  {item.type === "custom" ? "Request Quote" : (
                    <>
                      <WhatsAppIcon size={14} style={{ marginRight: "6px" }} />
                      Book Service
                    </>
                  )}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Pricing and Trust Notes */}
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "24px"
      }}>
        {/* Quote Factors Card */}
        <Card hoverLift={false} style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          padding: "24px 32px"
        }}>
          <h4 style={{
            fontSize: "0.95rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            📋 Pricing Calculation Factors
          </h4>
          <p style={{
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            marginBottom: "12px"
          }}>
            {PRICING_NOTE}
          </p>
          <ul style={{
            listStyle: "none",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "8px",
            fontSize: "0.8rem",
            color: "var(--text-secondary)"
          }} className="grid-2-mobile">
            <li style={{ display: "flex", gap: "6px" }}>• <strong>Deadline:</strong> Rush projects may require adjustment.</li>
            <li style={{ display: "flex", gap: "6px" }}>• <strong>Length:</strong> Page count or slide count.</li>
            <li style={{ display: "flex", gap: "6px" }}>• <strong>Complexity:</strong> Advanced formulas or biological structures.</li>
            <li style={{ display: "flex", gap: "6px" }}>• <strong>Formatting Rules:</strong> Specific university citation guidelines.</li>
          </ul>
        </Card>

        {/* Ethical Academic Trust Card */}
        <Card hoverLift={false} style={{
          border: "1px solid rgba(0, 149, 246, 0.15)",
          backgroundColor: "rgba(0, 149, 246, 0.02)",
          padding: "24px 32px",
          textAlign: "center"
        }}>
          <h4 style={{
            fontSize: "0.9rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "8px"
          }}>
            ⚖️ Academic Integrity Commitment
          </h4>
          <p style={{
            fontSize: "0.82rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6
          }}>
            {TRUST_NOTE}
          </p>
        </Card>

        {/* Call to Action Bar */}
        <div style={{
          textAlign: "center",
          marginTop: "16px"
        }}>
          <h3 style={{
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "12px"
          }}>
            Ready to get started?
          </h3>
          <Button
            href={whatsappLink}
            external
            variant="whatsapp"
            size="lg"
            className="hover-lift"
          >
            <WhatsAppIcon size={20} style={{ marginRight: "8px" }} />
            Start WhatsApp Chat
          </Button>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 500px) {
          .grid-2-mobile {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </Section>
  );
}
