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
            I am a recent MSc Data Analytics graduate with a background in
            applied physics. I build full-stack applications and AI products
            with Python, FastAPI, React and PostgreSQL, covering everything
            from designing REST APIs and structuring databases to building
            React interfaces, integrating ML models and deploying to the
            cloud.
          </p>

          <p>
            I completed my MSc at Technological University of the Shannon,
            where my research focused on drone-based human detection for
            search-and-rescue. Before that, I worked on graphene-based
            biosensors during my applied physics degree.
          </p>

          <p>
            Beyond my core studies I have built tools across a wide range of
            technologies: computer vision pipelines with OpenCV and
            TensorFlow, real time data dashboards with Plotly and Streamlit,
            REST APIs with FastAPI and Docker, and full stack dashboards
            combining React with PostgreSQL. I also write on Medium when I
            can, sharing lessons from my learning journey and the projects
            that push me to upskill.
          </p>

          <p>
            I am currently sharpening my skills in system design and cloud
            architecture while looking for a junior software engineering or
            AI engineering role where I can contribute and keep learning.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
