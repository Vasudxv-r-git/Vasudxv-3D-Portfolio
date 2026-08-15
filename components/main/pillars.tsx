"use client";

import {
  CubeIcon,
  CubeTransparentIcon,
  DocumentTextIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/sub/section-heading";
import { PILLARS } from "@/constants";
import { MagicCard } from "@/components/magicui/magic-card";

const PILLAR_ICONS = [
  CubeTransparentIcon,
  CubeIcon,
  Square3Stack3DIcon,
  DocumentTextIcon,
];

export const Pillars = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 section-padding">
      <SectionHeading
        chip="What I work with"
        title="Core Strengths"
        subtitle="Precision tools, manufacturing mindset."
      />

      <div className="content-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PILLARS.map((pillar, i) => {
          const Icon = PILLAR_ICONS[i];
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="h-full"
            >
              <MagicCard className="flex flex-col items-center text-center gap-4 shadow-lg p-6 h-full">
                <Icon className="h-12 w-12 text-[#b49bff]" />
                <h3 className="text-xl font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-sm">{pillar.description}</p>
              </MagicCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
