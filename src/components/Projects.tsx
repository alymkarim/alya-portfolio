import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import {
  projects,
  projectFilters,
  type Project,
} from "../data/projects";
import ProjectDetails from "./ProjectDetails";
import Reveal from "./Reveal";

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
        <Reveal>
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
        </Reveal>

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
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}

export default Projects;
