"use client";

import React, { useState } from "react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { SERVICES } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon, CloseIcon } from "@/components/ui/Icons";
import { AnimatePresence, motion } from "framer-motion";

export const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceId, setServiceId] = useState("general");
  const [details, setDetails] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedService = SERVICES.find(s => s.id === serviceId);
    const serviceName = selectedService ? selectedService.title : "General Academic Support";
    
    let message = `Hello Academic Help, I would like to inquire about: *${serviceName}*.`;
    if (details.trim()) {
      message += `\n\n*Here are my requirements:* ${details.trim()}`;
    }
    
    const whatsappLink = createWhatsAppLink(message);
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
    
    // Reset and close
    setDetails("");
    setIsOpen(false);
  };

  return (
    <div className="chat-widget">
      {/* Floating Chat Bubble Button */}
      <button 
        className="chat-bubble"
        onClick={handleToggle}
        aria-label="Open WhatsApp Chat Support"
        type="button"
      >
        <WhatsAppIcon size={30} />
      </button>

      {/* Slide-up Chat Panel using Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-panel"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="chat-header">
              <div className="chat-header-info">
                <span className="chat-header-dot"></span>
                <div>
                  <div className="chat-header-title">Academic Support</div>
                  <div className="chat-header-subtitle">Online • Fast Response</div>
                </div>
              </div>
              <button 
                className="chat-close-btn"
                onClick={handleClose}
                aria-label="Close Chat Panel"
                type="button"
              >
                <CloseIcon size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="chat-body">
              <p className="chat-welcome-text">
                Hi there! Select a service and describe what you need support with. We'll continue our discussion on WhatsApp.
              </p>

              <div className="form-group" style={{ marginBottom: "12px" }}>
                <label htmlFor="chat-service" className="form-label" style={{ fontSize: "0.75rem" }}>
                  Service Needed
                </label>
                <select
                  id="chat-service"
                  className="form-select"
                  style={{ padding: "10px 12px", fontSize: "0.85rem" }}
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                >
                  <option value="general">General Support / Ask a Question</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: "12px" }}>
                <label htmlFor="chat-details" className="form-label" style={{ fontSize: "0.75rem" }}>
                  Brief Details
                </label>
                <textarea
                  id="chat-details"
                  className="form-textarea"
                  style={{ padding: "10px 12px", fontSize: "0.85rem", minHeight: "80px" }}
                  placeholder="e.g. deadline, topic name, slides/pages needed..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </div>

              <Button
                type="submit"
                variant="whatsapp"
                size="sm"
                fullWidth
                className="chat-submit-btn"
              >
                <WhatsAppIcon size={16} style={{ marginRight: "8px" }} />
                Send on WhatsApp
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
