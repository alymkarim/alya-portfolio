import {
  Check,
  ExternalLink,
  FileText,
  Github,
  X,
  Youtube,
} from "lucide-react";
import type { Project } from "../data/projects";

export function ProjectLinks({ project }: { project: Project }) {
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

function ProjectDetails({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <article className="project-details" aria-live="polite">
      <button
        type="button"
        className="project-details-close"
        onClick={onClose}
        aria-label="Close project details"
      >
        <X size={22} />
      </button>

      <div className="project-details-image-wrap">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
        />
      </div>

      <div className="project-details-content">
        <p className="project-details-category">
          {project.category.join(" · ")}
        </p>

        <h3>{project.title}</h3>

        <div className="project-meta">
          <span>{project.year}</span>
          <span>{project.status}</span>
          <span>{project.role}</span>
        </div>

        <p>{project.description}</p>

        <div className="project-problem">
          <h4>Problem</h4>
          <p>{project.problem}</p>
        </div>

        <div className="project-tech-list">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-case-study-grid">
          {project.architecture && (
            <DetailList title="Architecture" items={project.architecture} />
          )}

          <DetailList title="Key features" items={project.highlights} />

          <DetailList title="Challenges" items={project.challenges} />

          <DetailList title="Lessons learned" items={project.lessons} />
        </div>

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default ProjectDetails;
