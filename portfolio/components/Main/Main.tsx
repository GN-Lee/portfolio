"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "@/styles/Main.css";

const Main = () => {
  const [showInitialText, setShowInitialText] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isInView) {
        setShowInitialText(true);
        const timer = setTimeout(() => {
          setShowInitialText(false);
        }, 4000);
        return () => clearTimeout(timer);
      }
    }
  }, [isInView]);

  return (
    <div ref={ref} className="main-container">
      {showInitialText && (
        <div className="main-text-container">
          <motion.h1
            key={`initial-text-1-${isInView}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="responsive-text font-bold main-text-gradient shadow-effect text-center"
          >
            I want to be a person
          </motion.h1>
          <motion.h1
            key={`initial-text-2-${isInView}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="responsive-text font-bold main-text-gradient shadow-effect text-center"
          >
            who can wear any outfit you want
          </motion.h1>
          <motion.h1
            key={`initial-text-3-${isInView}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="responsive-text font-bold main-text-gradient shadow-effect text-center"
          >
            Full Stack Developer
          </motion.h1>
        </div>
      )}
      <motion.div
        key={`video-container-${isInView}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <video
          className="main-video"
          src="/햇볕.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        {!showInitialText && (
          <motion.div
            key={`welcome-container-${isInView}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="main-welcome-container"
          >
            <div className="main-welcome-content">
              <motion.h1
                key={`welcome-text-1-${isInView}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="main-text-large main-text-gradient-dark shadow-effect text-center"
              >
                Welcome to my portfolio
              </motion.h1>
              <motion.h2
                key={`welcome-text-2-${isInView}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="main-text-medium main-text-gradient-dark shadow-effect text-center"
              >
                if you're looking for a
              </motion.h2>
              <motion.h2
                key={`welcome-text-3-${isInView}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="main-text-medium main-text-gradient-dark shadow-effect text-center"
              >
                passionate & dedicated developer.
              </motion.h2>
              <motion.h1
                key={`welcome-text-4-${isInView}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="main-text-large main-text-gradient-dark shadow-effect text-center"
              >
                Work with me
              </motion.h1>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Main;
