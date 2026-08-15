"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

import { STATS } from "@/constants";

const StatCounter = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 100, stiffness: 100 });
  const isYear = value > 1000;

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          Intl.NumberFormat("en-US", {
            maximumFractionDigits: 0,
            useGrouping: !isYear,
          }).format(Math.round(latest)) + suffix;
      }
    });
  }, [springValue, suffix, isYear]);

  return <span ref={ref}>0{suffix}</span>;
};

export const Stats = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 section-padding">
      <div className="content-wide grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="flex flex-col items-center text-center gap-2 rounded-lg shadow-lg border border-[#2A0E61] bg-[rgba(3,0,20,0.37)] p-8"
          >
            <span className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              <StatCounter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-gray-400 text-sm">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
