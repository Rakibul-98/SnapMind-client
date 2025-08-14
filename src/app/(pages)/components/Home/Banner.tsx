import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImg from "../../../../assets/Nerd-amico.svg";
import { FaPlay } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      <div>
        <h2 className="text-5xl font-semibold capitalize leading-14">
          A New Way of <br className="hidden sm:block" /> Digital Literacy{" "}
          <span className="text-purple-700">...</span>
        </h2>
        <p className="my-5">
          SnapMind creates personalized courses, pulls the best resources from
          across the web, and adapts to how you learn.Whether you&apos;re
          mastering a new skill or deepening your expertise,{" "}
          <br className="hidden sm:block" /> we make learning engaging,
          efficient, and tailored just for you.
        </p>
        <div className="flex items-center space-x-3">
          <Link
            href="/dashboard"
            className="relative inline-block px-6 py-2 bg-white/10 shadow-lg overflow-hidden transition-all duration-900
             before:absolute before:inset-0 before:bg-gradient-to-br before:from-pink-500  before:to-blue-500 before:opacity-0 before:transition-opacity before:duration-700 hover:before:opacity-100"
          >
            <span className="relative z-10">Experience Now</span>
          </Link>
          <Link
            href="/dashboard"
            className="bg-white/10 p-3 rounded-full text-center"
          >
            <FaPlay />
          </Link>
        </div>
      </div>
      <div className="">
        <Image className="w-full h-[75vh]" src={bannerImg} alt="bannerImage" />
      </div>
    </div>
  );
}
