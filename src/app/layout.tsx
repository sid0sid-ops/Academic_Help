import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { FloatingChat } from "@/components/contact/FloatingChat";

export const metadata: Metadata = {
  title: "Academic Help - Projects, Reports, Formatting & Presentations",
  description: "Simple, reliable academic support for college students. Guidance and formatting assistance for projects, dissertations, presentations, reports, CVs, and bioinformatics workflows.",
  keywords: [
    "academic help",
    "project help",
    "dissertation formatting",
    "thesis formatting",
    "report writing",
    "PPT making",
    "presentation design",
    "data analysis help",
    "bioinformatics project help",
    "assignment support",
    "poster design",
    "CV help",
    "portfolio help",
    "student academic services",
    "college project assistance",
    "document formatting"
  ].join(", "),
  openGraph: {
    title: "Academic Help - College Academic Support Services",
    description: "Expert guidance for thesis formatting, slide presentations, data plots, and academic project layouts. High-quality support tailored to student needs.",
    type: "website",
    locale: "en_US",
    siteName: "Academic Help",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Help - Academic Layouts & Design Support",
    description: "Expert formatting and layout design support for reports, dissertations, and presentations. Reassuringly ethical guidance.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
          <FloatingChat />
          <MobileNav />
        </div>
      </body>
    </html>
  );
}
