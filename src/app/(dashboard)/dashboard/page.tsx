import React from "react";
import Dashboard from "./Dashboard";
import ProtectedRoute from "../../../protectedRoute/ProtectedRoute";

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    </div>
  );
}
