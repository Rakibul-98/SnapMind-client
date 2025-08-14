import React from "react";

interface DashboardMenuProps {
  handleLogout: () => void; // function that returns nothing
}

export default function DashboardMenu({ handleLogout }: DashboardMenuProps) {
  return (
    <div>
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
