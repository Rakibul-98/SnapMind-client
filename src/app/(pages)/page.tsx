import Link from "next/link";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Link href="/registration" className="">
        <span className="relative z-10">Registration</span>
      </Link>
    </div>
  );
}
