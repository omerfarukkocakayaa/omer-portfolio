import { tr } from "./tr";

export const language = /^\/tr(?:\/|$)/.test(window.location.pathname) ? "tr" : "en";

export function t(text: string): string {
  return language === "tr" ? (tr[text as keyof typeof tr] ?? text) : text;
}
