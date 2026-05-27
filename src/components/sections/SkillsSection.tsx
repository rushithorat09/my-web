"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Generative AI",
    skills: ["OpenAI APIs", "Prompt Engineering", "Vosk AI", "Custom Models"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Java Backend",
    skills: ["Java 8+", "Spring Boot", "Hibernate", "REST APIs"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS EC2", "AWS S3", "Docker", "GitHub Copilot"],
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "Frontend Engineering",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Node.js"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Database Systems",
    skills: ["PostgreSQL", "Data Modeling", "Optimization"],
    color: "from-red-500 to-rose-500"
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen py-24 px-4 relative z-10 flex flex-col items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            Technical Orbit
          </span>
        </h2>

        {/* Orbit Visualization Mockup using CSS grid and Framer motion for floating */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          
          {/* Central glowing orb effect behind the grid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 rounded-2xl border border-white/5 relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`} />
              
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-zinc-300 group-hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Abstract decorative circles inside the card */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-white/5 rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
