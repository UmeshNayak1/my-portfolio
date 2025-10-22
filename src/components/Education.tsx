import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";

export const Education = () => {
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

    const education = [
      {
        degree: "Bachelor of Engineering - CSE",
        institution: "Jain College of Engineering and Technology, Hubballi",
        period: "2021 - 2025",
        description: "Completed my Bachelor of Engineering in Computer Science and Engineering (CSE), gaining practical knowledge in Data Structures, Algorithms, Web Development, and Database Management Systems. Worked on projects applying theoretical concepts to real-world problems.",
        achievements: [
          "CGPA: 8.54",
          "Practical projects in software development",
          "Strong foundation in algorithms and web technologies"
        ],
      },
      {
        degree: "PUC (Class XII) - PCMB",
        institution: "Susheela Y Kuligod PU College, Ramdurg, Belagavi",
        period: "June 2020 - July 2021",
        description: "Completed Class 12 education in the PCMB stream, with a specialization in Computer Science, under the Department of Pre-University Education, Karnataka.",
        achievements: [
          "Percentage: 80.50%",
          "Focus on Physics, Chemistry, Mathematics, Biology",
          "Specialization in Computer Science"
        ],
      },
      {
        degree: "SSLC (Class X)",
        institution: "Government High School Salapur, Ramdurg, Belagavi",
        period: "May 2018 - April 2019",
        description: "Completed Class 10 education under the Karnataka Secondary Education Examination Board (KSEEB), studying Science with Computer.",
        achievements: [
          "Percentage: 88.32%",
          "Science with Computer focus",
          "Strong academic foundation"
        ],
      },
    ];

  const certifications = [
    "Application Developer Web Mobile Internship - Rooman Technologies Pvt Ltd & NCVET",
    "Full Stack Java Developer Internship- Government Tool Room & Training Centre ,Hubballi",
    "Life Skills (Jeevan Kaushal) 2.0 - Wadhwani Foundation",
    "National Level 24-hours Hackathon Participation",
    "The Web Development Bootcamp 2025 - Udemy",   
  ];

  const knownLanguages = [
    "English",
    "Hindi",
    "Kannada",
  ];


  return (
    <section id="education" ref={sectionRef} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />

          <div className="max-w-4xl mx-auto">
            {/* Education */}
            <div className="mb-16">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative pl-8 pb-12 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-[11px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-secondary glow-border flex items-center justify-center">
                    <GraduationCap className="w-3 h-3 text-background" />
                  </div>

                  <div className="glass-effect rounded-xl p-6 hover:glow-border transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                      <span className="text-primary font-medium">{edu.period}</span>
                    </div>
                    
                    <h4 className="text-lg text-secondary mb-4">{edu.institution}</h4>
                    
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
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

            {/* Certifications */}
            <div
              className={`glass-effect rounded-xl p-8 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="text-primary mr-3">🏆</span>
                Professional Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-muted/30 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
                  >
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <br /><br /><br /><br />

            {/* Known Languages */}
            <div
              className={`glass-effect rounded-xl p-8 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="text-primary mr-3">🗣️</span>
                Known Languages
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {knownLanguages .map((know, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-muted/30 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
                  >
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-foreground">{know}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
