import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h2>A New Way of Digital Literacy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            soluta laboriosam omnis nesciunt ut ullam nisi ratione quidem cum
            aut.
          </p>
          <div>
            <Link
              href="/dashboard"
              className="relative inline-block px-6 py-2 bg-white/10 shadow-lg overflow-hidden transition-all duration-900
             before:absolute before:inset-0 before:bg-gradient-to-br before:from-pink-500  before:to-blue-500 before:opacity-0 before:transition-opacity before:duration-700 hover:before:opacity-100"
            >
              <span className="relative z-10">Dashboard</span>
            </Link>
            <Link href="/dashboard" className="">
              O
            </Link>
          </div>
        </div>
        <div>
          <div>
            <h2>A New Way of Digital Literacy</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              soluta laboriosam omnis nesciunt ut ullam nisi ratione quidem cum
              aut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
