// Conjunto simples de ícones em linha (SVG), sem dependências externas.
const paths = {
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.5-4.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="6" width="16" height="14" rx="2" />
      <path d="M4 10h16M8 4v4M16 4v4" />
    </>
  ),
  snowflake: (
    <>
      <path d="M12 3v18M5 7l14 10M19 7L5 17" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6l-5.5 9a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9V3" />
    </>
  ),
  droplet: (
    <>
      <path d="M12 3s6 7 6 11.5a6 6 0 1 1-12 0C6 10 12 3 12 3Z" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20s-7-4.4-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 5c-2.5 4.6-9.5 9-9.5 9Z" />
    </>
  ),
  ribbon: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M9 12.5 7 21l5-3 5 3-2-8.5" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H8l-4 4V5Z" />
    </>
  ),
  check: (
    <>
      <path d="M20 6 9 17l-5-5" />
    </>
  ),
  phone: (
    <>
      <path d="M6 3h3l2 5-2.5 2A11 11 0 0 0 14 15.5l2-2.5 5 2v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 5a2 2 0 0 1 2-2Z" />
    </>
  ),
  whatsapp: (
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1s-.8.9-.9 1.1-.3.2-.6.1a7.6 7.6 0 0 1-2.2-1.4A8.4 8.4 0 0 1 9.6 11c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5s0-.4 0-.5S9.9 7 9.7 6.5s-.4-.4-.6-.4h-.5a1.1 1.1 0 0 0-.8.4A3.3 3.3 0 0 0 6.7 9c0 1.5 1.1 2.9 1.2 3.1s2.2 3.4 5.3 4.7a6 6 0 0 0 3.6.7 3 3 0 0 0 2-1.4 2.4 2.4 0 0 0 .2-1.4c-.1-.1-.3-.2-.5-.3Z" />
  ),
};

export default function Icon({ name, size = 22, strokeWidth = 1.6, className = "" }) {
  const content = paths[name] || paths.check;
  const isFilled = name === "whatsapp";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
