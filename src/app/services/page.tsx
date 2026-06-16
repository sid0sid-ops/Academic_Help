"use client";

import React, { useState, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PillTabs } from "@/components/ui/PillTabs";
import { SERVICES, Service } from "@/data/services";
import { getServiceIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState<Service[]>(SERVICES);

  const tabs = [
    { id: "all", name: "All Services" },
    { id: "formatting", name: "Formatting & Editing" },
    { id: "projects", name: "Projects & Dissertations" },
    { id: "design", name: "Presentations & Posters" },
    { id: "analysis", name: "Data & Bioinformatics" },
  ];

  // Map service ID categories for local filter
  const getServiceCategory = (id: string): string => {
    if (id === "thesis-formatting" || id === "document-formatting" || id === "report-writing") {
      return "formatting";
    }
    if (id === "project-work" || id === "dissertation" || id === "literature-organization") {
      return "projects";
    }
    if (id === "ppt-presentation" || id === "poster-design" || id === "cv-portfolio") {
      return "design";
    }
    if (id === "data-analysis" || id === "bioinformatics" || id === "assignment-support") {
      return "analysis";
    }
    return "formatting";
  };

  useEffect(() => {
    // Filter logic
    let result = SERVICES;
    
    if (activeTab !== "all") {
      result = result.filter(s => getServiceCategory(s.id) === activeTab);
    }
    
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(s => 
        s.title.toLowerCase().includes(query) || 
        s.description.toLowerCase().includes(query) ||
        s.details.some(d => d.toLowerCase().includes(query))
      );
    }
    
    setFilteredServices(result);
  }, [activeTab, searchQuery]);

  // Support direct anchor scroll (e.g. from service highlights on landing page)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

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
          Our Academic Support Services
        </h1>
        <p style={{
          fontSize: "1rem",
          color: "var(--text-secondary)",
          maxWidth: "600px",
          margin: "0 auto 30px auto",
          lineHeight: 1.5
        }}>
          Browse our student-friendly layout optimization, document styling, presentation design, and bioinformatics support services.
        </p>

        {/* Search Input */}
        <div style={{ maxWidth: "450px", margin: "0 auto 24px auto" }}>
          <input
            type="text"
            className="form-input"
            placeholder="🔍 Search services (e.g., Thesis, PPT, Bioinformatics)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ borderRadius: "var(--radius-pill)", padding: "12px 24px" }}
          />
        </div>

        {/* Responsive Pill Tabs */}
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <PillTabs
            tabs={tabs}
            activeTabId={activeTab}
            onChange={setActiveTab}
          />
        </div>
      </div>

      {/* Services Grid with Animation */}
      <motion.div 
        layout
        className="grid-2" 
        style={{ marginTop: "30px" }}
      >
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service) => (
            <motion.div
              layout
              key={service.id}
              id={service.id} // Anchor for direct link scroll
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              style={{ scrollMarginTop: "90px" }} // offset for header
            >
              <Card hoverLift style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between"
              }}>
                <div>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "18px"
                  }}>
                    <div style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "var(--accent-soft)",
                      color: "var(--accent-color)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      {getServiceIcon(service.iconType, 24)}
                    </div>
                    <h2 style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--text-primary)"
                    }}>
                      {service.title}
                    </h2>
                  </div>

                  <p style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                    marginBottom: "20px"
                  }}>
                    {service.description}
                  </p>

                  <div style={{ marginBottom: "24px" }}>
                    <h3 style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "var(--text-primary)",
                      marginBottom: "10px"
                    }}>
                      What we support:
                    </h3>
                    <ul style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px"
                    }}>
                      {service.details.map((detail, idx) => (
                        <li key={idx} style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          fontSize: "0.82rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.4
                        }}>
                          <span style={{ color: "var(--whatsapp-color)", fontWeight: "bold" }}>✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  href={createWhatsAppLink(service.whatsappMessage)}
                  external
                  variant="whatsapp"
                  size="md"
                  fullWidth
                >
                  <WhatsAppIcon size={18} style={{ marginRight: "8px" }} />
                  Ask on WhatsApp
                </Button>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredServices.length === 0 && (
          <div style={{
            gridColumn: "1 / -1",
            textAlign: "center",
            padding: "48px",
            border: "1px dashed var(--border-dark)",
            borderRadius: "var(--radius-md)"
          }}>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
              No services found matching your query.
            </p>
            <Button onClick={() => { setSearchQuery(""); setActiveTab("all"); }} variant="secondary" size="sm">
              Reset Filters
            </Button>
          </div>
        )}
      </motion.div>
    </Section>
  );
}
