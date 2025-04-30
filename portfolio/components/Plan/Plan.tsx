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
      className="w-full min-h-screen text-gray-800 flex flex-col items-center justify-center px-4 py-20"
      id="plan"
    >
      <motion.h2
        variants={itemVariants}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12 text-[#8B6B4E] drop-shadow-lg"
      >
        프로젝트 진행 내역
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.projectName}
            variants={itemVariants}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-white/95 via-white/90 to-[#E5D3C3]/20 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] border border-[#C4A68D]/30"
          >
            <h3 className="text-2xl font-semibold text-[#8B6B4E] mb-3 drop-shadow">
              {plan.projectName}
            </h3>
            <p className="text-gray-700 text-lg mb-4 min-h-[80px] font-medium leading-relaxed">
              {plan.description}
            </p>
            <div className="flex items-center text-base text-[#A68164] font-semibold">
              <span>{plan.startDate}</span>
              <span className="mx-2">~</span>
              <span>{plan.endDate}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.h2
        variants={itemVariants}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-5xl font-bold my-12 text-[#8B6B4E] drop-shadow-lg"
      >
        진행 예정 프로젝트
      </motion.h2>
      <div className="flex justify-center w-full max-w-8xl">
        {nextProject.map((project) => (
          <motion.div
            key={project.projectName}
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-full max-w-4xl bg-gradient-to-br from-white/95 via-[#E5D3C3]/10 to-[#C4A68D]/20 backdrop-blur-sm p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] border-l-4 border-[#8B6B4E]"
          >
            <h3 className="text-2xl font-semibold text-[#8B6B4E] mb-3 drop-shadow">
              {project.projectName}
            </h3>
            <p className="text-gray-700 text-lg mb-4 min-h-[80px] leading-relaxed">
              {project.description}
            </p>
            <div className="flex items-center text-base">
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
    </motion.div>
  );
};

export default Plan;
