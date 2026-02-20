"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("canvas") ||
        target.closest("[data-cursor-hover]")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-layer fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-[#8df9a7] pointer-events-none mix-blend-screen"
        animate={{ x: position.x - 6, y: position.y - 6 }}
        transition={{ duration: 0 }}
      />

      <motion.div
        className="cursor-layer pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full border border-[#5fe7ff]/60 mix-blend-screen"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.95 : 0.45
        }}
        transition={{ type: "spring", stiffness: 140, damping: 20, mass: 0.35 }}
      />
    </>
  );
}
