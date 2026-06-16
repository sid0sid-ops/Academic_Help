"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { ServiceHighlights } from "@/components/home/ServiceHighlights";
import { TrustSection } from "@/components/home/TrustSection";
import { WorkPreview } from "@/components/home/WorkPreview";
import { ReferralBanner } from "@/components/home/ReferralBanner";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FAQS } from "@/data/faqs";
import { ChevronRightIcon } from "@/components/ui/Icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  // Take first 3 FAQs for home preview
  const homeFaqs = FAQS.slice(0, 3);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Instagram Story Style Service Highlights */}
      <ServiceHighlights />

      {/* 3. Trust Highlights & Academic Policy Note */}
      <TrustSection />

      {/* 4. Previous Work Gallery Preview (builds from public/work) */}
      <WorkPreview />

      {/* 5. Referral System Promotion Banner */}
      <ReferralBanner />

      {/* 6. FAQ Preview Accordion */}
      <Section variant="light" id="faq-preview-section">
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{
            fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
            fontWeight: 800,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            marginBottom: "12px"
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{
            fontSize: "0.95rem",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            Have a question about document formatting, delivery timelines, or our WhatsApp process? Here are some quick answers.
          </p>
        </div>

        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "14px"
        }}>
          {homeFaqs.map((faq, idx) => (
            <Card
              key={idx}
              hoverLift={false}
              style={{
                padding: "20px 24px",
                cursor: "pointer",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--radius-md)",
                backgroundColor: expandedIndex === idx ? "var(--bg-secondary)" : "var(--bg-primary)"
              }}
              onClick={() => toggleFaq(idx)}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                userSelect: "none"
              }}>
                <h3 style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  paddingRight: "20px"
                }}>
                  {faq.question}
                </h3>
                <span style={{
                  fontSize: "1.25rem",
                  fontWeight: "400",
                  transform: expandedIndex === idx ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  color: "var(--text-secondary)"
                }}>
                  ➔
                </span>
              </div>

              <AnimatePresence initial={false}>
                {expandedIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p style={{
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      borderTop: "1px solid var(--border-color)",
                      paddingTop: "12px"
                    }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button href="/faq" variant="outline" size="md" className="hover-lift">
              View All FAQs
              <ChevronRightIcon size={16} style={{ marginLeft: "6px" }} />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
