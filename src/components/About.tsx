import { useEffect, useRef, useState } from "react";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import Image1 from "../assets/banners/banner-02.png";
import Image2 from "../assets/banners/banner-01.png";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const images = [Image1, Image2]; // Add more images if needed

  // Fade-in when section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate every 7s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [images.length]);

  // Manual navigation
  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-70" />

      <div
        className={`container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* --- Left: Carousel --- */}
        <div className="flex flex-col items-center w-full">
          <div
            className="relative w-[90vw] sm:w-[500px] md:w-[550px] lg:w-[600px] 
                       h-[420px] md:h-[500px] overflow-hidden rounded-3xl shadow-2xl"
          >
            {/* Slider container */}
            <div
              className="flex transition-transform duration-[1000ms] ease-in-out"
              style={{
                width: `${images.length * 100}%`,
                transform: `translateX(-${currentImage * (100 / images.length)}%)`,
              }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-[100%] flex-shrink-0 object-cover"
                  style={{ width: `${100 / images.length}%` }}
                />
              ))}
            </div>
          </div>

          {/* Arrows below carousel */}
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              className="bg-white text-primary shadow-md p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white text-primary shadow-md p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* --- Right: About Text --- */}
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a passionate Full Stack Developer focused on creating modern,
            scalable, and visually engaging web applications. I specialize in
            React.js, Node.js, and backend integration.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            My goal is to craft seamless user experiences that combine clean
            design with optimized performance, blending creativity with
            technology to make the web more intuitive.
          </p>

          {/* Download Resume */}
          <a
            href="https://drive.google.com/uc?export=download&id=18uO7VdbsxIKuOlq2PNH7FW1zQronBvn0"
            download
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full 
                      bg-gradient-to-r from-primary to-secondary text-white font-semibold 
                      shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 
                      relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Download className="w-5 h-5 group-hover:-translate-y-[2px] transition-transform duration-300" />
              Download Resume
            </span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
