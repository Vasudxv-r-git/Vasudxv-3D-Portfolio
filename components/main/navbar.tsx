"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS, PROFILE } from "@/constants";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  HomeIcon,
  UserIcon,
  WrenchIcon,
  BriefcaseIcon,
  PenToolIcon,
  HistoryIcon,
  AwardIcon,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType<{ className?: string }>> = {
  Home: HomeIcon,
  About: UserIcon,
  Skills: WrenchIcon,
  Projects: BriefcaseIcon,
  Designs: PenToolIcon,
  Experience: HistoryIcon,
  Certifications: AwardIcon,
};

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

          {/* Centered Dock navigation — desktop only */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <Dock direction="middle">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.link;
                const Icon = ICON_MAP[link.title];
                return (
                  <DockIcon key={link.title}>
                    <Link
                      href={link.link}
                      title={link.title}
                      className={`flex h-full w-full items-center justify-center rounded-full transition-colors ${
                        isActive
                          ? "bg-[rgba(112,66,248,0.2)] text-white"
                          : "text-gray-300 hover:text-white hover:bg-[rgba(112,66,248,0.1)]"
                      }`}
                    >
                      <Icon className="size-5" />
                    </Link>
                  </DockIcon>
                );
              })}
            </Dock>
          </div>

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

      {/* ── Floating Mobile Hamburger (Mobile Only) ── */}
      <button
        className="fixed top-6 right-6 z-[60] md:hidden glass-pill flex items-center justify-center text-white bg-[rgba(3,0,20,0.8)] shadow-lg"
        style={{ minWidth: '50px', minHeight: '50px' }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* ── Mobile Overlay Menu ── */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Tap-outside to close backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Centered Menu Panel */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-sm">
            <div className="glass-panel flex flex-col items-center gap-3 py-8 px-4 text-gray-300 w-full shadow-2xl border border-[rgba(112,66,248,0.5)]">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.link;
                return (
                  <Link
                    key={link.title}
                    href={link.link}
                    className={`px-6 py-4 rounded-full text-center transition w-[90%] font-medium text-lg ${
                      isActive
                        ? "text-white nav-link-active"
                        : "hover:text-white bg-[rgba(112,66,248,0.1)] border border-[rgba(112,66,248,0.3)]"
                    }`}
                    style={{ minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
