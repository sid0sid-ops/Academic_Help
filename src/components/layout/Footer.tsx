import React from "react";
import Link from "next/link";
import { TRUST_NOTE } from "@/data/pricing";

interface FooterLink {
  name: string;
  href: string;
}

const FOOTER_LINKS: FooterLink[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Previous Work", href: "/work" },
  { name: "Pricing", href: "/pricing" },
  { name: "Referral", href: "/referral" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          Academic Help
        </div>
        <nav>
          <ul className="footer-nav">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="footer-trust-note">
          {TRUST_NOTE}
          <br />
          <br />
          © {new Date().getFullYear()} Academic Help. All rights reserved. Built for students.
        </p>
      </div>
    </footer>
  );
};
