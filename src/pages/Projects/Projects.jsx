import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "My portfolio showcasing my skills, projects, and work experience, built with React, TailwindCSS, and Framer Motion.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    githubLink: "https://github.com/SaijalAgarwal/portfolio",
    color: "#C2B280",
  },
  {
    title: "Game Development Experience",
    description:
      "Collaborated with design and development teams to create optimized game mechanics and engaging experiences using Unity and Cocos. Wrote clean, maintainable code in TypeScript, JavaScript, C, and C++.",
    tech: ["Unity", "Cocos", "TypeScript", "C++"],
    githubLink: "",
    color: "#8f89ff",
  },
  {
    title: "Mobile Game Adaptation",
    description:
      "Implemented responsive UI elements, conducted performance profiling, integrated visual/audio assets, and used Git/Bitbucket for collaboration.",
    tech: ["Android Studio", "Xcode", "UI/UX", "Git"],
    githubLink: "",
    color: "#4ade80",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen py-28 px-6 bg-[#EDE8DC]/10 relative overflow-visible">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#C2B280]/15 via-[#F5F0E1]/20 to-[#C2B280]/15 pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#C2B280] leading-tight">
          Projects & Work Highlights
        </h2>
        <p className="text-gray-700 mt-4 max-w-xl mx-auto text-lg">
          Selected work from my experience in game development and collaborative projects.
        </p>
      </div>

      {/* Vertical Projects Stack */}
      <div className="flex flex-col gap-8 relative z-10 max-w-3xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#C2B280]/20 backdrop-blur-md border border-[#C2B280]/40 rounded-xl p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 shadow-lg shadow-teal-300/30"
          >
            <h3
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: project.color }}
            >
              {project.title}
            </h3>
            <p className="text-gray-800 mb-4 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>
            {project.tech && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded bg-teal-400/20 text-teal-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-teal-700 hover:underline"
              >
                <FaGithub /> View Code
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
