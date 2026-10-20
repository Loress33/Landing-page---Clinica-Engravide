// Entrada suave das partes de cada seção (título → texto → imagem/cartões),
// uma vez só, ao rolar. Só transform/opacity; sem JS ou com
// prefers-reduced-motion a página aparece inteira (ver index.css).
const GROUPS = [
  ".section-header > *",
  ".authority__media",
  ".authority__bio",
  ".authority__credentials li",
  ".symptoms__item",
  ".symptoms__result",
  ".services__item",
  ".differentials__inner > h2",
  ".differentials__list li",
  ".steps__item",
  ".instagram-videos__head > .btn",
  ".instagram-videos__card",
  ".testimonials__featured > *",
  ".testimonials__review",
  ".faq__aside > *",
  ".faq__item",
  ".final-cta__panel > *",
];

export function initReveal() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Atributo, não classe: o React reescreve o className dos itens
          // interativos (FAQ, sintomas) e apagaria a marca de "já apareceu".
          entry.target.setAttribute("data-reveal", "in");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  const seen = new Set();
  GROUPS.forEach((selector) => {
    const parents = new Map();
    document.querySelectorAll(selector).forEach((el) => {
      if (seen.has(el)) return;
      seen.add(el);
      // O atraso escalonado conta só entre irmãos (máx. 5 passos, para a
      // lista longa de chips não demorar demais).
      const index = parents.get(el.parentElement) ?? 0;
      parents.set(el.parentElement, index + 1);
      el.style.setProperty("--reveal-i", Math.min(index, 5));
      el.setAttribute("data-reveal", "");
      io.observe(el);
    });
  });

  return () => io.disconnect();
}
