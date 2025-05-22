import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Lightbulb } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="w-full py-6 px-4 md:px-8 shadow-lg bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Lightbulb className="h-8 w-8 text-primary" />
          <h1 className="text-2xl md:text-3xl font-bold gradient-text">
            PromptEdge
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          {theme === "dark" ? (
            <Moon className="h-5 w-5 text-slate-400" />
          ) : (
            <Sun className="h-5 w-5 text-yellow-500" />
          )}
          <Switch
            id="theme-switcher"
            checked={theme === "dark"}
            onCheckedChange={toggleTheme}
            aria-label="Toggle theme"
          />
          <Label htmlFor="theme-switcher" className="sr-only">
            Toggle theme
          </Label>
        </div>
      </div>
    </header>
  );
};

export default Header;
