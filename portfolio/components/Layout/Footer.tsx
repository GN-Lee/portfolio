"use client";

import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaInstagram,
  FaGithub,
  FaComment,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowTopButton(true);
        } else {
          setShowTopButton(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="w-full bg-gradient-to-br from-[#E5D3C3]/30 via-[#C4A68D]/20 to-[#8B6B4E]/10 text-gray-800 py-12 px-4 md:px-8"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-mono bg-gradient-to-r from-[#8B6B4E] to-[#A68164] bg-clip-text text-transparent">
              GwangNyeong,Lee
            </h2>
            <p className="mt-2 text-base md:text-lg font-medium bg-gradient-to-r from-[#8B6B4E] via-[#A68164] to-[#C4A68D] bg-clip-text text-transparent animate-pulse hover:scale-105 transform transition-all duration-300 cursor-default px-4">
              이상 열정 넘치는 풀스택 개발자 이광녕이었습니다. 소중한 시간 내어
              봐주셔서 감사합니다! 🚀✨
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[#8B6B4E]">
            <a
              href="https://instagram.com"
              className="flex items-center gap-2 hover:text-[#A68164] transition-colors"
            >
              <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base">p0nyo_97</span>
            </a>

            <a
              href="https://github.com/GN-Lee"
              className="flex items-center gap-2 hover:text-[#A68164] transition-colors"
            >
              <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base">GN-Lee</span>
            </a>

            <a
              href="https://kakao.com"
              className="flex items-center gap-2 hover:text-[#A68164] transition-colors"
            >
              <FaComment className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base">rhkdsud97</span>
            </a>

            <a
              href="mailto:rhkdsud0917@gmail.com"
              className="flex items-center gap-2 hover:text-[#A68164] transition-colors"
            >
              <FaEnvelope className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base">
                rhkdsud0917@gmail.com
              </span>
            </a>

            <span className="flex items-center gap-2 hover:text-[#A68164] transition-colors cursor-pointer">
              <FaPhone className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base">010-7174-8628</span>
            </span>
          </div>

          <p className="text-[#8B6B4E] text-xs md:text-sm text-center">
            Copyright © 2025 GwangNyeong, Lee. All rights reserved.
          </p>
        </div>
      </div>

      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 md:right-8 bg-[#8B6B4E] text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-[#A68164] transition-all duration-300 animate-bounce"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      )}
    </div>
  );
};

export default Footer;
