import { GraduationCap } from "lucide-react";

const educationItems = [
  {
  period: "2026",
  degree: "CompTIA Cybersecurity Analyst+ (CySA+) Preparation",
  institution: "SOLAS / Skills Connect",
  result: "In Progress (14-week programme)",
  description:
    "Industry-focused cybersecurity training preparing for the CompTIA CySA+ certification, covering threat detection, vulnerability management, security operations and incident response.",
  details: [
    "14-week part-time programme",
    "Preparing for CompTIA CySA+ certification",
    "Threat detection and security monitoring",
    "Vulnerability assessment and incident response",
  ],
},
  {
    period: "2025",
    degree: "Certificate in Software Engineering",
    institution:
      "Technological University of the Shannon × Ericsson",
    result: "Professional Certificate",
    description:
      "Industry-focused software engineering programme covering modern backend development, Agile software engineering, testing, Git workflows and collaborative software development.",
    details: [
      "Industry collaboration with Ericsson",
      "Team project: UrbanTech Co-Working Spaces",
      "Scrum Master (Sprint 2) and UI developer",
      "Java, REST APIs, software architecture and Agile development",
    ],
  },
  {
    period: "2024–2025",
    degree: "MSc in Data Analytics",
    institution: "Technological University of the Shannon",
    result: "First Class Honours (1:1)",
    description:
      "Focused on artificial intelligence, machine learning, data science, data engineering, computer vision and analytics for real-world applications.",
    details: [
      "Thesis: Drone-assisted human detection for search and rescue using YOLOv8",
      "Python, SQL, R, machine learning, deep learning, data engineering and visual analytics",
      "Research in AI, explainable machine learning, computer vision and data-driven decision making",
    ],
  },
  {
    period: "2016–2020",
    degree: "BSc (Hons) in Applied Physics",
    institution: "Universiti Teknologi PETRONAS",
    result: "Second Class Upper (CGPA 3.39 / 4.00)",
    description:
      "Built a strong scientific and engineering foundation through experimental physics, mathematics, materials science and computational problem-solving.",
    details: [
      "Final-year project: Graphene–iron oxide biosensor for mycotoxin detection",
      "Research in nanomaterials, biosensors and experimental physics",
      "Programming with C and Arduino",
    ],
  },
];

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="education-blob education-blob-one" />
      <div className="education-blob education-blob-two" />

      <div className="container">
        <div className="simple-section-heading">
          <div>
            <p className="section-label">Education</p>
            <h2 className="section-title">
              Where software meets science.
            </h2>
          </div>

          <GraduationCap className="education-heading-icon" size={52} />
        </div>

        <div className="education-grid">
          {educationItems.map((item, index) => (
            <article className="education-card" key={item.degree}>
              <div className="education-card-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <span className="education-period">{item.period}</span>

              <p className="education-institution">{item.institution}</p>
              <h3>{item.degree}</h3>
              <strong>{item.result}</strong>

              <p className="education-description">{item.description}</p>

              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
