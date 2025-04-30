"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PortfolioList } from "@/type/portpolioList";

const Project = () => {
  const [projects, setProjects] = useState<PortfolioList[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      if (typeof window !== "undefined") {
        try {
          const res = await fetch("http://localhost:3001/PortfolioList");
          if (!res.ok) {
            throw new Error("데이터를 못 가져와유");
          }
          const resJson = await res.json();
          setProjects(resJson.data);
        } catch (error) {
          console.error("아놔;;;", error);
        }
      }
    };

    fetchProjects();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen text-gray-800 flex flex-col items-center justify-center px-4 py-16"
      id="project"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-[#A68164]"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white/90 rounded-xl p-5 border border-[#A68164]/20 shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px -10px rgba(166, 129, 100, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="aspect-video relative overflow-hidden rounded-lg mb-5">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    scale: 1.08,
                    filter: "brightness(1.1)",
                  }}
                />
              </div>

              <motion.h3
                className="text-xl font-bold mb-3 text-[#A68164]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-gray-600 mb-3 text-sm line-clamp-3 font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              >
                {project.description}
              </motion.p>

              <motion.p
                className="mb-3 text-sm font-bold p-2 rounded-lg text-[#A68164]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              >
                {project.skills}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              >
                {project.tech?.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-2 py-1 bg-[#A68164]/10 rounded-full text-xs font-semibold text-[#A68164]"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <div className="flex gap-2">
                <motion.button
                  onClick={() => window.open(project.link, "_blank")}
                  className="flex-1 px-4 py-3 bg-[#A68164]/10 text-[#A68164] rounded-lg hover:bg-[#A68164]/20 text-sm font-bold"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  프로젝트 보기
                </motion.button>
                <motion.button
                  onClick={() => window.open("/review", "_blank")}
                  className="flex-1 px-4 py-3 bg-[#A68164]/10 text-[#A68164] rounded-lg hover:bg-[#A68164]/20 text-sm font-bold"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  리뷰 보기
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
