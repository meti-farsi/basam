"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const navList =[
  {id : 1 , ttile :"meti"}
]

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">

        <Link href="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-lime-300" />

          <span className="text-2xl font-bold text-white">
            Mahdi Zakaleh
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className="text-white transition hover:text-lime-300"
          >
            Home
          </Link>

          <Link
            href="/courses"
            className="text-white transition hover:text-lime-300"
          >
            Courses
          </Link>

          <Link
            href="/creators"
            className="text-white transition hover:text-lime-300"
          >
            Creators
          </Link>
        </div>

        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/login"
            className="text-white transition hover:text-lime-300"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className="text-white transition hover:text-lime-300"
          >
            Join Us
          </Link>

          <ShoppingBag
            size={22}
            className="cursor-pointer text-white"
          />

        </div>
      </div>
    </nav>
  );
}