import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { Heart, Code, Coffee, ExternalLink } from "lucide-react";
import logo from "../assets/logo.png";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/pratik-r1104/",
    icon: <FaLinkedinIn className="w-4 h-4" />,
    color: "hover:text-blue-400",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/prateekraiger",
    icon: <FaGithub className="w-4 h-4" />,
    color: "hover:text-gray-300",
    label: "GitHub",
  },
  {
    href: "https://x.com/mrpratik753",
    icon: <FaTwitter className="w-4 h-4" />,
    color: "hover:text-blue-400",
    label: "Twitter",
  },
  {
    href: "https://instagram.com/pratik.raiger",
    icon: <FaInstagram className="w-4 h-4" />,
    color: "hover:text-pink-400",
    label: "Instagram",
  },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "About", href: "/about" },
  { name: "Discover", href: "/discover" },
  { name: "Generator", href: "/idea-generator" },
];

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-white/10 bg-gradient-to-b from-gray-900/95 to-gray-900 backdrop-blur-lg">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5 pointer-events-none" />

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-50 blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand section */}
          <div className="flex flex-col items-center md:items-start gap-8">
            <a
              href="/"
              className="group flex items-center transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-14 h-14 bg-white rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={logo}
                  alt="Logo"
                  className="relative w-12 h-12 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Prompt<span className="text-blue-400">Edge</span>
                </span>
                <span className="text-sm text-gray-400">
                  AI Project Generator
                </span>
              </div>
            </a>
            <p className="text-gray-400 text-sm text-center md:text-left max-w-sm leading-relaxed">
              AI-powered project idea generator for developers looking to build
              their next great application.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start gap-8">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group relative text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm px-5 py-2.5 rounded-xl hover:bg-white/5"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-cyan-600/0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center md:items-start gap-8">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Connect
            </h3>
            <div className="flex items-center gap-5">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative text-gray-400 hover:scale-110 transition-all duration-300 ${link.color} p-3.5 rounded-xl hover:bg-white/5`}
                  aria-label={`Visit ${link.label}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-cyan-600/0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-blue-400 animate-pulse" />
            <span>by</span>
            <a
              href="https://pratik-me.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
            >
              Pratik
              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>© {new Date().getFullYear()} PromptEdge</span>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
