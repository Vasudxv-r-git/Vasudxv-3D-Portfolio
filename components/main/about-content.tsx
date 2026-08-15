"use client";

import {
  AcademicCapIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/sub/section-heading";
import { ABOUT, EDUCATION } from "@/constants";

const PRINCIPLE_ICONS = [
  RocketLaunchIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
];

export const AboutContent = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-20 section-padding">
      <div className="content-wide flex flex-col gap-10">
        <SectionHeading
          chip="Get to know me"
          title="About Me"
          subtitle="From shop floors to CAD workbenches."
        />

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-300 text-center max-w-4xl mx-auto"
        >
          {ABOUT.intro}
        </motion.p>

        {/* Story + Education — side by side on large screens */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Story */}
          <div className="rounded-lg shadow-lg border border-[#2A0E61] bg-[rgba(3,0,20,0.37)] p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Story
              </span>
            </h3>
            <div className="flex flex-col gap-4">
              {ABOUT.story.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="text-gray-400"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Education timeline */}
          <div className="rounded-lg shadow-lg border border-[#2A0E61] bg-[rgba(3,0,20,0.37)] p-8">
            <h3 className="flex items-center gap-3 text-2xl font-semibold text-white mb-8">
              <AcademicCapIcon className="h-8 w-8 text-[#b49bff]" />
              Education
            </h3>
            <div className="relative flex flex-col gap-10 pl-8 border-l-2 border-[#2A0E61]">
              {EDUCATION.map((education, i) => (
                <motion.div
                  key={education.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_10px_#7042f8]" />
                  <h4 className="text-lg font-semibold text-white">
                    {education.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{education.institution}</p>
                  <p className="text-[#b49bff] text-sm mt-1">
                    {education.period}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {education.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Principles — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT.principles.map((principle, i) => {
            const Icon = PRINCIPLE_ICONS[i];
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center gap-4 rounded-lg shadow-lg border border-[#2A0E61] bg-[rgba(3,0,20,0.37)] p-6 hover:border-[#7042f88b] transition"
              >
                <Icon className="h-10 w-10 text-[#b49bff]" />
                <h4 className="text-xl font-semibold text-white">
                  {principle.title}
                </h4>
                <p className="text-gray-400 text-sm">{principle.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
