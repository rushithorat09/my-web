"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, MapPin, ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
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

const LinkedInIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
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
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "rushithorat09@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  const socials = [
    {
      name: "GitHub",
      username: "@rushithorat09",
      href: "https://github.com/rushithorat09",
      icon: GithubIcon,
      color: "from-zinc-700/20 to-zinc-900/20 hover:border-zinc-500/50 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]",
      glowColor: "rgba(255,255,255,0.1)",
      accentText: "text-zinc-400"
    },
    {
      name: "LinkedIn",
      username: "Rushikesh Thorat",
      href: "https://www.linkedin.com/in/rushikesh-thorat-1817172a2?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: LinkedInIcon,
      color: "from-blue-600/10 to-indigo-900/20 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]",
      glowColor: "rgba(59,130,246,0.2)",
      accentText: "text-blue-400"
    },
    {
      name: "Instagram",
      username: "@rushi_thorat_09",
      href: "https://www.instagram.com/rushi_thorat_09?igsh=MWdtMWFlY2k3OTNlZA==",
      icon: InstagramIcon,
      color: "from-pink-500/10 to-purple-900/20 hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]",
      glowColor: "rgba(236,72,153,0.2)",
      accentText: "text-pink-400"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-24 px-4 relative z-10 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            Let's Connect
          </span>
        </h2>

        <div className="grid md:grid-cols-5 gap-8 items-stretch">
          {/* Email / Info Card (Left) */}
          <div className="glass-card md:col-span-2 p-8 md:p-10 rounded-[2.5rem] border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Direct Contact</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Have an interesting project, job opportunity, or just want to chat? Drop a line. Systems are standing by.
                </p>
              </div>

              {/* Location indicator */}
              <div className="flex items-center gap-3 text-zinc-300">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-cyan-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Location</p>
                  <p className="text-sm font-medium">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 space-y-4 pt-8 border-t border-white/10 mt-8 md:mt-0">
              <div className="bg-black/40 border border-white/5 rounded-2xl p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail size={20} className="text-purple-400 flex-shrink-0" />
                  <span className="text-sm font-mono text-zinc-300 truncate select-all">
                    {email}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-zinc-400 hover:text-white transition-all flex-shrink-0 relative"
                  aria-label="Copy Email"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="text-emerald-400 block"
                      >
                        <Check size={16} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="block"
                      >
                        <Copy size={16} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              <motion.a
                href={`mailto:${email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
              >
                <Mail size={18} />
                Send Email Directly
              </motion.a>
            </div>
          </div>

          {/* Social Links Matrix (Right) */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white px-2">Social Channels</h3>
            
            <div className="grid sm:grid-cols-1 gap-4 flex-grow">
              {socials.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`glass-card p-6 rounded-3xl border border-white/5 bg-gradient-to-r ${social.color} flex items-center justify-between group transition-all duration-300 relative overflow-hidden`}
                  >
                    {/* Glowing backlight */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 10% 50%, ${social.glowColor} 0%, transparent 50%)`
                      }}
                    />

                    <div className="flex items-center gap-6 relative z-10">
                      <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all ${social.accentText}`}>
                        <IconComponent size={28} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white flex items-center gap-2">
                          {social.name}
                        </h4>
                        <p className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">
                          {social.username}
                        </p>
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 border border-white/10 group-hover:border-white/20 flex items-center justify-center text-zinc-400 group-hover:text-white transition-all transform group-hover:translate-x-1">
                      <ExternalLink size={16} />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
