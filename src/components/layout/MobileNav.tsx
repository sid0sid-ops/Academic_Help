"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  ServicesIcon,
  WorkIcon,
  PricingIcon,
  ContactIcon,
} from "@/components/ui/Icons";

interface MobileNavItem {
  name: string;
  href: string;
  icon: React.FC<{ size?: number }>;
}

const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Services", href: "/services", icon: ServicesIcon },
  { name: "Previous Work", href: "/work", icon: WorkIcon },
  { name: "Pricing", href: "/pricing", icon: PricingIcon },
  { name: "Contact", href: "/contact", icon: ContactIcon },
];

export const MobileNav: React.FC = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="mobile-nav">
      {MOBILE_NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn("mobile-nav-link", active ? "active" : "")}
          >
            <Icon size={22} />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};
