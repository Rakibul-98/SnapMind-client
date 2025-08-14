import Image from "next/image";
import React from "react";

export default function CourseCard() {
  return (
    <div className="bg-gray-50/5 p-3 shadow-2xl">
      {/* <Image className="h-20" src={courseImg} alt={title} /> */}
      <div className="h-20 bg-gray-400"></div>
      <p>Frontend</p>
      <h3>Redux beginner</h3>
      <p>progress</p>
      <button>Continue</button>
    </div>
  );
}
