import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";

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
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:py-6">
        <p className="text-center text-xs sm:text-sm font-light md:text-left text-muted-foreground hover:text-foreground transition-colors duration-500 ease-in-out">
          PromptEdge built by{" "}
          <a
            href="https://pratik-me.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
          >
            Pratik
          </a>
        </p>

        <div className="flex justify-center gap-2 sm:gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-500 ease-in-out text-base sm:text-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-xs sm:text-sm font-light hover:underline md:text-right text-muted-foreground hover:text-foreground transition-colors duration-500 ease-in-out"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
