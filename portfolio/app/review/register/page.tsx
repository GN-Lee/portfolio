"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createVisitor } from "@/utils/api";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await createVisitor(formData);
    response.statusCode === 201 && router.push("/");
    response.statusCode === 400 && alert("작성자 이름을 입력해주세요");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-400 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl">
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-800 to-pink-800 bg-clip-text text-transparent animate-pulse">
          방명록 작성
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 transition-all duration-300 hover:border-white/30">
            <label
              htmlFor="author"
              className="block text-xl font-medium text-white mb-3"
            >
              작성자
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300"
              placeholder="이름을 입력해주세요"
            />
          </div>

          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 transition-all duration-300 hover:border-white/30">
            <label
              htmlFor="content"
              className="block text-xl font-medium text-white mb-3"
            >
              내용
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300"
              placeholder="방명록 내용을 입력해주세요"
            />
          </div>

          <div className="flex justify-end space-x-6 pt-4">
            <button
              type="button"
              onClick={() => router.push("/review")}
              className="px-8 py-3 bg-gradient-to-r from-purple-600/50 to-purple-800/50 rounded-lg hover:from-purple-700/50 hover:to-purple-900/50 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 shadow-lg hover:shadow-xl"
            >
              취소
            </button>
            <button
              type="submit"
              onClick={() => router.push("/review")}
              className="px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-800 rounded-lg hover:from-pink-700 hover:to-pink-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              등록
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
