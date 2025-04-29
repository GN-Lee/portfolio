"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="w-full min-h-screen bg-purple-50 text-gray-800 flex flex-col items-center justify-center px-4 py-20"
      id="about"
    >
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse"
          >
            더욱 더 발전하고자 하는
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="bg-gradient-to-r from-purple-100/80 via-pink-100/80 to-red-100/80 backdrop-blur-sm rounded-2xl p-8 space-y-6 border border-purple-200/30 shadow-xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl leading-relaxed text-gray-700"
          >
            안녕하세요.{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
              className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
            >
              다양한 경험을 통하여 발전하고자 하는
            </motion.span>{" "}
            풀스택 개발자{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-pink-500 font-semibold"
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
              className="text-blue-500 font-semibold"
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
              className="text-teal-500 font-semibold"
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
              className="text-red-500 font-semibold"
            >
              nest.js
            </motion.span>
            를 활용하여 백엔드를 구상 및 구현 할 수 있습니다.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-lg leading-relaxed text-gray-700"
          >
            풀스택 국비과정을 통하여 현 시대에 필요한 프론트엔드와 백엔드를
            배우고 있습니다. 프로젝트를 진행하며 개발의 재미를 느끼며 발전하고자
            합니다. 프로젝트를 진행하며 개인과 팀원들과의 차이를 느끼며
            팀원들과의 소통을 중요하게 생각합니다.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-lg leading-relaxed text-gray-700"
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
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold"
            >
              {" "}
              열정 가득한 개발자
            </motion.span>
            가 되겠습니다!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
