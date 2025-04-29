"use client";

import VisitorCard from "@/vistiorpage/visitorPageList";
import { useEffect, useState } from "react";
import { VisitorList } from "@/type/visitorList";
import { getVisitor } from "@/utils/api";

export default function Home() {
  const [visitor, setVisitor] = useState<VisitorList[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getVisitor().then((visitor) => setVisitor(visitor));
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-400 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-800 to-pink-800 bg-clip-text text-transparent animate-pulse">
          여러분의 소중한 의견을 남겨주세요!
        </h1>
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => (window.location.href = "/review")}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            후기 보기
          </button>
          <button
            onClick={() => (window.location.href = "/review/register")}
            className="px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-800 rounded-lg hover:from-pink-700 hover:to-pink-900 transition-all duration-300 shadow-lg hover:shadow-xl"
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
                  <div className="backdrop-blur-lg bg-white/15 rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                    <div className="relative z-10">
                      <VisitorCard visitor={visitor} />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                    <div className="absolute top-0 right-0 w-1.5 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 rounded-full"></div>
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
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white"
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
