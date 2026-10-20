import { contact, site, whatsappUrl } from "../content";
import "./Contact.css";

export default function Contact() {
  const rows = [
    { text: site.clinicName },
    { text: site.street, href: site.mapsUrl },
    { text: `${site.building}, ${site.city}`, href: site.mapsUrl },
    { text: site.phoneDisplay, href: `tel:+${site.whatsappNumber}` },
    { text: site.instagramHandle, href: site.instagramUrl },
  ];

  return (
    <section id="contato" className="contact">
      <div className="wrap contact__head">
        <h2 data-reveal>{contact.title}</h2>
        <p data-reveal style={{ "--i": 1 }}>
          {contact.subtitle}
        </p>
      </div>

      {/* O endereço em linhas do tamanho de um título, uma faixa cada */}
      <ul className="contact__rows">
        {rows.map((row) => (
          <li key={row.text} className="contact__row">
            {row.href ? (
              <a
                href={row.href}
                {...(row.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {row.text}
              </a>
            ) : (
              <span>{row.text}</span>
            )}
          </li>
        ))}
        <li className="contact__row contact__row--action field">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            <span>{contact.actionLabel}</span>
            <span className="contact__arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="1em" height="1em">
                <path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" />
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
}
