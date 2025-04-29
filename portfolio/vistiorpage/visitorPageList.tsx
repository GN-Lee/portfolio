import Link from "next/link";
import { VisitorList } from "@/type/visitorList";

interface VisitorCardProps {
  visitor: VisitorList;
}

export default function VisitorCard({ visitor }: VisitorCardProps) {
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
          <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
            <span>{visitor.likes}</span>
            <span>{visitor.views}</span>
          </button>
        </div>
        <p className="text-gray-700">{visitor.comment}</p>
      </div>
    </Link>
  );
}
