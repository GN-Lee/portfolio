"use client";

import { getVisitorById } from "@/utils/api";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Reply, VisitorResponseData } from "@/type/visitorList";

const Page = () => {
  const router = useRouter();
  const [visitor, setVisitor] = useState<VisitorResponseData | null>(null);
  const [comment, setComment] = useState("");
  const { id } = useParams();

  const fetchVisitor = async () => {
    try {
      const response = await getVisitorById(id as string);
      const formattedResponse = {
        ...response.data,
        createdAt: new Date(response.data.createdAt),
        replies:
          response.data.replies?.map((reply: Reply) => ({
            ...reply,
            createdAt: new Date(reply.createdAt),
          })) || [],
      };
      setVisitor(formattedResponse);
    } catch (error) {
      console.error("방문자 정보를 가져오는데 실패했습니다:", error);
      router.push("/review");
    }
  };

  useEffect(() => {
    if (window) fetchVisitor();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/visitor/${id}`
      );
      if (response.status === 200) {
        alert("삭제되었습니다.");
        router.push("/review");
      }
    } catch (error) {
      alert("삭제 중 오류가 발생했습니다.");
      console.error(error);
    }
  };

  const handleSubmitReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) {
      alert("답글을 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:3001/visitor/${id}/reply`,
        {
          comment: comment.trim(),
          nickname: "익명의 유저",
        }
      );

      if (response.data.success) {
        alert("답글이 등록되었습니다.");
        setComment("");
        await fetchVisitor();
      } else {
        alert(response.data.message || "답글 등록에 실패했습니다.");
      }
    } catch (error: any) {
      console.error("답글 등록 중 오류가 발생했습니다:", error);
      if (error.response) {
        alert(
          error.response.data.message || "답글 등록 중 오류가 발생했습니다."
        );
      } else {
        alert("서버와의 통신 중 오류가 발생했습니다.");
      }
    }
  };

  if (!visitor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDFBF7] to-[#A68164] py-16 px-8 mt-8">
      <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/90 rounded-2xl p-8 border border-[#A68164]/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
        <div className="mb-8 border-b border-[#A68164]/20 pb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8B6B4E] to-[#A68164]">
              {visitor.name}
            </h2>
            <span className="px-4 py-2 bg-[#A68164]/10 text-gray-800 rounded-full text-sm font-medium backdrop-blur-sm border border-[#A68164]/20 shadow-inner hover:bg-[#A68164]/20 transition-all duration-300">
              {visitor.createdAt.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="mb-8 backdrop-blur-sm bg-white/80 rounded-xl p-8 border border-[#A68164]/20 transition-all duration-300 hover:border-[#A68164]/40 hover:shadow-xl">
          <p className="text-xl text-gray-800 leading-relaxed whitespace-pre-wrap font-light">
            {visitor.comment}
          </p>
        </div>

        <div className="mb-8">
          <form
            onSubmit={handleSubmitReply}
            className="space-y-8 backdrop-blur-md bg-white/80 rounded-2xl p-8 border border-[#A68164]/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-[#A68164]/40"
          >
            <div className="transform transition-all duration-300 hover:scale-[1.02] group">
              <textarea
                placeholder="답글을 입력해주세요"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-white/90 border-2 border-[#A68164]/20 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#A68164]/40 focus:ring-4 focus:ring-[#A68164]/20 resize-none transition-all duration-300 group-hover:shadow-lg"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-10 py-4 bg-gradient-to-r from-[#A68164] to-[#8B6B4E] text-white font-bold rounded-xl backdrop-blur-lg border-2 border-[#A68164]/20 hover:border-[#A68164]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(166,129,100,0.3)] transform hover:scale-105"
              >
                답글 등록
              </button>
            </div>
          </form>
        </div>

        {visitor.replies && visitor.replies.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">답글 목록</h3>
            {visitor.replies.map((reply: Reply) => (
              <div
                key={reply.id}
                className="bg-white/80 rounded-xl p-6 mb-4 border border-[#A68164]/20"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-gray-800">
                    {reply.nickname}
                  </span>
                  <span className="text-sm text-gray-600">
                    {new Date(reply.createdAt).toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-800">{reply.comment}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-end space-x-6">
          <a
            href="/review"
            className="px-8 py-4 bg-gradient-to-r from-[#C4A68D] to-[#A68164] text-white font-semibold rounded-lg backdrop-blur-sm border border-[#A68164]/20 hover:border-[#A68164]/40 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
          >
            돌아가기
          </a>
          <button
            onClick={handleDelete}
            className="px-8 py-4 bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold rounded-lg backdrop-blur-sm border border-rose-400/20 hover:border-rose-400/40 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
          >
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
