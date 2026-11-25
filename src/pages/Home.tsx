import { t } from "../i18n";
import ProfileCard from "../components/ProfileCard";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <main className="page homePage">
      <section className="homeIntro">
        <p className="greeting">{t("Hi, there! I'm")}</p>

        <h1>Ömer Faruk Kocakaya</h1>

        <h2>{t("Java Backend Developer")}</h2>

        <p className="introText">{t("I build backend applications using Java, Spring Boot and PostgreSQL. My work focuses on REST APIs, clean architecture and reliable business processes. I also develop modern interfaces with React and TypeScript.")}</p>

        <div className="socialLinks">
          <a
            href="mailto:omerfarukkocakayaa@gmail.com"
            aria-label={t("Send email")}
            title={t("Email")}
          >
            <MdEmail />
          </a>

          <a
            href="https://www.linkedin.com/in/omerfarukkocakaya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("LinkedIn profile")}
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/omerfarukkocakayaa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("GitHub profile")}
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </section>

      <ProfileCard />
    </main>
  );
}

export default Home;
