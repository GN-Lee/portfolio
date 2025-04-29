"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Main from "@/components/Main/Main";
import AboutMe from "@/components/Aboutme/AboutMe";
import Project from "@/components/Project/Project";
import Skill from "@/components/Skills/Skill";
import Plan from "@/components/Plan/Plan";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative cursor-none">
      <motion.div
        className="fixed w-12 h-12 rounded-full bg-gradient-to-r from-violet-300 to-fuchsia-300 pointer-events-none z-50 blur-sm"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: 1,
          opacity: 0.4,
        }}
        transition={{ duration: 0, ease: "linear" }}
      />
      <motion.div
        className="fixed w-5 h-5 rounded-full bg-gradient-to-r from-indigo-200 to-purple-300 pointer-events-none z-50 shadow-lg shadow-purple-300/30"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: 0.9,
        }}
        transition={{ duration: 0, ease: "linear" }}
      />
      <Main />
      <AboutMe />
      <Project />
      <Skill />
      <Plan />
    </div>
  );
}
