"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Cpu, Cloud } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-24 px-4 relative z-10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-semibold text-white">Software Engineer</h3>
              <p className="text-zinc-300 leading-relaxed">
                Specializing in Java, Spring Boot, AI Integration, Cloud & Full Stack Development.
                I thrive at the intersection of modern software architecture and artificial intelligence,
                building scalable intelligent systems that solve complex problems.
              </p>
              
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-zinc-400 mb-2">Experience</p>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                    <Terminal size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">ThynkTech INDIA</h4>
                    <p className="text-sm text-zinc-400">Focus on scalable intelligent systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid / floating code snippets */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-4 border border-white/5 hover:border-cyan-500/30 transition-colors"
            >
              <Cpu size={32} className="text-purple-400" />
              <h4 className="font-medium">AI Integration</h4>
              <p className="text-xs text-zinc-400">OpenAI, Vosk, Custom Models</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-4 border border-white/5 hover:border-cyan-500/30 transition-colors mt-8"
            >
              <Code size={32} className="text-cyan-400" />
              <h4 className="font-medium">Backend Architecture</h4>
              <p className="text-xs text-zinc-400">Spring Boot, Microservices</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-4 border border-white/5 hover:border-purple-500/30 transition-colors -mt-8"
            >
              <Cloud size={32} className="text-zinc-200" />
              <h4 className="font-medium">Cloud Native</h4>
              <p className="text-xs text-zinc-400">AWS, Docker, CI/CD</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-4 border border-white/5 hover:border-purple-500/30 transition-colors"
            >
              <Terminal size={32} className="text-pink-400" />
              <h4 className="font-medium">Full Stack</h4>
              <p className="text-xs text-zinc-400">Next.js, React, Tailwind</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
