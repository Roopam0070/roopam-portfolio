import React from "react";
import { Cpu, Layers } from "lucide-react";

const ExperienceCard = ({ title, company, period, description, icon: Icon }) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />
    <div className="absolute -inset-[2px] bg-gradient-to-r from-teal-400 via-[#C2B280] to-blue-400 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />
    <div className="relative bg-[#EDE8DC]/30 rounded-lg p-8 h-full border border-gray-300 shadow-xl backdrop-blur-xl">
      <div className="relative mb-6">
        <Icon className="w-12 h-12 text-teal-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-700">
          <span className="font-semibold text-[#C2B280]">{company}</span>
          <span className="text-sm font-mono bg-teal-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-700 border-l-4 border-teal-400/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Layers,
      title: "Game Developer",
      company: "Rein Games Pvt Ltd",
      period: "October 2022 - August 2025",
      description: `
- Collaborated with design and development teams to create optimized game mechanics and engaging experiences.
- Wrote clean, efficient, and maintainable code in TypeScript, JavaScript, C, and C++ using Unity and Cocos.
- Implemented responsive UI elements ensuring seamless cross-platform experiences.
- Conducted performance profiling and optimization for smooth gameplay.
- Developed and adapted games for mobile and desktop platforms (Android Studio, Xcode).
- Used Git/Bitbucket for version control and team collaboration.
- Integrated visual and audio assets with designers for high-quality output.
- Applied project management tools (Jira, Zoho) to track tasks and milestones effectively.
      `,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pt-32 pb-20">
      {/* Beige/Teal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#C2B280]/20 via-[#EDE8DC]/10 to-[#C2B280]/20" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(194,178,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(194,178,128,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-teal-400/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 mt-10">
        <div className="flex flex-col items-center space-y-8 mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#C2B280] text-center">
            Work Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-medium tracking-wide text-center max-w-2xl">
            Transforming ideas into digital reality, one project at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
