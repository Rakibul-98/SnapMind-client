import React from "react";
import ProtectedRoute from "../../../protectedRoute/ProtectedRoute";
import Dashboard from "./Dashboard";

export default function DashboardPage() {
  return (
    <div>
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    </div>
  );
}
