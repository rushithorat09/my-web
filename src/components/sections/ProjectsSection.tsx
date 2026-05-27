"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


const projects = [
  {
    title: "AI-Integrated Smart RC Vehicle",
    problem: "Need for autonomous, voice-controlled robotics for complex terrain navigation.",
    architecture: "Vosk AI for offline voice processing, ESP32 microcontrollers, Real-time telemetry.",
    achievements: "Achieved 95% voice recognition accuracy offline, sub-100ms response time.",
    tech: ["Vosk AI", "C++", "Python", "IoT"],
    github: "#",
    demo: "#",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Vendor Management System",
    problem: "Inefficient manual vendor onboarding and invoice processing workflows.",
    architecture: "Layered Spring Boot microservices, PostgreSQL database, React frontend.",
    achievements: "Reduced onboarding time by 60%, automated 1000+ monthly invoices.",
    tech: ["Spring Boot", "PostgreSQL", "React", "REST API"],
    github: "#",
    demo: "#",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "AI Drone Optimization System",
    problem: "High battery consumption and unstable flight paths in dynamic weather.",
    architecture: "Lightweight inference models on edge devices, AI-assisted pathfinding algorithms.",
    achievements: "Improved battery life by 15%, stabilized flight in 20mph crosswinds.",
    tech: ["Python", "TensorFlow", "DroneKit", "Edge AI"],
    github: "#",
    demo: "#",
    color: "from-orange-500/20 to-red-500/20"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-24 px-4 relative z-10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-600">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col relative group"
            >
              {/* Animated gradient background map */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="p-8 relative z-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                
                <div className="space-y-4 mb-6 flex-grow text-sm text-zinc-300">
                  <div>
                    <strong className="text-cyan-400">Problem:</strong> {project.problem}
                  </div>
                  <div>
                    <strong className="text-purple-400">Architecture:</strong> {project.architecture}
                  </div>
                  <div>
                    <strong className="text-pink-400">Key Achievements:</strong> {project.achievements}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs rounded bg-white/10 text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-medium hover:text-cyan-400 transition-colors">
                    <GithubIcon size={16} /> Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm font-medium hover:text-purple-400 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
