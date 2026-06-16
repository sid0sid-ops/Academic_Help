"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Previous Work", href: "/work" },
  { name: "Pricing", href: "/pricing" },
  { name: "Referral", href: "/referral" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export const Header: React.FC = () => {
  const pathname = usePathname();

  // Helper to check active state
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="header-logo">
          Academic <span>Help</span>
        </Link>
        <nav>
          <ul className="header-nav">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "header-link",
                    isActive(item.href) ? "active" : ""
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
