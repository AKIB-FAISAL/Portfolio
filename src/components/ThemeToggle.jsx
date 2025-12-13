import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // initial theme load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  // toggle handler
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <div
      className={cn(
        "fixed z-50 flex items-center gap-3",
        "top-5 right-5",
        "max-sm:bottom-5 max-sm:top-auto"
      )}
    >
      {/* Theme Icon */}
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-foreground" />
      )}

      {/* Toggle Switch */}
      <button
        onClick={toggleTheme}
        className={cn(
          "relative w-11 h-6 rounded-full border border-border",
          "bg-card transition-colors duration-300",
          "focus:outline-hidden"
        )}
        aria-label="Toggle theme"
      >
        <span
          className={cn(
            "absolute top-0.5 left-0.5 h-5 w-5 rounded-full",
            "bg-background transition-transform duration-300",
            isDarkMode && "translate-x-5"
          )}
        />
      </button>
    </div>
  );
};
