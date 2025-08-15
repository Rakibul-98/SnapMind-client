// import Image from "next/image";
import React from "react";
import { Course } from "../../../../types";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  console.log(course);
  const { title } = course;
  return (
    <div className="bg-gray-50/5 p-3 shadow-2xl text-sm space-y-2">
      {/* <Image className="h-20" src={courseImg} alt={title} /> */}
      <div className="h-40 bg-gray-400 rounded-sm"></div>
      <div className="flex justify-between items-center">
        <p>Frontend</p>
        <p className="bg-green-400 px-2 py-1 text-xs uppercase rounded-4xl">
          Ongoing
        </p>
      </div>
      <h3 className="truncate text-lg font-semibold">{title}</h3>
      <button className="bg-gray-50/10 px-2 py-1 w-full">Show Outline</button>
    </div>
  );
}
