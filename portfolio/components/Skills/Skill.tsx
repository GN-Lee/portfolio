"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import icon from "@/type/icon";
import "@/styles/Skill.css";

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
      className="skill-card"
    >
      <div className="flex flex-col items-center gap-2">
        <img src={skill.icon} alt={skill.name} className="skill-icon" />
        <h4 className="skill-name">{skill.name}</h4>
        <div className="skill-progress-container">
          <motion.div
            initial={{ width: 0 }}
            animate={
              isInView ? { width: `${skill.proficiency}%` } : { width: 0 }
            }
            transition={{ duration: 1, delay: index * 0.1 + delay }}
            className="skill-progress-bar"
          />
        </div>
        <span className="skill-proficiency">{skill.proficiency}%</span>
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
        className="skill-subtitle"
      >
        {title}
      </motion.h3>
      <div className="skill-grid">
        {skills.map((skill, index) => renderSkillCard(skill, index, delay))}
      </div>
    </div>
  );

  return (
    <div ref={ref} className="skill-section" id="skill">
      <div className="skill-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          whileHover={{ scale: 1.05, color: "#6B4E33" }}
          transition={{ duration: 0.5 }}
          className="skill-title"
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
