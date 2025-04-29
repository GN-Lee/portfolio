"use client";

import { getVisitorById, createReply } from "@/utils/api";
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
    fetchVisitor();
  }, [id, router]);

  useEffect(() => {
    if (!visitor) return;

    const interval = setInterval(() => {
      setVisitor((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          createdAt: new Date(),
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [visitor]);

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
      const response = await createReply(id as string, {
        comment: comment,
        nickname: "관리자",
      });

      if (response) {
        alert("답글이 등록되었습니다.");
        setComment("");
        await fetchVisitor();
      }
    } catch (error) {
      alert("답글 등록 중 오류가 발생했습니다.");
      console.error(error);
    }
  };

  if (!visitor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-400 py-16 px-8 mt-8">
      <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
        <div className="mb-8 border-b border-white/20 pb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-800 animate-pulse">
              {visitor.name}
            </h2>
            <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/10 shadow-inner hover:bg-white/30 transition-all duration-300">
              {visitor.createdAt.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="mb-8 backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-xl">
          <p className="text-xl text-white leading-relaxed whitespace-pre-wrap font-light">
            {visitor.comment}
          </p>
        </div>

        <div className="mb-8">
          <form
            onSubmit={handleSubmitReply}
            className="space-y-8 backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-white/40"
          >
            <div className="transform transition-all duration-300 hover:scale-[1.02] group">
              <textarea
                placeholder="답글을 입력해주세요"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border-2 border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-4 focus:ring-purple-500/30 resize-none transition-all duration-300 group-hover:shadow-lg"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-10 py-4 bg-gradient-to-r from-purple-400/80 via-violet-400/80 to-fuchsia-400/80 text-white font-bold rounded-xl backdrop-blur-lg border-2 border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] transform hover:scale-105 hover:from-purple-300/80 hover:via-violet-300/80 hover:to-fuchsia-300/80 animate-shimmer"
              >
                답글 등록
              </button>
            </div>
          </form>
        </div>

        {visitor.replies && visitor.replies.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">답글 목록</h3>
            {visitor.replies.map((reply: Reply) => (
              <div
                key={reply.id}
                className="bg-white/5 rounded-xl p-6 mb-4 border border-white/10"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-white">
                    {reply.nickname}
                  </span>
                  <span className="text-sm text-white/70">
                    {new Date(reply.createdAt).toLocaleString()}
                  </span>
                </div>
                <p className="text-white">{reply.comment}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-end space-x-6">
          <a
            href="/review"
            className="px-8 py-4 bg-gradient-to-r from-purple-600/50 to-purple-800/50 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-xl transform hover:scale-105 hover:from-purple-500/50 hover:to-purple-700/50"
          >
            돌아가기
          </a>
          <button
            onClick={handleDelete}
            className="px-8 py-4 bg-gradient-to-r from-red-500/70 to-pink-500/70 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-xl transform hover:scale-105 hover:from-red-400/70 hover:to-pink-400/70"
          >
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
