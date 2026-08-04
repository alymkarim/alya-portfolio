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
            I'm a full-stack software engineer and AI engineer building applied
            products with Python, FastAPI, React and PostgreSQL. I take ideas
            beyond the prototype stage and turn them into complete, deployed
            applications.
          </p>

          <p>
            I work across the development process, from designing REST APIs and
            structuring databases to building React interfaces, integrating
            machine learning models, testing features and deploying applications
            to the cloud.
          </p>

          <p>
            I completed an MSc in Data Analytics with First Class Honours at
            Technological University of the Shannon. My research focused on
            drone-based human detection for search-and-rescue operations, while
            my earlier applied physics research involved graphene-based
            biosensors.
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
