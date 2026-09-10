const contactLinks = [
  {
    label: "Email",
    value: "omerfarukkocakayaa@gmail.com",
    link: "mailto:omerfarukkocakayaa@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/omerfarukkocakaya",
    link: "https://www.linkedin.com/in/omerfarukkocakaya",
  },
  {
    label: "GitHub",
    value: "github.com/omerfarukkocakayaa",
    link: "https://github.com/omerfarukkocakayaa",
  },
];

function Contact() {
  return (
    <main className="page contactPage">
      <section className="contactIntro">
        <span>CONTACT</span>
        <h1>Let&apos;s build something meaningful.</h1>

        <p>
          I am interested in junior software development opportunities,
          collaborative projects and backend-focused roles.
        </p>
      </section>

      <section className="contactLinks">
        {contactLinks.map((contact) => (
          <a
            className="contactItem"
            href={contact.link}
            target={contact.label === "Email" ? undefined : "_blank"}
            rel={contact.label === "Email" ? undefined : "noreferrer"}
            key={contact.label}
          >
            <div>
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
            </div>

            <span className="contactArrow">↗</span>
          </a>
        ))}
      </section>
    </main>
  );
}

export default Contact;