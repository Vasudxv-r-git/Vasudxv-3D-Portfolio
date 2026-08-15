"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS, PROFILE } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* ── Fixed site header ── */}
      <header className="site-header fixed top-0 left-0 right-0 z-50 section-padding">
        <div className="relative flex w-full items-center">

          {/* Logo + Name — left */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
          >
            <Image
              src={PROFILE.image}
              alt="Logo"
              width={42}
              height={42}
              draggable={false}
              sizes="42px"
              className="cursor-pointer rounded-full border border-[#7042f88b]"
            />
            <span className="hidden md:block text-gray-300 font-medium text-sm tracking-wide">
              {PROFILE.name}
            </span>
          </Link>

          {/* Centered glass-pill navigation — desktop only */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex glass-pill">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.link;
              return (
                <Link
                  key={link.title}
                  href={link.link}
                  className={`relative px-4 py-2 text-sm whitespace-nowrap transition rounded-full ${
                    isActive
                      ? "text-white nav-link-active"
                      : "text-gray-300 hover:text-[rgb(112,66,248)]"
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          {/* Hamburger — mobile / tablet */}
          <button
            className="ml-auto md:hidden glass-pill flex items-center justify-center text-white"
            style={{ minWidth: '44px', minHeight: '44px' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ── Mobile dropdown — sits below header, above content ── */}
      {isMobileMenuOpen && (
        <div
          className="fixed z-40 md:hidden section-padding pb-3 w-full"
          style={{ top: "var(--header-h)" }}
        >
          <div className="glass-panel flex flex-col items-center gap-1 py-4 text-gray-300 w-full max-w-sm mx-auto">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.link;
              return (
                <Link
                  key={link.title}
                  href={link.link}
                  className={`px-6 py-3 rounded-full text-center transition w-full ${
                    isActive
                      ? "text-white nav-link-active"
                      : "hover:text-[rgb(112,66,248)]"
                  }`}
                  style={{ minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
