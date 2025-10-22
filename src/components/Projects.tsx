import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "./ui/button";

import ObjectDetectionLogo from "../assets/work_logo/Object.png";
import MatrimonialLogo from "../assets/work_logo/matrimonial_website.jpg";
import HotelLogo from "../assets/work_logo/Hotel.jpg";
import MultilingualLogo from "../assets/work_logo/Multilingual.png";
import CaranimeLogo from "../assets/work_logo/3D_car_animation1.jpg";
import CafebillingLogo from "../assets/work_logo/cafe.jpg";
import ImagebackgroundLogo from "../assets/work_logo/Image.jpg";
import BlogappLogo from "../assets/work_logo/Blogapp.jpg";
import TextutilsLogo from "../assets/work_logo/text_utils .png";

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

    const projects = [
      {
        id: 0,
        title: "Real-time object dimension measurement Web App",
        description:
          "A cutting-edge web application for precise Real-time object dimension measurement using advanced computer vision and machine learning technologies. The app supports secure user authentication, real-time and image-upload based measurements, analytics dashboards, and persistent storage of measurement data for future reference. Accessible on both desktop and mobile devices.",
        image: ObjectDetectionLogo,
        tags: ["React","TypeScript","TailwindCSS","Node.js","Express.js","PostgreSQL","Passport.js","Python","OpenCV","YOLO","Flask","REST API","Image Processing","Object Detection"],
        github: "https://github.com/UmeshNayak1/DimensiMeasure",
        webapp: "",
        report: "https://drive.google.com/file/d/1PWYhhE3B5MoP_8B7HrBAWg_DWA90a2ch/view?usp=sharing",
        isDeployed: false,
      },
      {
        id: 1,
        title: "Multilingual Voice Assistant",
        description:
          "A powerful multilingual voice assistant built as a web application using React for the frontend and Flask for the backend. This assistant allows users to speak in English, and it converts the spoken words into multiple languages in real-time. The app also includes features like text-to-speech output for translated text, light/dark mode toggle, and a responsive interface that adapts seamlessly to mobile and desktop devices. It offers fast, interactive, and multilingual support through speech recognition and translation, making it a versatile tool for global communication.",
        image: MultilingualLogo,
        tags: ["React","Flask","JavaScript","Python","HTML","CSS","Tailwind","Speech Recognition","Text-to-Speech","Multilingual"],
        github: "https://github.com/UmeshNayak1/Multilingual-Voice-Assistant",
        webapp: "https://multilingualvoiceassistant.netlify.app/",
        report: "#",
        isDeployed: true,
      },
      {
        id: 2,
        title: "Image Background Remover",
        description:
          "Web app that removes image backgrounds instantly using AI-powered APIs. Built with HTML, CSS, JS, Node.js, Express.js.",
        image: ImagebackgroundLogo,
        tags: ["HTML","CSS","JavaScript","Node.js","Express.js","REST API"],
        github: "https://github.com/UmeshNayak1/Image_Background_remover",
        webapp: "https://eraseedge.netlify.app/",
        report: "#",
        isDeployed: true,
      },
      {
        id: 3,
        title: "Hotel Management System",
        description:
          "A full-stack Hotel Management System designed to streamline hotel operations including room booking, check-in/check-out, food ordering, and admin-customer interaction. The platform offers separate user roles for customers and administrators, each with their own dashboards. Customers can book rooms, order food, and view their booking history, while admins can manage rooms, handle check-ins/check-outs, oversee food orders, and generate reports. Built with Node.js, Express.js, and MySQL, the system ensures real-time data handling and operational efficiency, all wrapped in a responsive UI using HTML, CSS, JavaScript, and Bootstrap.",
        image: HotelLogo,
        tags: ["React JS","Node.js","Express.js","HTML","CSS","JavaScript","Bootstrap","MySQL"],
        github: "https://github.com/UmeshNayak1/Hotel-Management-System",
        webapp: "https://hotel-management-system-production-208e.up.railway.app/",
        report: "#",
        isDeployed: true,
      },
      {
        id: 4,
        title: "BlogApp",
        description:
          "BlogApp is a dynamic Single-page blogging platform built using React and Vite. Users can create, view, and manage blog posts with a clean, responsive UI.",
        image: BlogappLogo,
        tags: ["React","Vite","JavaScript","HTML","CSS","Frontend"],
        github: "https://github.com/UmeshNayak1/BlogApp",
        webapp: "https://blogbuddies.netlify.app/",
        report: "#",
        isDeployed: true,
      },
      {
        id: 5,
        title: "Text Utils",
        description:
          "Web app with text manipulation features: uppercase, lowercase, word count, extra space removal, light/dark mode.",
        image: TextutilsLogo,
        tags: ["React","Bootstrap","JavaScript","HTML","CSS","Text Utilities"],
        github: "https://github.com/UmeshNayak1/Text-Utils",
        webapp: "https://textutilsmancer.netlify.app/",
        report: "#",
        isDeployed: true,
      },
      {
        id: 6,
        title: "Matrimonial Website",
        description:
          "Full-stack Matrimonial Website enabling users to register, create profiles, and find matches with advanced search filters and real-time matchmaking.",
        image: MatrimonialLogo,
        tags: ["JavaScript", "CSS", "EJS", "Node.js", "MySQL"],
        github: "https://github.com/UmeshNayak1/Matrimonial-Website",
        webapp: "",
        report: "https://drive.google.com/file/d/1VdZZl32z3vUaXscF_arZoSylAE43GC1m/view?usp=sharing/",
        isDeployed: false,
      },
      {
        id: 7,
        title: "3D Car Animation",
        description:
          "Interactive 3D car animation using C++ & OpenGL simulating vehicle dynamics with smooth acceleration, deceleration, turning, and camera tracking.",
        image: CaranimeLogo,
        tags: ["C++","OpenGL","DEV C++","Jupyter Notebook","VS Code"],
        github: "https://github.com/UmeshNayak1/3D-Car-Animation-in-OpenGL",
        webapp: "",
        report: "https://drive.google.com/file/d/1J1QuTOxZWAZ6Qcp2RaXcjdoqNq5nxCVC/view?usp=sharing",
        isDeployed: false,
      },
      {
        id: 8,
        title: "Cafe Billing Management System",
        description:
          "Web-based system for cafes to manage orders, billing, and sales tracking using PHP, MySQLi, HTML, CSS, JS, and Bootstrap.",
        image: CafebillingLogo,
        tags: ["HTML","CSS","JavaScript","jQuery","Bootstrap","PHP","MySQLi"],
        github: "https://github.com/UmeshNayak1/Cafe-Billing-Management-System",
        webapp: "",
        report: "https://drive.google.com/file/d/1OprXVS4vArcGftKXQLcEa53wElF5YhcI/view?usp=sharing",
        isDeployed: false,
      },
    ];


  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`glass-effect rounded-xl overflow-hidden group transition-all duration-500 hover:scale-105 hover:glow-border cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                        <Github className="w-4 h-4 mr-2" /> Code
                      </Button>
                    </a>

                    {project.isDeployed && project.webapp ? (
                      <a href={project.webapp} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                          <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                        </Button>
                      </a>
                    ) : (
                      <a href={project.report} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                          View Report
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for full project details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-background rounded-2xl max-w-3xl w-full relative overflow-y-auto max-h-[90vh] p-6 shadow-lg">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-600 bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-muted-foreground mb-4">{selectedProject.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button size="sm" variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <Github className="w-4 h-4 mr-2" /> Code
                </Button>
              </a>

              {selectedProject.isDeployed && selectedProject.webapp ? (
                <a href={selectedProject.webapp} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </Button>
                </a>
              ) : (
                <a href={selectedProject.report} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                    View Report
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
