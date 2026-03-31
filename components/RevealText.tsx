"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface RevealTextProps {
  phrase: string;
}

export default function RevealText({ phrase }: RevealTextProps) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.to(".reveal-char", {
          opacity: 1,
          stagger: 0.04,
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            end: "bottom 40%",
            scrub: 1.5,
          }
        });
      }
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-24 flex justify-center w-full px-6">
      <div className="flex flex-wrap justify-center text-center max-w-5xl mx-auto gap-x-4 md:gap-x-6 gap-y-2">
        {phrase.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="whitespace-nowrap">
            {word.split("").map((char, charIndex) => (
              <span 
                key={charIndex} 
                className="reveal-char font-[--font-display] font-extrabold uppercase text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] opacity-10 inline-block"
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
}
