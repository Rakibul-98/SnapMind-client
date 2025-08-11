import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] relative">
      {/* Cosmic Aurora */}
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
      <div className="text-white h-screen relative flex justify-center items-center">
        <Link
          href="/dashboard"
          className="relative inline-block px-6 py-2 bg-white/10 shadow-lg overflow-hidden transition-all duration-900
             before:absolute before:inset-0 before:bg-gradient-to-br before:from-pink-500  before:to-blue-500 before:opacity-0 before:transition-opacity before:duration-700 hover:before:opacity-100"
        >
          <span className="relative z-10">Dashboard</span>
        </Link>
      </div>
    </div>
  );
}
