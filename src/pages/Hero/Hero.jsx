import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";

// --- Floating Circles Background ---
const FloatingCircles = ({ colors = ["#e07a5f", "#3d5a40", "#C2B280"] }) => {
  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            backgroundColor: colors[i % colors.length],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [`0%`, `${Math.random() * 20 - 10}%`, `0%`],
            y: [`0%`, `${Math.random() * 20 - 10}%`, `0%`],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}
    </>
  );
};

export default function Hero() {
  const words = [
    "Frontend Developer | React & TypeScript",
    "Passionate Learner & Problem Solver",
    "Building Responsive & User-Friendly Apps",
    "Exploring Game DevelopmentF",
  ];

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <main className="bg-[#fdf6e3] text-[#2c2c2c] min-h-screen relative overflow-hidden font-sans">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingCircles />
      </div>

      <section className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#e07a5f]/20 backdrop-blur-sm border border-[#e07a5f]/30 mb-6 sm:mb-8">
              <div className="w-2 h-2 rounded-full bg-[#e07a5f] animate-pulse"></div>
              <span className="text-sm font-medium">Welcome to my portfolio</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8">
              <SparklesText text="Hello" />
              <span className="relative inline-block">
                I&apos;m{" "}
                <span className="typing-effect" style={{ color: "#3d5a40", fontWeight: 700 }}>
                  SAIJAL AGARWAL
                </span>
              </span>
            </h1>

            {/* Role */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#e07a5f]/20 to-[#C2B280]/20 border border-[#e07a5f]/30 mb-8 backdrop-blur-sm">
              <i className="fas fa-rocket text-[#e07a5f] animate-bounce"></i>
              <FlipWords
                className={"text-lg sm:text-xl font-medium text-[#3d5a40]"}
                words={words}
              />
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-xl text-[#2c2c2c]/80 mb-12">
              Frontend Developer | JavaScript | React | TypeScript | Unity | Cocos
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#e07a5f] to-[#3d5a40] p-0.5 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <span className="block w-full px-8 py-4 rounded-[11px] bg-[#fdf6e3] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#e07a5f] group-hover:to-[#3d5a40]">
                  <span className="flex items-center justify-center gap-2 text-[#2c2c2c] font-medium group-hover:text-white">
                    View Projects <i className="fas fa-arrow-right"></i>
                  </span>
                </span>
              </a>

              <a
                href="https://drive.google.com/file/d/1u32yqS6ANeGk0_jOZ7yUg-tBBORmFQIY/view?usp=sharing"
                target="_blank"
                className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-[#e07a5f]/60 to-[#3d5a40]/60 transition-all duration-300 hover:scale-105"
              >
                <span className="block w-full px-8 py-4 rounded-[11px] bg-[#fdf6e3] border border-[#3d5a40]/30 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#e07a5f] group-hover:to-[#3d5a40]">
                  <span className="flex items-center justify-center gap-2 text-[#2c2c2c] font-medium group-hover:text-white">
                    Get Resume <i className="fas fa-envelope"></i>
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Profile Code */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl shadow-xl bg-[#f5f0e1] p-6 border border-[#C2B280]/40">
              <h3 className="text-lg font-semibold text-[#3d5a40] mb-4">My Profile</h3>
              <div className="text-sm leading-relaxed font-mono text-[#2c2c2c]">
                <pre>
{`const profile = {
  name: 'Saijal Agarwal',
  role: 'Frontend Developer',
  skills:`}
                </pre>
                <div className="flex flex-wrap gap-2 my-2">
                  {["JavaScript", "TypeScript", "React", "BitBucket", "Git", "Unity", "Cocos,C,C++,Java"].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-md bg-[#3d5a40]/10 text-[#3d5a40] font-medium text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <pre>
{`  experience: 'Fresher',
  qualities: ['Hard Worker','Quick Learner',
  'Problem Solver'],
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
        <span className="text-[#3d5a40] text-sm flex items-center gap-2">
          <i className="fas fa-mouse text-[#e07a5f]"></i> About me
        </span>
        <i className="fas fa-chevron-down text-[#e07a5f] text-xl"></i>
      </div>

      <PortfolioPage />
    </main>
  );
}
