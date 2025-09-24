import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/vishalseries7030",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vishal-payyawar-46a211276/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:vishal.payyawar@email.com", label: "Email" },
  ];

  const scrollToSection = (href: string): void => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled 
        ? "bg-white/10 backdrop-blur-lg border-b border-white/10 shadow-xl" 
        : "bg-transparent"
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            Vishal
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-slate-300 hover:text-white transition-colors duration-200 py-2 px-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200 hover:scale-110 transform group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                </a>
              ))}
            </div>
            
            <div className="w-px h-6 bg-slate-600 mx-2" />
            
            <a
              href="https://drive.google.com/file/d/17Gt6BQOOYRGSNkoyRY67owxQvTWpLMpm/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="
                bg-gradient-to-r from-blue-500 to-purple-600 
                hover:from-blue-600 hover:to-purple-700 
                text-white font-medium px-6 py-2 
                border-0 shadow-lg hover:shadow-xl 
                transition-all duration-200 
                hover:scale-105 active:scale-95
              ">
                Download CV
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-200 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
              <X className={`absolute inset-0 w-6 h-6 transition-all duration-200 ${isOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen 
            ? "max-h-96 opacity-100 border-t border-white/10" 
            : "max-h-0 opacity-0"
          }
        `}>
          <div className="py-4 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`
                  block w-full text-left text-slate-300 hover:text-white 
                  hover:bg-white/5 transition-all duration-200 py-3 px-4 rounded-lg
                  transform hover:translate-x-1
                `}
                style={{ 
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms' 
                }}
              >
                {item.name}
              </button>
            ))}
            
            <div className="pt-4 border-t border-white/10 mt-4">
              <div className="flex items-center justify-center space-x-4 mb-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              
              <a
                href="https://drive.google.com/file/d/17Gt6BQOOYRGSNkoyRY67owxQvTWpLMpm/view"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="
                  w-full bg-gradient-to-r from-blue-500 to-purple-600 
                  hover:from-blue-600 hover:to-purple-700 
                  text-white font-medium py-3 
                  border-0 shadow-lg 
                  transition-all duration-200
                ">
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}