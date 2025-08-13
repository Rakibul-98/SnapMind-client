"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../assets/logo.png";
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Blogs", href: "/blogs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#132B36] via-[#2F2D40] to-[#1F1119]">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image className="h-10 w-10" src={logo} alt="logo" />
              <span className="ml-2 text-3xl font-bold">
                <span className="text-purple-700">Snap</span>
                <span>Mind</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className=" px-3 py-2 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-2xl p-2 cursor-pointer"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <RxCross2 /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden w-[92%]" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className=" block text-base font-medium text-right"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
