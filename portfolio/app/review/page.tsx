"use client";

import VisitorCard from "@/vistiorpage/visitorPageList";
import { useEffect, useState } from "react";
import { VisitorList } from "@/type/visitorList";
import { getVisitor } from "@/utils/api";

export default function Home() {
  const [visitor, setVisitor] = useState<VisitorList[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [likedPosts, setLikedPosts] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    getVisitor().then((visitor) => setVisitor(visitor));
    window.scrollTo(0, 0);
  }, []);

  const handleLike = (visitorId: number) => {
    setLikedPosts((prev) => ({
      ...prev,
      [visitorId]: !prev[visitorId],
    }));

    setVisitor((prev) =>
      prev.map((v) => (v.id === visitorId ? { ...v, likes: v.likes + 1 } : v))
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FDFBF7] to-[#A68164] text-gray-800 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#8B6B4E] to-[#A68164] bg-clip-text text-transparent">
          여러분의 소중한 의견을 남겨주세요!
        </h1>
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => (window.location.href = "/review")}
            className="px-6 py-3 bg-gradient-to-r from-[#A68164] to-[#8B6B4E] text-white rounded-lg hover:from-[#8B6B4E] hover:to-[#A68164] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            후기 보기
          </button>
          <button
            onClick={() => (window.location.href = "/review/register")}
            className="px-6 py-3 bg-gradient-to-r from-[#C4A68D] to-[#A68164] text-white rounded-lg hover:from-[#A68164] hover:to-[#C4A68D] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            댓글 쓰기
          </button>
        </div>
        <div>
          <div className="flex flex-col space-y-8 max-w-3xl mx-auto">
            {visitor
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .slice((currentPage - 1) * 4, currentPage * 4)
              .map((visitor) => (
                <div
                  key={visitor.id}
                  className="transform hover:scale-105 transition-all duration-500 hover:z-10"
                >
                  <div className="backdrop-blur-lg bg-white/90 rounded-3xl p-8 border border-[#A68164]/20 hover:border-[#A68164]/40 shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(166,129,100,0.3)] transition-all duration-500 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#A68164]/5 to-[#8B6B4E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#A68164] to-[#8B6B4E] rounded-3xl blur opacity-10 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
                    <div className="relative z-10">
                      <VisitorCard
                        visitor={visitor}
                        isLiked={likedPosts[visitor.id] || false}
                        onLike={() => handleLike(visitor.id)}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#A68164] via-[#8B6B4E] to-[#A68164] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                    <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#A68164] via-[#8B6B4E] to-[#A68164] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 rounded-full"></div>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from(
              { length: Math.ceil(visitor.length / 4) },
              (_, i) => i + 1
            ).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === page
                    ? "bg-gradient-to-r from-[#A68164] to-[#8B6B4E] text-white"
                    : "bg-white/80 hover:bg-white/90 text-[#8B6B4E]"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
