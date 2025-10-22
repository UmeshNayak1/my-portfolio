import { useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const experiences = [
    {
      title: "Java Fullstack Developer Intern",
      company: "Government Tool Room & Training Centre",
      period: "Feb 2025 - Present",
      description: "Developed dynamic and scalable web applications using the full stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      achievements: [
        "Built responsive UI with HTML, CSS, and React JS",
        "Implemented RESTful APIs with Spring Boot",
        "Optimized application performance",
        "Worked with MySQL, TypeScript, Redux, and Tailwind CSS",
        "Integrated AWS cloud services"
      ],
    },
    {
      title: "Application Developer (Web & Mobile) Intern",
      company: "Rooman Technologies Pvt Ltd",
      period: "Oct 2024 - Jan 2025",
      description: "Acquired hands-on experience in full-stack development using React.js, Express.js, Node.js, MongoDB, and Spring Boot. Built responsive web and mobile applications focusing on intuitive UI/UX, seamless backend integration, and robust RESTful APIs. Strengthened core programming skills and gained practical experience with IBM Cloud services.",
      achievements: [
        "Developed web and mobile apps with ReactJS, Node JS, and Express JS",
        "Integrated backend services with MongoDB and MySQL",
        "Enhanced programming skills in Java, Python, and Data Structures & Algorithms",
        "Gained cloud deployment experience with IBM Cloud",
        "Improved teamwork, problem-solving, and communication skills"
      ],
    },
  ];


  return (
    <section id="experience" ref={sectionRef} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-8 pb-12 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[11px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-primary glow-border flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-background" />
                </div>

                <div className="glass-effect rounded-xl p-6 hover:glow-border transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                    <span className="text-primary font-medium">{exp.period}</span>
                  </div>
                  
                  <h4 className="text-lg text-secondary mb-4">{exp.company}</h4>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">▹</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
