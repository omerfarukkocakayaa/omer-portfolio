import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("language entry pages and root assets", async () => {
  for (const [path, lang] of [["index.html", "en"], ["en/index.html", "en"], ["tr/index.html", "tr"]]) {
    const html = await readFile(`dist/${path}`, "utf8");
    assert.ok(html.includes(`lang="${lang}"`));
    assert.match(html, /src="\/assets\/[^" ]+\.js"/);
    assert.ok(!html.includes("http-equiv=\"refresh\""));
  }
  await readFile("dist/profile.jpg");
  await readFile("dist/favicon.svg");
});
