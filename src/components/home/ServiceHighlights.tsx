"use client";

import React from "react";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { getServiceIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";

export const ServiceHighlights: React.FC = () => {
  // Select first 8 services to keep the home highlights row neat
  const highlightedServices = SERVICES.slice(0, 8);

  return (
    <div style={{
      padding: "40px 0 24px 0",
      backgroundColor: "var(--bg-primary)",
      borderBottom: "1px solid var(--border-color)",
      overflow: "hidden"
    }}>
      <div className="container">
        <h2 style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "var(--text-secondary)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "20px",
          textAlign: "center"
        }}>
          Explore Services
        </h2>

        {/* Instagram Stories/Highlights Row */}
        <div style={{
          display: "flex",
          gap: "24px",
          overflowX: "auto",
          padding: "4px 8px 16px 8px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }} className="highlights-row">
          {highlightedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              style={{
                flex: "0 0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "90px",
                cursor: "pointer"
              }}
            >
              <Link href={`/services#${service.id}`} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                color: "inherit"
              }}>
                {/* Ring Border wrapper like IG story */}
                <div style={{
                  width: "74px",
                  height: "74px",
                  borderRadius: "50%",
                  border: "2.5px solid var(--border-dark)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "3px",
                  marginBottom: "8px",
                  transition: "all 0.25s ease",
                  backgroundColor: "var(--bg-primary)"
                }} className="highlight-ring">
                  <div style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: "var(--bg-secondary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-primary)"
                  }}>
                    {getServiceIcon(service.iconType, 28)}
                  </div>
                </div>
                
                {/* Service Short Title */}
                <span style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: 1.2,
                  color: "var(--text-primary)",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  height: "2.4em",
                  maxWidth: "80px"
                }}>
                  {service.title.replace(" Support", "").replace(" Help", "").replace(" Making", "")}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global CSS for highlights scrolling ring transitions */}
      <style jsx global>{`
        .highlights-row::-webkit-scrollbar {
          display: none;
        }
        .highlight-ring:hover {
          border-color: var(--accent-color) !important;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};
