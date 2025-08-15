import React from "react";
import CourseCard from "./CourseCard";
import CourseCardSkeleton from "./CourseCardSkeleton";
import { Course } from "../../../../types";
import { useGetMyCoursesQuery } from "../../../../redux/features/course/courseApi";

export default function Courses() {
  const { data, isLoading, error } = useGetMyCoursesQuery();

  if (error) return <p>Failed to load courses</p>;

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-5 py-5">
        {Array.from({ length: 3 }).map((_, i) => (
          <CourseCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  const courses: Course[] = data?.data || [];
  const skeletonCount = Math.max(0, 3 - courses.length);

  return (
    <div className="grid grid-cols-3 gap-5 py-5">
      {courses.map((course, i) => (
        <CourseCard key={i} course={course} />
      ))}

      {Array.from({ length: skeletonCount }).map((_, i) => (
        <CourseCardSkeleton key={`skeleton-${i}`} />
      ))}
    </div>
  );
}
