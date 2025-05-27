import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { Heart, Code, Coffee, ExternalLink } from "lucide-react";
import logo from "../assets/logo.png";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/pratik-r1104/",
    icon: <FaLinkedinIn className="w-4 h-4" />,
    color: "hover:text-blue-400",
  },
  {
    href: "https://github.com/prateekraiger",
    icon: <FaGithub className="w-4 h-4" />,
    color: "hover:text-gray-300",
  },
  {
    href: "https://x.com/mrpratik753",
    icon: <FaTwitter className="w-4 h-4" />,
    color: "hover:text-blue-400",
  },
  {
    href: "https://instagram.com/pratik.raiger",
    icon: <FaInstagram className="w-4 h-4" />,
    color: "hover:text-pink-400",
  },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Discover", href: "/discover" },
  { name: "Generator", href: "/idea-generator" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-gray-900/90 backdrop-blur-lg">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5 pointer-events-none" />

      <div className="w-full max-w-full mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a
              href="/"
              className="flex items-center group transition-all duration-300 hover:scale-105"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-2 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Prompt<span className="text-blue-400">Edge</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm text-center md:text-left">
              AI-powered project idea generator for developers looking to build
              their next great application.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm px-3 py-1 rounded-full hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-white font-semibold text-lg">Connect</h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 hover:scale-110 transition-all duration-300 ${link.color} p-2 rounded-lg hover:bg-white/5 flex items-center justify-center`}
                  aria-label={`Visit ${link.href}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-white/10 gap-4">
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <span>Built with</span>
            <Heart className="h-3 w-3 text-blue-400 mx-1" />
            <span>by</span>
            <a
              href="https://pratik-me.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 group"
            >
              Pratik
              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-500">
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
