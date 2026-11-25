import { t } from "../i18n";
import { projects } from "../data/projects";

function Projects() {
  return (
    <main className="page contentPage">
      <div className="pageHeading">
        <span>{t("SELECTED WORK")}</span>
        <h1>{t("Projects")}</h1>
        <p>{t("Applications built while improving my backend, frontend and DevOps skills.")}</p>
      </div>

      <section className="projectGrid">
        {projects.map((project) => (
          <article className="projectItem" key={project.title}>
            <p className="cardLabel">{t(project.type)}</p>
            <h2>{project.title}</h2>
            <p>{t(project.description)}</p>

            <div className="technologyList">
              {project.technologies.map((technology) => (
                <span key={technology}>{t(technology)}</span>
              ))}
            </div>

            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {t(project.status)} →
              </a>
            ) : (
              <strong>{t(project.status)}</strong>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}

export default Projects;
