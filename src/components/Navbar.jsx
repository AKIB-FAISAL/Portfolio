import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#projects" },
  { name: "Education", href: "#education"},
  { name: "Contect", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed w-full z-40 transition-all duration-300 ",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between relative">

        {/* LOGO */}
        <a className="text-xl font-bold text-primary flex items-center" href="#about">
          <span className="relative z-10">
            <span className="text-glow text-foreground">MD AKIB</span> FAISAL
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* MOBILE DROPDOWN (does not cover the page) */}
        <div
          className={cn(
            "absolute md:hidden left-0 right-0 top-full mt-2",
            "bg-card border border-border rounded-xl shadow-lg",
            "flex flex-col overflow-hidden",
            "transition-all duration-300 origin-top",
            isMenuOpen
              ? "opacity-100 scale-y-100 pointer-events-auto"
              : "opacity-0 scale-y-95 pointer-events-none"
          )}
        >
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-3 text-foreground/80 hover:text-primary hover:bg-background/50 transition-colors duration-200 border-b border-border last:border-b-0"
            >
              {item.name}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};