"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaTools, FaRoad, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const viewportHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > viewportHeight / 2) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }

        const sections = ["AboutMe", "Project", "Skill", "Plan", "Footer"];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 50 && rect.bottom >= 50) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  if (!showHeader) return null;

  const links = [
    { href: "#about", text: "About me", icon: <FaUser /> },
    { href: "#project", text: "Projects", icon: <FaCode /> },
    { href: "#skill", text: "Skills", icon: <FaTools /> },
    { href: "#plan", text: "Plan", icon: <FaRoad /> },
    { href: "#contact", text: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed md:right-0 right-1/2 md:top-1/2 bottom-4 transform md:-translate-y-1/2 md:translate-x-0 translate-x-1/2 z-50 bg-white/95 backdrop-blur-sm p-6 rounded-2xl md:rounded-l-2xl shadow-lg md:border-l md:border-t md:border-b border border-[#A68164]/20"
    >
      <nav className="flex md:flex-col flex-row gap-7">
        <motion.div
          className="flex flex-col items-end gap-2 mb-6 hidden md:flex"
          whileHover={{ scale: 1.05 }}
        >
          <h1 className="text-3xl font-bold text-[#A68164] hover:text-[#8B6B4E] transition-all duration-300">
            GN,Lee
          </h1>
          <span className="text-sm text-[#C4A68D] font-medium italic">
            Full Stack Developer
          </span>
        </motion.div>

        {links.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector(link.href);
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`relative text-right px-4 py-2 text-[#C4A68D] hover:text-[#A68164] transition-all duration-300 group ${
              activeSection === link.href.slice(1)
                ? "text-[#8B6B4E] font-semibold"
                : ""
            }`}
            whileHover={{ x: -8 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeSection === link.href.slice(1) && (
              <motion.div
                layoutId="activeSection"
                className="absolute right-0 top-0 w-1 h-full bg-[#A68164] rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="inline-flex items-center gap-2">
              <span className="text-[#A68164] font-medium md:inline hidden">
                {link.text}
              </span>
              <span className="text-lg transition-opacity duration-300">
                {link.icon}
              </span>
            </span>
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
};

export default Header;
