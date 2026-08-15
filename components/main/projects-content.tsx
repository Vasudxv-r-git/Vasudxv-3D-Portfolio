"use client";

import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/sub/section-heading";
import { PROJECTS } from "@/constants";

export const ProjectsContent = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-20 section-padding">
      <div className="content-wide flex flex-col gap-10">
        <SectionHeading
          chip="Engineering coursework"
          title="My Projects"
          subtitle="From concept to validated design."
        />

        {/* 2-column grid on large screens */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="flex flex-col gap-5 rounded-lg shadow-lg border border-[#2A0E61] bg-[rgba(3,0,20,0.37)] p-8 hover:border-[#7042f88b] transition"
            >
              <div className="flex flex-row items-center justify-between flex-wrap gap-3">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <span className="Welcome-box py-[6px] px-[14px] border border-[#7042f88b] text-[#b49bff] text-sm">
                  {project.year}
                </span>
              </div>

              <p className="text-gray-300">{project.summary}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 rounded-lg border border-[#2A0E61] p-4">
                  <span className="flex items-center gap-2 text-white font-medium">
                    <ExclamationTriangleIcon className="h-5 w-5 text-[#b49bff]" />
                    Challenge
                  </span>
                  <p className="text-gray-400 text-sm">{project.challenge}</p>
                </div>
                <div className="flex flex-col gap-2 rounded-lg border border-[#2A0E61] p-4">
                  <span className="flex items-center gap-2 text-white font-medium">
                    <CheckCircleIcon className="h-5 w-5 text-[#b49bff]" />
                    Solution
                  </span>
                  <p className="text-gray-400 text-sm">{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-row flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-gray-300 border border-[#7042f88b] bg-[rgba(113,47,255,0.12)] rounded-full px-4 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
