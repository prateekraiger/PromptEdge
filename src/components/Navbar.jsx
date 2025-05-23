import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Moon, Sun, Coffee } from "lucide-react";
import { useTheme } from "../components/ThemeProvider";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="PromptEdge Logo"
                className="h-10 w-auto mr-3"
              />
              <span className="text-xl font-bold text-foreground flex items-center">
                Prompt<span className="text-primary">Edge</span>
                <Coffee className="ml-2 h-4 w-4 text-primary" />
              </span>
            </Link>
          </div>
          {/* Hamburger menu button for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex flex-1 flex-row items-center justify-end space-x-4">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/idea-generator"
              className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Idea Generator
            </Link>
            <div className="w-64 mx-4">
              <input
                type="text"
                placeholder="Quick search..."
                className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground shadow focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                aria-label="Quick search"
              />
            </div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none transition-colors duration-200"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 block dark:hidden" />
              <Moon className="h-5 w-5 hidden dark:block" />
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link
              to="/"
              className="block text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/idea-generator"
              className="block text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Idea Generator
            </Link>
            <input
              type="text"
              placeholder="Quick search..."
              className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground shadow focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              aria-label="Quick search"
            />
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none transition-colors duration-200 w-full flex justify-center"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 block dark:hidden" />
              <Moon className="h-5 w-5 hidden dark:block" />
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
