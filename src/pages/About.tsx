import { t } from "../i18n";
function About() {
  return (
    <main className="page contentPage">
      <div className="pageHeading">
        <span>{t("ABOUT ME")}</span>
        <h1>{t("Building software with purpose.")}</h1>
        <p>{t("I am a Computer Science graduate focused on Java backend development, REST APIs and database-driven applications.")}</p>
      </div>

      <section className="aboutGrid">
        <article className="contentCard">
          <h2>{t("My Journey")}</h2>

          <p>{t("I have been developing StoreFlow independently. The project started as a courier management system and evolved into a SaaS platform for stores.")}</p>

          <p>{t("Through this project, I gained hands-on experience with layered architecture, DTO structures, business rules, exception handling, stock management and order workflows.")}</p>
        </article>

        <article className="contentCard">
          <h2>{t("Current Focus")}</h2>

          <ul>
            <li>{t("Java and Spring Boot backend development")}</li>
            <li>{t("RESTful API design")}</li>
            <li>{t("PostgreSQL and relational data modelling")}</li>
            <li>{t("Docker and deployment workflows")}</li>
            <li>{t("React and TypeScript interfaces")}</li>
          </ul>
        </article>

        <article className="contentCard educationCard">
          <h2>{t("Education")}</h2>

          <p className="cardLabel">{t("Bachelor's Degree")}</p>
          <h3>{t("Computer Science")}</h3>
          <p>{t("Universum International College — Kosovo")}</p>
          <p className="cardLabel">{t("Associate Degree")}</p>
          <h3>{t("Computer Programming")}</h3>
          <p>{t("Karabük University")}</p>
        </article>
      </section>
    </main>
  );
}

export default About;
