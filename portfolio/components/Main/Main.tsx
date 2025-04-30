"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    <div ref={ref} className="w-full h-screen text-gray-800 relative">
      {showInitialText && (
        <div className="absolute inset-0 md:text-8xl text-4xl flex flex-col items-center justify-center z-10 px-4">
          <motion.h1
            key={`initial-text-1-${isInView}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="md:text-8xl text-4xl font-bold bg-gradient-to-r from-[#8B6B4E] via-[#A68164] to-[#C4A68D] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] text-center"
          >
            I want to be a person
          </motion.h1>
          <motion.h1
            key={`initial-text-2-${isInView}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="md:text-8xl text-4xl font-bold bg-gradient-to-r from-[#8B6B4E] via-[#A68164] to-[#C4A68D] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] text-center"
          >
            who can wear any outfit you want
          </motion.h1>
          <motion.h1
            key={`initial-text-3-${isInView}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="md:text-8xl text-4xl font-bold bg-gradient-to-r from-[#8B6B4E] via-[#A68164] to-[#C4A68D] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] text-center"
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
          className="w-full h-screen object-cover overflow-hidden opacity-80"
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
            className="absolute inset-0 flex items-center justify-center px-4"
          >
            <div className="flex flex-col items-center gap-4">
              <motion.h1
                key={`welcome-text-1-${isInView}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="md:text-7xl text-4xl font-bold bg-gradient-to-r from-[#6B4E33] via-[#4A3623] to-[#8B6B4E] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] text-center"
              >
                Welcome to my portfolio
              </motion.h1>
              <motion.h2
                key={`welcome-text-2-${isInView}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:text-6xl text-3xl font-bold bg-gradient-to-r from-[#8B6B4E] via-[#4A3623] to-[#8B6B4E] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] text-center"
              >
                if you're looking for a
              </motion.h2>
              <motion.h2
                key={`welcome-text-3-${isInView}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="md:text-6xl text-3xl font-bold bg-gradient-to-r from-[#8B6B4E] via-[#4A3623] to-[#8B6B4E] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] text-center"
              >
                passionate & dedicated developer.
              </motion.h2>
              <motion.h1
                key={`welcome-text-4-${isInView}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="md:text-7xl text-4xl font-bold bg-gradient-to-r from-[#8B6B4E] via-[#4A3623] to-[#8B6B4E] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] text-center"
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
