import { useEffect, useState } from "react";
import { ChevronDown, Download, Mail, Sparkles, Code, Zap, Star, Coffee, Heart, Rocket } from "lucide-react";

interface Role {
  text: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MousePosition {
  x: number;
  y: number;
}

interface Stat {
  value: string;
  label: string;
  delay: number;
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState<number>(0);

  const roles: Role[] = [
    { text: "Full Stack Developer", color: "from-emerald-400 to-teal-600", icon: Code },
    { text: "MERN Stack Expert", color: "from-purple-400 to-pink-600", icon: Zap },
    { text: "Frontend Specialist", color: "from-blue-400 to-cyan-600", icon: Star },
    { text: "Backend Engineer", color: "from-orange-400 to-red-600", icon: Coffee }
  ];

  const stats: Stat[] = [
    { value: "2+", label: "Years Experience", delay: 0 },
    { value: "10+", label: "Projects Completed", delay: 200 },
    { value: "50K+", label: "Lines of Code", delay: 400 }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, [roles.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Button = ({ children, className = "", onClick, variant = "default", ...props }: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: string;
    [key: string]: any;
  }) => (
    <button
      className={`inline-flex items-center justify-center ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <>
      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes hexMove {
          0% { transform: translateX(0) translateY(0) rotate(0deg); }
          100% { transform: translateX(60px) translateY(60px) rotate(360deg); }
        }
        
        @keyframes matrixRain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes digitalPulse {
          0%, 100% { 
            box-shadow: 0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41;
            opacity: 0.8;
          }
          50% { 
            box-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41;
            opacity: 1;
          }
        }
        
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
        }
        
        .hex-move {
          animation: hexMove 15s linear infinite;
        }
      `}</style>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
        {/* Matrix/Digital Rain Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated geometric shapes */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`shape-${i}`}
              className="absolute border-2 border-green-400/20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${50 + Math.random() * 100}px`,
                height: `${50 + Math.random() * 100}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0%'
              }}
            />
          ))}

          {/* Falling code lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`code-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-green-400/60 to-transparent animate-pulse opacity-40"
              style={{
                left: `${i * 12.5}%`,
                height: '100vh',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '4s'
              }}
            />
          ))}

          {/* Hexagonal pattern overlay */}
          <div 
            className="absolute inset-0 opacity-10 hex-move"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff41' fill-opacity='0.4'%3E%3Cpolygon points='30,0 45,15 45,45 30,60 15,45 15,15'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Glowing orbs with different colors */}
          <div 
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-400/20 blur-3xl animate-pulse"
            style={{
              left: `${10 + mousePosition.x * 0.02}%`,
              top: `${20 + mousePosition.y * 0.015}%`,
            }}
          />
          <div 
            className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-blue-500/15 to-cyan-400/15 blur-3xl animate-pulse"
            style={{
              right: `${20 + mousePosition.x * 0.025}%`,
              bottom: `${30 + mousePosition.y * 0.02}%`,
              animationDelay: '2s'
            }}
          />

          {/* Digital particles */}
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-green-400 opacity-20 animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
                borderRadius: Math.random() > 0.7 ? '0%' : '50%'
              }}
            />
          ))}
        </div>

        {/* Circuit board pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20h60v60h-60z" fill="none" stroke="#00ff41" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="20" cy="20" r="2" fill="#00ff41" opacity="0.5"/>
              <circle cx="80" cy="20" r="2" fill="#00ff41" opacity="0.5"/>
              <circle cx="80" cy="80" r="2" fill="#00ff41" opacity="0.5"/>
              <circle cx="20" cy="80" r="2" fill="#00ff41" opacity="0.5"/>
              <path d="M20 20L80 80M80 20L20 80" stroke="#00ff41" strokeWidth="0.3" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-10">
            {/* Enhanced Greeting */}
            <div
              className={`transition-all duration-1200 delay-300 ease-out ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
              }`}
            >
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 group">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-spin group-hover:scale-125 transition-transform duration-300" />
                <span className="text-base font-semibold text-white/90">
                  Welcome to my portfolio
                </span>
                <Rocket className="w-5 h-5 text-cyan-400 animate-bounce" />
              </div>
            </div>

            {/* Dynamic Main Heading */}
            <div
              className={`transition-all duration-1200 delay-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
            >
              <div className="relative">
                <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tight mb-6">
                  <span className="block text-white/90 mb-4 hover:text-white transition-colors duration-300">
                    Hi, I'm
                  </span>
                  <span className="relative block">
                    <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 blur-lg opacity-50 animate-pulse" />
                    <span className="relative bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                      Vishal Payyawar
                    </span>
                    <span className="inline-block ml-4 text-6xl animate-wave">👋</span>
                  </span>
                </h1>
                
                {/* Floating badges around name */}
                <div className="absolute -top-8 -right-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 animate-bounce shadow-lg opacity-80">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-3 animate-pulse shadow-lg opacity-80">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Animated Role Switcher */}
            <div
              className={`transition-all duration-1200 delay-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
            >
              <div className="relative h-20 flex items-center justify-center">
                {roles.map((role, index) => {
                  const IconComponent = role.icon;
                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                        index === currentRole
                          ? "opacity-100 scale-100 translate-y-0"
                          : "opacity-0 scale-95 translate-y-4"
                      }`}
                    >
                      <div className="flex items-center space-x-4 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                        <IconComponent className="w-8 h-8 text-white animate-pulse" />
                        <span className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${role.color} bg-clip-text text-transparent`}>
                          {role.text}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Description */}
            <div
              className={`transition-all duration-1200 delay-900 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
            >
              <div className="relative max-w-4xl mx-auto">
                <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed mb-4">
                  Passionate about creating robust web applications with modern technologies.
                  <span className="relative mx-2">
                    <span className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-cyan-400/30 blur-sm animate-pulse" />
                    <span className="relative text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text font-bold">
                      Specializing in MERN Stack
                    </span>
                  </span>
                  development and scalable solutions.
                </p>
                <p className="text-lg text-slate-400 italic">
                  "Building the web, one component at a time 💻"
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div
              className={`transition-all duration-1200 delay-1100 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                <Button
                  className="group relative bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white border-0 px-10 py-5 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-500 overflow-hidden"
                  onClick={() => scrollToNext()}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Mail className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  <span className="relative">Let's Connect</span>
                  <Sparkles className="w-5 h-5 ml-2 animate-spin" />
                </Button>
                
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="group relative border-2 border-slate-600 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-700/50 text-white px-10 py-5 text-xl font-bold rounded-2xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:shadow-xl overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                    <span className="relative">Download CV</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Enhanced Stats with Animations */}
            <div
              className={`transition-all duration-1200 delay-1300 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mt-20">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500"
                    style={{ transitionDelay: `${stat.delay}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative text-center">
                      <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-500 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300 font-medium">
                        {stat.label}
                      </div>
                    </div>
                    
                    {/* Hover sparkle effect */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="group relative p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 animate-bounce hover:animate-none"
          >
            <ChevronDown className="w-8 h-8 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <div className="text-center mt-2 text-sm text-white/50 font-medium">
            Scroll to explore
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;