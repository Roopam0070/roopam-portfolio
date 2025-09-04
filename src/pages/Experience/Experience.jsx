import React from "react";
import { Cpu, Layers } from "lucide-react";

const ExperienceCard = ({ title, company, period, description, icon: Icon }) => (
  <div className="group relative overflow-hidden">
    <div className="absolute inset-0 backdrop-blur-lg bg-pink-100 rounded-lg " />
    <div className="absolute -inset-[2px] bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 rounded-lg " />
    <div className="relative bg-pink-100 rounded-lg p-8 h-full border border-pink-200 shadow-xl backdrop-blur-xl ">
      <div className="relative mb-6">
        <Icon className="w-12 h-12 text-gray-400 relative z-10 transform transition-transform duration-300" />
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-500">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-700">
          <span className="font-semibold text-gray-500">{company}</span>
          <span className="text-sm font-mono bg-gray-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-700 border-l-4 border-gray-400/50 pl-4 mt-4 leading-relaxed">
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
      period: "September 2022 - August 2025",
      description: `
- Collaborated with design, development and testing teams to create optimized game mechanics and engaging experiences.
- Wrote clean, efficient, and maintainable code in TypeScript, JavaScript, React.js, Cocos2d.
- Implemented responsive UI elements ensuring seamless cross-platform experiences.
- Conducted performance profiling and optimization for smooth gameplay.
- Developed and adapted games for mobile and desktop platforms.
- Used Git/Bitbucket for version control and team collaboration.
- Integrated visual and audio assets with designers for high-quality output.
- Applied project management tools (Jira, Zoho) to track tasks and milestones effectively.
- Configured MoEngage campaigns and integrated AppsFlyer SDK.
      `.split('\n').map((line, idx) => (
        <span key={idx}>{line}<br /></span>
      )),
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pt-32 pb-20">
  
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/60 via-pink-100 to-pink-200/70" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(194,178,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(194,178,128,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gray-300/30 rounded-full animate-float"
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
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-500/80 text-center">
            Work Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium tracking-wide text-center max-w-2xl">
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
