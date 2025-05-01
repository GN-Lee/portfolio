"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import plan from "@/type/plan";

const Plan = () => {
  const { plans, nextProject, containerVariants, itemVariants } = plan();
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full min-h-screen text-gray-800 flex flex-col items-center justify-center px-2 sm:px-4 py-12 sm:py-20"
      id="plan"
    >
      <motion.h2
        variants={itemVariants}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 text-[#8B6B4E] drop-shadow-lg text-center"
      >
        프로젝트 진행 내역
      </motion.h2>

      {/* Desktop & Tablet View */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl px-2 sm:px-0">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.projectName}
            variants={itemVariants}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-white/95 via-white/90 to-[#E5D3C3]/20 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] border border-[#C4A68D]/30"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-[#8B6B4E] mb-2 sm:mb-3 drop-shadow">
              {plan.projectName}
            </h3>
            <p className="text-gray-700 text-base sm:text-lg mb-3 sm:mb-4 min-h-[60px] sm:min-h-[80px] font-medium leading-relaxed">
              {plan.description}
            </p>
            <div className="flex items-center text-sm sm:text-base text-[#A68164] font-semibold">
              <span>{plan.startDate}</span>
              <span className="mx-2">~</span>
              <span>{plan.endDate}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="sm:hidden w-full max-w-sm">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.projectName}
            variants={itemVariants}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4 bg-white/90 p-4 rounded-lg border-l-4 border-[#8B6B4E] shadow-md"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-[#8B6B4E]">
                {plan.projectName}
              </h3>
              <div className="text-xs text-[#A68164]">
                {plan.startDate} ~ {plan.endDate}
              </div>
            </div>
            <p className="text-sm text-gray-600">{plan.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.h2
        variants={itemVariants}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-5xl font-bold my-8 sm:my-12 text-[#8B6B4E] drop-shadow-lg text-center"
      >
        진행 예정 프로젝트
      </motion.h2>

      {/* Desktop & Tablet View */}
      <div className="hidden sm:flex justify-center w-full max-w-8xl px-2 sm:px-0">
        {nextProject.map((project) => (
          <motion.div
            key={project.projectName}
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-full max-w-4xl bg-gradient-to-br from-white/95 via-[#E5D3C3]/10 to-[#C4A68D]/20 backdrop-blur-sm p-4 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] border-l-4 border-[#8B6B4E]"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-[#8B6B4E] mb-2 sm:mb-3 drop-shadow">
              {project.projectName}
            </h3>
            <p className="text-gray-700 text-base sm:text-lg mb-3 sm:mb-4 min-h-[60px] sm:min-h-[80px] leading-relaxed">
              {project.description}
            </p>
            <div className="flex items-center text-sm sm:text-base">
              <span className="text-[#A68164] font-semibold">
                {project.startDate}
              </span>
              <span className="mx-2 text-[#A68164] font-semibold">~</span>
              <span className="text-[#8B6B4E] font-extrabold">
                {project.endDate}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="sm:hidden w-full max-w-sm">
        {nextProject.map((project) => (
          <motion.div
            key={project.projectName}
            variants={itemVariants}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gradient-to-r from-[#8B6B4E] to-[#A68164] p-4 rounded-lg text-white shadow-lg"
          >
            <h3 className="text-lg font-bold mb-2">{project.projectName}</h3>
            <p className="text-sm mb-3 opacity-90">{project.description}</p>
            <div className="text-xs font-light">
              {project.startDate} ~ {project.endDate}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Plan;
