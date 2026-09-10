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

function Skills() {
  return (
    <main className="page contentPage">
      <div className="pageHeading">
        <span>TECHNICAL SKILLS</span>
        <h1>Technologies and tools</h1>
        <p>
          Technologies I use while developing backend applications, modern
          interfaces and deployment workflows.
        </p>
      </div>

      <section className="skillSection">
        <h2>Backend & Database</h2>

        <div className="technologyIcons">
          <div className="technologyIcon">
            <FaJava />
            <span>Java</span>
          </div>

          <div className="technologyIcon">
            <SiSpringboot />
            <span>Spring Boot</span>
          </div>

          <div className="technologyIcon">
            <SiHibernate />
            <span>Hibernate</span>
          </div>

          <div className="technologyIcon">
            <SiPostgresql />
            <span>PostgreSQL</span>
          </div>

          <div className="technologyIcon">
            <SiApachemaven />
            <span>Maven</span>
          </div>
        </div>
      </section>

      <section className="skillSection">
        <h2>Frontend</h2>

        <div className="technologyIcons">
          <div className="technologyIcon">
            <SiReact />
            <span>React</span>
          </div>

          <div className="technologyIcon">
            <SiTypescript />
            <span>TypeScript</span>
          </div>

          <div className="technologyIcon">
            <SiJavascript />
            <span>JavaScript</span>
          </div>

          <div className="technologyIcon">
            <SiHtml5 />
            <span>HTML</span>
          </div>

          <div className="technologyIcon">
            <SiCss />
            <span>CSS</span>
          </div>
        </div>
      </section>

      <section className="skillSection">
        <h2>DevOps & Additional</h2>

        <div className="technologyIcons">
          <div className="technologyIcon">
            <SiDocker />
            <span>Docker</span>
          </div>

          <div className="technologyIcon">
            <FaGitAlt />
            <span>Git</span>
          </div>

          <div className="technologyIcon">
            <SiGithub />
            <span>GitHub</span>
          </div>

          <div className="technologyIcon">
            <SiPython />
            <span>Python</span>
          </div>

          <div className="technologyIcon">
            <SiFlask />
            <span>Flask</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;