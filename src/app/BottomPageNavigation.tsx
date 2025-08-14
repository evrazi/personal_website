"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { HouseIcon } from "lucide-react";

const navItems = [
  { id: 1, name: "Personal", value: "personal" },
  { id: 2, name: "Work", value: "work" },
  { id: 3, name: "Jobs", value: "jobs" },
  { id: 4, name: "More", value: "more" },
];

export default function BottomPageNavigation() {
  const [activeSection, setActiveSection] = useState(navItems[0].name);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const observerOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      };

      const observerCallback: IntersectionObserverCallback = (
        entries: IntersectionObserverEntry[]
      ) => {
        entries.forEach((entry) => {
          const sectionName = (entry.target as HTMLElement).dataset.name;
          if (entry.isIntersecting) {
            if (sectionName !== "home") {
              setActiveSection(sectionName || "");
            }
            setShowNav(sectionName !== "home");
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={
          showNav
            ? { opacity: 1, y: 0, pointerEvents: "auto" }
            : { opacity: 0, y: 50, pointerEvents: "none" }
        }
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed flex gap-4 bottom-[5vh] z-50 left-1/2 transform bg-[#0d0d0dcc] -translate-x-1/2 p-2 rounded-full backdrop-filter backdrop-blur"
      >
        <div className="flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full">
          <Link
            href={`#home`}
            className="relative mr-2 p-1.5 bg-zinc-600 rounded-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            <HouseIcon className="text-white p-1" />
          </Link>

          {navItems.map((tab) => (
            <Link
              href={`#${tab.value}`}
              key={tab.id}
              className="relative px-3 py-1.5 rounded-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              {activeSection === tab.value && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className="absolute inset-0 bg-[#f5f2eb] rounded-full mix-blend-difference z-10"
                />
              )}
              <span className="text-white relative text-sm">{tab.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
}
