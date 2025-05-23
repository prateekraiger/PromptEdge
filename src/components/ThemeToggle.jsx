import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dracula" ? "light" : "dracula")}
      className="btn btn-ghost btn-circle"
      aria-label="Toggle theme"
    >
      {theme === "dracula" ? (
        <Sun className="h-5 w-5 text-primary" />
      ) : (
        <Moon className="h-5 w-5 text-primary" />
      )}
    </button>
  );
};

export default ThemeToggle;
