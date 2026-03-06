import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "/video.mp4", label: "Video", target: "_blank" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed justify-center top-0 left-0 right-0 transition-[background-color, backdrop-filter] duration-500 ${isScrolled || isMobileMenuOpen ? "glass-strong-navbar" : "bg-transparent"} py-5 z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between relative">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary z-10 transition-colors duration-1000"
        >
          KB<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center border-primary/50 transition-all duration-500 animated-border gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                target={link.target || "_self"}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full transition-colors duration-1000"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block z-10">
          <a
            href="#contact"
            className="relative px-6 py-3 text-base rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-colors duration-1000"
          >
            Contact Me
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div
          className={`md:hidden ${isScrolled ? "bg-transparent" : "glass-strong-navbar"} animate-fade-in`}
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                target={link.target || "_self"}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="flex items-center justify-center px-6 py-3 text-base rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
