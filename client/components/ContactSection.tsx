import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Zap,
  Heart,
  Sparkles,
  Rocket,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vishal.payyawar22@vit.edu",
      href: "mailto:vishal.payyawar@email.com",
      color: "from-red-500 to-pink-500",
      hoverColor: "group-hover:text-red-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+917030763055",
      color: "from-green-500 to-emerald-500",
      hoverColor: "group-hover:text-green-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, Maharashtra, India",
      href: "https://maps.google.com/?q=Mumbai,Maharashtra,India",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "group-hover:text-blue-400",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/vishalseries7030",
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vishal-payyawar-46a211276/",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/vishal_payyawar",
      color: "from-sky-500 to-blue-600",
      hoverColor: "hover:text-sky-400",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:vishal.payyawar@email.com",
      color: "from-purple-600 to-pink-600",
      hoverColor: "hover:text-purple-400",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen py-24 overflow-hidden bg-slate-950"
    >
      {/* Crazy Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/30 to-purple-950/30" />
        
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'gridFloat 15s ease-in-out infinite'
            }}
          />
        </div>
        
        {/* Interactive mouse follower */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-500 ease-out"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse"
              style={{
                width: `${200 + Math.random() * 300}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-xl mb-8 group hover:border-purple-400/40 transition-all duration-500">
              <MessageCircle className="w-5 h-5 mr-3 text-purple-400 animate-bounce" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-8xl font-black mb-8 relative">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
                Let's Create
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent relative">
                Something Amazing
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-2xl opacity-20 animate-pulse" />
              </span>
              
              {/* Floating icons */}
              <div className="absolute -top-8 -right-8 w-12 h-12 bg-purple-500 rounded-2xl animate-bounce delay-300 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-10 h-10 bg-pink-500 rounded-full animate-bounce delay-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's collaborate and build something 
              <span className="text-purple-400 font-semibold"> extraordinary </span>
              together!
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Enhanced Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="group bg-slate-800/30 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-700 relative overflow-hidden">
              {/* Form background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-4 animate-pulse">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    Send me a message
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-300 mb-3"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-6 py-4 bg-slate-700/30 border-2 rounded-2xl focus:outline-none transition-all duration-500 text-white placeholder-slate-400 backdrop-blur-sm ${
                        focusedField === 'name' 
                          ? 'border-purple-500 shadow-lg shadow-purple-500/25 bg-slate-700/50 scale-105' 
                          : 'border-slate-600/50 hover:border-slate-500/70'
                      }`}
                      placeholder="Enter your awesome name"
                    />
                    {focusedField === 'name' && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full animate-ping" />
                    )}
                  </div>
                  
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-300 mb-3"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-6 py-4 bg-slate-700/30 border-2 rounded-2xl focus:outline-none transition-all duration-500 text-white placeholder-slate-400 backdrop-blur-sm ${
                        focusedField === 'email' 
                          ? 'border-pink-500 shadow-lg shadow-pink-500/25 bg-slate-700/50 scale-105' 
                          : 'border-slate-600/50 hover:border-slate-500/70'
                      }`}
                      placeholder="your.email@awesome.com"
                    />
                    {focusedField === 'email' && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full animate-ping" />
                    )}
                  </div>
                  
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-300 mb-3"
                    >
                      Your Amazing Idea
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className={`w-full px-6 py-4 bg-slate-700/30 border-2 rounded-2xl focus:outline-none transition-all duration-500 text-white placeholder-slate-400 resize-none backdrop-blur-sm ${
                        focusedField === 'message' 
                          ? 'border-cyan-500 shadow-lg shadow-cyan-500/25 bg-slate-700/50 scale-105' 
                          : 'border-slate-600/50 hover:border-slate-500/70'
                      }`}
                      placeholder="Tell me about your incredible project idea! I'm excited to hear about it..."
                    />
                    {focusedField === 'message' && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full animate-ping" />
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white border-0 py-6 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce relative z-10" />
                        <span className="relative z-10">Launch Project</span>
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="space-y-10">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4 animate-pulse">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    Get in touch
                  </h3>
                </div>
                <p className="text-xl text-slate-300 leading-relaxed mb-10">
                  I'm always excited to connect with fellow creators, innovators, and dreamers. 
                  Let's turn your vision into reality! 🚀
                </p>
              </div>

              {/* Enhanced Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.label}
                    className={`group flex items-center space-x-6 p-6 bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${700 + index * 150}ms` }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <item.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-400 mb-1">{item.label}</p>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`text-white text-lg font-semibold transition-all duration-300 ${item.hoverColor} group-hover:scale-105 inline-block`}
                      >
                        {item.value}
                      </a>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    
                    {/* Background glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-all duration-500 -z-10`} />
                  </div>
                ))}
              </div>

              {/* Enhanced Social Links */}
              <div
                className={`transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 mr-3 text-purple-400 animate-pulse" />
                  Let's Connect
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center space-x-4 p-4 bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:scale-110 hover:-translate-y-1 ${social.hoverColor}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                        <social.icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                      </div>
                      <span className="text-white font-semibold group-hover:text-purple-300 transition-colors duration-300">
                        {social.label}
                      </span>
                      
                      {/* Background glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-all duration-500 -z-10`} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Enhanced Availability */}
              <div
                className={`group p-8 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-3xl border border-green-500/20 transition-all duration-1000 delay-1200 hover:border-green-400/40 hover:scale-105 relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse" />
                      <div className="absolute inset-0 w-6 h-6 bg-green-500 rounded-full animate-ping" />
                    </div>
                    <span className="text-white font-bold text-xl">
                      Available for Magic ✨
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    I'm currently accepting new freelance projects and collaboration opportunities. 
                    Let's create something amazing together!
                  </p>
                  
                  <div className="mt-4 flex items-center space-x-2 text-green-400">
                    <Rocket className="w-5 h-5 animate-bounce" />
                    <span className="text-sm font-semibold">Ready to launch!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes gridFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -10px) rotate(1deg); }
          50% { transform: translate(-5px, 5px) rotate(-0.5deg); }
          75% { transform: translate(-10px, -5px) rotate(0.5deg); }
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(15deg); }
          100% { transform: translateX(200%) skewX(15deg); }
        }
      `}</style>
    </section>
  );
}