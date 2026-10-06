import { useState } from "react";
import { symptoms, site } from "../content";
import Icon from "./Icon";
import "./Symptoms.css";

export default function Symptoms() {
  const [selected, setSelected] = useState([]);

  const toggle = (item) =>
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );

  // Mantém a ordem da lista original na mensagem do WhatsApp
  const chosen = symptoms.items.filter((item) => selected.includes(item));
  const message = [
    site.whatsappMessage,
    "Me identifiquei com estas situações:",
    ...chosen.map((item) => `- ${item}`),
  ].join("\n");
  const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="sintomas" className="section section--mist symptoms">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{symptoms.title}</h2>
          <p className="section-subtitle">{symptoms.subtitle}</p>
        </div>

        <ul className="symptoms__list">
          {symptoms.items.map((item) => {
            const isOn = selected.includes(item);
            return (
              <li key={item}>
                <button
                  type="button"
                  className={`symptoms__item ${isOn ? "symptoms__item--on" : ""}`}
                  aria-pressed={isOn}
                  onClick={() => toggle(item)}
                >
                  <span className="symptoms__mark" aria-hidden="true">
                    <Icon name="check" size={14} strokeWidth={2.4} />
                  </span>
                  <span>{item}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="symptoms__result" aria-live="polite">
          {chosen.length === 0 ? (
            <p>{symptoms.emptyHint}</p>
          ) : (
            <>
              <p>
                {chosen.length === 1
                  ? "Você marcou 1 situação."
                  : `Você marcou ${chosen.length} situações.`}{" "}
                {symptoms.resultHint}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp"
              >
                {symptoms.resultButton}
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
