import { NavLink, useLocation } from "react-router-dom";
import { language, t } from "../i18n";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const nextLanguage = language === "tr" ? "en" : "tr";
  return (
    <header className="navbar">
      <nav aria-label={t("Main navigation")}>
        {links.map(({ path, label }) => (
          <NavLink key={path} to={path} end={path === "/"}>{t(label)}</NavLink>
        ))}
        <a className="languageLink" href={`/${nextLanguage}/#${pathname}`} lang={nextLanguage} aria-label={nextLanguage === "tr" ? "Türkçe" : "English"}>{nextLanguage.toUpperCase()}</a>
      </nav>
    </header>
  );
}
