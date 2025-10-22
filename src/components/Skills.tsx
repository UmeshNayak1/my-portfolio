import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Database,
  Terminal,
  Wrench,
  FileCode2,
  Palette,
  Blocks,
  Package,
  Server,
  Leaf,
  Box,
  GitBranch,
  Github,
  Code,
  Mail,
  Compass,
  Globe,
  BarChart2,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      icon: Terminal,
      skills: [
        { name: "Python", icon: Terminal, color: "from-blue-500 to-yellow-500" },
        { name: "Java", icon: Code2, color: "from-red-500 to-orange-600" },
        { name: "C", icon: Code, color: "from-blue-600 to-blue-700" },
        { name: "C++", icon: Code, color: "from-blue-500 to-purple-600" },
        { name: "JavaScript", icon: Code2, color: "from-yellow-400 to-yellow-500" },
        { name: "SQL", icon: Code, color: "from-cyan-500 to-blue-600" },
      ],
    },
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        { name: "HTML", icon: FileCode2, color: "from-orange-500 to-orange-600" },
        { name: "CSS", icon: Palette, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", icon: Code2, color: "from-yellow-400 to-yellow-500" },
        { name: "React.js", icon: Blocks, color: "from-cyan-400 to-cyan-500" },
        { name: "Tailwind CSS", icon: Palette, color: "from-teal-400 to-cyan-500" },
        { name: "Material UI", icon: Blocks, color: "from-blue-600 to-indigo-600" },
        { name: "Bootstrap", icon: Blocks, color: "from-purple-600 to-purple-700" },
        { name: "AngularJS", icon: Box, color: "from-red-500 to-red-600" },
      ],
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", icon: Server, color: "from-green-500 to-green-600" },
        { name: "Express.js", icon: Server, color: "from-gray-600 to-gray-700" },
        { name: "Spring Boot", icon: Leaf, color: "from-green-600 to-green-700" },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", icon: Database, color: "from-blue-500 to-blue-700" },
        { name: "MongoDB", icon: Database, color: "from-green-500 to-green-700" },
        { name: "PostgreSQL", icon: Database, color: "from-blue-600 to-indigo-700" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        { name: "Git", icon: GitBranch, color: "from-orange-600 to-red-600" },
        { name: "GitHub", icon: Github, color: "from-gray-700 to-gray-900" },
        { name: "VS Code", icon: Code, color: "from-blue-500 to-blue-700" },
        { name: "Postman", icon: Mail, color: "from-orange-500 to-orange-600" },
        { name: "Compass", icon: Compass, color: "from-green-500 to-green-700" },
        { name: "Eclipse IDE", icon: Code, color: "from-indigo-500 to-indigo-700" },
      ],
    },
    {
      title: "Algorithms & Libraries",
      icon: Code2,
      skills: [
        { name: "DSA", icon: Code, color: "from-blue-500 to-blue-700" },
        { name: "OpenCV", icon: Code2, color: "from-gray-600 to-gray-800" },
        { name: "Pandas", icon: Code2, color: "from-green-500 to-green-600" },
        { name: "NumPy", icon: Code2, color: "from-indigo-500 to-indigo-600" },
        { name: "TensorFlow", icon: Code2, color: "from-orange-500 to-red-500" },
      ],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen py-20 relative bg-background">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />

          <TooltipProvider>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {skillCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={categoryIndex}
                    className={`glass-effect rounded-2xl p-6 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105`}
                    style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-6 justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-bold text-center text-primary glow-text">
                        {category.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = skill.icon;
                        return (
                          <Tooltip key={skillIndex}>
                            <TooltipTrigger asChild>
                              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 border border-border/50 gap-2 cursor-pointer">
                                <div
                                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-md`}
                                >
                                  <SkillIcon className="w-5 h-5 text-white" strokeWidth={2.5} />
                                </div>
                                <span className="text-xs font-medium text-center leading-tight text-foreground">
                                  {skill.name}
                                </span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className={`bg-gradient-to-br ${skill.color} border-0`}>
                              <p className="text-white font-semibold text-center">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};
