import { Github, Linkedin, Mail, Heart, ArrowUp, Code, Coffee, Star } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const footer = document.getElementById("creative-footer");
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/vishalseries7030", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vishal-payyawar-46a211276/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:vishal.payyawar@email.com", label: "Email" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Vite", icon: "⚡" },
  ];

  return (
    <footer
      id="creative-footer"
      className="relative bg-slate-950 text-white overflow-hidden border-t border-white/10"
    >
      {/* Animated gradient waves background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-slate-950 animate-[pulse_10s_ease-in-out_infinite]"></div>

      {/* Subtle moving gradient line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 animate-[move_6s_linear_infinite]" />

      {/* Floating glowing dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400/60 rounded-full blur-[1px] animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Main grid */}
        <div
          className={`grid lg:grid-cols-3 md:grid-cols-2 gap-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {/* Brand */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent hover:scale-110 transition-all duration-500"
            >
              Vishal Payyawar
            </button>
            <p className="text-gray-300 text-sm max-w-sm leading-relaxed">
              Crafting digital experiences with{" "}
              <span className="text-purple-400 font-semibold">passion & precision</span>.  
              Building the future, one line of <span className="text-pink-400">code</span> at a time.
            </p>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="text-lg font-semibold flex items-center space-x-2 mb-4">
              <Code className="w-5 h-5 text-purple-400" />
              <span>Built With</span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-slate-800/60 rounded-lg px-3 py-2 border border-slate-600 text-sm text-gray-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_12px_rgba(168,85,247,0.6)] transition-all"
                >
                  <span className="mr-2">{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-lg font-semibold flex items-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-purple-400" />
              <span>Connect</span>
            </h3>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-slate-800/60 rounded-lg border border-slate-600 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] hover:scale-105 transition-all"
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  <span className="text-gray-200">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 pt-6 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Vishal Payyawar. Made with{" "}
            <Heart className="w-4 h-4 inline text-red-500 animate-pulse" /> &{" "}
            <Coffee className="w-4 h-4 inline text-amber-400" /> in India.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-purple-600/30 to-pink-600/30 hover:from-purple-600/50 hover:to-pink-600/50 rounded-md border border-purple-400/40 hover:shadow-[0_0_12px_rgba(168,85,247,0.7)] hover:scale-110 transition"
          >
            <span className="text-sm text-gray-200">Back to top</span>
            <ArrowUp className="w-4 h-4 text-purple-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
