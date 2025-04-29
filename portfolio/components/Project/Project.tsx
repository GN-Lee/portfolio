"use client";
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PortfolioList } from "@/type/portpolioList";

const Project = () => {
  const [projects, setProjects] = useState<PortfolioList[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
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
    };

    fetchProjects();
  }, []); // 빈 배열로 하여 한 번만 실행되도록

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen bg-purple-50 text-gray-800 py-20 px-4"
      id="project"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>
        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="w-full bg-gradient-to-r from-purple-100/80 via-pink-100/80 to-rose-100/80 backdrop-blur-sm rounded-xl p-6 border border-purple-200/30 shadow-xl hover:shadow-2xl transition-all duration-300"
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
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 aspect-video relative overflow-hidden rounded-lg">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    whileHover={{
                      scale: 1.1,
                      filter: "brightness(1.1)",
                    }}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <motion.h3
                    className="text-3xl font-bold mb-4 text-gray-800"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: index * 0.4 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 mb-6 text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: index * 0.5 }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.p
                    className="mb-6 text-lg font-medium leading-relaxed tracking-wide p-4 rounded-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.02,
                      backgroundImage:
                        "linear-gradient(to right, #9333ea, #ec4899)",
                    }}
                  >
                    {project.skills}
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: index * 0.5 }}
                  >
                    {project.tech?.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-purple-200/60 to-pink-200/60 rounded-full text-sm font-semibold text-gray-700 backdrop-blur-sm border border-purple-300/30"
                        initial={{ opacity: 0, scale: 0, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + techIndex * 0.1,
                          type: "spring",
                          stiffness: 400,
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(255, 255, 255, 0.3)",
                          rotate: [0, -5, 5, 0],
                          boxShadow: "0 0 15px rgba(147, 51, 234, 0.2)",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="flex gap-4">
                    <motion.button
                      onClick={() => window.open(project.link, "_blank")}
                      className="px-6 py-3 bg-gradient-to-r from-purple-300/40 to-pink-300/40 text-gray-700 rounded-lg hover:from-purple-400/50 hover:to-pink-400/50 transition-all duration-300 cursor-pointer backdrop-blur-sm border border-purple-200/30 flex items-center gap-2 font-semibold"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(147, 51, 234, 0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.6,
                        type: "spring",
                        stiffness: 400,
                      }}
                    >
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        🚀 Project 구경하기 ✨
                      </span>
                    </motion.button>
                    <motion.button
                      onClick={() => window.open("/review", "_blank")}
                      className="px-6 py-3 bg-gradient-to-r from-purple-300/40 to-pink-300/40 text-gray-700 rounded-lg hover:from-purple-400/50 hover:to-pink-400/50 transition-all duration-300 cursor-pointer backdrop-blur-sm border border-purple-200/30 flex items-center gap-2"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(147, 51, 234, 0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.6,
                        type: "spring",
                        stiffness: 400,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      리뷰 보기
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
