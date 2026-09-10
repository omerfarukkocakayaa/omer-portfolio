import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <main className="page homePage">
      <section className="homeIntro">
        <p className="greeting">Hi, there! I&apos;m</p>

        <h1>Ömer Faruk Kocakaya</h1>

        <h2>Java Backend Developer</h2>

        <p className="introText">
          I build backend applications using Java, Spring Boot and PostgreSQL.
          My work focuses on REST APIs, clean architecture and reliable
          business processes. I also develop modern interfaces with React and
          TypeScript.
        </p>

        <div className="socialLinks">
          <a
            href="mailto:omerfarukkocakayaa@gmail.com"
            aria-label="Send email"
            title="Email"
          >
            <MdEmail />
          </a>

          <a
            href="https://www.linkedin.com/in/omerfarukkocakaya"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/omerfarukkocakayaa"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </section>

      <aside className="developerCard">
        <div className="photoPlaceholder">OFK</div>

        <div className="developerInfo">
          <h3>Ömer Faruk Kocakaya</h3>
          <p>Junior Software Developer</p>
          <span>Karabük, Türkiye</span>
        </div>
      </aside>
    </main>
  );
}

export default Home;