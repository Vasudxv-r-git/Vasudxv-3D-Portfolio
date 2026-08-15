"use client";

import dynamic from "next/dynamic";

// Three.js / React-Three-Fiber is ~400 KB gzipped.
// Dynamic-importing from a Client Component is the only valid way to use
// ssr:false in the Next.js App Router.
const StarsCanvas = dynamic(
  () =>
    import("@/components/main/star-background").then((m) => ({
      default: m.StarsCanvas,
    })),
  { ssr: false }
);

export function LazyStars() {
  return <StarsCanvas />;
}
