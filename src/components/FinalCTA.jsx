import { finalCta } from "../content";
import Button, { WhatsAppLink } from "./Button";
import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="section section--dark final-cta">
      <div className="container final-cta__inner">
        <h2 className="final-cta__title">{finalCta.title}</h2>
        <div className="final-cta__side">
          <p>{finalCta.subtitle}</p>
          <div className="final-cta__actions">
            <Button href="#contato" variant="primary">
              {finalCta.buttonLabel}
            </Button>
            <WhatsAppLink>Falar pelo WhatsApp</WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
