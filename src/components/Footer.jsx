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
    <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-white/10 shadow-lg mt-auto w-full">
      <div className="w-full py-8">
        <div className="w-full flex flex-col md:flex-row items-center gap-6 relative">
          {/* Brand Section - Absolute Left */}
          <div className="flex items-center gap-3 md:justify-start justify-center md:w-1/3 w-full order-1 md:order-none absolute left-0 pl-4">
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

          {/* Quick Links - Center */}
          <div className="flex items-center justify-center gap-6 md:w-1/3 w-full order-3 md:order-none mx-auto">
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

          {/* Social Icons - Extreme Right */}
          <div className="flex items-center justify-end gap-4 md:w-1/3 w-full order-2 md:order-none absolute right-0 pr-4">
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
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center text-xs text-gray-500">
          <span>© {new Date().getFullYear()} PromptEdge</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
