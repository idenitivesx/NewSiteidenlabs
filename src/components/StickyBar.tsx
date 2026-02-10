"use client";

import { useEffect, useState } from "react";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/60 bg-white/95 backdrop-blur-lg transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-[var(--width-content)] items-center justify-center px-6 py-3.5">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-primary px-8 py-3 text-[15px] font-semibold text-white shadow-lg transition-all hover:bg-primary-600 hover:shadow-xl"
        >
          Get My Free Consultation
        </a>
      </div>
    </div>
  );
}
