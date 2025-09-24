import { useEffect, useRef, useState } from "react";
import { Code, Database, Globe, Zap, Users, Award, Sparkles, Rocket } from "lucide-react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: Code,
      title: "Frontend Artistry",
      description:
        "Painting digital canvases with React, TypeScript & modern CSS. Every pixel tells a story.",
      color: "from-emerald-400 to-teal-600"
    },
    {
      icon: Database,
      title: "Backend Wizardry",
      description:
        "Architecting robust server ecosystems that handle millions of requests with grace and precision.",
      color: "from-blue-400 to-indigo-600"
    },
    {
      icon: Globe,
      title: "Full Stack Mastery",
      description:
        "Bridging the gap between dreams and reality with seamless end-to-end solutions.",
      color: "from-purple-400 to-pink-600"
    },
    {
      icon: Zap,
      title: "Performance Genius",
      description:
        "Turning sluggish apps into lightning-fast experiences that users absolutely love.",
      color: "from-yellow-400 to-orange-600"
    },
    {
      icon: Users,
      title: "Team Catalyst",
      description:
        "Transforming groups into unstoppable forces through leadership and collaborative excellence.",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: Award,
      title: "Code Craftsman",
      description:
        "Sculpting maintainable, elegant code that stands the test of time and scale.",
      color: "from-red-400 to-rose-600"
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-purple-500/15 to-pink-500/15 blur-3xl animate-pulse"
          style={{
            right: `${mousePosition.x * 0.015}px`,
            bottom: `${mousePosition.y * 0.015}px`,
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-1200 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-16 scale-95"
            }`}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" />
              <h2 className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <Rocket className="w-8 h-8 text-cyan-400 animate-bounce" />
            </div>
            <div className="relative">
              <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-4">
                I'm not just a developer—I'm a 
                <span className="relative mx-2">
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 blur-sm animate-pulse" />
                  <span className="relative text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-bold">
                    digital architect
                  </span>
                </span>
                who transforms caffeine into code and ideas into extraordinary experiences.
              </p>
              <p className="text-lg text-slate-400 italic">
                "Crafting the future, one commit at a time 🚀"
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Personal Story */}
          <div
            className={`transition-all duration-1200 delay-300 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
          >
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center animate-pulse">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white">
                  My Epic Journey
                </h3>
              </div>
              
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p className="text-lg relative">
                  <span className="absolute -left-4 top-0 text-cyan-400 text-2xl">"</span>
                  What started as innocent curiosity about "how websites work" 
                  quickly evolved into an obsession with creating digital magic. 
                  I discovered that code isn't just logic—it's poetry in motion.
                  <span className="absolute -right-2 bottom-0 text-cyan-400 text-2xl">"</span>
                </p>
                
                <p className="text-lg">
                  Today, I architect scalable systems that handle millions of users 
                  while crafting interfaces so intuitive, they feel like extensions 
                  of the user's thoughts. My superpower? Turning complex problems 
                  into elegant, performant solutions.
                </p>
                
                <p className="text-lg">
                  When I'm not lost in code, you'll find me mentoring fellow developers, 
                  contributing to open-source projects, or experimenting with 
                  cutting-edge technologies that push the boundaries of what's possible.
                </p>
              </div>

              {/* Enhanced Traits */}
              <div className="flex flex-wrap gap-4 mt-10">
                {[
                  { text: "Problem Solver 🧩", delay: 0 },
                  { text: "Innovation Driver 💡", delay: 100 },
                  { text: "Code Poet 📝", delay: 200 },
                  { text: "Tech Explorer 🔍", delay: 300 }
                ].map((trait, i) => (
                  <div
                    key={trait.text}
                    className="group px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/80 border border-slate-600/50 text-sm font-semibold text-white backdrop-blur-sm hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer"
                    style={{ transitionDelay: `${trait.delay}ms` }}
                  >
                    <span className="group-hover:animate-pulse">{trait.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div
            className={`transition-all duration-1200 delay-500 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-16 scale-95"
            }`}
          >
            <div className="relative group">
              {/* Multiple glow layers */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-white/20 backdrop-blur-sm">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff18dacda01e04943953f826125ba7a34%2F6a186302c0a54a77bbf67d13870a03c3?format=webp&width=800"
                  alt="Vishal Payyawar - Full Stack Developer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-3 animate-bounce shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl p-3 animate-pulse shadow-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${800 + index * 150}ms` }}
            >
              <div className="group relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-lg border border-slate-700/50 hover:border-slate-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover animation elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div 
          className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl text-slate-300 mb-6">
            Ready to build something amazing together?
          </p>
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg hover:shadow-cyan-500/50">
            <span>Let's Create Magic</span>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;