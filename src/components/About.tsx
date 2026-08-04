import Reveal from "./Reveal";

function About() {
  return (
    <section className="section" id="about">
      <div className="container two-column">
        <Reveal>
          <div>
            <p className="section-label">About</p>
            <h2 className="section-title">From physics to intelligent software.</h2>
          </div>
        </Reveal>
        <div className="about-copy">
          <p>
            I'm a recent MSc Data Analytics graduate with a background in
            applied physics, building full-stack applications and AI products
            with Python, FastAPI, React and PostgreSQL.
          </p>

          <p>
            My work spans the full development process, from designing REST
            APIs and structuring databases to building React interfaces,
            integrating ML models and deploying to the cloud.
          </p>

          <p>
            I completed my MSc at Technological University of the Shannon,
            where my research focused on drone-based human detection for
            search-and-rescue. Earlier applied physics research involved
            graphene-based biosensors.
          </p>

          <p>
            That combination of scientific research and software engineering
            shapes how I approach problems: with curiosity, structured
            experimentation and attention to how a system will work outside a
            notebook.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
