const CONTENT = window.CONTENT;

if (!CONTENT) {
  document.querySelector("#app").innerHTML = `
    <div style="padding: 24px; font-family: monospace; color: red;">
      ERROR: content.js не загрузился
    </div>
  `;
  throw new Error("CONTENT is not loaded");
}

const DEFAULT_LANG = "ru";
const DEFAULT_PAGE = "main";

const PAGE_ORDER = ["main", "hard", "soft", "projects", "experience", "contact"];

const PAGE_LABELS = {
  main: "⚙️ main.py",
  hard: "🐍 hard_skills.py",
  soft: "📝 soft_skills.md",
  projects: "📦 projects.json",
  experience: "📜 experience.log",
  contact: "🔐 contact.env",
};

function getAvailablePages(lang) {
  return PAGE_ORDER.filter((page) => CONTENT[lang]?.pages?.[page]);
}

function normalizeRoute() {
  const params = new URLSearchParams(window.location.search);

  let lang = params.get("lang");
  let page = params.get("page");

  if (!lang || !page) {
    const parts = window.location.pathname.split("/").filter(Boolean);

    if (parts.length >= 2) {
      lang = parts[0];
      page = parts[1];
    }
  }

  if (!CONTENT[lang]) lang = DEFAULT_LANG;

  const availablePages = getAvailablePages(lang);

  if (!page || !CONTENT[lang].pages[page]) {
    page = availablePages[0] || DEFAULT_PAGE;
  }

  return { lang, page };
}

function makeUrl(lang, page) {
  return `/${lang}/${page}`;
}

function getLineCount(code) {
  return code.split("\n").length + 2;
}

function renderSidebar(lang, currentPage) {
  const availablePages = getAvailablePages(lang);

  const links = availablePages.map((page) => {
    const active = page === currentPage ? " active" : "";

    return `
      <a href="${makeUrl(lang, page)}"
         class="file${active}"
         data-page="${page}"
         data-lang="${lang}">
        ${PAGE_LABELS[page] || page}
      </a>
    `;
  }).join("");

  return `
    <aside class="sidebar">
      <div class="sidebar-title">RESUME_EXPLORER</div>
      ${links}
      <div class="sidebar-footer">
        <a href="https://github.com/russianko" target="_blank">⌘</a>
        <a href="mailto:shvedov.ra@gmail.com">✉</a>
        <a href="https://t.me/shvedov_ra" target="_blank">⌁</a>
        <a href="tel:+79002319199">⌕</a>
      </div>
    </aside>
  `;
}

function renderTopbar(lang, page) {
  const availablePages = getAvailablePages(lang);

  const tabs = availablePages.map((item) => {
    const active = item === page ? " active" : "";
    const fileName = CONTENT[lang].pages[item].file_name || item;

    return `
      <a href="${makeUrl(lang, item)}"
         class="tab${active}"
         data-page="${item}"
         data-lang="${lang}">
        ${fileName}
      </a>
    `;
  }).join("");

  return `
    <header class="topbar">
      <div class="tabs">
        ${tabs}
      </div>

      <div class="lang">
        <a href="${makeUrl("ru", page)}" data-lang="ru" data-page="${page}">RU</a>
        <span>|</span>
        <a href="${makeUrl("en", page)}" data-lang="en" data-page="${page}">EN</a>
      </div>
    </header>
  `;
}

function renderLines(count) {
  return Array.from({ length: count }, (_, i) => `<span>${i + 1}</span>`).join("");
}

function render() {
  const { lang, page } = normalizeRoute();
  const pageData = CONTENT[lang].pages[page];

  document.documentElement.lang = lang;
  document.title = `${page} | Roman Shvedov`;

  document.querySelector("#app").innerHTML = `
    <div class="ide">
      ${renderSidebar(lang, page)}
      <main class="editor">
        ${renderTopbar(lang, page)}
        <section class="code-window">
          <div class="lines">${renderLines(getLineCount(pageData.code))}</div>
          <pre class="code ${pageData.code_type || ""}">${pageData.code}</pre>
        </section>
      </main>
    </div>
  `;
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-page][data-lang]");
  if (!link) return;

  event.preventDefault();

  const lang = link.dataset.lang || DEFAULT_LANG;
  const page = link.dataset.page || DEFAULT_PAGE;

  history.pushState({}, "", makeUrl(lang, page));
  render();
});

window.addEventListener("popstate", render);

render();