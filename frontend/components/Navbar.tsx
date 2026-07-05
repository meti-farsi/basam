"use client";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const navList = [
  { title: "Home", href: "/" },
  { title: "Courses", href: "/courses" },
  { title: "Creators", href: "/creators" },
];

const authLinks = [
  { title: "Sign In", href: "/login" },
  { title: "Join Us", href: "/register" },
];

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">

        <Link href="/" className="text-2xl font-bold text-white">
          Basam
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navList.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white transition hover:text-lime-300"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {authLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white transition hover:text-lime-300"
            >
              {link.title}
            </Link>
          ))}

          <ShoppingBag
            size={22}
            className="cursor-pointer text-white"
          />
        </div>

      </div>
    </nav>
  );
}