import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { LazyStars } from "@/components/main/lazy-stars";
import { LoadingScreen } from "@/components/main/loading-screen";
import { Navbar } from "@/components/main/navbar";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

// display:swap prevents invisible text while the font downloads.
// preload:true hints the browser to fetch it early.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <LoadingScreen />
        {/*
          LazyStars dynamically imports Three.js only on the client.
          Three.js + @react-three/fiber + drei ≈ 400 KB gzipped — keeping it
          out of the initial bundle cuts First Contentful Paint significantly.
        */}
        <LazyStars />
        <Navbar />
        {/* Single global offset — compensates for the fixed 76px header */}
        <div style={{ paddingTop: "var(--header-h)" }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
