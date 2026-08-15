"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/sub/section-heading";
import { EXPERIENCE } from "@/constants";

export const ExperienceContent = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 section-padding">
      <div className="content-wide flex flex-col gap-10">
        <SectionHeading
          chip="Where I've worked"
          title="Experience"
          subtitle="Learning from every shop floor and design desk."
        />

        {/* Two-column grid on large screens */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {EXPERIENCE.map((experience, i) => (
            <motion.div
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex flex-col gap-3 rounded-lg shadow-lg border border-[#2A0E61] bg-[rgba(3,0,20,0.37)] p-6 hover:border-[#7042f88b] transition"
            >
              {/* Role + period */}
              <div className="flex flex-row items-start justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_8px_#7042f8] shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-white">
                    {experience.role}
                  </h3>
                </div>
                <span className="Welcome-box py-[4px] px-[12px] border border-[#7042f88b] text-[#b49bff] text-sm shrink-0">
                  {experience.period}
                </span>
              </div>

              <p className="text-gray-300 text-sm pl-6">
                {experience.company} · {experience.location}
              </p>

              <p className="text-gray-400 text-sm pl-6">{experience.summary}</p>

              <ul className="flex flex-col gap-2 list-disc list-inside pl-6">
                {experience.points.map((point) => (
                  <li key={point} className="text-gray-400 text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
