(function () {
  const KEY = "mjos_lang";

  function getLang() {
    return localStorage.getItem(KEY) || "ru";
  }

  function apply(lang) {
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-lang]").forEach(el => {
      el.classList.toggle("hidden", el.getAttribute("data-lang") !== lang);
    });

    const ru = document.querySelector('[data-set-lang="ru"]');
    const en = document.querySelector('[data-set-lang="en"]');
    if (ru) ru.classList.toggle("active", lang === "ru");
    if (en) en.classList.toggle("active", lang === "en");
  }

  function setLang(lang) {
    localStorage.setItem(KEY, lang);
    apply(lang);
  }

  function markActiveNav() {
    const current = (location.pathname.split("/").pop() || "").toLowerCase();
    document.querySelectorAll(".nav a").forEach(a => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      a.classList.toggle("active", href === current);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-set-lang]").forEach(btn => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-set-lang")));
    });
    markActiveNav();
    apply(getLang());
  });
})();
