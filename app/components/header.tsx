"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      // Always show navbar at the very top
      if (currentScrollY < 20) {
        setShowHeader(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Scrolling down = hide navbar
      if (currentScrollY > lastScrollY.current) {
        setShowHeader(false);
        setMenuOpen(false);
      }

      // Scrolling up = show navbar
      if (currentScrollY < lastScrollY.current) {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-[999] w-full bg-white/80 backdrop-blur-md transition-transform duration-300 ${
        showHeader || menuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-5 md:pb-8 md:pt-5 md:pl-10 md:pr-20">
        {/* LOGO / NAME */}
        <Link
          href="/"
          className="text-base underline font-mono tracking-tight text-green-700 leading-tight"
        >
          parineet
          <br />
          sond
        </Link>

        {/* DESKTOP NAVBAR */}
        <nav className="hidden md:flex text-base font-mono flex-row gap-16 lg:gap-24 border border-solid border-green-800 p-2 px-10 rounded-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="underline text-green-700 hover:text-[#77001E] transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col gap-1.5 border border-green-800 rounded-lg p-2"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block h-[2px] w-6 bg-green-800 transition ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-green-800 transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-green-800 transition ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-4 right-4 bg-white border border-green-800 rounded-2xl shadow-xl px-6 py-5">
          <div className="flex flex-col gap-5 font-mono text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-green-700 underline hover:text-[#77001E] transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}