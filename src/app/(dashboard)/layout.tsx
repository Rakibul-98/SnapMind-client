"use client";

import DashboardMenu from "./dashboard/components/DashboardMenu";
import Profile from "./dashboard/components/Profile";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
        radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
        radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 65%)
      `,
        }}
      />
      <div className="text-white relative grid grid-cols-1 md:grid-cols-[1fr_4fr_1fr] gap-6">
        <DashboardMenu />
        <div className="">{children}</div>
        <Profile />
      </div>
    </div>
  );
}
