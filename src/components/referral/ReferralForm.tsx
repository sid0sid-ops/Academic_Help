"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/data/services";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const ReferralForm: React.FC = () => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerWhatsApp: "",
    friendName: "",
    friendWhatsApp: "",
    serviceNeeded: "general",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    if (
      !formData.referrerName ||
      !formData.referrerWhatsApp ||
      !formData.friendName ||
      !formData.friendWhatsApp
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    const selectedService = SERVICES.find(s => s.id === formData.serviceNeeded);
    const serviceName = selectedService ? selectedService.title : "General Support";

    // Format referral message
    const message = `Hello Academic Help, I would like to refer a student:
- *Referrer Name:* ${formData.referrerName}
- *Referrer WhatsApp:* ${formData.referrerWhatsApp}
- *Friend's Name:* ${formData.friendName}
- *Friend's WhatsApp:* ${formData.friendWhatsApp}
- *Service Needed:* ${serviceName}`;

    const whatsappLink = createWhatsAppLink(message);
    window.open(whatsappLink, "_blank", "noopener,noreferrer");

    // Reset form
    setFormData({
      referrerName: "",
      referrerWhatsApp: "",
      friendName: "",
      friendWhatsApp: "",
      serviceNeeded: "general",
    });
  };

  return (
    <Card hoverLift={false} style={{ maxWidth: "550px", margin: "0 auto", padding: "clamp(20px, 5vw, 32px)" }}>
      <form onSubmit={handleSubmit}>
        <h3 style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: "6px",
          textTransform: "uppercase",
          letterSpacing: "0.02em"
        }}>
          Referrer Info (You)
        </h3>
        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "18px" }}>
          Provide your details so we can reward you.
        </p>

        <div className="form-group">
          <label htmlFor="referrerName" className="form-label">
            Your Name *
          </label>
          <input
            type="text"
            id="referrerName"
            name="referrerName"
            className="form-input"
            required
            placeholder="Enter your full name"
            value={formData.referrerName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "28px" }}>
          <label htmlFor="referrerWhatsApp" className="form-label">
            Your WhatsApp Number *
          </label>
          <input
            type="tel"
            id="referrerWhatsApp"
            name="referrerWhatsApp"
            className="form-input"
            required
            placeholder="e.g. +91 9876543210"
            value={formData.referrerWhatsApp}
            onChange={handleChange}
          />
        </div>

        <h3 style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: "6px",
          textTransform: "uppercase",
          letterSpacing: "0.02em",
          borderTop: "1px solid var(--border-color)",
          paddingTop: "20px"
        }}>
          Friend Info (referred student)
        </h3>
        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "18px" }}>
          Provide details of the student who needs academic support.
        </p>

        <div className="form-group">
          <label htmlFor="friendName" className="form-label">
            Friend's Name *
          </label>
          <input
            type="text"
            id="friendName"
            name="friendName"
            className="form-input"
            required
            placeholder="Enter friend's full name"
            value={formData.friendName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="friendWhatsApp" className="form-label">
            Friend's WhatsApp Number *
          </label>
          <input
            type="tel"
            id="friendWhatsApp"
            name="friendWhatsApp"
            className="form-input"
            required
            placeholder="e.g. +91 9876543210"
            value={formData.friendWhatsApp}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "28px" }}>
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
            <option value="general">General Support / Not Sure</option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <Button
          type="submit"
          variant="whatsapp"
          size="lg"
          fullWidth
          className="hover-lift"
        >
          <WhatsAppIcon size={18} style={{ marginRight: "8px" }} />
          Submit Referral on WhatsApp
        </Button>
      </form>
    </Card>
  );
};
