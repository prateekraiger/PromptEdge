import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/pratik-r1104/",
    icon: <FaLinkedinIn className="w-5 h-5" />,
    color: "hover:text-blue-500",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/prateekraiger",
    icon: <FaGithub className="w-5 h-5" />,
    color: "hover:text-gray-200",
    label: "GitHub",
  },
  {
    href: "https://x.com/mrpratik753",
    icon: <FaTwitter className="w-5 h-5" />,
    color: "hover:text-blue-400",
    label: "Twitter",
  },
  {
    href: "https://instagram.com/pratik.raiger",
    icon: <FaInstagram className="w-5 h-5" />,
    color: "hover:text-pink-500",
    label: "Instagram",
  },
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "About", path: "/about" },
  { name: "Discover", path: "/discover" },
  { name: "Generator", path: "/idea-generator" },
];

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-lg border-t border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Section */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <img
                  src={logo}
                  alt="PromptEdge Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:via-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                  Prompt
                  <span className="text-cyan-500 group-hover:text-blue-400 transition-colors duration-300">
                    Edge
                  </span>
                </h1>
                <p className="text-xs text-gray-400">AI Project Generator</p>
              </div>
            </Link>
          </div>

          {/* Quick Links Section */}
          <div className="flex items-center gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            ))}
          </div>

          {/* Social Links Section */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 hover:scale-110 transition-transform duration-200 ${link.color} p-2`}
                aria-label={`Visit ${link.label}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center text-xs text-gray-500">
          <span>© {new Date().getFullYear()} PromptEdge</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
