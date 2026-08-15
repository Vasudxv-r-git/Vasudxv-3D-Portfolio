"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Image
        src={`/skills/${src}`}
        width={width}
        height={height}
        alt={name}
        loading="lazy"
        sizes={`${width}px`}
      />
    </motion.div>
  );
};
