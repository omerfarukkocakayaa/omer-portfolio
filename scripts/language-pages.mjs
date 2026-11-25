import { mkdir, readFile, writeFile } from "node:fs/promises";

const html = await readFile("dist/index.html", "utf8");
for (const lang of ["tr", "en"]) {
  await mkdir(`dist/${lang}`, { recursive: true });
  const page = lang === "tr"
    ? html.replace('lang="en"', 'lang="tr"')
      .replace("Software Developer</title>", "Yazılım Geliştirici</title>")
      .replace("software developer portfolio, Java, Spring Boot, PostgreSQL and React projects.", "Java, Spring Boot, PostgreSQL ve React projelerini içeren yazılım geliştirici portföyü.")
    : html;
  await writeFile(`dist/${lang}/index.html`, page);
}
