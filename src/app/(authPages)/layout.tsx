import Link from "next/link";
import loginBg from "../../assets/loginbg.jpg";
import Image from "next/image";
import logo from "../../assets/logo.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen w-full relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${loginBg.src})`,
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 100%), rgba(0,0,0,0.7)",
        }}
      />

      <div className="text-white relative z-10 w-[90%] mx-auto">
        <Link href="/" className="flex items-center pt-3">
          <Image className="h-10 w-10" src={logo} alt="logo" />
          <span className="ml-2 text-3xl font-bold">
            <span className="text-purple-700">Snap</span>
            <span>Mind</span>
          </span>
        </Link>
        <div className="">{children}</div>
      </div>
    </div>
  );
}
