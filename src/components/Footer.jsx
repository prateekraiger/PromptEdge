import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { Heart } from "lucide-react";
import logo from "../assets/logo.png";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/pratik-r1104/",
    icon: <FaLinkedinIn className="hover:text-blue-400 transition-colors" />,
    color: "hover:text-blue-400",
  },
  {
    href: "https://github.com/prateekraiger",
    icon: <FaGithub className="hover:text-gray-300 transition-colors" />,
    color: "hover:text-gray-300",
  },
  {
    href: "https://x.com/mrpratik753",
    icon: <FaTwitter className="hover:text-blue-400 transition-colors" />,
    color: "hover:text-blue-400",
  },
  {
    href: "https://instagram.com/pratik.raiger",
    icon: <FaInstagram className="hover:text-pink-400 transition-colors" />,
    color: "hover:text-pink-400",
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-gray-900 backdrop-blur-lg">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-pink-600/5 pointer-events-none" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Branding & Copyright */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
                <img src={logo} alt="Logo" className="w-4 h-4 object-contain" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                PromptEdge
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-colors duration-300 ${link.color}`}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Credits */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Built by</span>
            <a
              href="https://pratik-me.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-purple-400 hover:text-purple-300 transition-colors"
            >
              Pratik
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
