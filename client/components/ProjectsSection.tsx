import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      github: 'https://github.com/vishal-payyawar/ecommerce-platform',
      live: 'https://ecommerce-demo.vercel.app',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder.svg',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      github: 'https://github.com/vishal-payyawar/task-manager',
      live: 'https://taskmanager-demo.vercel.app',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/placeholder.svg',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind'],
      github: 'https://github.com/vishal-payyawar/weather-dashboard',
      live: 'https://weather-dashboard-demo.vercel.app',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.',
      image: '/placeholder.svg',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
      github: 'https://github.com/vishal-payyawar/portfolio',
      live: 'https://vishal-portfolio.vercel.app',
      featured: false,
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with multiple rooms, file sharing, and user presence indicators built with Socket.io.',
      image: '/placeholder.svg',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com/vishal-payyawar/chat-app',
      live: 'https://chat-app-demo.vercel.app',
      featured: false,
    },
    {
      title: 'Blog Platform',
      description: 'A full-featured blog platform with markdown support, comment system, and SEO optimization.',
      image: '/placeholder.svg',
      technologies: ['Next.js', 'MDX', 'PostgreSQL', 'Prisma'],
      github: 'https://github.com/vishal-payyawar/blog-platform',
      live: 'https://blog-platform-demo.vercel.app',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-gradient-to-br from-background to-portfolio-purple-50/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, featuring web applications built with modern technologies 
              and best practices.
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group`}>
                  <div className="aspect-video bg-gradient-to-br from-portfolio-navy-500/20 to-portfolio-purple-500/20 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-portfolio-cyan-500 to-portfolio-purple-500 rounded-xl p-3">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Project Info */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-6`}>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">{project.title}</h3>
                    <p className="text-lg text-foreground/70 leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-foreground/80 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-portfolio-navy-500 to-portfolio-purple-600 hover:from-portfolio-navy-600 hover:to-portfolio-purple-700 text-white border-0"
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-semibold text-center text-foreground mb-12">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="aspect-video bg-gradient-to-br from-portfolio-navy-500/20 to-portfolio-purple-500/20 rounded-lg overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{project.title}</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium text-foreground/80">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <ArrowRight className="w-5 h-5 text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-portfolio-navy-500/20 hover:border-portfolio-navy-500/40 bg-white/5 hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <a href="https://github.com/vishal-payyawar" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
