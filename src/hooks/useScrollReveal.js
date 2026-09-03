import { useEffect } from "react";

/**
 * Animação de entrada suave conforme as seções aparecem na tela.
 *
 * Não precisa mexer nos componentes: o hook procura os blocos abaixo pelo
 * seletor e adiciona a classe `reveal` + `reveal--in` quando entram no
 * viewport. Todo o CSS fica em index.css, protegido por `html.has-reveal`,
 * então se o JS não rodar o site continua 100% visível.
 *
 * Respeita `prefers-reduced-motion`: nesse caso nada é escondido.
 */
const GROUP_SELECTORS = [
  ".section-header",
  ".numbers__grid > *",
  ".symptoms__grid > *",
  ".services__grid > *",
  ".steps__timeline > *",
  ".differentials__list > li",
  ".instagram-videos__grid > *",
  ".testimonials__featured-video",
  ".testimonials__reviews > *",
  ".faq__list > *",
  ".final-cta__inner",
];

export default function useScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    root.classList.add("has-reveal");

    const targets = new Set();
    GROUP_SELECTORS.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => targets.add(el));
    });
    // Seções sem nenhum alvo interno ainda (ex.: "Sobre a Dra.") revelam inteiras
    document.querySelectorAll(".section:not(.hero)").forEach((section) => {
      const hasInnerTarget = [...targets].some((t) => section.contains(t));
      if (!hasInnerTarget) targets.add(section);
    });

    if (!targets.size) {
      root.classList.remove("has-reveal");
      return;
    }

    targets.forEach((el, _i) => el.classList.add("reveal"));

    // stagger dentro de cada grid
    document
      .querySelectorAll(
        ".numbers__grid, .symptoms__grid, .services__grid, .steps__timeline, .differentials__list, .instagram-videos__grid, .testimonials__reviews, .faq__list"
      )
      .forEach((grid) => {
        Array.from(grid.children).forEach((child, i) => {
          child.style.setProperty("--reveal-delay", `${Math.min(i, 6) * 70}ms`);
        });
      });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
