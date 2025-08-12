import Image from "next/image";
import headerImg from "../../../../assets/headerImg.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-purple-400 p-5 rounded-lg overflow-clip">
      <div className="">
        <p className="uppercase font-semibold">online course</p>
        <h3 className="capitalize text-3xl py-2">
          Sharpen your skills with <br className="hidden md:block" />
          professional online courses
        </h3>
        <button className="flex gap-2 items-center bg-black py-1.5 px-5 rounded-3xl">
          Explore
        </button>
      </div>
      <div className="flex-shrink-0 relative w-56 h-56">
        <Image
          src={headerImg}
          alt="header image"
          className="object-contain"
          fill
        />
      </div>
    </div>
  );
}
