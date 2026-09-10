const projects = [
  {
    title: "StoreFlow",
    type: "SaaS Platform",
    description:
      "A store-based SaaS platform that manages products, stock, customer orders, couriers and public storefront operations.",
    technologies: [
      "Java 17",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "TypeScript",
    ],
    status: "In Development — Phase 19/25",
  },
  {
    title: "ToDoApp DevOps",
    type: "Backend & DevOps",
    description:
      "A CRUD REST API packaged with PostgreSQL using Docker and Docker Compose, including health checks and deployment workflows.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    status: "View on GitHub",
    link: "https://github.com/omerfarukkocakayaa/todoapp-devops",
  },
  {
    title: "Trendyol Stock V2",
    type: "Inventory Management",
    description:
      "A Java-based stock management project focused on tracking products and organizing inventory operations.",
    technologies: ["Java", "Stock Management", "Backend"],
    status: "View on GitHub",
    link: "https://github.com/omerfarukkocakayaa/TrendyolStokV2",
  },
  {
    title: "Appointment API",
    type: "REST API",
    description:
      "A backend API for managing appointment workflows through structured REST endpoints.",
    technologies: ["Java", "Spring Boot", "REST API"],
    status: "View on GitHub",
    link: "https://github.com/omerfarukkocakayaa/appointment-api",
  },
  {
    title: "Library Management API",
    type: "Backend API",
    description:
      "A library management backend designed around books, members and common lending operations.",
    technologies: ["Java", "Spring Boot", "REST API"],
    status: "View on GitHub",
    link: "https://github.com/omerfarukkocakayaa/library-management-api",
  },
  {
    title: "Python & AI Lab",
    type: "Experimental Projects",
    description:
      "Small applications exploring Flask APIs, text generation, machine learning and neural style transfer.",
    technologies: ["Python", "Flask", "Machine Learning"],
    status: "Ongoing Studies",
  },
];

function Projects() {
  return (
    <main className="page contentPage">
      <div className="pageHeading">
        <span>SELECTED WORK</span>
        <h1>Projects</h1>
        <p>
          Applications built while improving my backend, frontend and DevOps
          skills.
        </p>
      </div>

      <section className="projectGrid">
        {projects.map((project) => (
          <article className="projectItem" key={project.title}>
            <p className="cardLabel">{project.type}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className="technologyList">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.status} →
              </a>
            ) : (
              <strong>{project.status}</strong>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}

export default Projects;
