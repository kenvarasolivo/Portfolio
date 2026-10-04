import { translations } from "./i18n.js";
import "./motion.js";

let saved;
try {
  saved = localStorage.getItem("lang");
} catch {
  /* Optional preference. */
}
let language = ["en", "de"].includes(saved) ? saved : "en";

function updateCount() {
  const count = document.querySelector("[data-project-count]");
  if (count) {
    const visible = [...document.querySelectorAll("[data-category]")].filter(
      (card) => !card.hidden,
    ).length;
    count.textContent = `${visible} ${language === "de" ? "Projekte" : "projects"}`;
  }
}

function applyLanguage(lang) {
  if (!["en", "de"].includes(lang)) return;
  language = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[element.dataset.i18n]?.[lang];
    if (value != null) element.innerHTML = value;
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
  try {
    localStorage.setItem("lang", lang);
  } catch {
    /* Optional preference. */
  }
  updateCount();
}

document
  .querySelectorAll("[data-lang]")
  .forEach((button) =>
    button.addEventListener("click", () => applyLanguage(button.dataset.lang)),
  );
document.querySelectorAll("[data-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-filter]")
      .forEach((filter) =>
        filter.setAttribute("aria-pressed", String(filter === button)),
      );
    document.querySelectorAll("[data-category]").forEach((card) => {
      card.hidden =
        button.dataset.filter !== "all" &&
        card.dataset.category !== button.dataset.filter;
    });
    updateCount();
  }),
);
const nav = document.querySelector(".editorial-nav");
const updateNav = () =>
  nav?.classList.toggle("is-scrolled", window.scrollY > 10);
window.addEventListener("scroll", updateNav, { passive: true });
updateNav();
applyLanguage(language);
