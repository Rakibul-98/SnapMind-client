"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "./components/Header";
import DashboardMenu from "./components/DashboardMenu";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import Courses from "./components/Courses";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <div className="text-white relative ">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr_1fr] gap-6">
        <div
          className={`bg-white/10 p-6 shadow-lg flex flex-col gap-4 transition-all duration-300
          ${showLeft ? "w-full" : "w-6 md:w-auto"} overflow-hidden`}
        >
          <button
            onClick={() => setShowLeft(!showLeft)}
            className="md:hidden bg-gray-700 text-white rounded px-1 py-0.5 text-xs mb-2"
          >
            {showLeft ? "Close" : "Open"}
          </button>

          {(showLeft || window.innerWidth >= 768) && (
            <DashboardMenu handleLogout={handleLogout} />
          )}
        </div>

        <div className="py-5">
          <Header />
          <Courses />
        </div>

        <div
          className={`bg-white/10 p-6 shadow-lg transition-all duration-300
          ${showRight ? "w-full" : "w-6 md:w-auto"} overflow-hidden`}
        >
          <button
            onClick={() => setShowRight(!showRight)}
            className="md:hidden bg-gray-700 text-white rounded px-1 py-0.5 text-xs mb-2"
          >
            {showRight ? "Close" : "Open"}
          </button>

          {(showRight || window.innerWidth >= 768) && (
            <>
              <h1 className="text-2xl font-bold">Profile</h1>
              <p>Welcome to your profile 🚀</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
