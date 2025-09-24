import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight, Code, Star, GitFork, Zap, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "5thDT Website Revamp",
      description:
        "A complete website revamp with modern design principles, improved user experience, and responsive layouts. Built with cutting-edge technologies for optimal performance.",
      image: "https://drive.google.com/file/d/1OazIWkqT-A_RLRqZhOz0bYjlrxH00vny/view?usp=sharing",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Vercel"],
      category: "web",
      github: "https://github.com/vishalseries7030",
      live: "https://5thdt.com/",
      featured: true,
      stars: 24,
      forks: 8,
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "Mumbai Book Fair Platform",
      description:
        "An interactive platform for Mumbai Book Fair featuring book listings, event schedules, and user engagement features with modern UI/UX design.",
      image: "https://drive.google.com/file/d/10nPvEvh8aBZszBelfEr1RoZlIGWnSPza/view?usp=sharing",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      category: "fullstack",
      github: "https://github.com/vishalseries7030",
      live: "https://mumbai-book-fair-new.vercel.app/",
      featured: true,
      stars: 18,
      forks: 5,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Gorakhpur Book Fair",
      description:
        "A comprehensive digital solution for book fair management with vendor registration, book catalog, and event management capabilities.",
      image: "https://drive.google.com/file/d/1-3fGHljSw5GMQj14i-xmkUTy1r9qa6pB/view?usp=sharing",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      category: "fullstack",
      github: "https://github.com/vishalseries7030",
      live: "https://gorakhpur-book-fair.vercel.app/",
      featured: false,
      stars: 12,
      forks: 3,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Fruit Table E-commerce",
      description:
        "A modern e-commerce platform for fresh fruits with shopping cart, payment integration, and inventory management features.",
      image: "https://drive.google.com/file/d/1GeTcxKSZLhQhXKRkef_gkM0TeJnhGutU/view?usp=sharing",
      technologies: ["React", "Redux", "Node.js", "Payment Gateway"],
      category: "ecommerce",
      github: "https://github.com/vishalseries7030",
      live: "https://fruittable.vercel.app/",
      featured: false,
      stars: 15,
      forks: 6,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Full-Stack E-commerce",
      description:
        "A complete e-commerce solution with user authentication, product management, order processing, and admin dashboard.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      category: "ecommerce",
      github: "https://github.com/vishalseries7030",
      live: "https://ecommerce-ten-beryl-67.vercel.app/",
      featured: false,
      stars: 22,
      forks: 9,
      color: "from-pink-500 to-rose-600",
    },
    {
      title: "Shiv Khera Books",
      description:
        "A dedicated platform for Shiv Khera's books with detailed descriptions, reviews, and purchase options with clean, professional design.",
      image: "/placeholder.svg",
      technologies: ["React", "Next.js", "Tailwind", "Vercel"],
      category: "web",
      github: "https://github.com/vishalseries7030",
      live: "https://shiv-khera-books-jyic.vercel.app/",
      featured: false,
      stars: 8,
      forks: 2,
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Story Book Themes",
      description:
        "An interactive storybook platform with various themes, animations, and engaging user interface for digital storytelling.",
      image: "/placeholder.svg",
      technologies: ["React", "Framer Motion", "CSS3", "JavaScript"],
      category: "web",
      github: "https://github.com/vishalseries7030",
      live: "https://story-book-themes.vercel.app/",
      featured: false,
      stars: 16,
      forks: 4,
      color: "from-amber-500 to-orange-600",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: Sparkles },
    { id: "web", label: "Web Apps", icon: Code },
    { id: "fullstack", label: "Full Stack", icon: Zap },
    { id: "ecommerce", label: "E-commerce", icon: Star },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen py-24 overflow-hidden bg-slate-950"
    >
      {/* Crazy Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-cyan-950/20" />
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-violet-500/25 to-purple-500/25 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }}
          />
        </div>
        
        {/* Mouse follower */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-xl mb-8 group hover:border-purple-400/40 transition-all duration-500">
              <Sparkles className="w-5 h-5 mr-3 text-purple-400 animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Creative Portfolio
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-8xl font-black mb-8 relative">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-pulse">
                Featured
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent relative">
                Projects
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur-lg opacity-20 animate-pulse" />
              </span>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce delay-300" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full animate-bounce delay-500" />
            </h2>
            
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Dive into my digital universe of innovative web applications, built with 
              <span className="text-purple-400 font-semibold"> cutting-edge technologies</span> and 
              <span className="text-cyan-400 font-semibold"> creative design</span>
            </p>
          </div>
        </div>

        {/* Enhanced Category Filter */}
        <div
          className={`flex justify-center mb-20 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex flex-wrap gap-4 p-3 bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`group flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-500 relative overflow-hidden ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/80 hover:scale-105"
                  }`}
                >
                  <IconComponent className={`w-5 h-5 mr-3 transition-all duration-300 ${
                    activeFilter === category.id ? "animate-pulse" : "group-hover:rotate-12"
                  }`} />
                  {category.label}
                  
                  {activeFilter === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-50 -z-10 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Projects with Crazy Animations */}
        {featuredProjects.length > 0 && (
          <div className="space-y-32 mb-32">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Enhanced Project Image - Now Clickable */}
                  <div
                    className={`${index % 2 === 1 ? "lg:col-start-2" : ""} relative group/image`}
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-700/50 backdrop-blur-sm group-hover/image:border-slate-600/80 transition-all duration-700 group-hover/image:scale-105 group-hover/image:rotate-1 cursor-pointer">
                        <div className={`w-full h-full bg-gradient-to-br ${project.color}/20 flex items-center justify-center relative overflow-hidden`}>
                          {/* Animated background pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-shimmer" />
                          </div>
                          
                          <div className="text-center z-10">
                            <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center group-hover/image:rotate-12 group-hover/image:scale-110 transition-all duration-500 shadow-lg`}>
                              <ExternalLink className="w-10 h-10 text-white animate-pulse" />
                            </div>
                            <p className="text-white/80 font-bold text-lg">
                              Live Project
                            </p>
                          </div>
                          
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-500" />
                        </div>
                        
                        {/* Floating action button */}
                        <div className={`absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover/image:shadow-3xl transform group-hover/image:scale-125 group-hover/image:rotate-12 transition-all duration-500`}>
                          <ExternalLink className="w-8 h-8 text-white group-hover/image:animate-pulse" />
                        </div>
                      </div>
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-3xl blur-2xl opacity-0 group-hover/image:opacity-20 transition-all duration-700 -z-10`} />
                    </a>
                  </div>

                  {/* Enhanced Project Info */}
                  <div
                    className={`${index % 2 === 1 ? "lg:col-start-1" : ""} space-y-8`}
                  >
                    <div>
                      <div className="flex items-center mb-4">
                        <div className={`w-3 h-3 bg-gradient-to-r ${project.color} rounded-full mr-4 animate-pulse`} />
                        <span className="text-slate-400 font-medium text-sm uppercase tracking-wider">
                          Featured Project
                        </span>
                      </div>
                      
                      <h3 className="text-4xl lg:text-6xl font-black text-white mb-6 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                        {project.title}
                      </h3>
                      
                      <p className="text-xl text-slate-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Enhanced Tech Stack */}
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="group/tech px-5 py-3 bg-slate-800/50 backdrop-blur-sm rounded-2xl text-sm font-medium text-slate-300 border border-slate-700/50 hover:border-slate-600/80 hover:bg-slate-700/50 hover:text-white transition-all duration-300 cursor-default hover:scale-105 hover:-translate-y-1"
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          <span className="group-hover/tech:animate-pulse">{tech}</span>
                        </span>
                      ))}
                    </div>

                    {/* Enhanced Stats */}
                    <div className="flex items-center space-x-8">
                      <div className="flex items-center space-x-2 text-slate-400 hover:text-yellow-400 transition-colors duration-300">
                        <Star className="w-5 h-5 hover:animate-spin" />
                        <span className="font-semibold">{project.stars}</span>
                        <span className="text-sm">stars</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors duration-300">
                        <GitFork className="w-5 h-5 hover:animate-bounce" />
                        <span className="font-semibold">{project.forks}</span>
                        <span className="text-sm">forks</span>
                      </div>
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex items-center space-x-6">
                      <Button
                        asChild
                        className={`group/btn bg-gradient-to-r ${project.color} hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 px-8 py-4 rounded-2xl font-semibold text-lg border-0 relative overflow-hidden`}
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                          <ExternalLink className="w-5 h-5 mr-3 group-hover/btn:animate-pulse relative z-10" />
                          <span className="relative z-10">Live Demo</span>
                        </a>
                      </Button>
                      
                      <Button
                        variant="outline"
                        asChild
                        className="group/btn border-2 border-slate-600 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm transform hover:scale-110 transition-all duration-500 px-8 py-4 rounded-2xl font-semibold text-lg text-slate-300 hover:text-white"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5 mr-3 group-hover/btn:rotate-12 transition-transform duration-300" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div
            className={`transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl font-black text-white mb-4">
                <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                  More Amazing
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`group/card bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-700 hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${1200 + index * 150}ms` }}
                >
                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-3xl blur-2xl opacity-0 group-hover/card:opacity-10 transition-all duration-700 -z-10`} />
                  
                  <div className="mb-8">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className={`aspect-video bg-gradient-to-br ${project.color}/10 rounded-2xl overflow-hidden mb-6 flex items-center justify-center border border-slate-700/30 group-hover/card:border-slate-600/50 transition-all duration-500 relative cursor-pointer`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
                        <ExternalLink className={`w-12 h-12 text-slate-400 group-hover/card:text-white group-hover/card:scale-125 transition-all duration-500 relative z-10`} />
                      </div>
                    </a>
                    
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover/card:bg-gradient-to-r group-hover/card:from-purple-400 group-hover/card:to-cyan-400 group-hover/card:bg-clip-text group-hover/card:text-transparent transition-all duration-500">
                      {project.title}
                    </h4>
                    
                    <p className="text-slate-300 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-2 bg-gradient-to-r ${project.color}/10 rounded-xl text-xs font-medium text-slate-300 group-hover/card:bg-gradient-to-r group-hover/card:${project.color}/20 transition-all duration-300 border border-slate-700/30`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-2 bg-slate-700/30 rounded-xl text-xs font-medium text-slate-400 group-hover/card:bg-slate-600/30 transition-all duration-300 border border-slate-700/30">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2 text-slate-400 hover:text-yellow-400 transition-colors duration-300">
                        <Star className="w-4 h-4" />
                        <span className="font-semibold">{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors duration-300">
                        <GitFork className="w-4 h-4" />
                        <span className="font-semibold">{project.forks}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-12 transform"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-125 transform"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                      <ArrowRight className="w-6 h-6 text-slate-500 group-hover/card:text-purple-400 group-hover/card:translate-x-2 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced GitHub CTA */}
        <div
          className={`text-center mt-24 transition-all duration-1000 delay-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Button
            asChild
            size="lg"
            className="group bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border-2 border-slate-600 hover:border-slate-500 px-12 py-6 text-xl font-bold rounded-3xl backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl text-white relative overflow-hidden"
          >
            <a
              href="https://github.com/vishalseries7030"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Github className="w-7 h-7 mr-4 group-hover:animate-spin relative z-10" />
              
                              <span className="relative z-10">Visit My GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
