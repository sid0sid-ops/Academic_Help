import React from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ChevronRightIcon } from "@/components/ui/Icons";

export const ReferralBanner: React.FC = () => {
  return (
    <Section variant="alt" id="referral-banner-section" style={{ padding: "48px 0" }}>
      <div style={{
        background: "linear-gradient(135deg, rgba(0, 149, 246, 0.08) 0%, rgba(37, 211, 102, 0.04) 100%)",
        border: "1px solid rgba(0, 149, 246, 0.15)",
        borderRadius: "var(--radius-lg)",
        padding: "clamp(24px, 6vw, 48px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Floating background emojis */}
        <div style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          fontSize: "2.5rem",
          opacity: 0.15,
          userSelect: "none",
          transform: "rotate(-15deg)"
        }}>
          🎁
        </div>
        <div style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          fontSize: "2.5rem",
          opacity: 0.15,
          userSelect: "none",
          transform: "rotate(15deg)"
        }}>
          💰
        </div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{
            fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
            fontWeight: 800,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            marginBottom: "12px"
          }}>
            Refer a Fellow Student & Earn ₹100
          </h2>
          <p style={{
            fontSize: "clamp(0.85rem, 2vw, 1rem)",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto 28px auto",
            lineHeight: 1.5
          }}>
            Know a classmate who needs help with thesis formatting, lab reports, PPT design, data plots, or project guidelines? Refer them to Academic Help and get rewarded!
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              href="/referral"
              variant="primary"
              size="md"
              className="hover-lift"
            >
              Start Referring Friends
              <ChevronRightIcon size={16} style={{ marginLeft: "6px" }} />
            </Button>
          </div>
          <p style={{
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            marginTop: "16px"
          }}>
            *Reward is sent once your referred friend completes their formatting support and payment is verified.
          </p>
        </div>
      </div>
    </Section>
  );
};
