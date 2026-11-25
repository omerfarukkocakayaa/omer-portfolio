import { t } from "../i18n";
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
        <span>{t("CONTACT")}</span>
        <h1>{t("Let's build something meaningful.")}</h1>

        <p>{t("I am interested in junior software development opportunities, collaborative projects and backend-focused roles.")}</p>
      </section>

      <section className="contactLinks">
        {contactLinks.map((contact) => (
          <a
            className="contactItem"
            href={contact.link}
            target={contact.label === "Email" ? undefined : "_blank"}
            rel={contact.label === "Email" ? undefined : "noopener noreferrer"}
            key={t(contact.label)}
          >
            <div>
              <span>{t(contact.label)}</span>
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
