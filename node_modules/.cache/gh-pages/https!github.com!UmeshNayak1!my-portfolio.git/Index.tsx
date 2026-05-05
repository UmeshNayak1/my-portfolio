import { CustomCursor } from "../src/components/CustomCursor";
import { Navigation } from "../src/components/Navigation";
import { Hero } from "../src/components/Hero";
import { About } from "../src/components/About";
import { Skills } from "../src/components/Skills";
import { Projects } from "../src/components/Projects";
import { Experience } from "../src/components/Experience";
import { Education } from "../src/components/Education";
import { Contact } from "../src/components/Contact";

const Index = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
