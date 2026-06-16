"use client";

import React, { useState, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FAQS, FAQItem } from "@/data/faqs";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState<FAQItem[]>(FAQS);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredFaqs(FAQS);
    } else {
      const query = searchQuery.toLowerCase();
      const result = FAQS.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
      );
      setFilteredFaqs(result);
    }
    setExpandedIndex(null); // Reset open accordion on search change
  }, [searchQuery]);

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const whatsappLink = createWhatsAppLink(
    "Hello Academic Help, I have checked your FAQ page but have an unanswered question about your services."
  );

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
          Frequently Asked Questions
        </h1>
        <p style={{
          fontSize: "1rem",
          color: "var(--text-secondary)",
          maxWidth: "600px",
          margin: "0 auto 30px auto",
          lineHeight: 1.5
        }}>
          Got questions? We have answers. Find details about formatting criteria, timelines, referral cashbacks, and our commitment to academic integrity.
        </p>

        {/* Search Bar */}
        <div style={{ maxWidth: "450px", margin: "0 auto" }}>
          <input
            type="text"
            className="form-input"
            placeholder="🔍 Search FAQs (e.g. refund, ethics, formats)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ borderRadius: "var(--radius-pill)", padding: "12px 24px" }}
          />
        </div>
      </div>

      {/* FAQs Accordion Grid */}
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "14px"
      }}>
        <AnimatePresence mode="popLayout">
          {filteredFaqs.map((faq, idx) => (
            <motion.div
              layout
              key={faq.question}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                hoverLift={false}
                style={{
                  padding: "22px 28px",
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
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    paddingRight: "20px",
                    lineHeight: 1.4
                  }}>
                    {faq.question}
                  </h3>
                  <span style={{
                    fontSize: "1.25rem",
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
                      animate={{ height: "auto", opacity: 1, marginTop: 14 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{
                        fontSize: "0.9rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                        borderTop: "1px solid var(--border-color)",
                        paddingTop: "14px"
                      }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredFaqs.length === 0 && (
          <div style={{
            textAlign: "center",
            padding: "48px",
            border: "1px dashed var(--border-dark)",
            borderRadius: "var(--radius-md)"
          }}>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
              No FAQs matches your query.
            </p>
            <Button onClick={() => setSearchQuery("")} variant="secondary" size="sm">
              Clear Search
            </Button>
          </div>
        )}
      </div>

      {/* Still got questions card */}
      <div style={{
        textAlign: "center",
        marginTop: "60px",
        padding: "36px 20px",
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--radius-lg)",
        maxWidth: "600px",
        margin: "60px auto 0 auto"
      }}>
        <h3 style={{
          fontSize: "1.25rem",
          fontWeight: 800,
          color: "var(--text-primary)",
          marginBottom: "8px"
        }}>
          Still Have Questions?
        </h3>
        <p style={{
          fontSize: "0.9rem",
          color: "var(--text-secondary)",
          marginBottom: "24px",
          lineHeight: 1.45
        }}>
          If you didn't find your answer here, just click below to drop us a message on WhatsApp. We'll be happy to help.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            href={whatsappLink}
            external
            variant="whatsapp"
            size="md"
            className="hover-lift"
          >
            <WhatsAppIcon size={18} style={{ marginRight: "8px" }} />
            Ask on WhatsApp
          </Button>
        </div>
      </div>
    </Section>
  );
}
