import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../assets/logo.png";

interface DashboardMenuProps {
  handleLogout: () => void; // function that returns nothing
}

export default function DashboardMenu({ handleLogout }: DashboardMenuProps) {
  return (
    <div>
      <Link href="/" className="flex items-center">
        <Image className="h-10 w-10" src={logo} alt="logo" />
        <span className="ml-2 text-3xl font-bold">
          <span className="text-purple-700">Snap</span>
          <span>Mind</span>
        </span>
      </Link>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to your SnapMind dashboard 🚀</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
