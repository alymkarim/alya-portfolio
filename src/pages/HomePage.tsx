import Hero from "../components/Hero";
import QuickFacts from "../components/QuickFacts";
import FeaturedProjects from "../components/FeaturedProjects";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";

function HomePage() {
  return (
    <>
      <Hero />
      <QuickFacts />
      <FeaturedProjects />
      <Projects />
      <Experience />
      <Education />
      <Skills />
    </>
  );
}

export default HomePage;