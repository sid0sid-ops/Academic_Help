"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/data/services";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    serviceNeeded: "general",
    deadline: "",
    fileType: "docx",
    budget: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.details) {
      alert("Please fill in your Name and Project Details.");
      return;
    }

    const selectedService = SERVICES.find(s => s.id === formData.serviceNeeded);
    const serviceName = selectedService ? selectedService.title : "General Academic Support";

    const fileTypeLabels: Record<string, string> = {
      docx: "MS Word (.docx)",
      pptx: "PowerPoint (.pptx)",
      pdf: "PDF (.pdf)",
      xlsx: "Excel (.xlsx)",
      latex: "LaTeX (.tex)",
      handwritten: "Scanned Handwriting / Images",
      other: "Other format",
    };

    const fileTypeLabel = fileTypeLabels[formData.fileType] || formData.fileType;

    // Compile message
    const message = `Hello Academic Help, I need formatting/project support:
- *Name:* ${formData.name}
- *Service Needed:* ${serviceName}
- *Deadline:* ${formData.deadline || "Flexible/Not set"}
- *File Type:* ${fileTypeLabel}
- *Budget:* ${formData.budget ? `₹${formData.budget}` : "To be discussed"}
- *Details:* ${formData.details}`;

    const whatsappLink = createWhatsAppLink(message);
    window.open(whatsappLink, "_blank", "noopener,noreferrer");

    // Reset Form
    setFormData({
      name: "",
      serviceNeeded: "general",
      deadline: "",
      fileType: "docx",
      budget: "",
      details: "",
    });
  };

  return (
    <Card hoverLift={false} style={{ maxWidth: "600px", margin: "0 auto", padding: "clamp(20px, 5vw, 32px)" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            required
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="grid-2-mobile" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "8px" }}>
          <div className="form-group" style={{ flex: "1 1 200px" }}>
            <label htmlFor="serviceNeeded" className="form-label">
              Service Needed
            </label>
            <select
              id="serviceNeeded"
              name="serviceNeeded"
              className="form-select"
              value={formData.serviceNeeded}
              onChange={handleChange}
            >
              <option value="general">General Support / Custom Task</option>
              {SERVICES.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group" style={{ flex: "1 1 200px" }}>
            <label htmlFor="fileType" className="form-label">
              File Format
            </label>
            <select
              id="fileType"
              name="fileType"
              className="form-select"
              value={formData.fileType}
              onChange={handleChange}
            >
              <option value="docx">MS Word (.docx)</option>
              <option value="pptx">PowerPoint (.pptx)</option>
              <option value="pdf">PDF (.pdf)</option>
              <option value="xlsx">Excel (.xlsx)</option>
              <option value="latex">LaTeX (.tex)</option>
              <option value="handwritten">Scanned Handwriting / Images</option>
              <option value="other">Other format</option>
            </select>
          </div>
        </div>

        <div className="grid-2-mobile" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "8px" }}>
          <div className="form-group" style={{ flex: "1 1 200px" }}>
            <label htmlFor="deadline" className="form-label">
              Desired Deadline
            </label>
            <input
              type="text"
              id="deadline"
              name="deadline"
              className="form-input"
              placeholder="e.g. June 25, or Next week"
              value={formData.deadline}
              onChange={handleChange}
            />
          </div>

          <div className="form-group" style={{ flex: "1 1 200px" }}>
            <label htmlFor="budget" className="form-label">
              Approx. Budget (₹, Optional)
            </label>
            <input
              type="number"
              id="budget"
              name="budget"
              className="form-input"
              placeholder="e.g. 500"
              value={formData.budget}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group" style={{ marginBottom: "28px" }}>
          <label htmlFor="details" className="form-label">
            Project Instructions & Details *
          </label>
          <textarea
            id="details"
            name="details"
            className="form-textarea"
            required
            placeholder="Please share topic names, page count, styling criteria, reference styles (APA, MLA) or details about files."
            value={formData.details}
            onChange={handleChange}
            style={{ minHeight: "120px" }}
          />
        </div>

        <Button
          type="submit"
          variant="whatsapp"
          size="lg"
          fullWidth
          className="hover-lift"
        >
          <WhatsAppIcon size={18} style={{ marginRight: "8px" }} />
          Send Details on WhatsApp
        </Button>
      </form>
    </Card>
  );
};
