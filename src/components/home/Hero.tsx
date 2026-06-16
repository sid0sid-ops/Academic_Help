"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon, ChevronRightIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  const whatsappLink = createWhatsAppLink(
    "Hello Academic Help, I'm visiting your website and would like to learn more about your services."
  );

  return (
    <div className="hero-section" style={{
      position: "relative",
      overflow: "hidden",
      padding: "clamp(60px, 12vw, 120px) 0",
      background: "radial-gradient(circle at 80% 20%, rgba(0, 149, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(37, 211, 102, 0.03) 0%, transparent 50%)",
      borderBottom: "1px solid var(--border-color)",
    }}>
      <div className="container" style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}>
        {/* Main Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="badge badge-accent"
          style={{ marginBottom: "20px" }}
        >
          🎓 100% Student-Friendly Support
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "clamp(2rem, 5.5vw, 3.8rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "var(--text-primary)",
            maxWidth: "900px",
            letterSpacing: "-0.03em",
            marginBottom: "20px",
          }}
        >
          Academic Help for Projects, Reports, Formatting & Presentations
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "clamp(0.95rem, 2.5vw, 1.2rem)",
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            maxWidth: "700px",
            marginBottom: "36px",
          }}
        >
          Simple, reliable academic support for college students — from formatting and presentations to data analysis, posters, bioinformatics workflows, CVs, and project guidance.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "100%",
            justifyContent: "center",
          }}
          className="grid-2-mobile" // Custom CSS selector or inline flex handled below
        >
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
            width: "100%"
          }}>
            <Button
              href={whatsappLink}
              external
              variant="whatsapp"
              size="lg"
              className="hover-lift"
            >
              <WhatsAppIcon size={20} style={{ marginRight: "8px" }} />
              Chat on WhatsApp
            </Button>
            <Button
              href="/work"
              variant="secondary"
              size="lg"
              className="hover-lift"
            >
              View Previous Work
              <ChevronRightIcon size={18} style={{ marginLeft: "6px" }} />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative 3D-Style Floating Academic Objects (Desktop-only or safe-absolute) */}
      <div className="floating-decorations" style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 100 + "%",
        height: 100 + "%",
        pointerEvents: "none",
        zIndex: 1,
      }}>
        {/* Cap (Top Left) */}
        <div className="animated-float-1" style={{
          position: "absolute",
          top: "15%",
          left: "8%",
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(0,0,0,0.05)",
          borderRadius: "16px",
          padding: "12px",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "0.85rem",
          fontWeight: 600,
        }}>
          <span>🎓</span> Cap
        </div>

        {/* Laptop (Bottom Left) */}
        <div className="animated-float-2" style={{
          position: "absolute",
          bottom: "20%",
          left: "12%",
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(0,0,0,0.05)",
          borderRadius: "16px",
          padding: "12px",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "0.85rem",
          fontWeight: 600,
        }}>
          <span>💻</span> Laptop
        </div>

        {/* Book (Top Right) */}
        <div className="animated-float-3" style={{
          position: "absolute",
          top: "12%",
          right: "10%",
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(0,0,0,0.05)",
          borderRadius: "16px",
          padding: "12px",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "0.85rem",
          fontWeight: 600,
        }}>
          <span>📖</span> Book
        </div>

        {/* Document (Middle Right) */}
        <div className="animated-float-1" style={{
          position: "absolute",
          top: "45%",
          right: "6%",
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(0,0,0,0.05)",
          borderRadius: "16px",
          padding: "12px",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "0.85rem",
          fontWeight: 600,
        }}>
          <span>📄</span> Report
        </div>

        {/* DNA Helix / Bio (Bottom Right) */}
        <div className="animated-float-2" style={{
          position: "absolute",
          bottom: "18%",
          right: "14%",
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(0,0,0,0.05)",
          borderRadius: "16px",
          padding: "12px",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "0.85rem",
          fontWeight: 600,
        }}>
          <span>🧬</span> Bioinformatics
        </div>

        {/* Chart (Middle Left) */}
        <div className="animated-float-3" style={{
          position: "absolute",
          top: "42%",
          left: "5%",
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(0,0,0,0.05)",
          borderRadius: "16px",
          padding: "12px",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "0.85rem",
          fontWeight: 600,
        }}>
          <span>📊</span> Data Analysis
        </div>
      </div>

      {/* Media query styling for smaller screens to hide/shrink decorations */}
      <style jsx global>{`
        @media (max-width: 900px) {
          .floating-decorations {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
