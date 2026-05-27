"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "ThynkTech INDIA",
    period: "Nov 2025 - 2026",
    description: "Developing scalable backend systems and integrating AI capabilities into enterprise applications. Specializing in Java, Spring Boot, and cloud architecture.",
    achievements: [
      "Architected microservices reducing system latency by 30%.",
      "Integrated Generative AI solutions for automated data processing.",
      "Led migration to AWS, achieving 99.9% uptime."
    ]
  }
  // Add more experiences here
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen py-24 px-4 relative z-10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Professional Journey
          </span>
        </h2>

        <div className="relative border-l-2 border-white/10 pl-8 md:pl-12 ml-4 md:ml-0 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 rounded-full bg-black border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              <div className="glass-card p-8 rounded-3xl group hover:border-cyan-500/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-400 mt-1 font-medium">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                <p className="text-zinc-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                      <span className="text-cyan-500 mt-1">▹</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
