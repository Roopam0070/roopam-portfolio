import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";

// --- Floating Circles Background ---
const FloatingCircles = ({ colors = ["#d8a4ff", "#6b21a8", "#f9a8d4"] }) => {
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
    "Frontend Developer | UI/UX",
    "Passionate Learner & Problem Solver",
    "Building Responsive & User-Friendly Web Applications",
  ];

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <main className="bg-pink-100 text-pink-900 min-h-screen relative overflow-hidden font-sans">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingCircles />
      </div>

      <section className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-pink-200 backdrop-blur-sm border border-pink-300 mb-6 sm:mb-8">
              <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse "></div>
              <span className="text-sm font-medium text-pink-800">Welcome to my portfolio</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8">
              <SparklesText text="Hello" />
              <span className="relative inline-block">
                I&apos;m{" "}
                <span className="text-gray-600" style={{ fontWeight: 700 }}>
                  ROOPAM GUPTA
                </span>
              </span>
            </h1>

            {/* Role */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-200/20  to-pink-300/20 border border-pink-300 mb-8 backdrop-blur-sm">
              <i className="fas fa-rocket bg-pink-200 animate-bounce"></i>
              <FlipWords
                className={"text-lg sm:text-xl font-medium text-pink-700"}
                words={words}
              />
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-xl text-pink-800/80 mb-12">
              Frontend Developer | React | JavaScript | TypeScript | Cocos 
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="https://github.com/Roopam0070/roopam-portfolio"
                target="_blank"
                className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 transition-all duration-300 hover:scale-105"
              >
                <span className="block w-full px-8 py-4 rounded-[11px]  bg-pink-200 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:to-pink-400">
                  <span className="flex items-center justify-center gap-2 text-pink-800 font-medium group-hover:text-white">
                    View Projects <i className="fas fa-arrow-right"></i>
                  </span>
                </span>
              </a>

              <a
                href="https://drive.google.com/file/d/1pwJncwtvCTjdwQP4U2atgHYLsWpPednn/view?usp=sharing"
                target="_blank"
                className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 transition-all duration-300 hover:scale-105"
              >
                <span className="block w-full px-8 py-4 rounded-[11px]  bg-pink-200 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:to-pink-400">
                  <span className="flex items-center justify-center gap-2 text-pink-800 font-medium group-hover:text-white">
                    Get Resume <i className="fas fa-envelope"></i>
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Profile Code */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl shadow-xl bg-pink-400/10 p-6 border border-pink-400/20">
              <h3 className="text-lg font-semibold text-pink-700/60 mb-4">My Profile</h3>
              <div className="text-sm leading-relaxed font-mono text-pink-900">
                <pre  className="whitespace-pre-wrap break-words text-sm sm:text-base p-2">
                {`const profile = {
name: 'Roopam Gupta',
role: 'Frontend Developer',
skills:`}
                </pre>
                <div className="flex flex-wrap gap-2 my-2">
                  {["React.js", "JavaScript", "TypeScript", "HTML", "CSS", "Redux", "BitBucket", "Git", "Cocos", "Figma"].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-md bg-gray-400/40 text-gray-800 font-medium text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <pre className="whitespace-pre-wrap break-words text-sm sm:text-base p-2">
                  {`experience: '3 Years',
qualities: ['Hard Worker', 'Quick Learner', 'Problem Solver', 'Collaborative Team Player', 'Detail-Oriented']
}`
                  }
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
        <span className="text-[#3d5a40] text-sm flex items-center gap-2">
          <i className="fas fa-mouse text-gray-800"></i> About me
        </span>
        <i className="fas fa-chevron-down text-gray-800 text-xl"></i>
      </div>

      <PortfolioPage />
    </main>
  );
}
