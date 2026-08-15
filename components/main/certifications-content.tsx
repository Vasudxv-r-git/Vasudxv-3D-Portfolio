"use client";

import { TrophyIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/sub/section-heading";
import { CERTIFICATIONS } from "@/constants";

export const CertificationsContent = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 section-padding">
      <div className="content-wide flex flex-col gap-10">
        <SectionHeading
          chip="Credentials"
          title="Certifications"
          subtitle="Verified skills, documented learning."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((certification, i) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-start gap-3 rounded-lg shadow-lg border border-[#2A0E61] bg-[rgba(3,0,20,0.37)] p-6 hover:border-[#7042f88b] transition"
            >
              <TrophyIcon className="h-10 w-10 text-[#b49bff]" />
              <h3 className="text-lg font-semibold text-white">
                {certification.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {certification.issuer} · {certification.year}
              </p>
              <p className="text-gray-400 text-sm">{certification.focus}</p>
              <span className="mt-2 text-xs text-[#b49bff] border border-[#7042f88b] rounded-full px-3 py-1">
                ID: {certification.id}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
