"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "AI Engineer",
  "Spring Boot Architect",
  "Full Stack Developer",
  "Generative AI Integrator",
  "Cloud & DevOps Engineer"
];

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
          <span className="text-white">Rushikesh </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            Thorat
          </span>
        </h1>
        
        <div className="h-12 md:h-16 mb-8">
          <motion.h2
            key={currentRole}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-mono text-zinc-400"
          >
            {roles[currentRole]}
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-12 mx-auto leading-relaxed"
        >
          Building intelligent systems that merge AI, cloud computing, and modern software engineering into futuristic digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="#projects"
            className="glass px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 border border-cyan-500/30 hover:border-cyan-400 text-cyan-50"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full font-semibold bg-white text-black hover:bg-zinc-200 transition-colors duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
      </motion.div>
    </section>
  );
};
