"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight.jsx"; // Ensure these components exist in your project
import img1 from "../assets/Home-Photoroom.png"
import logo from "../assets/logo1.png"
import { Link } from "react-router-dom";
export function HeroHighlightDemo() {
  return (
    <HeroHighlight className="flex ">
     <img src={logo}
        className="w-20 h-16 top-2 left-12"
      />
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl flex-col px-4 md:text-4xl mb-10 lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Thinkers Corporation Pvt. Ltd. :{` `} 
        <Highlight className="text-black mt-10 dark:text-white">
        "Empowering Minds ,Connecting Ideas ,Shaping the Future."
        </Highlight>
          <div className="mt-12 ">
            <Link to="/registration">
              <button className="text-xl hover:bg-red-600 mt-36  hover:text-white bg-red-200 w-80 h-14 rounded-md border border-blue-950">
                Your Message is Our Mission{`->`}
            </button>
            </Link>
          </div>
      </motion.h1>
      
      <div>
        <img src={img1}
        />
      </div>
      
    </HeroHighlight>
    
  );
}
