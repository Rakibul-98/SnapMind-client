import React from "react";

export default function CourseCardSkeleton() {
  return (
    <div className="bg-gray-50/5 p-3 shadow-2xl text-sm space-y-2 animate-pulse">
      <div className="h-40 bg-gray-400 rounded-sm"></div>
      <div className="flex justify-between items-center">
        <div className="h-4 bg-gray-400 rounded w-20"></div>
        <div className="h-5 bg-gray-400 rounded-4xl w-14"></div>
      </div>
      <div className="h-6 bg-gray-400 rounded w-3/4"></div>
      <div className="h-8 bg-gray-400 rounded w-full"></div>
    </div>
  );
}
