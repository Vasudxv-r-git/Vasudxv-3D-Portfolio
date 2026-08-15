import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden lg:block rotate-180 absolute left-1/2 w-full h-auto -z-20 pointer-events-none"
        style={{
          // 1. The Hero container has a global offset in layout.tsx of paddingTop: var(--header-h).
          //    top: 10px moves the origin exactly 10px below the navbar's bottom edge.
          top: "10px",
          // 2. We use h-auto so the video's CSS height matches its true 16:9 aspect ratio height.
          // 3. translate(-50%, -50%) moves it left by 50% (centering it horizontally), and
          //    UP by exactly 50% of its own rendered height (N pixels).
          // 4. scaleY(-1) vertically inverts the graphic, swapping the upper and lower parts.
          transform: "translate(-50%, -50%) scaleY(-1)"
        }}
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
