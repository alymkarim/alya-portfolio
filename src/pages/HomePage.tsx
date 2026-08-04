import { useEffect } from "react";
import Hero from "../components/Hero";
import QuickFacts from "../components/QuickFacts";
import FeaturedProjects from "../components/FeaturedProjects";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Articles from "../components/Articles";
import Playground from "../components/Playground";
import Contact from "../components/Contact";

function HomePage({ scrollTarget }: { scrollTarget?: string }) {
  useEffect(() => {
    if (scrollTarget) {
      document
        .getElementById(scrollTarget)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTarget]);

  return (
    <>
      <Hero />
      <QuickFacts />
      <FeaturedProjects />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Articles />
      <Playground />
      <Contact />
    </>
  );
}

export default HomePage;