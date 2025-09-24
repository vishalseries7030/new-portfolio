import { useEffect, useRef, useState } from "react";
import { 
  Brain, Code, Database, Cloud, Cpu, Zap, Trophy, Target, 
  Sparkles, Rocket, Star, Award, ChevronRight, GitBranch, BarChart3
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiApachekafka,
  SiTensorflow,
  SiPostgresql,
  SiRedis,
  SiGraphql
} from "react-icons/si";

// Type definitions
interface Skill {
  name: string;
  level: number;
  icon?: any;
  color: string;
  experience: string;
}

interface SkillCategory {
  title: string;
  icon: any;
  skills: Skill[];
  color: string;
  bgGradient: string;
}

interface Achievement {
  icon: any;
  title: string;
  description: string;
  value: string;
  color: string;
}

export default function SkillsSection(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [skillsAnimated, setSkillsAnimated] = useState<boolean>(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setSkillsAnimated(true), 500);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements: Achievement[] = [
    {
      icon: Trophy,
      title: "Projects Completed",
      description: "Successful deliveries",
      value: "50+",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Target,
      title: "Client Satisfaction",
      description: "Average rating",
      value: "99%",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Performance Boost",
      description: "Average improvement",
      value: "150%",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Award,
      title: "Years Experience",
      description: "Professional journey",
      value: "5+",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Mastery",
      icon: Code,
      color: "from-pink-500 via-red-500 to-yellow-500",
      bgGradient: "from-pink-500/20 to-red-500/20",
      skills: [
        { name: "React", level: 95, icon: SiReact, color: "text-cyan-400", experience: "4+ years" },
        { name: "TypeScript", level: 92, icon: SiTypescript, color: "text-blue-400", experience: "3+ years" },
        { name: "Next.js", level: 90, icon: SiNextdotjs, color: "text-white", experience: "3+ years" },
        { name: "Tailwind CSS", level: 95, icon: SiTailwindcss, color: "text-cyan-300", experience: "3+ years" },
        { name: "JavaScript", level: 96, icon: SiJavascript, color: "text-yellow-400", experience: "5+ years" },
      ],
    },
    {
      title: "Backend Power",
      icon: Database,
      color: "from-purple-500 via-blue-500 to-cyan-500",
      bgGradient: "from-purple-500/20 to-blue-500/20",
      skills: [
        { name: "Node.js", level: 90, icon: SiNodedotjs, color: "text-green-400", experience: "4+ years" },
        { name: "Python", level: 88, icon: SiPython, color: "text-blue-400", experience: "3+ years" },
        { name: "Java", level: 82, icon: SiReact, color: "text-red-400", experience: "2+ years" },
        { name: "Express.js", level: 88, icon: SiExpress, color: "text-gray-300", experience: "4+ years" },
        { name: "MongoDB", level: 85, icon: SiMongodb, color: "text-green-500", experience: "3+ years" },
      ],
    },
    {
      title: "AI & Intelligence",
      icon: Brain,
      color: "from-green-500 via-teal-500 to-blue-500",
      bgGradient: "from-green-500/20 to-blue-500/20",
      skills: [
        { name: "Generative AI", level: 90, icon: SiTensorflow, color: "text-orange-500", experience: "2+ years" },
        { name: "Machine Learning", level: 85, icon: Brain, color: "text-purple-400", experience: "2+ years" },
        { name: "LLMs & NLP", level: 88, icon: Cpu, color: "text-pink-400", experience: "2+ years" },
        { name: "AI Integration", level: 92, icon: GitBranch, color: "text-cyan-400", experience: "2+ years" },
        { name: "Data Analysis", level: 80, icon: BarChart3, color: "text-yellow-400", experience: "2+ years" },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "from-indigo-500 via-purple-500 to-pink-500",
      bgGradient: "from-indigo-500/20 to-pink-500/20",
      skills: [
        { name: "Docker", level: 88, icon: SiDocker, color: "text-blue-500", experience: "3+ years" },
        { name: "AWS", level: 82, icon: SiReact, color: "text-orange-400", experience: "2+ years" },
        { name: "Kubernetes", level: 75, icon: SiKubernetes, color: "text-blue-400", experience: "2+ years" },
        { name: "Jenkins", level: 78, icon: SiJenkins, color: "text-red-500", experience: "2+ years" },
        { name: "Apache Kafka", level: 72, icon: SiApachekafka, color: "text-gray-300", experience: "1+ years" },
      ],
    },
  ];

  const additionalTechs = [
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "Redis", icon: SiRedis, color: "text-red-500" },
    { name: "GraphQL", icon: SiGraphql, color: "text-pink-400" },
    { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.2) 0%, transparent 60%),
          radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.2) 0%, transparent 60%),
          radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 70%),
          linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
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
            className={`transition-all duration-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <div className="inline-block mb-8">
              <h2 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                SKILLS & EXPERTISE
              </h2>
              <div className="h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full mt-6 animate-pulse" />
            </div>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-medium">
              A <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-bold">POWERHOUSE</span> toolkit of cutting-edge technologies 
              that transforms ideas into digital reality! 🚀
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`group p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-3xl font-bold text-transparent bg-gradient-to-r ${achievement.color} bg-clip-text mb-2`}>
                  {achievement.value}
                </div>
                <h3 className="text-white font-semibold mb-1">{achievement.title}</h3>
                <p className="text-white/60 text-sm">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${600 + categoryIndex * 200}ms` }}
              onMouseEnter={() => setActiveCategory(categoryIndex)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className={`group relative p-8 rounded-3xl bg-black/20 backdrop-blur-sm border transition-all duration-500 ${
                activeCategory === categoryIndex 
                  ? 'border-white/40 scale-[1.02] shadow-2xl shadow-purple-500/20' 
                  : 'border-white/10 hover:border-white/30'
              }`}>
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${category.bgGradient} blur-xl`} />
                
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center mb-8">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`transition-all duration-1000 ${
                          isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-8"
                        }`}
                        style={{
                          transitionDelay: `${600 + categoryIndex * 200 + skillIndex * 100}ms`,
                        }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <skill.icon className={`w-6 h-6 ${skill.color} ${hoveredSkill === skill.name ? 'animate-spin' : ''}`} />
                            <span className="text-white font-medium">{skill.name}</span>
                            <span className="text-xs text-white/50 px-2 py-1 rounded-full bg-white/10">
                              {skill.experience}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-white/80 font-semibold">
                              {skill.level}%
                            </span>
                            <ChevronRight className={`w-4 h-4 text-white/40 transition-transform duration-300 ${hoveredSkill === skill.name ? 'rotate-90' : ''}`} />
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="relative">
                          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                            <div
                              className={`h-3 rounded-full transition-all duration-1500 ease-out bg-gradient-to-r ${category.color} ${hoveredSkill === skill.name ? 'animate-pulse' : ''}`}
                              style={{
                                width: skillsAnimated ? `${skill.level}%` : "0%",
                                transitionDelay: `${600 + categoryIndex * 200 + skillIndex * 100 + 500}ms`,
                              }}
                            />
                          </div>
                          {hoveredSkill === skill.name && (
                            <div className="absolute top-full mt-2 left-0 right-0">
                              <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                                <p className="text-white/80 text-sm">
                                  Proficiency: <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Indicator */}
                {activeCategory === categoryIndex && (
                  <div className="absolute top-4 right-4">
                    <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div
          className={`transition-all duration-1500 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              BONUS TECH ARSENAL 🔧
            </h3>
            <p className="text-white/70 text-lg">Additional tools in my developer toolkit</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalTechs.map((tech, index) => (
              <div
                key={tech.name}
                className={`group p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-110 hover:rotate-3 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="relative">
                    <tech.icon className={`w-12 h-12 ${tech.color} group-hover:scale-125 transition-transform duration-300`} />
                    <div className={`absolute inset-0 ${tech.color.replace('text-', 'bg-')} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                  </div>
                  <span className="text-white font-semibold text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
             style={{ transitionDelay: "1500ms" }}>
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-white/20 backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Rocket className="w-8 h-8 text-cyan-400 animate-bounce" />
              <h3 className="text-3xl font-bold text-white">Ready to Build Something EPIC?</h3>
              <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
            <p className="text-white/70 text-lg">Let's combine these skills to create your next breakthrough project!</p>
          </div>
        </div>
      </div>
    </section>
  );
}