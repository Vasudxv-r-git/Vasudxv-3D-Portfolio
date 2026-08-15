"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/sub/interactive-hover-button";

import { PROFILE } from "@/constants";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const floatAnimation: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 section-padding py-10 min-h-[calc(100vh-76px)] w-full z-[20] max-w-[1800px] mx-auto"
    >
      {/* Text column */}
      <div className="flex-1 flex flex-col gap-5 justify-center items-center lg:items-start text-center lg:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            {PROFILE.role} Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-4 text-5xl md:text-6xl xl:text-7xl font-bold text-white"
        >
          <span>
            Designing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Precision.
            </span>
            <br className="hidden sm:block" /> Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Innovation.
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-4 max-w-[600px]"
        >
          {PROFILE.intro}
        </motion.p>

        <motion.div variants={slideInFromLeft(1)}>
          <InteractiveHoverButton href="/designs">
            View Designs
          </InteractiveHoverButton>
        </motion.div>
      </div>

      {/* Portrait column — rectangular neon-framed card */}
      <motion.div
        variants={floatAnimation}
        className="relative flex-1 flex justify-center items-center w-full"
      >
        <div aria-hidden className="portrait-glow" />
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full max-w-[300px] md:max-w-[400px] xl:max-w-[480px] 2xl:max-w-[520px]"
        >
          {/* Rectangular portrait card with neon border */}
          <div className="portrait-card w-full">
            <Image
              src={PROFILE.portrait}
              alt={PROFILE.name}
              width={520}
              height={693}
              priority
              draggable={false}
              className="select-none w-full h-auto object-cover object-top"
              style={{ display: "block" }}
              sizes="(max-width: 768px) 300px, (max-width: 1280px) 400px, (max-width: 1536px) 480px, 520px"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
