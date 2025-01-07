"use client";
import React from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { cn } from "../../lib/utils.js"; // Ensure this utility function is implemented in your project

export const HeroHighlight = ({ children, className, containerClassName }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event) => {
    const { currentTarget, clientX, clientY } = event;
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      className={cn(
        "relative h-[40rem] flex items-center dark:bg-black justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none" />
      <motion.div
        className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate(`
            radial-gradient(
              200px circle at ${mouseX.get()}px ${mouseY.get()}px,
              black 0%,
              transparent 100%
            )
          `),
          maskImage: useMotionTemplate(`
            radial-gradient(
              200px circle at ${mouseX.get()}px ${mouseY.get()}px,
              black 0%,
              transparent 100%
            )
          `),
        }}
      />
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({ children, className }) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative  text-4xl inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600",
        className
      )}
    >
      {children}
    </motion.span>
  );
};
