import React from "react";
import { Section } from "@/components/ui/Section";
import { ReferralForm } from "@/components/referral/ReferralForm";
import { Card } from "@/components/ui/Card";

export default function ReferralPage() {
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
          Refer a Student, Get ₹100
        </h1>
        <p style={{
          fontSize: "1rem",
          color: "var(--text-secondary)",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: 1.5
        }}>
          Introduce your classmates or friends to Academic Help. When they complete a formatting or design support project with us, you receive ₹100.
        </p>
      </div>

      {/* Grid: Instructions left, Form right */}
      <div className="grid-2" style={{ alignItems: "flex-start", gap: "40px", maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Step-by-Step Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h2 style={{
            fontSize: "1.3rem",
            fontWeight: 800,
            color: "var(--text-primary)",
            marginBottom: "8px"
          }}>
            How the Referral Reward Works
          </h2>

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Step 1 */}
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "var(--text-primary)",
                color: "var(--bg-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                flexShrink: 0
              }}>
                1
              </div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>
                  Fill the Form
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.45 }}>
                  Enter your details (Name & WhatsApp) and your friend's details. Select the support service they need.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "var(--text-primary)",
                color: "var(--bg-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                flexShrink: 0
              }}>
                2
              </div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>
                  Send via WhatsApp
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.45 }}>
                  Click submit to compile a structured message. Send it to us on WhatsApp. We will reach out to your classmate to assist them.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "var(--text-primary)",
                color: "var(--bg-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                flexShrink: 0
              }}>
                3
              </div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>
                  Earn ₹100 Reward
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.45 }}>
                  Once your friend's formatting/support task is completed and their final payment is verified, we will transfer ₹100 directly to you.
                </p>
              </div>
            </div>

          </div>

          {/* Policy Disclaimer Card */}
          <Card hoverLift={false} style={{
            marginTop: "20px",
            border: "1px solid var(--border-dark)",
            backgroundColor: "var(--bg-secondary)"
          }}>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px", textTransform: "uppercase" }}>
              ⚠️ Referral Terms
            </h4>
            <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
              Referral reward is applicable only after the referred student completes payment and the work is accepted. There is no limit to the number of students you can refer. Make sure your friends are aware you are referring them to our formatting support services.
            </p>
          </Card>
        </div>

        {/* Form Container */}
        <div>
          <ReferralForm />
        </div>

      </div>
    </Section>
  );
}
