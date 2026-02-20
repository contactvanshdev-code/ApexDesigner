"use client";

import { motion } from "framer-motion";

interface RailProps {
  text: string;
  direction?: "left" | "right";
  className?: string;
}

function Rail({ text, direction = "left", className = "" }: RailProps) {
  return (
    <div className="marquee-mask overflow-hidden whitespace-nowrap py-2">
      <motion.div
        className={`flex w-max items-center gap-4 sm:gap-6 md:gap-8 ${className}`}
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
        }}
        transition={{
          duration: direction === "left" ? 56 : 62,
          ease: "linear",
          repeat: Infinity
        }}
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            className="font-display text-2xl uppercase tracking-tight sm:text-3xl md:text-5xl lg:text-7xl"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative z-20 overflow-hidden border-y border-white/10 bg-[#07112a]/80 py-8 sm:py-10 md:py-14">
      <Rail
        text="Portfolio Website • Personal Brand • Small Business Website •"
        direction="left"
        className="text-white"
      />
      <Rail
        text="Clean Design • Fast Delivery • Easy Modifications •"
        direction="right"
        className="outline-text"
      />
    </section>
  );
}
