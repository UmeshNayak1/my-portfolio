import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from "lucide-react";
import { toast } from "sonner";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace these IDs with your own from EmailJS
    const SERVICE_ID = "service_vvn1ueo";
    const TEMPLATE_ID = "template_ikl1fqg";
    const PUBLIC_KEY = "fLTmP6FGupigqPauU";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Oops! Something went wrong. Please try again.");
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "umeshlnayak9591@gmail.com",
      link: "mailto:umeshlnayak9591@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 (879) 207-5206",
      link: "tel:+918792075206",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "bengaluru, India",
      link: "#",
    },
  ];

  const socials = [
    { icon: Github, link: "https://github.com/UmeshNayak1", label: "GitHub" },
    { icon: Linkedin, link: "https://linkedin.com/in/umeshlnayak", label: "LinkedIn" },
    { icon: Instagram, link: "https://www.instagram.com/umesh_nayak_1/", label: "Instagram" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div
                className={`glass-effect rounded-xl p-8 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <h3 className="text-2xl font-bold mb-6 text-foreground">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center p-4 bg-muted/30 rounded-lg border border-primary/20 hover:border-primary/40 hover:glow-border transition-all duration-300 group"
                    >
                      <info.icon className="w-6 h-6 text-primary mr-4 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-muted-foreground mb-4">Follow me on social media:</p>
                  <div className="flex gap-4">
                    {socials.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-muted/30 border border-primary/20 flex items-center justify-center hover:border-primary hover:glow-border transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-primary" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`glass-effect rounded-xl p-8 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-muted/30 border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-muted/30 border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-muted/30 border-primary/20 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-border"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <p className="text-center text-muted-foreground">© 2025 Umesh Nayak. All rights reserved.</p>
      </footer>
    </section>
  );
};
