import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Link
        href="/dashboard"
        className="relative inline-block px-6 py-2 bg-white/10 shadow-lg overflow-hidden transition-all duration-900
             before:absolute before:inset-0 before:bg-gradient-to-br before:from-pink-500  before:to-blue-500 before:opacity-0 before:transition-opacity before:duration-700 hover:before:opacity-100"
      >
        <span className="relative z-10">Dashboard</span>
      </Link>
      <Link href="/registration" className="">
        <span className="relative z-10">Registration</span>
      </Link>
    </div>
  );
}
