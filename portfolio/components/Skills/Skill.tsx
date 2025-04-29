"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import icon from "@/type/icon";

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { frontendSkills, backendSkills } = icon();
  return (
    <div
      ref={ref}
      className="w-full min-h-screen bg-purple-50 text-gray-800 py-20 px-4"
      id="skill"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>

        <div className="space-y-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-8 text-center text-gray-700"
            >
              Frontend
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  key={index}
                  className="bg-gradient-to-r from-purple-100/80 via-pink-100/80 to-rose-100/80 backdrop-blur-sm rounded-xl p-6 border border-purple-200/30 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-4">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12"
                    />
                    <h4 className="text-xl font-semibold text-center text-gray-700">
                      {skill.name}
                    </h4>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? { width: `${skill.proficiency}%` }
                            : { width: 0 }
                        }
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-2.5 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-gray-600">
                      {skill.proficiency}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl font-bold mb-8 text-center text-gray-700"
            >
              Backend
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {backendSkills.map((skill, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.6 }}
                  key={index}
                  className="bg-gradient-to-r from-purple-100/80 via-pink-100/80 to-rose-100/80 backdrop-blur-sm rounded-xl p-6 border border-purple-200/30 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-4">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12"
                    />
                    <h4 className="text-xl font-semibold text-center text-gray-700">
                      {skill.name}
                    </h4>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? { width: `${skill.proficiency}%` }
                            : { width: 0 }
                        }
                        transition={{ duration: 1, delay: index * 0.1 + 0.6 }}
                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-2.5 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-gray-600">
                      {skill.proficiency}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
