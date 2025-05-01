import Link from "next/link";
import { VisitorList } from "@/type/visitorList";

interface VisitorCardProps {
  visitor: VisitorList;
  isLiked: boolean;
  onLike: () => void;
}

export default function VisitorCard({
  visitor,
  isLiked,
  onLike,
}: VisitorCardProps) {
  return (
    <Link href={`/review/${visitor.id}`}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {visitor.name}
            </h3>
            <p className="text-sm text-gray-500">
              {new Date(visitor.createdAt).toLocaleString()}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              onLike();
            }}
            className={`flex items-center space-x-1 ${
              isLiked ? "text-red-500" : "text-gray-500 hover:text-red-500"
            }`}
          >
            <span>❤️ {visitor.likes}</span>
          </button>
        </div>
        <p className="text-gray-700">{visitor.comment}</p>
      </div>
    </Link>
  );
}
