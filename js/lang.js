function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = el.dataset[lang];
  });
}

window.onload = () => {
  setLang(localStorage.getItem("lang") || "en");
};
