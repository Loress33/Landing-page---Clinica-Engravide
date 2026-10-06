import { hero, site } from "../content";
import Button, { WhatsAppLink } from "./Button";
import QuickForm from "./QuickForm";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__kicker">{hero.eyebrow}</p>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__actions">
            <Button href="#contato" variant="primary">
              {hero.primaryButton}
            </Button>
            <WhatsAppLink>{hero.secondaryButton}</WhatsAppLink>
          </div>
        </div>

        <figure className="hero__media">
          {/* O retrato fica dentro de um oval, como um óvulo; o anel dourado
              faz o papel da zona pelúcida e se desenha ao carregar a página. */}
          <div className="hero__oocyte">
            <img
              src={hero.photoSrc}
              alt={hero.photoLabel}
              className="hero__photo"
              loading="eager"
              fetchpriority="high"
              decoding="sync"
            />
            <svg className="hero__ring" viewBox="0 0 100 125" preserveAspectRatio="none" aria-hidden="true">
              <ellipse cx="50" cy="62.5" rx="49" ry="61.5" pathLength="1" />
            </svg>
            <span className="hero__polar-body" aria-hidden="true" />
          </div>
          <figcaption className="hero__caption">
            <strong>{site.doctorName}</strong>
            <span>Ginecologista e especialista em Reprodução Humana</span>
          </figcaption>
        </figure>
      </div>

      <div id="contato" className="container hero__form-wrap">
        <QuickForm />
      </div>
    </section>
  );
}
