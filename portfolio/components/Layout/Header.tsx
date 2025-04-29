"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaTools, FaRoad, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > viewportHeight / 2) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      const sections = ["AboutMe", "Project", "Skill", "Footer"];
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
      className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 bg-gradient-to-r from-purple-100/90 via-pink-100/90 to-rose-100/90 backdrop-blur-sm p-6 rounded-l-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] border-l border-t border-b border-purple-200/30"
    >
      <nav className="flex flex-col gap-7">
        <motion.div
          className="flex flex-col items-end gap-2 mb-6 md:block hidden"
          whileHover={{ scale: 1.05 }}
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
            GN,Lee
          </h1>
          <span className="text-sm text-gray-600 font-medium italic">
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
            className={`relative text-right px-4 py-2 text-gray-700 hover:text-purple-600 transition-all duration-300 group ${
              activeSection === link.href.slice(1)
                ? "text-purple-600 font-semibold"
                : ""
            }`}
            whileHover={{ x: -8 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeSection === link.href.slice(1) && (
              <motion.div
                layoutId="activeSection"
                className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="inline-flex items-center gap-2">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-medium md:inline hidden">
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
