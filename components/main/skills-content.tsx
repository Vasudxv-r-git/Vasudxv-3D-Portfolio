"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/sub/section-heading";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import {
  CAD_SKILLS,
  PROFESSIONAL_SKILLS,
  SKILL_LOGOS,
} from "@/constants";

const SkillBar = ({
  skill_name,
  note,
  index,
}: {
  skill_name: string;
  note: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col items-start gap-3 rounded-lg shadow-lg border border-[#2A0E61] bg-[rgba(3,0,20,0.37)] p-6 hover:border-[#7042f88b] transition cursor-pointer h-full"
    >
      <h3 className="text-lg font-semibold text-white">
        {skill_name}
      </h3>
      <p className="text-gray-400 text-sm">{note}</p>
    </motion.div>
  );
};

export const SkillsContent = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-3 relative overflow-hidden py-10 section-padding">
      <div className="content-wide flex flex-col gap-8">
        <SectionHeading
          chip="My expertise"
          title="Skills & Tools"
          subtitle="Precision in every model and drawing."
        />

        {/* Skill logo cards */}
        <div className="flex flex-row justify-center flex-wrap gap-8 items-center">
          {SKILL_LOGOS.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        {/* Skill bars — full-width one column with 4 items per row */}
        <div className="flex flex-col gap-16 mt-8">
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-semibold text-white mb-2">
              01 — CAD &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Design
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
              {CAD_SKILLS.map((skill, i) => (
                <SkillBar key={skill.skill_name} index={i} {...skill} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-semibold text-white mb-2">
              02 — Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Skills
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
              {PROFESSIONAL_SKILLS.map((skill, i) => (
                <SkillBar key={skill.skill_name} index={i} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
