import { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Zap, Users, Award } from 'lucide-react';

export function AboutSection() {
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

  const features = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Express, and database management.',
    },
    {
      icon: Globe,
      title: 'Full Stack Solutions',
      description: 'End-to-end development from concept to deployment with modern development practices.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, scalability, and exceptional user experience.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working effectively in agile teams with strong communication and leadership skills.',
    },
    {
      icon: Award,
      title: 'Best Practices',
      description: 'Following industry standards, clean code principles, and continuous learning mindset.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-br from-background to-portfolio-navy-50/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">About Me</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer who loves crafting digital experiences that make a difference. 
              With a strong foundation in modern web technologies and a keen eye for design, 
              I bridge the gap between functionality and aesthetics.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Personal Story */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">My Journey</h3>
              <p className="text-foreground/70 leading-relaxed">
                My journey into web development started with curiosity and has evolved into a passion for creating 
                meaningful digital experiences. I believe in writing clean, maintainable code and staying up-to-date 
                with the latest technologies and best practices.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I'm always excited to take on new challenges and 
                collaborate on innovative projects.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-gradient-to-r from-portfolio-navy-500/10 to-portfolio-purple-500/10 rounded-lg px-4 py-2 border border-portfolio-navy-500/20">
                  <span className="text-sm font-medium text-portfolio-navy-700 dark:text-portfolio-navy-300">Problem Solver</span>
                </div>
                <div className="bg-gradient-to-r from-portfolio-purple-500/10 to-portfolio-cyan-500/10 rounded-lg px-4 py-2 border border-portfolio-purple-500/20">
                  <span className="text-sm font-medium text-portfolio-purple-700 dark:text-portfolio-purple-300">Team Player</span>
                </div>
                <div className="bg-gradient-to-r from-portfolio-cyan-500/10 to-portfolio-navy-500/10 rounded-lg px-4 py-2 border border-portfolio-cyan-500/20">
                  <span className="text-sm font-medium text-portfolio-cyan-700 dark:text-portfolio-cyan-300">Continuous Learner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-portfolio-navy-500/20 to-portfolio-purple-500/20 rounded-2xl p-2 border border-white/10 backdrop-blur-sm">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff18dacda01e04943953f826125ba7a34%2F6a186302c0a54a77bbf67d13870a03c3?format=webp&width=800"
                    alt="Vishal Payyawar - Professional Photo"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-portfolio-cyan-500 to-portfolio-purple-500 rounded-xl p-4 animate-float">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
              <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-portfolio-navy-500 to-portfolio-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
