import Hero from "../components/Hero";
import QuickFacts from "../components/QuickFacts";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";

function HomePage() {
  return (
    <>
      <Hero />
      <QuickFacts />
      <Projects />
      <Experience />
      <Education />
      <Skills />
    </>
  );
}

export default HomePage;