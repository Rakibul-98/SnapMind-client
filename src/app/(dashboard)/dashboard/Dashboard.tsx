"use client";

import Header from "./components/Header";
import Courses from "./components/Courses";

export default function Dashboard() {
  return (
    <div className="py-5">
      <Header />
      <Courses />
    </div>
  );
}
