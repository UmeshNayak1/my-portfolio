import { useEffect, useState, useRef } from "react";
import { Button } from "./ui/button";
import {
  ArrowDown,
  ArrowUp,
  FolderKanban,
  User,
  Phone,
  Smile,
  Plus,
  X,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Code,
} from "lucide-react";
import Confetti from "react-confetti";
import toast, { Toaster } from "react-hot-toast";
import UmeshProfile from "../assets/UMESHprofile12344445.jpg";


export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Initial position → bottom-center
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight - 80 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null); // Ref for click-outside detection

  useEffect(() => setIsVisible(true), []);

  // 🔥 Updated stylish confetti + toast
  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);

    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-slide-in" : "animate-slide-out"
          } bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/20 backdrop-blur-sm`}
          style={{ transform: t.visible ? "translateY(0)" : "translateY(-20px)" }}
        >
          <span className="text-3xl animate-bounce">🎉</span>
          <div>
            <strong className="text-lg font-bold">Thank you!</strong> for liking and visiting my portfolio 😊
          </div>
        </div>
      ),
      { duration: 4000 }
    );
  };

  const menuOptions = [
    { icon: ArrowUp, label: "Top", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { icon: FolderKanban, label: "Projects", action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: User, label: "About", action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: Code, label: "Skills", action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: Phone, label: "Contact", action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: Smile, label: "Welcome", action: handleConfetti },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/UmeshNayak1", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/umeshlnayak/", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/umesh_nayak_1", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/umeshlnayak9591", label: "Twitter" },
  ];

  // Drag handlers
  const handleMouseDown = (e: MouseEvent | any) => {
    setDragging(true);
    offset.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };
  const handleMouseMove = (e: MouseEvent | any) => {
    if (dragging) setPosition({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
  };
  const handleMouseUp = () => setDragging(false);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Dynamic menu positions
  const getMenuPositions = () => {
    const threshold = 150;
    const { x, y } = position;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const radius = 120;

    let startAngle = -90;
    let endAngle = 90;

    if (x < threshold) startAngle = -90, endAngle = 90;
    else if (x > w - threshold) startAngle = 90, endAngle = 270;
    else if (y < threshold) startAngle = 0, endAngle = 180;
    else if (y > h - threshold) startAngle = -180, endAngle = 0;
    else startAngle = -90, endAngle = 90;

    return menuOptions.map((_, i) => {
      const angle = ((startAngle + ((endAngle - startAngle) / (menuOptions.length - 1)) * i) * Math.PI) / 180;
      return {
        dx: menuOpen ? Math.cos(angle) * radius : 0,
        dy: menuOpen ? Math.sin(angle) * radius : 0,
      };
    });
  };

  const positions = getMenuPositions();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-50" />

      {/* Floating circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      {showConfetti && <Confetti recycle={false} numberOfPieces={500} colors={["#ff0055", "#00ffee", "#ffcc00", "#ff66ff", "#33ffcc", "#6600ff"]} />}

      {/* Floating circular menu */}
      <div
        ref={menuRef} // <-- attach ref here
        className="fixed z-50"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        {menuOptions.map(({ icon: Icon, label, action }, i) => (
          <button
            key={i}
            aria-label={label}
            onClick={action}
            style={{
              position: "absolute",
              left: positions[i].dx,
              top: positions[i].dy,
              opacity: menuOpen ? 1 : 0,
              transform: "translate(-50%, -50%)",
            }}
            className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-primary hover:text-secondary hover:scale-110 bg-card shadow-md transition-all duration-300"
          >
            <Icon className="w-6 h-6" />
          </button>
        ))}

        {/* Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          onMouseDown={handleMouseDown}
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-grab"
        >
          {menuOpen ? <X size={26} /> : <Plus size={26} />}
        </button>
      </div>

      {/* Social links */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {socialLinks.map(({ icon: Icon, href, label }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-primary hover:text-secondary transition-all duration-300 hover:scale-110 glow-border"
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>

      {/* Hero Content */}
      <div
        className={`container mx-auto px-6 z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-around gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-primary text-lg md:text-xl mb-4 glow-text">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">Umesh Nayak</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Aspiring Software Engineer | Full-Stack Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Creating innovative digital experiences with modern technologies. Passionate about clean
              code, beautiful design, and solving complex problems.
            </p>
            <div className="flex flex-col gap-6 items-center lg:items-start">
              <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow-border"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get In Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Projects
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Frame */}
          <div className="flex-1 flex justify-center lg:justify-center">
            <div className="relative translate-x-8 lg:translate-x-4">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-30 animate-glow-pulse" />
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-br from-primary via-secondary to-primary animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-card p-3">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-muted">
                    <img
                      src={UmeshProfile}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 glass-effect rounded-lg p-2 animate-float">
                <div className="w-full h-full flex items-center justify-center text-primary text-3xl">{'</>'}</div>
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-20 h-20 glass-effect rounded-lg p-2 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-full h-full flex items-center justify-center text-secondary text-3xl">{'{}'}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Toast container */}
      <Toaster position="top-center" />
    </section>
  );
};
