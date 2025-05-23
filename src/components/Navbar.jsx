import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Moon, Sun, Coffee } from "lucide-react";
import { useTheme } from "../components/ThemeProvider";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between h-16">
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
          <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-end space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto mt-2 md:mt-0">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 w-full">
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
            </div>
            <div className="w-full md:w-64 mx-0 md:mx-4 order-3 md:order-none">
              {/* Navbar SearchBar for desktop and mobile */}
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
      </div>
    </nav>
  );
};

export default Navbar;
