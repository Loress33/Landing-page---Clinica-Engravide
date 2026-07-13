import "./ImagePlaceholder.css";

/**
 * Foto real ou placeholder visual, dependendo se `src` foi preenchido.
 *
 * Sem precisar editar este arquivo: para colocar uma foto real, basta
 * 1) salvar o arquivo dentro da pasta /public
 * 2) escrever o caminho no campo correspondente em src/content.js
 *    (ex: heroPhotoSrc: "/dra-renata-hero.jpg")
 *
 * Enquanto o campo estiver vazio (""), este componente mostra o placeholder
 * roxo automaticamente — não precisa mexer em nada aqui.
 *
 * ratio: proporção largura/altura, ex. "4 / 5", "16 / 9", "1 / 1"
 */
export default function ImagePlaceholder({ label, src, ratio = "4 / 5", className = "" }) {
  if (src) {
    return (
      <img
        src={src}
        alt={label}
        className={`image-placeholder image-placeholder--photo ${className}`.trim()}
        style={{ aspectRatio: ratio }}
      />
    );
  }

  return (
    <div
      className={`image-placeholder ${className}`.trim()}
      style={{ aspectRatio: ratio }}
    >
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 6a2 2 0 0 1 2-2h1.5l1-1.5h7l1 1.5H18a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <span>{label}</span>
    </div>
  );
}
