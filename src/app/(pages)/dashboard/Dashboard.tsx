"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { logout } from "../../../redux/features/auth/authSlice";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to your SnapMind dashboard 🚀</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
