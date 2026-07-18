function About() {
  return (
    <section className="section" id="about">
      <div className="container two-column">
        <div>
          <p className="section-label">About</p>
          <h2 className="section-title">From physics to intelligent software.</h2>
        </div>
        <div className="about-copy">
          <p>
            I recently completed an MSc in Data Analytics at Technological
            University of the Shannon, where my research focused on drone-based
            human detection for search-and-rescue operations.
          </p>
          <p>
            My work combines software engineering, machine learning and data
            analysis. I enjoy building systems end to end: designing APIs,
            structuring databases, training models, creating interfaces, testing
            features and deploying applications to the cloud.
          </p>
          <p>
            Before moving into software and data, I studied applied physics and
            completed research involving graphene-based biosensors. That
            scientific background shapes how I approach engineering problems:
            methodically, experimentally and with attention to real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
