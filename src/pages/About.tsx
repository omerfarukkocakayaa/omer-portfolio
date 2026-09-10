function About() {
  return (
    <main className="page contentPage">
      <div className="pageHeading">
        <span>ABOUT ME</span>
        <h1>Building software with purpose.</h1>
        <p>
          I am a Computer Science graduate focused on Java backend development,
          REST APIs and database-driven applications.
        </p>
      </div>

      <section className="aboutGrid">
        <article className="contentCard">
          <h2>My Journey</h2>

          <p>
            I have been developing StoreFlow independently for the past six
            months. The project started as a courier management system and
            evolved into a SaaS platform for stores.
          </p>

          <p>
            Through this project, I gained hands-on experience with layered
            architecture, DTO structures, business rules, exception handling,
            stock management and order workflows.
          </p>
        </article>

        <article className="contentCard">
          <h2>Current Focus</h2>

          <ul>
            <li>Java and Spring Boot backend development</li>
            <li>RESTful API design</li>
            <li>PostgreSQL and relational data modelling</li>
            <li>Docker and deployment workflows</li>
            <li>React and TypeScript interfaces</li>
          </ul>
        </article>

        <article className="contentCard educationCard">
          <h2>Education</h2>

          <p className="cardLabel">Bachelor&apos;s Degree</p>
          <h3>Computer Science</h3>
          <p>Universum International College — Kosovo</p>
        </article>
      </section>
    </main>
  );
}

export default About;