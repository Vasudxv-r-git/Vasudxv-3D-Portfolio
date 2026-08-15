"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { SectionHeading } from "@/components/sub/section-heading";
import { DESIGN_CATEGORIES } from "@/constants";
import { MagicCard } from "@/components/magicui/magic-card";

type LightboxItem = {
  name: string;
  image: string;
  note: string;
  category: string;
};

const Lightbox = ({
  item,
  onClose,
}: {
  item: LightboxItem;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030014e6] backdrop-blur-md p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center gap-4 rounded-lg border border-[#7042f88b] bg-[rgba(3,0,20,0.9)] p-4 overflow-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 text-white hover:text-[#b49bff] transition"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>

        <div className="relative w-full aspect-video">
          <Image
            src={item.image}
            alt={item.name}
            fill
            priority
            unoptimized={true}
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>

        <div className="flex flex-col items-center text-center gap-2 px-4 pb-2">
          <h3 className="text-xl font-semibold text-white">{item.name}</h3>
          <p className="text-[#b49bff] text-sm">{item.category}</p>
          <p className="text-gray-400 text-sm max-w-2xl">{item.note}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const DesignsContent = () => {
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);

  const closeLightbox = useCallback(() => setLightboxItem(null), []);

  return (
    <section className="flex flex-col items-center justify-center py-10 section-padding">
      <div className="content-wide flex flex-col gap-16">
        <SectionHeading
          chip="CAD showcase"
          title="My Designs"
          subtitle="Click any design to take a closer look."
        />

        {DESIGN_CATEGORIES.map((category, ci) => (
          <div key={category.title} className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <h3 className="text-2xl font-semibold text-white">
                {category.title}
              </h3>
              <span className="text-[#b49bff] text-sm">{category.tools}</span>
              <p className="text-gray-400 max-w-3xl">
                {category.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, i) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  onClick={() =>
                    setLightboxItem({
                      ...item,
                      category: `${category.title} — ${category.tools}`,
                    })
                  }
                  className="text-start h-full"
                >
                  <MagicCard className="group flex flex-col gap-3 shadow-lg p-4 cursor-pointer h-full">
                    <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-[#2A0E61]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        loading="lazy"
                        unoptimized={true}
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.note}</p>
                  </MagicCard>
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {lightboxItem && (
          <Lightbox item={lightboxItem} onClose={closeLightbox} />
        )}
      </AnimatePresence>
    </section>
  );
};
