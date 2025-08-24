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
      title: '5thDT Website Revamp',
      description: 'A complete website revamp with modern design principles, improved user experience, and responsive layouts. Built with cutting-edge technologies for optimal performance.',
      image: '/placeholder.svg',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
      github: 'https://github.com/vishalseries7030',
      live: 'https://5thdt-website-revamp.vercel.app/',
      featured: true,
    },
    {
      title: 'Mumbai Book Fair Platform',
      description: 'An interactive platform for Mumbai Book Fair featuring book listings, event schedules, and user engagement features with modern UI/UX design.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
      github: 'https://github.com/vishalseries7030',
      live: 'https://mumbai-book-fair-new.vercel.app/',
      featured: true,
    },
    {
      title: 'Gorakhpur Book Fair',
      description: 'A comprehensive digital solution for book fair management with vendor registration, book catalog, and event management capabilities.',
      image: '/placeholder.svg',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      github: 'https://github.com/vishalseries7030',
      live: 'https://gorakhpur-book-fair.vercel.app/',
      featured: false,
    },
    {
      title: 'Fruit Table E-commerce',
      description: 'A modern e-commerce platform for fresh fruits with shopping cart, payment integration, and inventory management features.',
      image: '/placeholder.svg',
      technologies: ['React', 'Redux', 'Node.js', 'Payment Gateway'],
      github: 'https://github.com/vishalseries7030',
      live: 'https://fruittable.vercel.app/',
      featured: false,
    },
    {
      title: 'Full-Stack E-commerce',
      description: 'A complete e-commerce solution with user authentication, product management, order processing, and admin dashboard.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      github: 'https://github.com/vishalseries7030',
      live: 'https://ecommerce-ten-beryl-67.vercel.app/',
      featured: false,
    },
    {
      title: 'Shiv Khera Books',
      description: 'A dedicated platform for Shiv Khera\'s books with detailed descriptions, reviews, and purchase options with clean, professional design.',
      image: '/placeholder.svg',
      technologies: ['React', 'Next.js', 'Tailwind', 'Vercel'],
      github: 'https://github.com/vishalseries7030',
      live: 'https://shiv-khera-books-jyic.vercel.app/',
      featured: false,
    },
    {
      title: 'Story Book Themes',
      description: 'An interactive storybook platform with various themes, animations, and engaging user interface for digital storytelling.',
      image: '/placeholder.svg',
      technologies: ['React', 'Framer Motion', 'CSS3', 'JavaScript'],
      github: 'https://github.com/vishalseries7030',
      live: 'https://story-book-themes.vercel.app/',
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
              A showcase of my recent work, featuring web applications built with modern technologies, 
              AI integration, and best practices in software development.
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
                  <div className="aspect-video bg-gradient-to-br from-portfolio-navy-500/20 to-portfolio-purple-500/20 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-portfolio-navy-400/30 to-portfolio-purple-500/30 flex items-center justify-center">
                      <div className="text-center">
                        <ExternalLink className="w-16 h-16 text-white/80 mx-auto mb-4" />
                        <p className="text-white/70 font-medium">Live Project</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-portfolio-cyan-500 to-portfolio-purple-500 rounded-xl p-3 animate-float">
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
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-foreground/80 border border-white/20 hover:border-white/40 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-portfolio-navy-500 to-portfolio-purple-600 hover:from-portfolio-navy-600 hover:to-portfolio-purple-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
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
                className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="aspect-video bg-gradient-to-br from-portfolio-navy-500/20 to-portfolio-purple-500/20 rounded-lg overflow-hidden mb-4 flex items-center justify-center border border-white/10">
                    <ExternalLink className="w-8 h-8 text-white/60 group-hover:text-white/80 transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">{project.title}</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium text-foreground/80 group-hover:bg-white/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium text-foreground/80 group-hover:bg-white/20 transition-all duration-300">
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
                      className="text-foreground/60 hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
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
            className="border-2 border-portfolio-navy-500/20 hover:border-portfolio-navy-500/40 bg-white/5 hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <a href="https://github.com/vishalseries7030" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
