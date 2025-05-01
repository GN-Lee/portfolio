"use client";
import React, { useEffect, useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { PortfolioList } from "@/type/portpolioList";
import "@/styles/Project.css";

const ProjectCard = memo(
  ({ project, index }: { project: PortfolioList; index: number }) => (
    <motion.div
      key={project.id}
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
      <div className="aspect-video relative overflow-hidden rounded-lg mb-3 sm:mb-5">
        <motion.img
          src={project.image}
          alt={project.title}
          className="project-image"
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.08,
            filter: "brightness(1.1)",
          }}
        />
      </div>

      <motion.h3
        className="project-name"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {project.title}
      </motion.h3>

      <motion.p
        className="project-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {project.description}
      </motion.p>

      <motion.p
        className="project-skill"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {project.skills}
      </motion.p>

      <motion.div
        className="project-skills"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {project.tech?.map((tech, techIndex) => (
          <motion.span
            key={techIndex}
            className="project-skill"
            whileHover={{ scale: 1.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      <div className="project-buttons">
        <motion.button
          onClick={() => window.open(project.link, "_blank")}
          className="project-button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
        >
          프로젝트 보기
        </motion.button>
        <motion.button
          onClick={() => window.open("/review", "_blank")}
          className="project-button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
        >
          리뷰 보기
        </motion.button>
      </div>
    </motion.div>
  )
);

ProjectCard.displayName = "ProjectCard";

const Project = () => {
  const [projects, setProjects] = useState<PortfolioList[]>([]);

  const fetchProjects = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="project-section"
      id="project"
    >
      <div className="project-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="project-title"
        >
          Projects
        </motion.h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
