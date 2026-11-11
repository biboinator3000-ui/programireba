import Icon from "./Icon";
import TechBadge from "./TechBadge";

export default function ProjectCard({ project, index }) {
  return (
    <article
      className="project-card"
      style={{ "--project-accent": project.accent, "--card-index": index }}
      aria-labelledby={`project-${project.id}-title`}
    >
      <div className="project-card__media">
        <span className="project-card__index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="project-card__wordmark" aria-hidden="true">
          {project.title}
        </span>
        <div className="project-card__meta">
          <span className="project-card__tag">{project.category}</span>
          <span className="project-card__year">{project.year}</span>
        </div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title" id={`project-${project.id}-title`}>
          {project.title}
        </h3>
        <p className="project-card__description">{project.description}</p>
        <ul className="project-card__tech" aria-label={`${project.title} — ტექნოლოგიები`}>
          {project.technologies.map((tech) => (
            <li key={tech}>
              <TechBadge>{tech}</TechBadge>
            </li>
          ))}
        </ul>
        <div className="project-card__links">
          {project.links.map((link) => {
            const isExternal = link.href.startsWith("http");

            return (
              <a
                key={link.label}
                className="project-link"
                href={link.href}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
                <Icon name="arrow-up-right" size={16} />
                {isExternal && <span className="sr-only"> (იხსნება ახალ ჩანართში)</span>}
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}
