import { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-portfolio-navy-50/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-portfolio-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-portfolio-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-portfolio-navy-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Sparkles className="w-5 h-5 text-portfolio-purple-500" />
              <span className="text-sm font-medium text-foreground/80">Welcome to my portfolio</span>
            </div>
          </div>

          {/* Main heading */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight">
              <span className="block text-foreground mb-2">Hey, I'm</span>
              <span className="block text-gradient animate-gradient-shift bg-gradient-to-r from-portfolio-navy-500 via-portfolio-purple-500 to-portfolio-cyan-500 bg-[length:200%_auto] bg-clip-text text-transparent">
                Vishal 👋
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              <span className="font-semibold text-portfolio-navy-600 dark:text-portfolio-navy-400">MERN Stack Developer</span>
              <span className="mx-2">|</span>
              <span className="font-semibold text-portfolio-purple-600 dark:text-portfolio-purple-400">Web Enthusiast</span>
              <span className="mx-2">|</span>
              <span className="font-semibold text-portfolio-cyan-600 dark:text-portfolio-cyan-400">AI Innovator</span>
            </p>
          </div>

          {/* Description */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating digital experiences that matter. I transform ideas into elegant, 
              functional solutions using cutting-edge technologies and innovative thinking.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-portfolio-navy-500 to-portfolio-purple-600 hover:from-portfolio-navy-600 hover:to-portfolio-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-glow"
                onClick={() => scrollToNext()}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <a
                href="https://drive.google.com/file/d/17Gt6BQOOYRGSNkoyRY67owxQvTWpLMpm/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-portfolio-navy-500/20 hover:border-portfolio-navy-500/40 bg-white/5 hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className={`transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-16">
              <div className="text-center group">
                <div className="text-3xl font-bold text-gradient group-hover:scale-110 transition-transform duration-300">3+</div>
                <div className="text-sm text-foreground/60 mt-1 group-hover:text-foreground/80 transition-colors duration-300">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-gradient group-hover:scale-110 transition-transform duration-300">7+</div>
                <div className="text-sm text-foreground/60 mt-1 group-hover:text-foreground/80 transition-colors duration-300">Projects Done</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-gradient group-hover:scale-110 transition-transform duration-300">∞</div>
                <div className="text-sm text-foreground/60 mt-1 group-hover:text-foreground/80 transition-colors duration-300">Lines of Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToNext}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronDown className="w-6 h-6 text-foreground/60" />
        </button>
      </div>
    </section>
  );
}
