import { hero } from "../content";
import Button, { WhatsAppLink } from "./Button";
import ImagePlaceholder from "./ImagePlaceholder";
import QuickForm from "./QuickForm";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="eyebrow eyebrow--light">{hero.eyebrow}</span>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__actions">
            <Button href="#contato" variant="primary">
              {hero.primaryButton}
            </Button>
            <WhatsAppLink>{hero.secondaryButton}</WhatsAppLink>
          </div>
        </div>

        <div className="hero__media">
          <ImagePlaceholder label={hero.photoLabel} src={hero.photoSrc} ratio="4 / 5" />
        </div>
      </div>

      <div id="contato" className="container hero__form-wrap">
        <QuickForm />
      </div>
    </section>
  );
}
