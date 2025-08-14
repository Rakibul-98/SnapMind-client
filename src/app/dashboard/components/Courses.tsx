import React from "react";
import CourseCard from "./CourseCard";

export default function Courses() {
  return (
    <div className="grid grid-cols-3 gap-5 py-5">
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
}
