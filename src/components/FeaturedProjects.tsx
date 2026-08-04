import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { featuredProjects, type Project } from "../data/projects";
import ProjectDetails from "./ProjectDetails";
import Reveal from "./Reveal";

function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="section featured-block" id="featured">
      <div className="container">
        <Reveal>
          <div className="projects-heading">
            <div>
              <p className="section-label">Highlights</p>
              <h2 className="section-title">
                Featured work across software, AI and data.
              </h2>
            </div>

            <p>
              The projects I'm most proud of. Select any card to open the full
              case study.
            </p>
          </div>
        </Reveal>

        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <article
              className="featured-card"
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <div className="featured-card-image-wrap">
                <img
                  className="featured-card-image"
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                />
                <span className="project-status">{project.status}</span>
              </div>

              <div className="featured-card-content">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>

                <div className="featured-card-tech">
                  {project.technologies.slice(0, 3).map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {project.demo ? (
                  <a
                    className="featured-card-action"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Live Demo <ExternalLink size={17} />
                  </a>
                ) : project.github ? (
                  <a
                    className="featured-card-action"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    View repo <Github size={17} />
                  </a>
                ) : (
                  <span className="featured-card-action featured-card-action-soon">
                    Coming soon <ArrowUpRight size={17} />
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="featured-details-wrap">
          <div className="container">
            <ProjectDetails
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedProjects;