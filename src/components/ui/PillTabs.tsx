import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  name: string;
}

export interface PillTabsProps {
  tabs: TabItem[];
  activeTabId: string;
  onChange: (id: string) => void;
  className?: string;
}

export const PillTabs: React.FC<PillTabsProps> = ({
  tabs,
  activeTabId,
  onChange,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Center active tab in view on mobile scroll
  useEffect(() => {
    if (!containerRef.current) return;
    const activeEl = containerRef.current.querySelector(".pill-tab.active");
    if (activeEl) {
      const activeRect = activeEl.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const scrollLeft = activeEl.parentElement?.scrollLeft || 0;
      
      const offset = activeRect.left - containerRect.left - (containerRect.width / 2) + (activeRect.width / 2);
      containerRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: "smooth"
      });
    }
  }, [activeTabId]);

  return (
    <div
      ref={containerRef}
      className={cn("pill-tabs-container", className)}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={cn(
            "pill-tab",
            activeTabId === tab.id ? "active" : ""
          )}
          onClick={() => onChange(tab.id)}
          type="button"
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

PillTabs.displayName = "PillTabs";
