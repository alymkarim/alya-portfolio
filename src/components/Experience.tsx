import { BriefcaseBusiness, Users } from "lucide-react";

const experienceItems = [

  {
    period: "2024–2025",
    role: "Class Representative",
    organisation: "Technological University of the Shannon",
    icon: Users,
    description:
      "Represented MSc Data Analytics students and acted as a communication link between the class, lecturers and university staff.",
    points: [
      "Raised student feedback and academic concerns",
      "Communicated programme updates and important information",
      "Supported constructive discussions between students and staff",
      "Developed stakeholder communication and representative leadership skills",
    ],
  },
  {
    period: "2021–2025",
    role: "Student Council and Advisory Board Representative",
    organisation: "RUN-EU",
    icon: Users,
    description:
      "Represented students within the Regional University Network – European University across international council and advisory activities.",
    points: [
      "Contributed to student-focused discussions and university initiatives",
      "Collaborated with students and staff across European institutions",
      "Provided student perspectives on education, mobility and engagement",
      "Developed international communication, leadership and stakeholder skills",
    ],
  },
  {
    period: "2021–2023",
    role: "Research Assistant",
    organisation: "Technological University of the Shannon",
    icon: BriefcaseBusiness,
    description:
      "Supported applied research involving polymers, nanomaterials, composite materials and additive manufacturing.",
    points: [
      "Assisted with experimental preparation, testing and data collection",
      "Analysed material properties and research results",
      "Contributed to research involving thermally conductive 3D-printing resins",
      "Documented experimental methods, observations and findings",
    ],
  },
  {
    period: "2020–2021",
    role: "Product Support Associate",
    organisation: "Clarivate",
    icon: BriefcaseBusiness,
    description:
      "Supported users of research and intellectual-property information platforms by investigating product and technical issues.",
    points: [
      "Responded to customer queries and investigated platform issues",
      "Explained technical and product information to users",
      "Collaborated with internal teams to resolve customer problems",
      "Developed troubleshooting, communication and customer-support skills",
    ],
  },
  {
    period: "2021",
    role: "Public Relations Manager",
    organisation: "Cerita Kuantan × Tourism Malaysia",
    icon: Users,
    description:
      "Supported tourism promotion through public relations, digital communication and destination-focused storytelling.",
    points: [
      "Managed public-facing communications and promotional content",
      "Supported digital storytelling for local tourism initiatives",
      "Coordinated communication with project stakeholders",
      "Combined research, writing and audience-focused communication",
    ],
  },
];

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="experience-blob" />

      <div className="container">
        <div className="simple-section-heading">
          <div>
            <p className="section-label">Experience</p>
            <h2 className="section-title">
                Experience across tech, research and leadership.
            </h2>
          </div>

          <p>
              Experience spanning research, technical support, 
              international collaboration and student leadership.
          </p>
        </div>

        <div className="experience-list">
          {experienceItems.map((item) => {
            const Icon = item.icon;

            return (
              <article className="experience-card" key={item.role}>
                <div className="experience-card-top">
                  <div className="experience-icon">
                    <Icon size={23} />
                  </div>

                  <span>{item.period}</span>
                </div>

                <div className="experience-card-main">
                  <p>{item.organisation}</p>
                  <h3>{item.role}</h3>
                  <span>{item.description}</span>
                </div>

                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
