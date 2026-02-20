"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gsap?: {
      fromTo: (
        targets: Element[] | NodeListOf<Element>,
        fromVars: Record<string, unknown>,
        toVars: Record<string, unknown>
      ) => unknown;
    };
  }
}

interface GsapHeadlineProps {
  lines: string[];
  className?: string;
}

export default function GsapHeadline({ lines, className = "" }: GsapHeadlineProps) {
  const rootRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const words = root.querySelectorAll("[data-gsap-word]");

    if (window.gsap) {
      window.gsap.fromTo(
        words,
        {
          yPercent: 130,
          opacity: 0,
          rotateX: -80,
          transformPerspective: 900
        },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.95,
          stagger: 0.06,
          ease: "power4.out",
          delay: 0.1
        }
      );
      return;
    }

    words.forEach((word, index) => {
      (word as HTMLElement).classList.add("fallback-rise");
      (word as HTMLElement).style.animationDelay = `${index * 70}ms`;
    });
  }, []);

  return (
    <h1 ref={rootRef} className={`font-display ${className}`}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block leading-[0.9]">
          {line.split(" ").map((word, wordIndex) => (
            <span key={`${lineIndex}-${wordIndex}`} className="mr-[0.26em] inline-block overflow-hidden">
              <span data-gsap-word className="hero-word inline-block">
                {word}
              </span>
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
