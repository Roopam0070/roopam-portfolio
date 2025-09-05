import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu } from "lucide-react";
import { FaReact, FaGitAlt, FaHtml5, FaCss3, FaJava, FaBitbucket, FaAppStoreIos, FaWindows, FaBullhorn, FaChartLine } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiXcode, SiJavascript, SiUnity, SiAdobe } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsAndroid, BsFileEarmarkCode } from "react-icons/bs";

const SkillCard = ({ icon: Icon, title, skills, color, animate }) => (
  <Card className="group relative overflow-hidden bg-pink200/30 border-gray-400 hover:scale-[1.03] transition-all duration-300 hover:shadow-md hover:shadow-gray-500/50">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(236,72,153,0.1)] to-transparent group-hover:via-[rgba(236,72,153,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-xl bg-pink200/90 ${color} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
          {title}
        </h3>
      </div>
      <div className="flex flex-col gap-3">
        {skills.map((skill, index) => (
          <div key={index}>
            <Badge
              variant="outline"
              className="group/badge relative bg-pink-200 hover:bg-pink-300/50 text-gray-500 border-gray-400 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-sm hover:shadow-pink-300/20"
            >
              <span className="transform group-hover/badge:scale-110 transition-transform duration-300">{skill.icon}</span>
              <span className="font-medium">{skill.name}</span>
            </Badge>
            <div className="h-2 bg-gray-300 rounded-full mt-1 overflow-hidden">
              <div
                className={`h-2 rounded-full ${skill.levelColor} transition-all duration-1000 ease-in-out`}
                style={{ width: animate ? `${skill.level}%` : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const [animateBars, setAnimateBars] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimateBars(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: "Languages & Technologies",
      color: "text-teal-400",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="w-4 h-4" />, level: 85, levelColor: "bg-teal-400" },
        { name: "CSS", icon: <FaCss3 className="w-4 h-4" />, level: 80, levelColor: "bg-teal-400" },
        { name: "JavaScript", icon: <SiJavascript className="w-4 h-4" />, level: 85, levelColor: "bg-teal-400" },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" />, level: 85, levelColor: "bg-[#3178C6]" },
        { name: "React.js", icon: <FaReact className="w-4 h-4 text-[#3178C6" />, level: 85, levelColor: "bg-[#3178C6]" },
      ],
    },
    {
      icon: Database,
      title: "Tools & Platforms",
      color: "text-yellow-400",
      skills: [
        { name: "Android Studio", icon: <BsAndroid className="w-4 h-4" />, level: 70, levelColor: "bg-yellow-400" },
        { name: "Xcode", icon: <SiXcode className="w-4 h-4" />, level: 60, levelColor: "bg-yellow-400" },
        { name: "Chrome Dev Tools", icon: <TbBrandVscode className="w-4 h-4" />, level: 85, levelColor: "bg-yellow-400" },
        { name: "MoEngage", icon: <FaBullhorn className="w-4 h-4" />, level: 70, levelColor: "bg-yellow-400" },
        { name: "Appsflyer", icon: <FaChartLine className="w-4 h-4" />, level: 65, levelColor: "bg-yellow-400" },
      ],
    },
    {
      icon: Layout,
      title: "UI/UX & Design",
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 " />, level: 90, levelColor: "bg-purple-400" },
        { name: "Adobe XD", icon: <SiAdobe className="w-4 h-4" />, level: 90, levelColor: "bg-purple-400" },
        { name: "Responsive Design", icon: <Layout className="w-4 h-4" />, level: 90, levelColor: "bg-purple-400" },
      ],
    },
    {
      icon: Cpu,
      title: "Git, OS & Tools Expertise",
      color: "text-[#C2B280]",
      skills: [
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 " />, level: 80, levelColor: "bg-[#C2B280]" },
        { name: "Bitbucket", icon: <FaBitbucket className="w-4 h-4 " />, level: 80, levelColor: "bg-[#C2B280]" },
        { name: "iOS", icon: <FaAppStoreIos className="w-4 h-4" />, level: 80, levelColor: "bg-[#C2B280]" },
        { name: "Windows", icon: <FaWindows className="w-4 h-4" />, level: 85, levelColor: "bg-[#C2B280]" },
      ],
    },
    {
      icon: Paintbrush,
      title: "Game Engines",
      color: "text-blue-400",
      skills: [
        { name: "Cocos", icon: <SiUnity className="w-4 h-4" />, level: 90, levelColor: "bg-blue-400" },
        { name: "Unity", icon: <SiUnity className="w-4 h-4" />, level: 55, levelColor: "bg-blue-400" },
      ],
    },
  ];

  return (
    <main className="pt-16 lg:pt-20 text-gray-400 min-h-screen bg-pink-100 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex justify-center items-center mb-12">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
              animate={animateBars}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(194,178,128,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(194,178,128,0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
import { FaFigma } from "react-icons/fa";