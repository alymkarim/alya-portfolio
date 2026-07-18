import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  ExternalLink,
  Github,
  X,
  FileText,
  Youtube,
} from "lucide-react";
import {
  projects,
  projectFilters,
  type Project,
} from "../data/projects";


function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">

      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer">
          <Github size={18} />
          GitHub
        </a>
      )}

      {project.demo && (
        <a href={project.demo} target="_blank" rel="noreferrer">
          <ExternalLink size={18} />
          Live Demo
        </a>
      )}

      {project.paper && (
        <a href={project.paper} target="_blank" rel="noreferrer">
          <FileText size={18} />
          Paper
        </a>
      )}

      {project.poster && (
        <a href={project.poster} target="_blank" rel="noreferrer">
          <FileText size={18} />
          Poster
        </a>
      )}

      {project.youtube && (
        <a href={project.youtube} target="_blank" rel="noreferrer">
          <Youtube size={18} />
          Video
        </a>
      )}
      
      {project.youtube2 && (
        <a href={project.youtube2} target="_blank" rel="noreferrer">
          <Youtube size={17} />
          Video 2
        </a>
      )}

      {project.facebook && (
        <a href={project.facebook} target="_blank" rel="noreferrer">
          <ExternalLink size={18} />
          Facebook
        </a>
      )}

    </div>
  );
}

function DetailList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="project-detail-block">
      <h4>{title}</h4>
      <ul className="project-details-highlights">
        {items.map((item) => (
          <li key={item}>
            <Check size={17} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof projectFilters)[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.category.includes(activeFilter),
    );
  }, [activeFilter]);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  function changeFilter(filter: (typeof projectFilters)[number]) {
    setActiveFilter(filter);
    setSelectedProject(null);
    setShowAll(false);
  }

  function selectProject(project: Project) {
    setSelectedProject(project);

    window.setTimeout(() => {
      document
        .querySelector(".project-details")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  }

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="projects-heading">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="section-title">
              Projects across software, AI, data and research.
            </h2>
          </div>

          <p>
            Completed work, active builds, scientific research and collaborative
            projects. Select any card to open the full project case study.
          </p>
        </div>

        <div className="project-toolbar">
          <p className="project-count">
            {filteredProjects.length} project
            {filteredProjects.length === 1 ? "" : "s"}
          </p>

          <div className="project-filters" aria-label="Filter projects">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter
                    ? "project-filter project-filter-active"
                    : "project-filter"
                }
                onClick={() => changeFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              className={
                selectedProject?.id === project.id
                  ? "project-card project-card-selected"
                  : "project-card"
              }
              onClick={() => selectProject(project)}
              aria-expanded={selectedProject?.id === project.id}
            >
              <div className="project-card-image-wrap">
                <img
                  className="project-card-image"
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                />

                <span className="project-card-arrow" aria-hidden="true">
                  <ArrowUpRight size={21} />
                </span>

                <span className="project-status">{project.status}</span>
              </div>

              <div className="project-card-content">
                <div className="project-card-heading">
                  <h3>{project.title}</h3>
                  <span>{project.year}</span>
                </div>

                <p>{project.shortDescription}</p>

                <div className="project-card-tech">
                  {project.technologies.slice(0, 3).map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredProjects.length > 6 && (
          <button
            type="button"
            className="projects-show-more"
            onClick={() => {
              setShowAll((current) => !current);
              setSelectedProject(null);
            }}
          >
            {showAll ? "Show fewer projects" : "Show all projects"}
            <ChevronDown
              size={18}
              className={showAll ? "show-more-icon-open" : ""}
            />
          </button>
        )}

        {selectedProject && (
          <article className="project-details" aria-live="polite">
            <button
              type="button"
              className="project-details-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              <X size={22} />
            </button>

            <div className="project-details-image-wrap">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} project preview`}
              />
            </div>

            <div className="project-details-content">
              <p className="project-details-category">
                {selectedProject.category.join(" · ")}
              </p>

              <h3>{selectedProject.title}</h3>

              <div className="project-meta">
                <span>{selectedProject.year}</span>
                <span>{selectedProject.status}</span>
                <span>{selectedProject.role}</span>
              </div>

              <p>{selectedProject.description}</p>

              <div className="project-problem">
                <h4>Problem</h4>
                <p>{selectedProject.problem}</p>
              </div>

              <div className="project-tech-list">
                {selectedProject.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-case-study-grid">
                {selectedProject.architecture && (
                  <DetailList
                    title="Architecture"
                    items={selectedProject.architecture}
                  />
                )}

                <DetailList
                  title="Key features"
                  items={selectedProject.highlights}
                />

                <DetailList
                  title="Challenges"
                  items={selectedProject.challenges}
                />

                <DetailList
                  title="Lessons learned"
                  items={selectedProject.lessons}
                />
              </div>

              <ProjectLinks project={selectedProject} />
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

export default Projects;
