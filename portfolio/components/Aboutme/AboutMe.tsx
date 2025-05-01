"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "@/styles/AboutMe.css";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="about-section" id="about">
      {/* Desktop & Tablet View */}
      <div className="hidden sm:block about-container">
        <div className="text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="about-title"
          >
            더욱 더 발전하고자 하는
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="about-card"
        >
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-text"
          >
            안녕하세요.{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
              className="about-highlight"
            >
              다양한 경험을 통하여 발전하고자 하는
            </motion.span>{" "}
            풀스택 개발자{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="about-highlight"
            >
              이광녕
            </motion.span>
            입니다. 저는{" "}
            <motion.span
              initial={{ opacity: 0, rotate: -10 }}
              animate={
                isInView
                  ? { opacity: 1, rotate: 0 }
                  : { opacity: 0, rotate: -10 }
              }
              transition={{ duration: 0.5, delay: 0.8 }}
              className="about-highlight"
            >
              React
            </motion.span>
            와
            <motion.span
              initial={{ opacity: 0, rotate: 10 }}
              animate={
                isInView
                  ? { opacity: 1, rotate: 0 }
                  : { opacity: 0, rotate: 10 }
              }
              transition={{ duration: 0.5, delay: 1 }}
              className="about-highlight"
            >
              {" "}
              Next.js
            </motion.span>
            를 활용하여 프론트엔드를 구현하고,{" "}
            <motion.span
              initial={{ opacity: 0, scale: 1.5 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.5 }
              }
              transition={{ duration: 0.5, delay: 1.2 }}
              className="about-highlight"
            >
              nest.js
            </motion.span>
            를 활용하여 백엔드를 구상 및 구현 할 수 있습니다.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="about-text"
          >
            풀스택 국비과정을 통하여 현 시대에 필요한 프론트엔드와 백엔드를
            배우고 있습니다. 프로젝트를 진행하면서 개발의 재미를 느끼고 있으며
            더욱 발전하고자 합니다. 다양한 프로젝트에 참여하여 개인과 팀
            프로젝트의 차이를 느끼며 팀원들과의 소통을 중요하게 생각합니다.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="about-text"
          >
            또한, 팀 프로젝트를 진행하며 다양한 아이디어 제시 및 수용하여
            팀원들간의 의견을 조율하는 징검다리 역할을 수행하였으며, 모두 함께
            협력하여 좋은 결과물을 만들어 나아가는
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{
                duration: 0.8,
                delay: 1.8,
                type: "spring",
                stiffness: 200,
              }}
              className="about-highlight"
            >
              {" "}
              열정 가득한 개발자
            </motion.span>
            가 되겠습니다!
          </motion.p>
        </motion.div>
      </div>

      {/* Mobile View (480px 이하) */}
      <div className="sm:hidden about-container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="about-title"
        >
          더욱 더 발전하고자 하는
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="about-card"
        >
          <div className="flex items-center justify-center mb-4">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5 }}
              className="about-highlight text-2xl"
            >
              풀스택 개발자 이광녕입니다.
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-text"
          >
            React, Next.js를 활용한 프론트엔드와 nest.js를 활용한 백엔드 개발이
            가능한 풀스택 개발자입니다.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="about-text"
          >
            풀스택 국비과정에서 현대적인 웹 개발 기술을 학습하며, 다양한
            프로젝트 경험을 쌓고 있습니다.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="about-text"
          >
            팀 프로젝트에서 적극적인 소통과 협업을 통해
            <span className="about-highlight"> 열정 가득한 개발자</span>로
            성장하고 있습니다.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
