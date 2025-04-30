"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import icon from "@/type/icon";

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { frontendSkills, backendSkills } = icon();

  const renderSkillCard = (skill: any, index: number, delay: number = 0) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      transition={{ duration: 0.3, delay: index * 0.1 + delay }}
      key={index}
      className="bg-gradient-to-r from-[#8B6B4E]/10 via-[#A68164]/10 to-[#C4A68D]/10 backdrop-blur-sm rounded-lg p-4 border border-[#8B6B4E]/20 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#8B6B4E]/20 hover:via-[#A68164]/20 hover:to-[#C4A68D]/20"
    >
      <div className="flex flex-col items-center gap-2">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-8 h-8 group-hover:scale-110 transition-transform duration-200"
        />
        <h4 className="text-base font-semibold text-center text-[#8B6B4E] hover:text-[#6B4E33] transition-colors duration-200">
          {skill.name}
        </h4>
        <div className="w-full bg-[#E5D3C3]/30 rounded-full h-1.5">
          <motion.div
            initial={{ width: 0 }}
            animate={
              isInView ? { width: `${skill.proficiency}%` } : { width: 0 }
            }
            transition={{ duration: 1, delay: index * 0.1 + delay }}
            className="bg-gradient-to-r from-[#8B6B4E] to-[#A68164] h-1.5 rounded-full"
          />
        </div>
        <span className="text-xs text-[#8B6B4E] hover:text-[#6B4E33] transition-colors duration-200">
          {skill.proficiency}%
        </span>
      </div>
    </motion.div>
  );

  const renderSkillSection = (
    title: string,
    skills: any[],
    delay: number = 0
  ) => (
    <div>
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        whileHover={{ scale: 1.05, color: "#6B4E33" }}
        transition={{ duration: 0.5, delay: delay }}
        className="text-2xl font-bold mb-6 text-center text-[#6B4E33] cursor-default"
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => renderSkillCard(skill, index, delay))}
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      className="w-full min-h-screen text-gray-800 py-16 px-4"
      id="skill"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          whileHover={{ scale: 1.05, color: "#6B4E33" }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-[#8B6B4E] cursor-default"
        >
          Skills
        </motion.h2>

        <div className="space-y-8">
          {renderSkillSection("Frontend", frontendSkills, 0.2)}
          {renderSkillSection("Backend", backendSkills, 0.4)}
        </div>
      </div>
    </div>
  );
};

export default Skill;
