"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SectionHeading } from "@/components/sub/section-heading";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import {
  CAD_SKILLS,
  PROFESSIONAL_SKILLS,
  SKILL_LOGOS,
} from "@/constants";

const SkillBar = ({
  skill_name,
  level,
  note,
  index,
}: {
  skill_name: string;
  level: number;
  note: string;
  index: number;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col gap-2"
    >
      <div className="flex flex-row items-center justify-between">
        <span className="text-white font-medium">{skill_name}</span>
        <span className="text-[#b49bff] text-sm">{level}%</span>
      </div>
      <div className="h-3 w-full rounded-full border border-[#2A0E61] bg-[rgba(3,0,20,0.37)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay: 0.2 + index * 0.1, duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
        />
      </div>
      <p className="text-gray-400 text-sm">{note}</p>
    </motion.div>
  );
};

export const SkillsContent = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-3 min-h-screen relative overflow-hidden py-20 section-padding">
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

        {/* Skill bars — full-width two column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 mt-8">
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-semibold text-white mb-2">
              01 — CAD &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Design
              </span>
            </h3>
            {CAD_SKILLS.map((skill, i) => (
              <SkillBar key={skill.skill_name} index={i} {...skill} />
            ))}
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-semibold text-white mb-2">
              02 — Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Skills
              </span>
            </h3>
            {PROFESSIONAL_SKILLS.map((skill, i) => (
              <SkillBar key={skill.skill_name} index={i} {...skill} />
            ))}
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
