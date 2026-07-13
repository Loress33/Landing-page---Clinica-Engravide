import { site, nav, footer } from "../content";
import Icon from "./Icon";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__logo">{site.clinicName}</span>
          <p>{footer.about}</p>
          <div className="footer__socials">
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h4>{footer.linksTitle}</h4>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>{footer.contactTitle}</h4>
          <ul className="footer__contact">
            <li>
              <Icon name="phone" size={16} /> {site.phoneDisplay}
            </li>
            <li>{site.address}</li>
            <li>
              {site.crm} · {site.rqe}
            </li>
          </ul>
        </div>

        <div className="footer__map">
          <iframe
            title="Localização da clínica"
            src={site.googleMapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {site.clinicName}. Todos os direitos reservados.
        </span>
        <div className="footer__legal">
          {footer.legalLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
