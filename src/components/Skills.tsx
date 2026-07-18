const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces that are responsive, accessible and easy to use.",
    skills: ["React", "TypeScript", "Vite", "HTML", "CSS"],
  },
  {
    title: "Backend",
    description: "APIs, business logic, authentication and service design.",
    skills: ["Python", "FastAPI", "Java", "REST APIs", "SQLAlchemy"],
  },
  {
    title: "AI & Machine Learning",
    description: "Applied AI systems from computer vision to RAG workflows.",
    skills: ["PyTorch", "YOLO", "LangChain", "RAG", "scikit-learn"],
  },
  {
    title: "Data",
    description: "Structured analysis, modelling and reliable data workflows.",
    skills: ["PostgreSQL", "MongoDB", "Pandas", "NumPy", "R"],
  },
  {
    title: "Cloud & Delivery",
    description: "Deploying and improving software beyond localhost.",
    skills: ["Docker", "GitHub Actions", "Vercel", "Render", "Supabase"],
  },
  {
    title: "Engineering Practice",
    description: "The habits that make software maintainable and dependable.",
    skills: ["Git", "Testing", "Debugging", "Logging", "CI/CD"],
  },
];

function Skills() {
  return (
    <section className="section skills-editorial-section" id="skills">
      <div className="skills-orbit skills-orbit-one" />
      <div className="skills-orbit skills-orbit-two" />

      <div className="container">
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
