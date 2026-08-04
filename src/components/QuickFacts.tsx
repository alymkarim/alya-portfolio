const factGroups = [
  {
    title: "Full-stack",
    skills: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Applied AI",
    skills: ["PyTorch", "YOLO", "OpenCV", "LangChain"],
  },
  {
    title: "Data & Analytics",
    skills: ["Python", "SQL", "Pandas", "Tableau"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "Google Cloud", "Vercel", "GitHub"],
  },
];

function QuickFacts() {
  return (
    <section className="quick-facts" aria-label="Core skills">
      <div className="container">
        <ul className="quick-facts-list">
          {factGroups.map((group) => (
            <li className="quick-fact-item" key={group.title}>
              <strong>{group.title}</strong>
              <span>{group.skills.join(" · ")}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default QuickFacts;