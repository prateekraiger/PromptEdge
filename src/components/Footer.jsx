import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";
import { Coffee } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/pratik-r1104/",
    icon: <FaLinkedinIn />,
  },
  { href: "https://github.com/prateekraiger", icon: <FaGithub /> },
  { href: "https://x.com/mrpratik753", icon: <FaTwitterSquare /> },
  { href: "https://instagram.com/pratik.raiger", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-6 sm:py-8">
        <p className="text-center text-xs sm:text-sm font-light md:text-left text-muted-foreground hover:text-foreground transition-colors duration-500 ease-in-out w-full sm:w-auto">
          <span className="flex items-center justify-center sm:justify-start gap-1">
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

        <div className="flex justify-center gap-4 sm:gap-6 md:justify-start w-full sm:w-auto order-3 sm:order-none">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out text-base sm:text-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-500 ease-in-out w-full sm:w-auto text-center"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
