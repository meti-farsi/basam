"use client";

import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export default function Header({ variant = "dark" }) {
  const [open, setOpen] = useState(false);
  const isDark = variant === "dark";
  const textColor = isDark ? "text-[#f5f5f6]" : "text-[#242528]";

  return (
    <header className="relative z-20 flex items-center justify-between px-4 sm:px-6 lg:px-[120px] py-6">
      <a href="/" className="flex items-center gap-2 shrink-0">
        <svg width="24" height="27" viewBox="0 0 24 27" fill="none">
          <path
            d="M12 0L24 6.75V20.25L12 27L0 20.25V6.75L12 0Z"
            fill="#D4FB20"
          />
        </svg>
        <span
          className={`font-['Clash_Display:Bold'] text-lg sm:text-2xl ${textColor}`}
        >
          ByteSpace
        </span>
      </a>

      <nav className={`hidden md:flex items-center gap-6 text-base ${textColor}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="font-['Satoshi:Regular'] hover:opacity-80">
            {link.label}
          </a>
        ))}
      </nav>

      <div className={`hidden sm:flex items-center gap-6 text-base ${textColor}`}>
        <a href="/sign-in" className="font-['Satoshi:Regular'] hover:opacity-80">
          Sign In
        </a>
        <a href="/join" className="font-['Satoshi:Regular'] hover:opacity-80">
          Join Us
        </a>
        <ShoppingBag className="h-6 w-6" strokeWidth={1.8} />
      </div>

      <button
        className={`sm:hidden ${textColor}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col gap-4 p-6 sm:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-['Satoshi:Regular'] text-[#242528] text-base"
            >
              {link.label}
            </a>
          ))}
          <div className="h-px bg-[#ced0d3]" />
          <a href="/sign-in" className="font-['Satoshi:Regular'] text-[#242528] text-base">
            Sign In
          </a>
          <a href="/join" className="font-['Satoshi:Regular'] text-[#242528] text-base">
            Join Us
          </a>
        </div>
      )}
    </header>
  );
}
