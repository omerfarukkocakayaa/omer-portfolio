import { t } from "../i18n";
import { FaGitAlt, FaJava } from "react-icons/fa";
import {
  SiApachemaven,
  SiCss,
  SiDocker,
  SiFlask,
  SiGithub,
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";

const groups = [
  { title: "Backend & Database", items: [
    { name: "Java", Icon: FaJava, color: "#f89820" },
    { name: "Spring Boot", Icon: SiSpringboot, color: "#6db33f" },
    { name: "Hibernate", Icon: SiHibernate, color: "#5b9cff" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#d4b45f" },
    { name: "Maven", Icon: SiApachemaven, color: "#43e6cf" },
  ] },
  { title: "Frontend", items: [
    { name: "React", Icon: SiReact, color: "#61dafb" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
    { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
    { name: "HTML", Icon: SiHtml5, color: "#e34f26" },
    { name: "CSS", Icon: SiCss, color: "#1572b6" },
  ] },
  { title: "DevOps & Additional", items: [
    { name: "Docker", Icon: SiDocker, color: "#2496ed" },
    { name: "Git", Icon: FaGitAlt, color: "#f05032" },
    { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
    { name: "Python", Icon: SiPython, color: "#3776ab" },
    { name: "Flask", Icon: SiFlask, color: "#ffffff" },
  ] },
];

function Skills() {
  return (
    <main className="page contentPage">
      <div className="pageHeading">
        <span>{t("TECHNICAL SKILLS")}</span>
        <h1>{t("Technologies and tools")}</h1>
        <p>{t("Technologies I use while developing backend applications, modern interfaces and deployment workflows.")}</p>
      </div>

      {groups.map(({ title, items }) => (
        <section className="skillSection" key={title}>
          <h2>{t(title)}</h2>
          <div className="technologyIcons">
            {items.map(({ name, Icon, color }) => (
              <div className="technologyIcon" key={name}>
                <Icon color={color} aria-hidden="true" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default Skills;
