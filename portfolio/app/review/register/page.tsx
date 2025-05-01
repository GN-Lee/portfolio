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
    try {
      const response = await createVisitor(formData);
      console.log("API 응답:", response); // 디버깅을 위한 로그

      if (response.code === 200) {
        alert("방명록이 등록되었습니다.");
        router.push("/review");
      } else {
        alert(response.message || "방명록 등록에 실패했습니다.");
      }
    } catch (error: any) {
      console.error("방명록 등록 중 오류:", error);
      alert(error.message || "방명록 등록에 실패했습니다.");
    }
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
    <main className="min-h-screen bg-gradient-to-br from-[#FDFBF7] to-[#A68164] py-16 px-8">
      <div className="max-w-4xl mx-auto bg-white/95 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#A68164]">
          방명록 작성
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-[#A68164]/5 rounded-xl p-6 transition-all duration-300">
            <label
              htmlFor="author"
              className="block text-xl font-medium text-[#A68164] mb-3"
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
              className="w-full px-4 py-3 bg-white border-2 border-[#A68164]/20 rounded-lg focus:outline-none focus:border-[#A68164] focus:ring-2 focus:ring-[#A68164]/20 text-gray-700 placeholder-gray-400 transition-all duration-300"
              placeholder="이름을 입력해주세요"
            />
          </div>

          <div className="bg-[#A68164]/5 rounded-xl p-6 transition-all duration-300">
            <label
              htmlFor="content"
              className="block text-xl font-medium text-[#A68164] mb-3"
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
              className="w-full px-4 py-3 bg-white border-2 border-[#A68164]/20 rounded-lg focus:outline-none focus:border-[#A68164] focus:ring-2 focus:ring-[#A68164]/20 text-gray-700 placeholder-gray-400 transition-all duration-300"
              placeholder="방명록 내용을 입력해주세요"
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={() => router.push("/review")}
              className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-[#A68164] text-white font-semibold rounded-lg hover:bg-[#8B6B4E] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              등록
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
