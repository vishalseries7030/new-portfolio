import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vishal-payyawar', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/vishal-payyawar', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vishal.payyawar@email.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-portfolio-navy-950/50 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-200 mb-4 block"
            >
              Vishal Payyawar
            </button>
            <p className="text-foreground/60 text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Made with Love */}
          <div className="text-center">
            <p className="text-foreground/60 text-sm flex items-center justify-center space-x-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>using React & TypeScript</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-white/40 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-foreground/50 text-xs">
            Designed and built with modern web technologies. 
            <span className="mx-2">•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-foreground transition-colors duration-200"
            >
              Back to top ↑
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
