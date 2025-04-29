"use client";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Main = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showInitialText, setShowInitialText] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      video.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true);
      });
    }

    const timer = setTimeout(() => {
      setShowInitialText(false);
    }, 3000);

    return () => {
      if (video) {
        video.removeEventListener("loadeddata", () => {
          setIsVideoLoaded(true);
        });
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-full h-screen bg-purple-50 text-gray-800 relative"
    >
      {showInitialText && (
        <div className="absolute inset-0 md:text-8xl text-4xl flex flex-col items-center justify-center z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            className="md:text-8xl text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] text-center"
          >
            I want to be a person
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1 }}
            className="md:text-8xl text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] text-center"
          >
            who can wear any outfit you want
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 2 }}
            className="md:text-8xl text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] text-center"
          >
            Full Stack Developer
          </motion.h1>
        </div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <video
          className="w-full h-screen object-cover overflow-hidden opacity-80"
          src={"/snowing.mp4"}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        {!showInitialText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center px-4"
          >
            <div className="flex flex-col items-center gap-4">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                }
                transition={{ duration: 0.5 }}
                className="md:text-7xl text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] text-center"
              >
                Welcome to my portfolio
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:text-6xl text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] text-center"
              >
                if you're looking for a
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.6 }}
                className="md:text-6xl text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] text-center"
              >
                passionate & dedicated developer.
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.5, delay: 0.9 }}
                className="md:text-7xl text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] text-center"
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
