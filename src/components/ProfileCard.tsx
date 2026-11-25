import { t } from "../i18n";

export default function ProfileCard() {
  return (
    <aside className="developerCard">
      <img src="/profile.jpg" alt="Ömer Faruk Kocakaya" className="profilePhoto" width={180} height={180} />
      <div className="developerInfo">
        <h3>Ömer Faruk Kocakaya</h3>
        <p>{t("Junior Software Developer")}</p>
        <span>Karabük, Türkiye</span>
      </div>
    </aside>
  );
}
