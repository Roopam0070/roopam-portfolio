import React, { useState } from "react";
import { Calendar, BookOpen, Trophy, Award } from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "MCA",
      school: "Guru Gobind Singh Indraprastha University",
      year: "2023 | CGPA: 9.24",
      achievements: [],
      skills: [],
      description: "Focused on practical coding subjects and application development.",
      mascot: "🎓",
    },
    {
      degree: "B.Sc. (Hons) Computer Science ",
      school: "Delhi University",
      year: "2021 | CGPA 9.027",
      achievements: [],
      skills: [],
      description:
        "Strong foundation in Computer Science with logical reasoning skills.",
      mascot: "🎓",
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/60 via-pink-100 to-pink-200/70" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(194,178,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(194,178,128,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-500 mb-6">
            Educational Journey
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Academic foundation shaping professional growth and technical expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative rounded-xl p-8 transition-all duration-300 bg-pink-200/30 backdrop-blur-sm border border-pink-300/30 ${
                hoveredIndex === index ? "scale-[1.03] border-gray-600/30" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{edu.mascot}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-500">
                    {edu.degree}
                  </h3>
                </div>
                <p className="flex items-center gap-2 text-[#4B5563]">
                  <BookOpen className="w-5 h-5 text-gray-500" /> {edu.school}
                </p>
                <p className="flex items-center gap-2 text-[#6B7280]">
                  <Calendar className="w-4 h-4 text-gray-500" /> {edu.year}
                </p>

                <p className="text-gray-700 text-sm italic border-l-2 border-gray-400 pl-3 mt-2">
                  {edu.description}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
