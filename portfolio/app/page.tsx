"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Main from "@/components/Main/Main";
import AboutMe from "@/components/Aboutme/AboutMe";
import Project from "@/components/Project/Project";
import Skill from "@/components/Skills/Skill";
import Plan from "@/components/Plan/Plan";
import { GiAtomicSlashes } from "react-icons/gi";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div className="relative cursor-none bg-[#FDFBF7]">
      <motion.div
        className="fixed w-16 h-16 rounded-full bg-[#8B6B4E]/30 pointer-events-none z-100 mix-blend-multiply hidden md:block"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          scale: 1,
        }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
      <motion.div
        className="fixed pointer-events-none z-100 hidden md:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          rotate: 360,
        }}
        transition={{
          duration: 0,
          ease: "linear",
          rotate: {
            repeat: Infinity,
            duration: 10,
          },
        }}
      >
        <GiAtomicSlashes className="w-6 h-6 text-[#8B6B4E]/70" />
      </motion.div>
      <Main />
      <AboutMe />
      <Project />
      <Skill />
      <Plan />
    </div>
  );
}
