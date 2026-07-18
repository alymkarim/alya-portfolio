import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Articles from "./components/Articles";
import Playground from "./components/Playground";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Articles />
        <Playground />
        <Contact />
      </main>
    </>
  );
}

export default App;
