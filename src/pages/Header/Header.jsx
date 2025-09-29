import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname.substring(1) || "home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    { id: "experience", icon: FaBriefcase, text: "Experience", path: "/experience" },
    { id: "education", icon: FaGraduationCap, text: "Education", path: "/education" },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];
  useEffect(() => {
    const current = navLinks.find(link => link.path === location.pathname);
    setActiveLink(current ? current.id : "home");
  }, [location.pathname]);
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-pink-100 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 float-right">
        {/* Logo */}
        {/* <Link to="/" className="text-[#e07a5f] font-bold text-xl hover:text-[#3d5a40] transition-colors float-left">
          Roopam
        </Link> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>

        {/* Navigation */}
        <nav
          className={`flex flex-col md:flex-row md:items-center gap-2 absolute md:static top-full left-0 w-full md:w-auto bg-pink-100  overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 py-2" : "max-h-0 md:max-h-full"
          }`}
        >
          {navLinks.map(({ id, icon: Icon, text, path }) => (
            <Link
              key={id}
              to={path}
              onClick={() => {
                setActiveLink(id);
                setIsMenuOpen(false);
              }}
              className={`flex items-center gap-2 px-4 py-2 md:px-3 md:py-1 font-medium relative transition-colors duration-300 text-gray-600 hover:text-pink-600`}
            >
              <Icon />
              <span>{text}</span>
              {/* Sliding underline for active link */}
              {activeLink === id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-pink-600 animate-slideUnderline"></span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Underline animation */}
      <style>{`
        @keyframes slideUnderline {
          0% { transform: scaleX(0); transform-origin: left; }
          50% { transform: scaleX(1.2); transform-origin: left; }
          100% { transform: scaleX(1); transform-origin: left; }
        }
        .animate-slideUnderline {
          animation: slideUnderline 0.3s ease forwards;
        }
      `}</style>
    </header>
  );
}
