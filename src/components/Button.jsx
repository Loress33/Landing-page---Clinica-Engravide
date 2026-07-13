import { site } from "../content";

/**
 * Botão reutilizável.
 * variant: "primary" | "outline" | "whatsapp"
 * href: se passado, renderiza como <a>. Se começar com "#", faz scroll suave.
 */
export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  block = false,
  className = "",
  ...rest
}) {
  const classes = `btn btn--${variant} ${block ? "btn--block" : ""} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export function WhatsAppLink({ children, className = "" }) {
  const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn--whatsapp ${className}`.trim()}
    >
      {children}
    </a>
  );
}
