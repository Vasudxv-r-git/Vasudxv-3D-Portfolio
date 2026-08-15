"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// Key stored in sessionStorage — loading screen only shows once per browser session.
const SESSION_KEY = "portfolio_loaded";

export const LoadingScreen = () => {
  // Must start false to match the server render (no sessionStorage on server).
  // useEffect runs only on the client, after hydration is complete.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // First visit this session → show the loader
    if (sessionStorage.getItem(SESSION_KEY)) return;
    setVisible(true);

    const dismiss = () => {
      setVisible(false);
      sessionStorage.setItem(SESSION_KEY, "1");
    };

    if (document.readyState === "complete") {
      const t = setTimeout(dismiss, 500);
      return () => clearTimeout(t);
    }

    window.addEventListener("load", () => setTimeout(dismiss, 500), { once: true });

    const cap = setTimeout(dismiss, 1800);
    return () => clearTimeout(cap);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030014]"
          aria-label="Loading"
          aria-live="polite"
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(112,66,248,0.18) 0%, transparent 70%)",
            }}
          />

          {/* Orbit rings */}
          <div className="relative flex items-center justify-center w-32 h-32">
            <motion.span
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-[rgba(112,66,248,0.25)]"
              style={{ borderTopColor: "rgba(112,66,248,0.85)" }}
            />
            <motion.span
              aria-hidden
              animate={{ rotate: -360 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-[rgba(6,182,212,0.2)]"
              style={{
                borderRightColor: "rgba(6,182,212,0.75)",
                borderBottomColor: "rgba(6,182,212,0.35)",
              }}
            />
            <motion.span
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-[rgba(180,155,255,0.15)]"
              style={{ borderLeftColor: "rgba(180,155,255,0.8)" }}
            />
            <motion.span
              aria-hidden
              animate={{ scale: [1, 1.35, 1], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-4 h-4 rounded-full bg-[#7042f8]"
              style={{
                boxShadow: "0 0 12px 4px rgba(112,66,248,0.7), 0 0 32px 8px rgba(112,66,248,0.35)",
              }}
            />
          </div>

          {/* Name + role */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10 flex flex-col items-center gap-1 select-none"
          >
            <span className="text-white font-semibold text-lg tracking-widest uppercase">
              Vasudevan R
            </span>
            <span
              className="text-sm tracking-[0.25em] uppercase"
              style={{
                background: "linear-gradient(90deg, #a855f7, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Mechanical Design Engineer
            </span>
          </motion.div>

          {/* Loading dots */}
          <div className="mt-8 flex gap-2" aria-hidden>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-[#7042f8]"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
