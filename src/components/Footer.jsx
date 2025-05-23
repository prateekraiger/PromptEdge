import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";
import { Coffee } from "lucide-react";

const socialLinks = [
  { href: "https://www.linkedin.com/in/pratik-r1104/", icon: <FaLinkedinIn /> },
  { href: "https://github.com/prateekraiger", icon: <FaGithub /> },
  { href: "https://x.com/mrpratik753", icon: <FaTwitterSquare /> },
  { href: "https://instagram.com/pratik.raiger", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Copyright */}
          <p className="text-center text-xs sm:text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-500 ease-in-out">
            <span className="flex items-center justify-center gap-1">
              PromptEdge built by{" "}
              <a
                href="https://pratik-me.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors inline-flex items-center"
              >
                Pratik <Coffee className="ml-1 h-3 w-3" />
              </a>
            </span>
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 sm:gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out text-lg sm:text-xl"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Privacy Policy */}
          <a
            href="#privacy-policy"
            className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-500 ease-in-out"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
