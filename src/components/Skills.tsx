import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Frontend",
    description: "Responsive interfaces built around clear user workflows.",
    skills: ["React", "TypeScript", "Vite", "HTML", "CSS"],
  },
  {
    title: "Backend",
    description: "APIs, authentication, business logic and service integration.",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "SQLAlchemy",
      "JWT Authentication",
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Applied AI systems spanning computer vision and document intelligence.",
    skills: ["PyTorch", "YOLO", "OpenCV", "LangChain", "scikit-learn"],
  },
  {
    title: "Data & Databases",
    description: "Data modelling, analysis and dependable storage workflows.",
    skills: ["PostgreSQL", "Supabase", "MongoDB", "Pandas", "NumPy"],
  },
  {
    title: "Cloud & Deployment",
    description: "Taking applications from local development to deployed products.",
    skills: ["Docker", "Google Cloud", "Vercel", "Render", "GitHub"],
  },
  {
    title: "Engineering Practice",
    description: "Practices that make software easier to test, debug and maintain.",
    skills: ["Git", "Testing", "Debugging", "Logging", "API Documentation"],
  },
];

function Skills() {
  return (
    <section className="section skills-editorial-section" id="skills">
      <div className="skills-orbit skills-orbit-one" />
      <div className="skills-orbit skills-orbit-two" />

      <div className="container">
        <Reveal>
          <div className="skills-editorial-heading">
            <div>
              <p className="section-label">Capabilities</p>
              <h2 className="section-title">Tools I use to turn ideas into working products.</h2>
            </div>

            <p>
              I work across the full product flow: understanding the problem,
              shaping the data, building the API, creating the interface, testing
              the system and deploying it.
            </p>
          </div>
        </Reveal>

        <div className="skills-editorial-grid">
          {skillGroups.map((group, index) => (
            <article className="skills-editorial-card" key={group.title}>
              <span className="skills-editorial-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="skills-editorial-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
