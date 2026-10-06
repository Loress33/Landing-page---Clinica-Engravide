import { useState } from "react";
import { faq } from "../content";
import { WhatsAppLink } from "./Button";
import "./FAQ.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section id="faq" className="section section--mist faq">
      <div className="container faq__inner">
        <div className="faq__aside">
          <h2 className="section-title">{faq.title}</h2>
          <p className="section-subtitle">{faq.subtitle}</p>
          <WhatsAppLink>Perguntar pelo WhatsApp</WhatsAppLink>
        </div>

        <div className="faq__list">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            const id = `faq-answer-${i}`;
            return (
              <div className={`faq__item ${isOpen ? "faq__item--open" : ""}`} key={item.question}>
                <h3>
                  <button
                    className="faq__question"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={id}
                  >
                    <span>{item.question}</span>
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq__answer" id={id} role="region" aria-hidden={!isOpen}>
                  <div>
                    <p>{item.answer || "EDITAR: adicionar resposta para esta pergunta."}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
